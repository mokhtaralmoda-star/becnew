import { useSearch } from "@tanstack/react-router";

export type Lang = "ar" | "en";

/** Reads ?lang=en from the URL; Arabic is the default. */
export function useLang() {
  const search = useSearch({ strict: false }) as { lang?: unknown };
  const lang: Lang = search.lang === "en" ? "en" : "ar";
  const t = (ar: string, en: string) => (lang === "en" ? en : ar);
  return { lang, dir: lang === "en" ? "ltr" : "rtl", t } as const;
}

/** Search object that keeps the current language when following internal links. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const langSearch = (lang: Lang): any => (lang === "en" ? { lang: "en" } : {});
