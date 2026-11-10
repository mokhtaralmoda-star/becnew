// Site footers copied from the reference markup: phone/tablet below 1200px, desktop from 1200px.
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { bc } from "@/lib/bcare-media";
import { useBc } from "./common";

/** Product subsites carry distinct English footer copy in the reference. */
function useFooterCopy(productFrame: boolean) {
  const copy = useBc();
  const original: Record<string, string> = {
    "تأمين المركبات": "Motor Insurance",
    "تأمين السفر": "Travel Insurance",
    "تأمين الأخطاء الطبية": "Medical Malpractices",
    "العمالة المنزلية": "Domestic Helpers",
    "تأمين طبي": "Medical SME",
    "المدونة": "Blogs",
    "إلغاء الوثيقة": "Cancel Policy",
    "حمل تطبيق بي كير": "Download BCare Application",
    "طرق الدفع": "Payment Methods",
    "الشروط والأحكام": "Terms and Conditions",
    "© 2026 شركة عناية الوسيط لوساطة التأمين. جميع الحقوق محفوظة.": "© 2026 Broker Care Insurance Brokers. All rights reserved.",
  };
  return { ...copy, T: (text: string) => productFrame && copy.lang === "en" ? original[text] ?? copy.T(text) : copy.T(text) };
}

