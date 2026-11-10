// Site headers copied from the reference markup: phone/tablet below 1200px, desktop from 1200px.
import { useEffect, useRef, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { bc } from "@/lib/bcare-media";
import { SearchBox, useBc } from "./common";

type Tab = { to: "/motor-insurance" | "/medical-malpractice" | "/travel-insurance" | "/domestic-workers" | "/medical-insurance"; label: string; icon: ReactNode };

export const ALL_TABS: Tab[] = [
  { to: "/motor-insurance", label: "المركبات", icon: (<svg fill="currentColor" width="23px" height="23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21.33"> <path d="M4,18.67v1.33c0,.38-.13.69-.38.95-.26.26-.57.38-.95.38h-1.33c-.38,0-.69-.13-.95-.38-.26-.26-.38-.57-.38-.95v-10.67L2.8,1.33c.13-.4.37-.72.72-.97s.73-.37,1.15-.37h14.67c.42,0,.81.12,1.15.37s.58.57.72.97l2.8,8v10.67c0,.38-.13.69-.38.95-.26.26-.57.38-.95.38h-1.33c-.38,0-.69-.13-.95-.38-.26-.26-.38-.57-.38-.95v-1.33H4ZM3.73,6.67h16.53l-1.4-4H5.13l-1.4,4ZM6,14.67c.56,0,1.03-.19,1.42-.58s.58-.86.58-1.42-.19-1.03-.58-1.42-.86-.58-1.42-.58-1.03.19-1.42.58c-.39.39-.58.86-.58,1.42s.19,1.03.58,1.42c.39.39.86.58,1.42.58ZM18,14.67c.56,0,1.03-.19,1.42-.58s.58-.86.58-1.42-.19-1.03-.58-1.42-.86-.58-1.42-.58-1.03.19-1.42.58-.58.86-.58,1.42.19,1.03.58,1.42.86.58,1.42.58Z" /> </svg>) },
  { to: "/medical-malpractice", label: "الأخطاء الطبية", icon: (<svg fill="currentColor" width="23px" height="23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.57"> <path d="M1.34,8c-.08-.28-.13-.57-.15-.86-.03-.29-.04-.59-.04-.89-.05-1.68.6-3.29,1.8-4.47C4.13.6,5.75-.04,7.43,0c.97,0,1.93.22,2.81.63.9.41,1.69,1.02,2.33,1.77.63-.75,1.42-1.36,2.31-1.77C15.77.21,16.73,0,17.71,0c1.68-.05,3.3.6,4.49,1.79,1.19,1.18,1.85,2.8,1.8,4.47v.06c-.36-.32-.75-.6-1.17-.84-.43-.24-.88-.44-1.34-.59-.26-.77-.76-1.43-1.43-1.89-.69-.48-1.51-.73-2.34-.71-.84,0-1.67.26-2.37.73-.84.56-1.56,1.29-2.11,2.13h-1.31c-.55-.84-1.27-1.56-2.11-2.11-.7-.47-1.52-.73-2.37-.75-1.07-.02-2.1.4-2.84,1.16-.76.74-1.18,1.76-1.16,2.81,0,.29.03.59.09.87.06.3.15.59.26.87H1.34ZM12.57,20.57l-3.63-3.26c-.51-.48-.99-.91-1.43-1.31-.44-.4-.85-.78-1.23-1.14h3.34c.44.38.9.79,1.39,1.23.49.44,1,.91,1.55,1.4.32-.27.62-.52.9-.77.28-.25.55-.5.81-.74.26.28.54.54.84.79.3.24.62.45.96.64l-3.51,3.17ZM18.61,15.67c-.46-.45-.48-1.19-.03-1.65.45-.46,1.19-.48,1.65-.03.46.45.48,1.19.03,1.65-.22.23-.52.36-.84.36-.31,0-.6-.11-.81-.33M18.28,6.86h2.29v5.71h-2.29v-5.71ZM0,12.57v-2.29h5.09l2-2.94c.1-.16.24-.29.41-.37.17-.08.35-.12.53-.11.18,0,.37.04.53.13.17.09.31.22.41.38l1.94,2.91h1.77c-.04.19-.07.38-.09.56-.04.39-.04.78,0,1.17.02.18.05.37.09.56h-2.4c-.19,0-.38-.05-.54-.14-.16-.09-.3-.22-.4-.37l-1.34-2-1.34,2c-.1.16-.24.28-.4.37-.17.09-.35.14-.54.14H0Z" /> </svg>) },
  { to: "/travel-insurance", label: "السفر", icon: (<svg fill="currentColor" width="23px" height="23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23.97"> <path d="M9.29,23.97l-3.25-6.04L0,14.68l2.33-2.3,4.76.82,3.35-3.35L.03,5.42l2.76-2.82,12.64,2.23L19.5.76c.5-.5,1.13-.76,1.87-.76s1.37.25,1.87.76.76,1.12.76,1.85-.25,1.35-.76,1.85l-4.1,4.1,2.23,12.61-2.79,2.79-4.47-10.41-3.35,3.35.85,4.73-2.33,2.33Z" /> </svg>) },
  { to: "/domestic-workers", label: "العمالة المنزلية", icon: (<svg fill="currentColor" width="23px" height="23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19.64"> <path d="M12,0l12,9-1.31,1.75-1.96-1.47v10.36H3.27v-10.36l-1.96,1.47-1.31-1.75L12,0ZM6.93,9.87c0,.96.52,1.99,1.55,3.08s2.21,2.23,3.52,3.41c1.31-1.18,2.48-2.32,3.52-3.41s1.55-2.12,1.55-3.08c0-.8-.27-1.46-.82-1.99s-1.2-.79-1.96-.79c-.47,0-.9.1-1.3.29-.39.19-.72.44-1,.75-.27-.31-.61-.56-1.02-.75s-.83-.29-1.27-.29c-.76,0-1.42.26-1.96.79s-.82,1.19-.82,1.99Z" /> </svg>) },
  { to: "/medical-insurance", label: "طبي للمنشآت", icon: (<svg fill="currentColor" width="23px" height="23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21.6"> <path d="M16.95,0c2,0,3.67.74,5.02,2.22s2.02,3.24,2.02,5.28c0,.36-.02.71-.06,1.06s-.11.7-.21,1.04h-7.5l-2.04-3.06c-.1-.16-.24-.29-.42-.39s-.37-.15-.57-.15c-.26,0-.5.08-.71.24s-.36.36-.43.6l-1.62,4.86-1.05-1.56c-.1-.16-.24-.29-.42-.39-.18-.1-.37-.15-.57-.15H.27c-.1-.34-.17-.68-.21-1.04s-.06-.7-.06-1.03c0-2.06.67-3.83,2.01-5.31C3.35.74,5.02,0,7.02,0c.96,0,1.86.19,2.71.57s1.61.91,2.27,1.59c.64-.68,1.39-1.21,2.24-1.59s1.75-.57,2.72-.57ZM12,21.6c-.36,0-.7-.06-1.03-.19-.33-.13-.63-.32-.89-.59L2.04,12.75c-.12-.12-.23-.24-.33-.36s-.2-.25-.3-.39h6.33l2.04,3.06c.1.16.24.29.42.39s.37.15.57.15c.26,0,.5-.08.72-.24s.37-.36.45-.6l1.62-4.86,1.02,1.56c.12.16.27.29.45.39s.37.15.57.15h6.96l-.3.36-.3.36-8.07,8.1c-.26.26-.55.46-.87.59-.32.13-.66.19-1.02.19Z" /> </svg>) },
];

// Like the reference: individuals see personal products; companies see establishment medical.
const BUSINESS = "/medical-insurance";
export const TABS = ALL_TABS;
function useTabs() {
  const { pathname } = useLocation();
  const business = pathname === BUSINESS;
  return ALL_TABS.filter((t) => (t.to === BUSINESS) === business);
}

function useActive() {
  const { pathname } = useLocation();
  // The home page is the motor insurance landing page, like the reference.
  return (to: string) => pathname === to || (to === "/motor-insurance" && pathname === "/");
}

export function LangToggle({ className, children }: { className: string; children: ReactNode }) {
  const { lang } = useBc();
  return (
    <Link to="." search={lang === "en" ? {} : { lang: "en" }} className={className}>
      {children}
    </Link>
  );
}

export function MobileHeader({ productFrame = false }: { productFrame?: boolean } = {}) {
  const { T, S, lang } = useBc();
  const { pathname } = useLocation();
  const tabRow = useRef<HTMLDivElement>(null);
  const isActive = useActive();
  const tabs = useTabs();
  useEffect(() => {
    if (!productFrame) return;
    const row = tabRow.current;
    const selected = row?.querySelector<HTMLElement>('a[aria-current="page"]');
    if (!row || !selected) return;
    const rowBounds = row.getBoundingClientRect();
    const tabBounds = selected.getBoundingClientRect();
    row.scrollLeft += tabBounds.left - rowBounds.left - (rowBounds.width - tabBounds.width) / 2;
  }, [pathname, lang, productFrame]);
  return (
    <div className="bc-mobile-header sticky top-0 z-40">
      <header className="mobile-header-sticky box-border shadow-[0_2px_5px_rgba(0,0,0,0.05)] w-full bg-white flex items-center">
        <div className="flex items-center justify-between gap-1.5 px-3 w-full">
          <div className="w-[91px] h-[38px] flex-shrink-0 flex items-center">
            <Link to="/" search={S} className="flex items-center justify-center w-full h-full">
              <img src={bc["Bcare-logo.svg"]} alt={T("بي كير")} className="w-full h-full object-contain" />
            </Link>
          </div>
          <div className="flex-grow flex items-center justify-end min-w-0 px-1 gap-1">
            <a
              href="tel:8001180044"
              aria-label={T("مركز المساعدة")}
              className="w-[39px] h-[39px] rounded-full border border-[#D5D9E2] bg-[#F7F9FC] flex items-center justify-center flex-shrink-0 me-1"
            >
              <img src={bc["newDesign-hcenter.svg"]} alt="" className="w-[18px] h-[21px]" />
            </a>
            <SearchBox />
          </div>
          <div className="h-5 w-[1px] bg-[#E0E0E0] mx-0.5 flex-shrink-0" />
          <div className="flex-shrink-0 flex items-center justify-end gap-4 xs:gap-2">
            <LangToggle className="flex items-center gap-1 font-semibold me-[25px] xs:me-2">
              <img src={bc["newDesign-homepage-language.svg"]} alt="" className="w-[23px] h-[20px]" />
              <span className="text-[14px] font-bold leading-[26px] tracking-[0.28px] text-[#146394]">
                {lang === "en" ? (productFrame ? "AR" : "عربي") : "EN"}
              </span>
            </LangToggle>
            <Link to="/verify" search={S} aria-label={T("أطبع وثيقتك")}>
              <img src={bc["newDesign-socialmedia-account.svg"]} alt="" className="w-9" />
            </Link>
          </div>
        </div>
      </header>
      <nav className="w-full border-b-[1px] border-t bg-[#F7F7F7] shadow-[0px_0px_15px_#00000029] overflow-hidden">
        <div className="relative border-gray-200 ps-2 pe-4 header-carousel no-scrollbar">
          <div ref={tabRow} className="flex gap-2 md:gap-4 sm:gap-2 xs:gap-1 text-xs font-semibold overflow-x-auto py-2 no-scrollbar">
            {tabs.map((tab) => {
              const on = isActive(tab.to);
              return (
                <Link
                  key={tab.to}
                  to={productFrame && tab.to === "/motor-insurance" ? "/" : tab.to}
                  search={S}
                  aria-current={on ? "page" : undefined}
                  data-product-tab={productFrame ? "true" : undefined}
                  className={`border border-[#146394] !rounded-[5px] pb-2 px-4 h-[50px] flex items-center gap-2 whitespace-nowrap pt-[6px] py-[4px] cursor-pointer ${on ? "font-bold text-white bg-[#146394]" : "text-[#146394] bg-white hover:text-[#146394]"}`}
                >
                  <span className="flex items-center">{tab.icon}</span>
                  <span className={`text-center text-[14px]/[26px] tracking-[0.28px] ${on ? "text-white font-bold" : "text-[#707070] font-normal"}`}>
                    {T(tab.label)}
                  </span>
                </Link>
              );
            })}
          </div>
          {!productFrame && <div className="pointer-events-none absolute top-0 bottom-0 end-0 w-[49px] h-full z-10 bg-[linear-gradient(90deg,_#F7F7F700_0%,_#F7F7F7_100%)] rtl:bg-[linear-gradient(270deg,_#F7F7F700_0%,_#F7F7F7_100%)]" />}
        </div>
      </nav>
    </div>
  );
}

export function DesktopHeader({ productFrame = false }: { productFrame?: boolean } = {}) {
  const { T, S, lang } = useBc();
  const { pathname } = useLocation();
  const isActive = useActive();
  const business = pathname === "/medical-insurance";
  const tabs = useTabs();
  return (
    <div className="bc-desktop-header">
      <header className="bg-background border-b border-border">
        <div className="max-w-[1366px] mx-auto px-9 h-20 flex items-center justify-between gap-3">
          <div className="flex items-center gap-24">
            <Link to="/" search={S}>
              <img alt={T("بي كير")} className="h-10" src={bc["Bcare-logo.svg"]} />
            </Link>
            <div className="flex rounded-full border border-border p-0.5">
              <Link
                to="/"
                search={S}
                className={`w-30 py-1.5 rounded-full text-sm font-bold text-center transition ${business ? "text-bcare-blue" : "bg-bcare-blue text-primary-foreground"}`}
              >
                {T("أفراد")}
              </Link>
              <Link
                to="/medical-insurance"
                search={S}
                className={`w-30 py-1.5 rounded-full text-sm font-bold text-center transition ${business ? "bg-bcare-blue text-primary-foreground" : "text-bcare-blue"}`}
              >
                {T("شركات")}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:8001180044"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-bcare-blue"
            >
              <img alt="" className="w-5 h-5" src={bc["newDesign-hcenter.svg"]} />
              {T("مركز المساعدة")}
            </a>
            <SearchBox />
            <LangToggle className="flex items-center gap-1 h-10 text-sm font-bold text-bcare-blue border-s border-border ps-4">
              {productFrame && <img alt="" className="w-5 h-5" src={bc["newDesign-homepage-language.svg"]} />}
              {lang === "en" ? (productFrame ? "AR" : "عربي") : "EN"}
              {!productFrame && <img alt="" className="w-5 h-5" src={bc["newDesign-homepage-language.svg"]} />}
            </LangToggle>
            {productFrame && (
              <Link to="/verify" search={S} aria-label={T("أطبع وثيقتك")}>
                <img src={bc["newDesign-socialmedia-account.svg"]} alt="" className="w-9 h-9" />
              </Link>
            )}
          </div>
        </div>
      </header>
      <nav className="bg-secondary border-b border-border">
        <div className="max-w-[1366px] mx-auto px-9 py-2 flex gap-2 overflow-x-auto">
          {tabs.map((tab) => {
            const on = isActive(tab.to);
            return (
              <Link
                key={tab.to}
                to={productFrame && tab.to === "/motor-insurance" ? "/" : tab.to}
                search={S}
                aria-current={on ? "page" : undefined}
                data-product-tab={productFrame ? "true" : undefined}
                className={`flex items-center gap-2 shrink-0 px-4 py-3 rounded-md border text-sm font-bold transition ${on ? "bg-bcare-blue text-primary-foreground border-bcare-blue" : "bg-background text-bcare-blue border-bcare-ink/40 hover:border-bcare-blue"}`}
              >
                {productFrame && <span className="flex items-center [&>svg]:w-6 [&>svg]:h-6">{tab.icon}</span>}
                <span>{T(tab.label)}</span>
                {!productFrame && <span className="flex items-center [&>svg]:w-5 [&>svg]:h-5">{tab.icon}</span>}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
