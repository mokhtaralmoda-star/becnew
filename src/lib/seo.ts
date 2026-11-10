type HeadCopy = { title: string; description: string };

/**
 * Page metadata. Switches to the English copy when the URL carries ?lang=en,
 * so the browser tab and link previews follow the language the page is shown in.
 */
export function pageHead(ctx: unknown, ar: HeadCopy, en: HeadCopy) {
  const match = (ctx as { match?: { search?: unknown; searchStr?: unknown } } | undefined)?.match;
  const search = match?.search as { lang?: unknown } | undefined;
  const searchStr = typeof match?.searchStr === "string" ? match.searchStr : "";
  const isEn = search?.lang === "en" || searchStr.includes("lang=en");
  const { title, description } = isEn ? en : ar;
  const brand = isEn ? "BCare" : "بي كير";
  return {
    meta: [
      { title: `${title} | ${brand}` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | ${brand}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