export function MobileFooter({ productFrame = false }: { productFrame?: boolean } = {}) {
  const { T, S } = useFooterCopy(productFrame);
  const [open, setOpen] = useState(-1);
  return (
    <div className="bg-white">
      <section className="bg-white pb-8 mb-4 overflow-x-hidden max-w-screen" style={{maxWidth: "100vw", boxSizing: "border-box"}}>
        <div className="px-4 lg:px-8 mx-auto w-full mt-[50px] pb-[20px] bg-[#F9FAFC] bg-no-repeat bg-origin-padding opacity-100">
          <div className="flex flex-wrap pt-[20px]">
            <div className="flex flex-col gap-4 w-full">
              <div>
                <img src={bc["Bcare-logo.svg"]} alt={T("Bg Logo")} className="w-[91px] h-[38px] desktop-sm:w-[80px] desktop-sm:h-[33px]" />
                <div className="flex mt-2 items-center font-bold text-[24px] leading-[25px] tracking-normal text-[#126494] opacity-100 mt-[22px]">
                  <div className="-rotate-90">
                    <div className="text-3xl desktop-sm:text-2xl sm:text-xl">
                      <svg role="img" aria-hidden="true" className="svg-inline--fa fa-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                      </svg>
                    </div>
                  </div>
                  <h1 dir="ltr" className="font-bold text-[24px]/[25px] desktop-sm:text-[20px]/[22px] tracking-normal text-[#126494] opacity-100 sm:text-base mx-2">
                    {T("800 11 800 44")}
                  </h1>
                </div>
                <div className="font-normal text-[16px] leading-[22px] tracking-normal text-[#707070] opacity-100 pt-[22px]">
                  <p className="footer-text desktop-sm:text-xs">
                    {T("تابعنا")}
                  </p>
                  <div className="icons-sec flex mt-[7%] sm:text-font-blue sm:dark:text-dark-header-color sm:order-1 sm:mt-4">
                    <div className="me-2 rounded-full flex items-center justify-center footer-social-icon facebook sm:bg-white h-8 w-8">
                      <span>
                        <span>
                          <img className="h-[29px] w-[29px] desktop-sm:h-[24px] desktop-sm:w-[24px]" src={bc["newDesign-socialmedia-facebook.svg"]} alt={T("[object Object]")} />
                        </span>
                      </span>
                    </div>
                    <div className="me-2 rounded-full flex items-center justify-center footer-social-icon youtube sm:bg-white h-8 w-8">
                      <span>
                        <span>
                          <img className="h-[29px] w-[29px] desktop-sm:h-[24px] desktop-sm:w-[24px]" src={bc["newDesign-youtube.svg"]} alt={T("")} />
                        </span>
                      </span>
                    </div>
                    <div className="me-2 rounded-full flex items-center justify-center footer-social-icon linkedin sm:bg-white h-8 w-8">
                      <span>
                        <span>
                          <img className="h-[29px] w-[29px] desktop-sm:h-[24px] desktop-sm:w-[24px]" src={bc["newDesign-socialmedia-linkedin.svg"]} alt={T("[object Object]")} />
                        </span>
                      </span>
                    </div>
                    <div className="me-2 rounded-full flex items-center justify-center footer-social-icon twitter sm:bg-white h-8 w-8">
                      <span>
                        <span>
                          <img className="h-[29px] w-[29px] desktop-sm:h-[24px] desktop-sm:w-[24px]" src={bc["newDesign-socialmedia-x.svg"]} alt={T("")} />
                        </span>
                      </span>
                    </div>
                    <div className="me-2 rounded-full flex items-center justify-center footer-social-icon instagram sm:bg-white h-8 w-8">
                      <span>
                        <span>
                          <img className="h-[29px] w-[29px] desktop-sm:h-[24px] desktop-sm:w-[24px]" src={bc["newDesign-socialmedia-instagram.svg"]} alt={T("[object Object]")} />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 mt-[5%] flex flex-col items-center justify-center w-full">
          <div className="bg-[#F9FAFC] bg-no-repeat bg-origin-padding mt-[1%] items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center">
              <p className="font-normal text-[16px] leading-[22px] desktop-sm:text-xs desktop-sm:leading-4 tracking-normal text-[#707070] opacity-100 footer-text text-center pt-[16px]">
                {T("طرق الدفع")}
              </p>
              <div className="flex justify-center">
                <div className="mt-[4%] items-center justify-center">
                  <img className="my-1 w-[46px] h-[29px]" src={bc["newDesign-payments-tabby.svg"]} />
                </div>
                <div className="mt-[4%] items-center justify-center">
                  <img className="my-1 w-[46px] h-[29px]" src={bc["newDesign-payments-amex.svg"]} />
                </div>
                <div className="mt-[4%] items-center justify-center">
                  <img className="my-1 w-[46px] h-[29px]" src={bc["newDesign-payments-mada.svg"]} />
                </div>
                <div className="mt-[4%] items-center justify-center">
                  <img className="my-1 w-[46px] h-[29px]" src={bc["newDesign-payments-sadad.svg"]} />
                </div>
                <div className="mt-[4%] items-center justify-center">
                  <img className="my-1 w-[46px] h-[29px]" src={bc["newDesign-payments-visa.svg"]} />
                </div>
                <div className="mt-[4%] items-center justify-center">
                  <img className="my-1 w-[46px] h-[29px]" src={bc["newDesign-payments-mastercard.svg"]} />
                </div>
                <div className="mt-[4%] items-center justify-center">
                  <img className="my-1 w-[46px] h-[29px]" src={bc["newDesign-payments-applepay.svg"]} />
                </div>
              </div>
            </div>
            <div className="w-full border-t border-gray-200 mt-6 text-end">
              <div>
                <div className="px-4 lg:px-8 mx-auto w-full bg-[#F9FAFC] bg-no-repeat bg-origin-padding border border-[#EBEBEB] opacity-100 py-3 transition-all duration-300">
                  <button type="button" onClick={() => setOpen(open === 0 ? -1 : 0)} className="w-full flex items-center justify-between cursor-pointer select-none py-1 bg-transparent border-0 text-end outline-none" aria-expanded={open === 0}>
                    <span className="font-normal text-[16px] leading-[30px] tracking-normal text-black opacity-100">
                      {T("منتجات الأفراد")}
                    </span>
                    <span className={`${open === 0 ? "rotate-180 " : ""}accordion-chevron-icon text-[#707070] inline-block flex-shrink-0 ms-3`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <div className={`accordion-slide-panel max-w-full ${open === 0 ? "is-open" : ""}`}>
                    <div className="flex flex-col gap-1 py-1 mt-2 text-start ps-2 pe-0">
                      <Link to={productFrame ? "/" : "/motor-insurance"} search={S} className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("تأمين المركبات")}
                        </h6>
                      </Link>
                      <Link to="/travel-insurance" search={S} className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("تأمين السفر")}
                        </h6>
                      </Link>
                      <Link to="/medical-malpractice" search={S} className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("تأمين الأخطاء الطبية")}
                        </h6>
                      </Link>
                      <Link to="/domestic-workers" search={S} className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("العمالة المنزلية")}
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-4 lg:px-8 mx-auto w-full bg-[#F9FAFC] bg-no-repeat bg-origin-padding border border-[#EBEBEB] opacity-100 py-3 transition-all duration-300">
                  <button type="button" onClick={() => setOpen(open === 1 ? -1 : 1)} className="w-full flex items-center justify-between cursor-pointer select-none py-1 bg-transparent border-0 text-end outline-none" aria-expanded={open === 1}>
                    <span className="font-normal text-[16px] leading-[30px] tracking-normal text-black opacity-100">
                      {T("منتجات الشركات")}
                    </span>
                    <span className={`${open === 1 ? "rotate-180 " : ""}accordion-chevron-icon text-[#707070] inline-block flex-shrink-0 ms-3`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <div className={`accordion-slide-panel max-w-full ${open === 1 ? "is-open" : ""}`}>
                    <div className="flex flex-col gap-1 py-1 mt-2 text-start ps-2 pe-0">
                      <Link to="/medical-insurance" search={S} className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("تأمين طبي")}
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-4 lg:px-8 mx-auto w-full bg-[#F9FAFC] bg-no-repeat bg-origin-padding border border-[#EBEBEB] opacity-100 py-3 transition-all duration-300">
                  <button type="button" onClick={() => setOpen(open === 2 ? -1 : 2)} className="w-full flex items-center justify-between cursor-pointer select-none py-1 bg-transparent border-0 text-end outline-none" aria-expanded={open === 2}>
                    <span className="font-normal text-[16px] leading-[30px] tracking-normal text-black opacity-100">
                      {T("مصادر")}
                    </span>
                    <span className={`${open === 2 ? "rotate-180 " : ""}accordion-chevron-icon text-[#707070] inline-block flex-shrink-0 ms-3`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <div className={`accordion-slide-panel max-w-full ${open === 2 ? "is-open" : ""}`}>
                    <div className="flex flex-col gap-1 py-1 mt-2 text-start ps-2 pe-0">
                      <span className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("المدونة")}
                        </h6>
                      </span>
                      <span className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("إلغاء الوثيقة")}
                        </h6>
                      </span>
                      <Link to="/verify" search={S} className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("أطبع وثيقتك")}
                        </h6>
                      </Link>
                      <span className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("هيئة التأمين")}
                        </h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-4 lg:px-8 mx-auto w-full bg-[#F9FAFC] bg-no-repeat bg-origin-padding border border-[#EBEBEB] opacity-100 py-3 transition-all duration-300">
                  <button type="button" onClick={() => setOpen(open === 3 ? -1 : 3)} className="w-full flex items-center justify-between cursor-pointer select-none py-1 bg-transparent border-0 text-end outline-none" aria-expanded={open === 3}>
                    <span className="font-normal text-[16px] leading-[30px] tracking-normal text-black opacity-100">
                      {T("الشركة")}
                    </span>
                    <span className={`${open === 3 ? "rotate-180 " : ""}accordion-chevron-icon text-[#707070] inline-block flex-shrink-0 ms-3`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <div className={`accordion-slide-panel max-w-full ${open === 3 ? "is-open" : ""}`}>
                    <div className="flex flex-col gap-1 py-1 mt-2 text-start ps-2 pe-0">
                      <Link to="/about" search={S} className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("عن بي كير")}
                        </h6>
                      </Link>
                      <span className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("توظيف")}
                        </h6>
                      </span>
                      <span className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("مركز المساعدة")}
                        </h6>
                      </span>
                      <span className="text-xs cursor-pointer hover:text-yellowtheme transition-colors text-start">
                        <h6 className="font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100 text-start">
                          {T("الأسئلة الشائعة")}
                        </h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] items-center justify-center gap-4 mt-6 mb-4 font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100">
            <div className="w-[50%] text-center">
              <Link to="/privacy" search={S}>
                {T("سياسة الخصوصية")}
              </Link>
            </div>
            <div className="border-l border-gray-400 h-4" />
            <div className="w-[50%]">
              <Link to="/terms" search={S}>
                {T("الشروط والأحكام")}
              </Link>
            </div>
          </div>
          <div className="mbt px-[10px] flex items-center justify-center text-center mt-[15px] mb-2 pb-4 font-normal text-[16px] leading-[30px] tracking-normal text-[#707070] opacity-100">
            {T("© 2026 شركة عناية الوسيط لوساطة التأمين. جميع الحقوق محفوظة.")}
          </div>
        </div>
      </section>
    </div>
  );
}

