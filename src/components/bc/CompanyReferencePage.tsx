import { createElement } from "react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/shell";
import { useBc } from "./common";
import { bc } from "@/lib/bcare-media";

export type ReferenceNode = string | { tag: string; classes: string; children: ReferenceNode[] };
export type ReferenceContent = { ar: ReferenceNode; en: ReferenceNode };

function renderNode(node: ReferenceNode, key: string): React.ReactNode {
  if (typeof node === "string") return node;
  const classes = node.classes.split(" ").map((c) => {
    if (c === "text-yellowtheme") return "text-highlight";
    if (c === "text-bolder-light-gray") return "text-muted-foreground";
    if (c === "text-blue-600") return "text-primary";
    if (c.startsWith("dark:") || c.startsWith("ng-") || c === "newWarn" || c === "decoration-newWarn") return "";
    if (c === "sm:px-4") return "max-[959px]:px-4";
    if (c === "sm:text-4xl") return "max-[959px]:text-4xl";
    if (c === "sm:text-2xl") return "max-[959px]:text-2xl";
    if (c === "sm:mb-0") return "max-[959px]:mb-0";
    return c;
  }).join(" ");
  return createElement(node.tag, { key, className: classes }, node.tag === "br" ? undefined : node.children.map((n, i) => renderNode(n, `${key}-${i}`)));
}

/** Company pages reproduce the original sidebar and full captured bilingual content. */
export function CompanyReferencePage({ content, active }: { content: ReferenceContent; active: "/about" | "/privacy" | "/terms" }) {
  const { lang, T, S } = useBc();
  return (
    <SiteShell frame="product">
      <section className="company-reference">
        <div className="company-layout">
          <nav className="company-sidebar" aria-label={T("من نحن")}>
            <strong>{T("من نحن")}</strong>
            {([
              ["/about", T("عن بي كير")],
              ["/privacy", T("سياسة الخصوصية")],
              ["/terms", T("الشروط والأحكام")],
              ["/about", T("توظيف")],
            ] as const).map(([to, label], i) => <Link key={label} to={to} search={S} data-selected={to === active && i < 3 ? "true" : undefined}>{label}</Link>)}
            <a href="tel:8001180044">{lang === "en" ? "Contact Us" : "تواصل معنا"}</a>
          </nav>
          <article className="company-content">
            <img className="company-phone-logo" src={bc["Bcare-logo.svg"]} alt={T("بي كير")} />
            {renderNode(content[lang], "content")}
          </article>
        </div>
      </section>
    </SiteShell>
  );
}