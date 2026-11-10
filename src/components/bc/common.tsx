import { useState } from "react";
import { CircleCheck, CircleX } from "lucide-react";
import { bc } from "@/lib/bcare-media";
import { langSearch, useLang } from "@/lib/lang";
import { useT } from "@/lib/bc-i18n";

/** Shared helpers for the copied reference markup: translator, link search and localized images. */
export function useBc() {
  const { lang, dir } = useLang();
  const T = useT();
  const S = langSearch(lang);
  /** Swaps an "-ar" reference image for its "-en" variant in English mode when one exists. */
  const L = (key: string) => {
    if (lang === "en") {
      const en = key.replace("-ar.", "-en.");
      if (bc[en]) return bc[en];
    }
    return bc[key];
  };
  return { T, S, L, lang, dir };
}

export const TIERS = ["شامل", "مميز", "ضد الغير"] as const;

/** Which of the eight coverage rows each tier includes (comprehensive, featured, third party). */
export const COVER: boolean[][] = [
  [true, true, true, true, true, true, true, true],
  [true, true, true, true, true, false, false, false],
  [true, false, false, false, false, false, false, false],
];

export const PRODUCTS = [
  { img: "newDesign-Squars-motor-ar.jpg", to: "/motor-insurance", alt: "تأمين المركبات" },
  { img: "newDesign-Squars-travel-ar.jpg", to: "/travel-insurance", alt: "تأمين السفر" },
  { img: "newDesign-Squars-mmp-ar.jpg", to: "/medical-malpractice", alt: "تأمين الأخطاء الطبية" },
  { img: "newDesign-Squars-helpers-ar.jpg", to: "/domestic-workers", alt: "العمالة المنزلية" },
] as const;

export const BUSINESS = [
  { img: "newDesign-Squars-mmp-ar.jpg", to: "/medical-insurance", alt: "تأمين طبي" },
] as const;

export function CoverMark({ on }: { on: boolean }) {
  return on ? (
    <CircleCheck className="w-[18px] h-[18px] text-[#146394]" aria-label="✓" />
  ) : (
    <CircleX className="w-[18px] h-[18px] text-[#C4C4C4]" aria-label="✗" />
  );
}

/** Header search: expands into a text field; nothing is sent anywhere. */
export function SearchBox() {
  const [open, setOpen] = useState(false);
  const { T } = useBc();
  return (
    <div
      className={`flex items-center rounded-full border border-[#D5D9E2] bg-white h-[39px] transition-all duration-300 overflow-hidden ${open ? "w-[180px] px-2" : "w-[39px] justify-center"}`}
    >
      <button
        type="button"
        aria-label={T("بحث")}
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center shrink-0"
      >
        <img src={bc["newDesign-homepage-Search.svg"]} alt="" className="w-[20px] h-[20px]" />
      </button>
      {open && (
        <input
          autoFocus
          type="search"
          placeholder={T("بحث")}
          className="min-w-0 flex-1 bg-transparent px-2 text-[13px] text-[#146394] outline-none"
        />
      )}
    </div>
  );
}