export function DesktopFooter({ productFrame = false }: { productFrame?: boolean } = {}) {
  const { T, S } = useFooterCopy(productFrame);
  return (
    <footer className="max-w-[1366px] mx-auto px-4 md:px-9 pt-20 pb-6">
      <div className="grid lg:grid-cols-[1fr_1.2fr_2fr] gap-10">
        <div>
          <img alt={T("بي كير")} className="h-10" src={bc["Bcare-logo.svg"]} />
          <span className="mt-6 flex items-center gap-2 text-2xl font-bold text-bcare-blue" dir="ltr">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 fill-current" aria-hidden="true">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            {T("800 11 800 44")}
          </span>
          <p className="mt-8 text-bcare-ink/80">
            {T("تابعنا")}
          </p>
          <div className="mt-3 flex gap-3">
            <span>
              <img alt={T("")} className="w-8 h-8" src={bc["newDesign-socialmedia-facebook.svg"]} />
            </span>
            <span>
              <img alt={T("")} className="w-8 h-8" src={bc["newDesign-youtube.svg"]} />
            </span>
            <span>
              <img alt={T("")} className="w-8 h-8" src={bc["newDesign-socialmedia-linkedin.svg"]} />
            </span>
            <span>
              <img alt={T("")} className="w-8 h-8" src={bc["newDesign-socialmedia-x.svg"]} />
            </span>
            <span>
              <img alt={T("")} className="w-8 h-8" src={bc["newDesign-socialmedia-instagram.svg"]} />
            </span>
          </div>
        </div>
        <div>
          <p className="text-bcare-ink/80">
            {T("حمل تطبيق بي كير")}
          </p>
          <div className="mt-3 flex gap-2 flex-wrap">
            <span>
              <img alt={T("App Store")} className="h-9" src={bc["newDesign-stores-applestore-w.svg"]} />
            </span>
            <span>
              <img alt={T("AppGallery")} className="h-9" src={bc["newDesign-stores-appgallery-w.svg"]} />
            </span>
            <span>
              <img alt={T("Google Play")} className="h-9" src={bc["newDesign-stores-googleplay-w.svg"]} />
            </span>
          </div>
          <p className="mt-8 text-bcare-ink/80">
            {T("طرق الدفع")}
          </p>
          <div className="mt-3 flex gap-2 flex-wrap">
            <img alt={T("tabby")} className="h-8" src={bc["newDesign-payments-tabby.svg"]} />
            <img alt={T("amex")} className="h-8" src={bc["newDesign-payments-amex.svg"]} />
            <img alt={T("mada")} className="h-8" src={bc["newDesign-payments-mada.svg"]} />
            <img alt={T("sadad")} className="h-8" src={bc["newDesign-payments-sadad.svg"]} />
            <img alt={T("visa")} className="h-8" src={bc["newDesign-payments-visa.svg"]} />
            <img alt={T("mastercard")} className="h-8" src={bc["newDesign-payments-mastercard.svg"]} />
            <img alt={T("applepay")} className="h-8" src={bc["newDesign-payments-applepay.svg"]} />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="font-bold text-bcare-ink">
              {T("منتجات الأفراد")}
            </p>
            <ul className="mt-3 space-y-2.5">
              <li>
                <Link to={productFrame ? "/" : "/motor-insurance"} search={S} className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("تأمين المركبات")}
                </Link>
              </li>
              <li>
                <Link to="/travel-insurance" search={S} className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("تأمين السفر")}
                </Link>
              </li>
              <li>
                <Link to="/medical-malpractice" search={S} className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("تأمين الأخطاء الطبية")}
                </Link>
              </li>
              <li>
                <Link to="/domestic-workers" search={S} className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("العمالة المنزلية")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-bcare-ink">
              {T("منتجات الشركات")}
            </p>
            <ul className="mt-3 space-y-2.5">
              <li>
                <Link to="/medical-insurance" search={S} className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("تأمين طبي")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-bcare-ink">
              {T("مصادر")}
            </p>
            <ul className="mt-3 space-y-2.5">
              <li>
                <span className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("المدونة")}
                </span>
              </li>
              <li>
                <span className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("إلغاء الوثيقة")}
                </span>
              </li>
              <li>
                <Link to="/verify" search={S} className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("أطبع وثيقتك")}
                </Link>
              </li>
              <li>
                <span className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("هيئة التأمين")}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-bcare-ink">
              {T("الشركة")}
            </p>
            <ul className="mt-3 space-y-2.5">
              <li>
                <Link to="/about" search={S} className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("عن بي كير")}
                </Link>
              </li>
              <li>
                <span className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("توظيف")}
                </span>
              </li>
              <li>
                <span className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("مركز المساعدة")}
                </span>
              </li>
              <li>
                <span className="text-bcare-ink/70 hover:text-bcare-blue">
                  {T("الأسئلة الشائعة")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-bcare-ink/70">
        <p>
          {T("© 2026 شركة عناية الوسيط لوساطة التأمين. جميع الحقوق محفوظة.")}
        </p>
        <div className="flex gap-6">
          <Link to="/privacy" search={S} className="hover:text-bcare-blue">
            {T("سياسة الخصوصية")}
          </Link>
          <Link to="/terms" search={S} className="hover:text-bcare-blue">
            {T("الشروط والأحكام")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
