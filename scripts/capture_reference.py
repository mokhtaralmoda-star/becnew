"""Capture rendered reference pages into static, script-free HTML under public/ref/.

Usage: python3 scripts/capture_reference.py <name> <url> [<name> <url> ...]
Every external navigation is rewritten to an internal route or neutralised.
"""
import asyncio, sys, re
from pathlib import Path
from playwright.async_api import async_playwright

OUT = Path(__file__).resolve().parent.parent / "public" / "ref"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"

PROCESS = r"""
async (lang) => {
  const route = (href) => {
    let u; try { u = new URL(href, location.href); } catch { return null; }
    const h = u.hostname, p = u.pathname.replace(/^\/(ar|en)/, '');
    // product sub-sites hold the quote forms; main-site product paths are the landing pages
    const map = { 'travel.bcare.com.sa': '/travel-insurance-request', 'mm.bcare.com.sa': '/medical-malpractice-request',
      'helpers.bcare.com.sa': '/domestic-workers-request', 'medical.bcare.com.sa': '/medical-insurance-request' };
    if (!h.endsWith('bcare.com.sa') || h.startsWith('blog.')) return null;
    {
      if (p.startsWith('/medical-malpractice-insurance')) return '/medical-malpractice';
      if (p.startsWith('/travel-insurance')) return '/travel-insurance';
      if (p.startsWith('/domestic-helpers-insurance')) return '/domestic-workers';
      if (p.startsWith('/medical-sme-insurance')) return '/medical-insurance';
      if (p.startsWith('/print-policy')) return '/verify';
      if (p.startsWith('/about-company')) return '/about';
      if (p.startsWith('/privacy-policy')) return '/privacy';
      if (p.startsWith('/terms')) return '/terms';
      if (p.startsWith('/motor-insurance')) return '/motor-insurance';
      if (p === '' || p === '/') return map[h] || '/';
      return null;
    }
    return null;
  };
  // inline stylesheets with absolute url()
  for (const l of [...document.querySelectorAll('link[rel="stylesheet"]')]) {
    try {
      const css = await (await fetch(l.href)).text();
      const base = l.href;
      const fixed = css.replace(/url\((['"]?)(?!data:|https?:|#)([^'")]+)\1\)/g, (m, q, u) => `url("${new URL(u, base).href}")`);
      const s = document.createElement('style'); s.textContent = fixed; l.replaceWith(s);
    } catch (e) { l.href = l.href; }
  }
  document.querySelectorAll('style').forEach(s => {
    s.textContent = s.textContent.replace(/url\((['"]?)(?!data:|https?:|#)([^'")]+)\1\)/g, (m, q, u) => `url("${new URL(u, document.baseURI).href}")`);
  });
  document.querySelectorAll('img[src]').forEach(i => i.setAttribute('src', i.src));
  document.querySelectorAll('img[srcset], source[srcset]').forEach(i => i.removeAttribute('srcset'));
  document.querySelectorAll('[style*="url("]').forEach(el => {
    el.setAttribute('style', el.getAttribute('style').replace(/url\((['"]?)(?!data:|https?:)([^'")]+)\1\)/g, (m, q, u) => `url("${new URL(u, document.baseURI).href}")`));
  });
  document.querySelectorAll('link[rel~="icon"]').forEach(l => l.setAttribute('href', l.href));
  // drop scripts and <base> only after every relative asset has been resolved against it
  document.querySelectorAll('script, noscript, link[rel="preload"], link[rel="modulepreload"], link[rel="manifest"], link[rel="preconnect"], link[rel="dns-prefetch"], base, iframe').forEach(n => n.remove());
  document.querySelectorAll('a').forEach(a => {
    const raw = a.getAttribute('href');
    a.removeAttribute('target'); a.removeAttribute('rel');
    const t = (a.textContent || '').trim().toUpperCase();
    if (raw === null) return;
    if (raw.startsWith('tel:') || raw.startsWith('mailto:')) return;
    const r = route(raw);
    if (r) { a.setAttribute('href', r); a.setAttribute('data-ref-nav', r); }
    else { a.removeAttribute('href'); a.setAttribute('data-ref-dead', ''); a.style.cursor = 'pointer'; }
  });
  document.querySelectorAll('input').forEach(i => {
    if (i.type === 'checkbox' || i.type === 'radio') { if (i.checked) i.setAttribute('checked', ''); else i.removeAttribute('checked'); }
    else if (i.value) i.setAttribute('value', i.value);
  });
  document.querySelectorAll('form').forEach(f => { f.removeAttribute('action'); f.setAttribute('data-ref-form', ''); });
  return '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
}
"""

async def main(pairs):
    OUT.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        jobs = [(n, u, 1280) for n, u in pairs] + [(n + "-t", u, 883) for n, u in pairs] + [(n + "-m", u, 390) for n, u in pairs]
        for name, url, width in jobs:
            c = await b.new_context(viewport={"width": width, "height": 1000}, user_agent=UA, is_mobile=width < 500, has_touch=width < 500)
            pg = await c.new_page()
            try:
                await pg.goto(url, wait_until="networkidle", timeout=45000)
            except Exception:
                pass  # long-polling pages never go idle; the rendered DOM is still captured
            await pg.wait_for_timeout(4000)
            lang = "en" if "/en" in url else "ar"
            if "bcare" not in (await pg.title()).lower() and "بي كير" not in await pg.title():
                print(name, "BLOCKED - kept previous copy"); await c.close(); await asyncio.sleep(20); continue
            html = await pg.evaluate(PROCESS, lang)
            html = html.replace("</body>", '<script src="/ref/ref.js"></script></body>')
            (OUT / f"{name}.html").write_text(html)
            print(name, len(html))
            await c.close()
            await asyncio.sleep(8)
        await b.close()

ASSET = re.compile(r"https://([a-z0-9.]*bcare\.com\.sa)/([^\"' )>]+\.(?:svg|png|jpe?g|webp|gif|ico|woff2?|ttf))")

def localize():
    """Download every bcare-hosted image/font used by the copies and point the copies at local files."""
    import urllib.request
    for f in OUT.glob("*.html"):
        html = f.read_text()
        def rep(m):
            host, path = m.group(1), m.group(2)
            local = OUT / "assets" / host / path
            if local.exists() and local.read_bytes()[:300].lstrip(b"\xef\xbb\xbf \r\n").lower().startswith((b"<!doctype html", b"<html")):
                local.unlink()
            if not local.exists():
                local.parent.mkdir(parents=True, exist_ok=True)
                data = None
                bare = re.sub(r"^(ar|en)/", "", path.replace("&amp;", "&"))
                for src in (m.group(0), f"https://medical.bcare.com.sa/{bare}", f"https://medical.bcare.com.sa/{path}", f"https://bcare.com.sa/{bare}"):
                    try:
                        req = urllib.request.Request(src, headers={"User-Agent": UA})
                        body = urllib.request.urlopen(req, timeout=30).read()
                        if body[:200].lstrip(b"\xef\xbb\xbf \r\n").lower().startswith((b"<!doctype html", b"<html")):
                            continue  # SPA fallback page, not the asset
                        data = body; break
                    except Exception:
                        continue
                if data is None:
                    print("asset failed", m.group(0)); return m.group(0)
                local.write_bytes(data)
            return f"/ref/assets/{host}/{path}"
        f.write_text(ASSET.sub(rep, html))

async def from_snapshots(items):
    """Process pre-rendered HTML snapshots (fetched elsewhere) when the original blocks direct capture.

    items: list of (name, url, html_path, css_path, width)
    """
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        for name, url, html_path, css_path, width in items:
            c = await b.new_context(viewport={"width": width, "height": 1000}, user_agent=UA)
            pg = await c.new_page()
            html = Path(html_path).read_text()
            css = Path(css_path).read_text()

            def make_handler(html, css, url):
              async def handler(route):
                u = route.request.url
                if u.rstrip("/") == url.rstrip("/"):
                    await route.fulfill(status=200, content_type="text/html; charset=utf-8", body=html)
                elif u.endswith(".css") and "bcare.com.sa" in u:
                    await route.fulfill(status=200, content_type="text/css", body=css)
                elif "fonts.g" in u and route.request.resource_type in ("stylesheet", "font"):
                    await route.continue_()
                else:
                    await route.abort()
              return handler
            await pg.route("**/*", make_handler(html, css, url))
            await pg.goto(url, wait_until="domcontentloaded", timeout=60000)
            await pg.wait_for_timeout(1500)
            lang = "en" if "/en" in url else "ar"
            out = await pg.evaluate(PROCESS, lang)
            out = out.replace("</body>", '<script src="/ref/ref.js"></script></body>')
            (OUT / f"{name}.html").write_text(out)
            print(name, len(out))
            await c.close()
        await b.close()

def compose_tablet(names):
    """Tablet copy = desktop body + phone header/footer, as the original renders between 600 and 959px."""
    for n in names:
        d = (OUT / f"{n}.html").read_text(); m = (OUT / f"{n}-m.html").read_text()
        for tag in ("bcare-presentation-landing-page-header", "bcare-presentation-landing-page-footer"):
            da = d.index("<" + tag); db = d.index("</" + tag + ">", da) + len(tag) + 3
            ma = m.index("<" + tag); mb = m.index("</" + tag + ">", ma) + len(tag) + 3
            d = d[:da] + m[ma:mb].replace('style="max-width: 350px;"', "") + d[db:]
        (OUT / f"{n}-t.html").write_text(d)


def clean():
    """Drop third-party tracking pixels and fix assets that were already local before re-processing."""
    for f in OUT.glob("*.html"):
        h = f.read_text()
        h = h.replace("https://bcare.com.sa/ref/assets/", "/ref/assets/")
        # anything still remote is a tracker or an asset the original no longer serves (hidden slides)
        h = re.sub(r'<img\b[^>]*\ssrc="https?://[^"]*"[^>]*>', "", h)
        h = re.sub(r'<script\b[^>]*\ssrc="https?://[^"]*"[^>]*>\s*</script>', "", h)
        h = re.sub(r'<link\b[^>]*rel="icon"[^>]*>', "", h)
        f.write_text(h)


args = sys.argv[1:]
if args and args[0] == "--snapshots":
    import json
    asyncio.run(from_snapshots(json.loads(Path(args[1]).read_text())))
    localize(); clean()
elif args and args[0] == "--tablet":
    compose_tablet(args[1:])
elif args == ["--localize"]:
    localize(); clean()
else:
    asyncio.run(main(list(zip(args[::2], args[1::2]))))
    localize(); clean()

