// Desktop home copied from the reference markup (shown from 1200px).
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { bc } from "@/lib/bcare-media";
import { media } from "@/lib/media";
import { BUSINESS, PRODUCTS, useBc } from "./common";

export function DesktopHome() {
  const { T, S, L, dir } = useBc();
  const [slide, setSlide] = useState(0);
  const [tier, setTier] = useState(0);
  const [cat, setCat] = useState(0);
  const [aud, setAud] = useState(0);
  const [faq, setFaq] = useState(-1);
  const [allFaq, setAllFaq] = useState(false);
  const prodRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % 3), 5000);
    return () => clearInterval(id);
  }, []);
  const scrollProducts = (d: number) =>
    prodRef.current?.scrollBy({ left: d * 180 * (dir === "rtl" ? -1 : 1), behavior: "smooth" });
  return (
    <div className="bc-desktop">
    <section className="relative hidden md:block">
      <div className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-left" style={{backgroundImage: `url(${L("newDesign-motorBannerMain-web-ar.jpg")})`}} />
        <div className="relative max-w-[1366px] mx-auto px-4 md:px-9 pt-10 md:pt-16 pb-32 md:pb-36">
          <div className="max-w-[1160px]">
            <h1 className="text-3xl md:text-[50px] font-bold leading-[1.25] text-bcare-blue">
              {T("المنصة الأذكى لمقارنة عروض تأمين")}
              <br className="hidden md:block" />
              {" "}
              {T("السيارات في السعودية")}
            </h1>
            <div className="mt-6 space-y-1.5 text-base md:text-xl text-bcare-ink">
              <p>
                {T("المنصة الأذكى لمقارنة عروض أكثر من 20 شركة تأمين.")}
              </p>
              <p>
                {T("احصل على أرخص تأمين سيارات مع إصدار فوري")}
              </p>
              <p>
                {T("وربط مباشر بنجم")}
              </p>
            </div>
          </div>
          <Link to="/insurance-request" search={S} className="mt-8 inline-flex items-center justify-center w-full sm:w-[300px] h-[68px] rounded-lg bg-bcare-blue text-primary-foreground text-xl font-bold hover:opacity-90 transition">
            {T("طلب العروض")}
          </Link>
          <div className="mt-8 xl:mt-24 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:border-l sm:pe-6 border-bcare-blue/30">
              <img alt={T("مكان واحد")} className="w-11 h-11 shrink-0" src={bc["newDesign-homepage-OnePlace.svg"]} />
              <div>
                <p className="font-bold text-bcare-blue">
                  {T("مكان واحد")}
                </p>
                <p className="text-xs text-bcare-blue/80">
                  {T("أدر جميع وثائقك من مكان واحد")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:border-l sm:pe-6 border-bcare-blue/30">
              <img alt={T("أفضل الأسعار")} className="w-11 h-11 shrink-0" src={bc["newDesign-homepage-BestRates.svg"]} />
              <div>
                <p className="font-bold text-bcare-blue">
                  {T("أفضل الأسعار")}
                </p>
                <p className="text-xs text-bcare-blue/80">
                  {T("بي كير تضمن لك أفضل سعر")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img alt={T("خلال دقيقة واحدة")} className="w-11 h-11 shrink-0" src={bc["newDesign-homepage-Within1minute.svg"]} />
              <div>
                <p className="font-bold text-bcare-blue">
                  {T("خلال دقيقة واحدة")}
                </p>
                <p className="text-xs text-bcare-blue/80">
                  {T("نقارن لك جميع وثائق التأمين فورا")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="relative">
      <div className="relative mt-8 md:-mt-24 max-w-[1366px] mx-auto px-4 md:px-9">
        <div className="bg-background rounded-xl shadow-[0_4px_24px_-6px_hsl(var(--bcare-blue)/0.25)] p-5 md:px-12 flex items-center gap-6 md:gap-10 overflow-hidden">
          <img alt={T("Insurance Authority")} className="h-12 md:h-16 shrink-0" src={bc["newDesign-ia.svg"]} />
          <div className="text-center border-l border-border pe-6 md:pe-10 py-3 shrink-0">
            <p className="text-3xl md:text-5xl font-extrabold text-bcare-blue leading-none">
              {T("23")}
            </p>
            <p className="text-sm font-bold text-bcare-blue mt-1">
              {T("شركة تأمين")}
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-16 w-max animate-[bcmarquee_45s_linear_infinite]">
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-UCA.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-AlRajhi.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Allianz.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Tawuniya.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["Aljazira-Takaful.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Amana.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-AXA.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-MedGulf.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-GGI.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-ACIG.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-ArabianShield.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-AICC.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-TUIC.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Walaa.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Salama.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Malath.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Sagr.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-SAICO.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-GulfUnion.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Wataniya.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-SaudiEnaya.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Alalamiya.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Tree.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-UCA.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-AlRajhi.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Allianz.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Tawuniya.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["Aljazira-Takaful.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Amana.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-AXA.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-MedGulf.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-GGI.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-ACIG.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-ArabianShield.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-AICC.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-TUIC.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Walaa.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Salama.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Malath.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Sagr.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-SAICO.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-GulfUnion.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Wataniya.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-SaudiEnaya.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Alalamiya.svg"]} />
              <img alt={T("")} className="h-10 md:h-12 w-auto max-w-[110px] object-contain shrink-0" src={bc["insurerlogos-svg-Tree.svg"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-[1366px] mx-auto px-4 md:px-9 mt-16">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="flex transition-transform duration-700" style={{transform: `translateX(${(dir === "rtl" ? 1 : -1) * slide * 100}%)`}}>
          <picture className="w-full shrink-0">
            <img alt={T("")} className="w-full h-auto" src={bc["newDesign-roshn.jpg"]} />
          </picture>
          <picture className="w-full shrink-0">
            <img alt={T("")} className="w-full h-auto" src={media["predict.jpg"]} />
          </picture>
          <picture className="w-full shrink-0">
            <img alt={T("")} className="w-full h-auto" src={L("newDesign-superCareBanner-ar.jpg")} />
          </picture>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-3">
{[0, 1, 2].map((i) => (<button key={i} type="button" aria-label={`${i + 1}`} onClick={() => setSlide(i)} className={`w-3 h-3 rounded-full border border-bcare-blue ${slide === i ? "bg-bcare-blue" : "bg-background"}`} />))}
      </div>
    </section>
    <section className="max-w-[1366px] mx-auto px-4 md:px-9 mt-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-bcare-blue text-center leading-tight">
        {T("التغطية المناسبة لتأمين")}
        {" "}
        <span className="text-bcare-orange">
          {T("سيارتك")}
        </span>
      </h2>
      <p className="text-center text-bcare-blue mt-2">
        {T("قارن بين أبرز مزايا أنواع تأمين السيارات الثلاثة، واختر التغطية التي تناسب احتياجاتك وميزانيتك")}
      </p>
      <div className="mt-8 rounded-2xl border border-border p-4 grid lg:grid-cols-[1fr_2.1fr_1fr] gap-3">
        <img alt={T("المركبات")} className="hidden lg:block w-full h-full object-cover rounded-xl" src={bc["newDesign-car_table.jpg"]} />
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-bcare-sky">
                <th className="p-4 text-start font-bold text-bcare-blue">
                  {T("الميزة")}
                </th>
                <th className="relative p-3 w-28">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-bcare-orange text-primary-foreground text-[11px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
                    {T("الخيار الأفضل")}
                  </span>
                  <span className="font-bold text-bcare-orange">
                    {T("شامل")}
                  </span>
                </th>
                <th className="relative p-3 w-28">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 border border-bcare-blue text-bcare-blue text-[11px] px-6 py-0.5 rounded-full whitespace-nowrap bg-background">
                    {T("موصى به")}
                  </span>
                  <span className="font-bold text-bcare-blue">
                    {T("مميز")}
                  </span>
                </th>
                <th className="relative p-3 w-28">
                  <span className="font-bold text-bcare-blue">
                    {T("ضد الغير")}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-md border border-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car w-4 h-4 text-bcare-ink" aria-hidden="true">
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-bcare-blue">
                        {T("المسؤولية تجاه الغير")}
                      </p>
                      <p className="text-xs text-bcare-blue/80">
                        {T("الأضرار أو الإصابات التي تلحق بالآخرين")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center bg-bcare-orange/5 border-x border-bcare-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-md border border-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench w-4 h-4 text-bcare-ink" aria-hidden="true">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-bcare-blue">
                        {T("تغطية أضرار المركبة")}
                      </p>
                      <p className="text-xs text-bcare-blue/80">
                        {T("تغطي تكاليف إصلاح مركبتك")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center bg-bcare-orange/5 border-x border-bcare-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-md border border-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-venetian-mask w-4 h-4 text-bcare-ink" aria-hidden="true">
                        <path d="M18 11c-1.5 0-2.5.5-3 2" />
                        <path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
                        <path d="M6 11c1.5 0 2.5.5 3 2" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-bcare-blue">
                        {T("الحماية من السرقة")}
                      </p>
                      <p className="text-xs text-bcare-blue/80">
                        {T("تغطي مركبتك في حال تعرضها للسرقة")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center bg-bcare-orange/5 border-x border-bcare-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-md border border-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-4 h-4 text-bcare-ink" aria-hidden="true">
                        <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-bcare-blue">
                        {T("الحريق والانفجار")}
                      </p>
                      <p className="text-xs text-bcare-blue/80">
                        {T("تغطي الأضرار الناتجة عن الحريق أو الانفجار")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center bg-bcare-orange/5 border-x border-bcare-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-md border border-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-lightning w-4 h-4 text-bcare-ink" aria-hidden="true">
                        <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
                        <path d="m13 12-3 5h4l-3 5" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-bcare-blue">
                        {T("الكوارث الطبيعية")}
                      </p>
                      <p className="text-xs text-bcare-blue/80">
                        {T("تغطي الفيضانات والعواصف والزلازل وغيرها")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center bg-bcare-orange/5 border-x border-bcare-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-md border border-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round w-4 h-4 text-bcare-ink" aria-hidden="true">
                        <circle cx="12" cy="8" r="5" />
                        <path d="M20 21a8 8 0 0 0-16 0" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-bcare-blue">
                        {T("تغطية الحوادث الشخصية")}
                      </p>
                      <p className="text-xs text-bcare-blue/80">
                        {T("تغطي السائق والركاب")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center bg-bcare-orange/5 border-x border-bcare-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-md border border-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-siren w-4 h-4 text-bcare-ink" aria-hidden="true">
                        <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
                        <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
                        <path d="M21 12h1" />
                        <path d="M18.5 4.5 18 5" />
                        <path d="M2 12h1" />
                        <path d="M12 2v1" />
                        <path d="m4.929 4.929.707.707" />
                        <path d="M12 12v6" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-bcare-blue">
                        {T("المساعدة على الطريق على مدار الساعة")}
                      </p>
                      <p className="text-xs text-bcare-blue/80">
                        {T("تشمل السحب والإطارات المتضررة وتوصيل الوقود وغيرها")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center bg-bcare-orange/5 border-x border-bcare-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-md border border-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4 text-bcare-ink" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-bcare-blue">
                        {T("خيارات التغطية الإضافية")}
                      </p>
                      <p className="text-xs text-bcare-blue/80">
                        {T("تشمل حماية المحرك وتعويض قيمة الفاتورة وغيرها")}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center bg-bcare-orange/5 border-x border-bcare-orange border-b rounded-b-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 mx-auto text-bcare-blue" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
                <td className="p-3 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x w-5 h-5 mx-auto text-muted-foreground/40" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-xl bg-bcare-sky p-5 flex flex-col">
          <h3 className="font-bold text-bcare-blue">
            {T("ما الذي يغطيه التأمين؟")}
          </h3>
          <p className="mt-4 text-[13px] leading-6 text-bcare-ink/90 flex-1">
            {T("التأمين الشامل من بي كير هو خيارك الأول والذكي لو تبحث عن أرخص تأمين شامل في السعودية يجمع بين السعر المنافس والحماية، لأنه يوفر حماية كاملة لسيارتك تضمن تصليحها أو استبدالها في حال وقوع حادث حتى لو كان الخطأ عليك 100%، بالإضافة لتغطية المسؤولية تجاه الغير (ضد الغير) اللي تسمح لك بتجديد الاستمارة فوراً مع الربط الآلي بنظام نجم وأبشر؛ وتتميز هذه الوثيقة بشمولية أضرار السيول والأمطار والكوارث الطبيعية، وحماية سيارتك من الحريق والسرقة، وتوفير تعويضات الحوادث الشخصية للسائق والركاب، مع ميزات اختيارية مثل إصلاح الوكالة والسيارة البديلة لضمان راحتك التامة، ولأننا نهتم بتوفيرك، تقدر تقسط تأمينك مع تابي بكل سهولة، وراح تحصل مع تأمينك على خدمة المساعدة على الطريق لتأمين رحلتك من أي طارئ، وهذا النوع هو 'التغطية الموصى بها' لكونه يحميك من مخالفات عدم التأمين، ويغنيك عن تكاليف الإصلاح الباهظة.")}
          </p>
          <div className="flex justify-center gap-2 mt-3">
{[0, 1, 2].map((i) => (<button key={i} type="button" aria-label={`${i + 1}`} onClick={() => setTier(i)} className={`w-3 h-3 rounded-full border border-bcare-blue ${tier === i ? "bg-bcare-blue" : "bg-background"}`} />))}
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-[1366px] mx-auto px-4 md:px-9 mt-24">
      <h2 className="text-3xl md:text-5xl font-extrabold text-bcare-blue text-center leading-tight">
        {T("عروض")}
        {" "}
        <span className="text-bcare-orange">
          {T("و")}
        </span>
        {" "}
        {T("خصومات حصرية")}
      </h2>
      <p className="text-center text-bcare-blue mt-2">
        {T("خصومات وعروض من مجموعة متنوعة من المتاجر المحلية والعالمية لعملاء بي كير")}
      </p>
      <div className="mt-8 grid lg:grid-cols-[1fr_3fr] gap-3">
        <div className="flex lg:flex-col gap-3 overflow-x-auto">
          <button type="button" onClick={() => setCat(0)} className={`shrink-0 flex items-center justify-between gap-4 rounded-lg border px-5 h-[84px] text-lg font-semibold transition ${cat === 0 ? "bg-bcare-blue text-primary-foreground border-bcare-blue" : "bg-background text-bcare-blue border-border"}`}>
            {T("خدمات السيارات")}
            <img alt={T("")} className="w-12 h-12" src={bc["newDesign-homepage-Car-a-Services.svg"]} />
          </button>
          <button type="button" onClick={() => setCat(1)} className={`shrink-0 flex items-center justify-between gap-4 rounded-lg border px-5 h-[84px] text-lg font-semibold transition ${cat === 1 ? "bg-bcare-blue text-primary-foreground border-bcare-blue" : "bg-background text-bcare-blue border-border"}`}>
            {T("الصحة والجمال")}
            <img alt={T("")} className="w-12 h-12" src={bc["newDesign-homepage-Health-a-Beauty.svg"]} />
          </button>
          <button type="button" onClick={() => setCat(2)} className={`shrink-0 flex items-center justify-between gap-4 rounded-lg border px-5 h-[84px] text-lg font-semibold transition ${cat === 2 ? "bg-bcare-blue text-primary-foreground border-bcare-blue" : "bg-background text-bcare-blue border-border"}`}>
            {T("التسوق")}
            <img alt={T("")} className="w-12 h-12" src={bc["newDesign-homepage-Shopping.svg"]} />
          </button>
          <button type="button" onClick={() => setCat(3)} className={`shrink-0 flex items-center justify-between gap-4 rounded-lg border px-5 h-[84px] text-lg font-semibold transition ${cat === 3 ? "bg-bcare-blue text-primary-foreground border-bcare-blue" : "bg-background text-bcare-blue border-border"}`}>
            {T("الفنادق والسفر")}
            <img alt={T("")} className="w-12 h-12" src={bc["newDesign-homepage-Hotels-a-travel.svg"]} />
          </button>
          <button type="button" onClick={() => setCat(4)} className={`shrink-0 flex items-center justify-between gap-4 rounded-lg border px-5 h-[84px] text-lg font-semibold transition ${cat === 4 ? "bg-bcare-blue text-primary-foreground border-bcare-blue" : "bg-background text-bcare-blue border-border"}`}>
            {T("المطاعم والمقاهي")}
            <img alt={T("")} className="w-12 h-12" src={bc["newDesign-homepage-Restaurants-a-cafes.svg"]} />
          </button>
        </div>
        <div className="rounded-xl border border-border p-6 md:p-10 flex items-center">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
            <div className="rounded-xl border border-border bg-gradient-to-l from-background to-bcare-sky/60 p-5 flex items-center gap-5 h-[200px]">
              <span className="w-20 h-20 shrink-0 rounded-xl border border-border bg-background flex items-center justify-center overflow-hidden">
                <img alt={T("سبيرو")} className="w-full h-full object-contain p-1" src={bc["wareef_images-85.png"]} />
              </span>
              <div className="min-w-0">
                <p className="text-3xl font-bold text-bcare-blue">
                  {T("10% خصم")}
                </p>
                <p className="text-bcare-blue/80 mt-1">
                  {T("سبيرو")}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-gradient-to-l from-background to-bcare-sky/60 p-5 flex items-center gap-5 h-[200px]">
              <span className="w-20 h-20 shrink-0 rounded-xl border border-border bg-background flex items-center justify-center overflow-hidden">
                <img alt={T("كلارو")} className="w-full h-full object-contain p-1" src={bc["wareef_images-116.png"]} />
              </span>
              <div className="min-w-0">
                <p className="text-3xl font-bold text-bcare-blue">
                  {T("15% خصم")}
                </p>
                <p className="text-bcare-blue/80 mt-1">
                  {T("كلارو")}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-gradient-to-l from-background to-bcare-sky/60 p-5 flex items-center gap-5 h-[200px]">
              <span className="w-20 h-20 shrink-0 rounded-xl border border-border bg-background flex items-center justify-center overflow-hidden">
                <img alt={T("اطلبها")} className="w-full h-full object-contain p-1" src={bc["wareef_images-124.png"]} />
              </span>
              <div className="min-w-0">
                <p className="text-3xl font-bold text-bcare-blue">
                  {T("5% خصم")}
                </p>
                <p className="text-bcare-blue/80 mt-1">
                  {T("اطلبها")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="mt-4 flex sm:ms-auto items-center justify-center w-full sm:w-[305px] h-10 rounded-full bg-bcare-blue text-primary-foreground font-bold">
        {T("عرض المزيد من العروض")}
      </span>
    </section>
    <section className="mt-24">
      <img alt={T("")} className="w-full h-auto block" src={bc["newDesign-homepage-Rcity.svg"]} />
      <div className="bg-bcare-sky pb-24 -mt-px">
        <div className="max-w-[1366px] mx-auto px-4 md:px-9 pt-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-bcare-blue text-center leading-tight">
            {T("رحلة")}
            {" "}
            <span className="text-bcare-orange">
              {T("آمنة")}
            </span>
            {" "}
            {T("مع بي كير")}
          </h2>
          <p className="text-center text-bcare-blue mt-2">
            {T("إجابات واضحة ومتخصصة عن أسئلتك حول تأمين المركبات لمساعدتك على فهم وثيقتك والتغطيات والمطالبات والمزيد.")}
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-background rounded-2xl p-6 text-center shadow-[0_8px_24px_-12px_hsl(var(--bcare-blue)/0.25)]">
              <span className="mx-auto w-[70px] h-[70px] rounded-full bg-bcare-sky flex items-center justify-center">
                <img alt={T("")} className="w-10 h-10" src={bc["newDesign-motor-withbcare-icon1.svg"]} />
              </span>
              <h3 className="mt-3 text-xl font-bold text-bcare-blue">
                {T("خيارات متنوعة")}
              </h3>
              <p className="mt-2 text-sm text-bcare-blue/80 leading-6">
                {T("لأن وقتك ثمين، نقارن لك جميع الوثائق فوريا من جميع شركات التأمين.")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center shadow-[0_8px_24px_-12px_hsl(var(--bcare-blue)/0.25)]">
              <span className="mx-auto w-[70px] h-[70px] rounded-full bg-bcare-sky flex items-center justify-center">
                <img alt={T("")} className="w-10 h-10" src={bc["newDesign-motor-withbcare-icon2.svg"]} />
              </span>
              <h3 className="mt-3 text-xl font-bold text-bcare-blue">
                {T("خصص تأمينك")}
              </h3>
              <p className="mt-2 text-sm text-bcare-blue/80 leading-6">
                {T("أنواع متعددة من التأمين: ضد الغير، مميز، شامل، مع خيارات متنوعة لمبالغ التحمل.")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center shadow-[0_8px_24px_-12px_hsl(var(--bcare-blue)/0.25)]">
              <span className="mx-auto w-[70px] h-[70px] rounded-full bg-bcare-sky flex items-center justify-center">
                <img alt={T("")} className="w-10 h-10" src={bc["newDesign-motor-withbcare-icon3.svg"]} />
              </span>
              <h3 className="mt-3 text-xl font-bold text-bcare-blue">
                {T("أسعار أقل")}
              </h3>
              <p className="mt-2 text-sm text-bcare-blue/80 leading-6">
                {T("يراقب فريقنا السوق باستمرار لضمان أفضل سعر يناسب احتياجاتك.")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center shadow-[0_8px_24px_-12px_hsl(var(--bcare-blue)/0.25)]">
              <span className="mx-auto w-[70px] h-[70px] rounded-full bg-bcare-sky flex items-center justify-center">
                <img alt={T("")} className="w-10 h-10" src={bc["newDesign-motor-withbcare-icon4.svg"]} />
              </span>
              <h3 className="mt-3 text-xl font-bold text-bcare-blue">
                {T("حدد موعد تأمينك")}
              </h3>
              <p className="mt-2 text-sm text-bcare-blue/80 leading-6">
                {T("نرسل لك إشعارات تذكيرية لتجديد التأمين، ويمكنك تحديد تاريخ بدء الوثيقة.")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center shadow-[0_8px_24px_-12px_hsl(var(--bcare-blue)/0.25)]">
              <span className="mx-auto w-[70px] h-[70px] rounded-full bg-bcare-sky flex items-center justify-center">
                <img alt={T("")} className="w-10 h-10" src={bc["newDesign-motor-withbcare-icon5.svg"]} />
              </span>
              <h3 className="mt-3 text-xl font-bold text-bcare-blue">
                {T("ربط سريع")}
              </h3>
              <p className="mt-2 text-sm text-bcare-blue/80 leading-6">
                {T("نربط وثيقتك بأنظمة المرور ونجم بأسرع وقت ممكن.")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center shadow-[0_8px_24px_-12px_hsl(var(--bcare-blue)/0.25)]">
              <span className="mx-auto w-[70px] h-[70px] rounded-full bg-bcare-sky flex items-center justify-center">
                <img alt={T("")} className="w-10 h-10" src={bc["newDesign-motor-withbcare-icon6.svg"]} />
              </span>
              <h3 className="mt-3 text-xl font-bold text-bcare-blue">
                {T("خصومات خاصة")}
              </h3>
              <p className="mt-2 text-sm text-bcare-blue/80 leading-6">
                {T("خصومات لبعض الجهات الحكومية وشبه الحكومية والقطاعات الخاصة.")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center shadow-[0_8px_24px_-12px_hsl(var(--bcare-blue)/0.25)]">
              <span className="mx-auto w-[70px] h-[70px] rounded-full bg-bcare-sky flex items-center justify-center">
                <img alt={T("")} className="w-10 h-10" src={bc["newDesign-motor-withbcare-icon7.svg"]} />
              </span>
              <h3 className="mt-3 text-xl font-bold text-bcare-blue">
                {T("مزايا تحميك")}
              </h3>
              <p className="mt-2 text-sm text-bcare-blue/80 leading-6">
                {T("خطط تأمينية متنوعة مع مرونة في اختيار المزايا الإضافية التي تناسبك.")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center shadow-[0_8px_24px_-12px_hsl(var(--bcare-blue)/0.25)]">
              <span className="mx-auto w-[70px] h-[70px] rounded-full bg-bcare-sky flex items-center justify-center">
                <img alt={T("")} className="w-10 h-10" src={bc["newDesign-motor-withbcare-icon8.svg"]} />
              </span>
              <h3 className="mt-3 text-xl font-bold text-bcare-blue">
                {T("كل شيء في مكان واحد")}
              </h3>
              <p className="mt-2 text-sm text-bcare-blue/80 leading-6">
                {T("أدر جميع وثائقك إلكترونيا بالكامل من مكان واحد، وجددها في أي وقت.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-[1366px] mx-auto px-4 md:px-9 mt-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-bcare-blue text-center leading-tight">
        {T("دليل تأمين السيارات ونصائح التأمين الإلكتروني")}
      </h2>
      <p className="text-center text-bcare-blue mt-2">
        {T("اكتشف أحدث مقالات بي كير حول تأمين السيارات، وتجديد الوثائق، ونقل الملكية، وخصم عدم وجود مطالبات، وخدمات الدعم في السعودية.")}
      </p>
      <div className="mt-6 rounded-xl border border-border p-3 grid lg:grid-cols-2 gap-3">
        <span className="rounded-xl bg-bcare-sky p-4 flex flex-col">
          <img alt={T("")} className="w-full rounded-lg object-cover aspect-[631/240]" src={bc["newDesign-blogs1.jpg"]} />
          <h3 className="mt-8 text-2xl md:text-4xl font-bold text-bcare-blue leading-snug">
            {T("طريقة تأمين المركبة أونلاين | بي كير لوساطة التأمين")}
          </h3>
          <span className="mt-8 self-end inline-flex items-center justify-center w-36 h-10 rounded-md bg-bcare-blue text-primary-foreground font-bold">
            {T("اقرأ المزيد")}
          </span>
        </span>
        <div className="flex flex-col gap-3">
          <span className="flex-1 rounded-xl border border-border p-3 flex gap-3">
            <img alt={T("")} className="w-40 h-[126px] rounded-lg object-cover shrink-0" src={bc["newDesign-blogs2.jpg"]} />
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-lg md:text-xl font-bold text-bcare-blue leading-snug pt-6">
                {T("طريقة رفع تذكرة للدعم الفني | لملاحظاتكم في منصة بي كير")}
              </h3>
              <span className="self-end w-8 h-8 rounded-full border border-border flex items-center justify-center text-bcare-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </span>
            </div>
          </span>
          <span className="flex-1 rounded-xl border border-border p-3 flex gap-3">
            <img alt={T("")} className="w-40 h-[126px] rounded-lg object-cover shrink-0" src={bc["newDesign-blogs3.jpg"]} />
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-lg md:text-xl font-bold text-bcare-blue leading-snug pt-6">
                {T("تأمين نقل الملكية | بي كير")}
              </h3>
              <span className="self-end w-8 h-8 rounded-full border border-border flex items-center justify-center text-bcare-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </span>
            </div>
          </span>
          <span className="flex-1 rounded-xl border border-border p-3 flex gap-3">
            <img alt={T("")} className="w-40 h-[126px] rounded-lg object-cover shrink-0" src={bc["newDesign-blogs4.jpg"]} />
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-lg md:text-xl font-bold text-bcare-blue leading-snug pt-6">
                {T("بي كير | الانتظام في تجديد التأمين يرفع من استحقاقك لخدمة خصم “أحقية”")}
              </h3>
              <span className="self-end w-8 h-8 rounded-full border border-border flex items-center justify-center text-bcare-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-4 h-4" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </span>
            </div>
          </span>
        </div>
      </div>
      <span className="mt-6 flex sm:ms-auto items-center justify-center w-full sm:w-[305px] h-10 rounded-full bg-bcare-blue text-primary-foreground font-bold">
        {T("تصفح جميع المقالات")}
      </span>
    </section>
    <section className="max-w-[1366px] mx-auto px-4 md:px-9 mt-24 text-center">
      <div className="inline-flex rounded-full border border-border p-0.5">
        <button type="button" onClick={() => setAud(0)} className={`w-30 py-1.5 px-10 rounded-full text-sm font-bold transition ${aud === 0 ? "bg-bcare-blue text-primary-foreground" : "text-bcare-blue"}`}>
          {T("أفراد")}
        </button>
        <button type="button" onClick={() => setAud(1)} className={`w-30 py-1.5 px-10 rounded-full text-sm font-bold transition ${aud === 1 ? "bg-bcare-blue text-primary-foreground" : "text-bcare-blue"}`}>
          {T("شركات")}
        </button>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button type="button" aria-label="prev" onClick={() => scrollProducts(1)} className="hidden sm:flex w-11 h-11 rounded-full shadow-md items-center justify-center text-bcare-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
        <div ref={prodRef} className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth">
{(aud === 0 ? PRODUCTS : BUSINESS).map((p) => (<Link key={p.img} to={p.to} search={S} aria-label={T(p.alt)}><img alt={T(p.alt)} className="w-[114px] h-[125px] md:w-[150px] md:h-[165px] rounded-xl object-cover shrink-0" src={L(p.img)} /></Link>))}
        </div>
        <button type="button" aria-label="next" onClick={() => scrollProducts(-1)} className="hidden sm:flex w-11 h-11 rounded-full shadow-md items-center justify-center text-bcare-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-6 h-6" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>
    </section>
    <section className="mt-28 relative">
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-bcare-blue text-center leading-tight">
          {T("تأمينك")}
          {" "}
          <span className="text-bcare-orange">
            {T("في جيبك")}
          </span>
        </h2>
        <p className="text-bcare-blue mt-2">
          {T("احصل على عروض أسعار فورية، وجدد وثيقتك خلال ثوان، وأدرها من مكان واحد، في أي وقت ومن أي مكان!")}
        </p>
      </div>
      <div className="relative mt-24 md:mt-28">
        <div className="max-w-[1366px] mx-auto px-4 md:px-9 hidden lg:flex justify-end gap-2 absolute inset-x-0 -top-11">
          <img alt={T("")} className="h-8" src={L("newDesign-carwash-ar.svg")} />
          <img alt={T("")} className="h-8" src={L("newDesign-roadside-ar.svg")} />
          <img alt={T("")} className="h-8" src={L("newDesign-mojaz-ar.svg")} />
        </div>
        <div className="bg-bcare-blue">
          <div className="max-w-[1366px] mx-auto px-4 md:px-9 py-8 grid lg:grid-cols-[1fr_auto_1fr] items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-snug">
              {T("حمل التطبيق واستمتع")}
              <br />
              <span className="text-bcare-orange">
                {T("بخدمات حصرية")}
              </span>
            </h2>
            <img alt={T("تطبيق بي كير")} className="w-64 lg:w-80 mx-auto lg:-my-28" src={bc["newDesign-mock.png"]} />
            <p className="text-primary-foreground text-lg leading-8">
              {T("أدر تأمينك بسهولة، واحصل على عروض وأسعار فورية، وتابع المطالبات، وجدد الوثائق، واستفد من مزايا حصرية عبر التطبيق، كل ذلك في تطبيق واحد وآمن.")}
            </p>
          </div>
        </div>
        <div className="max-w-[1366px] mx-auto px-4 md:px-9 mt-2 flex gap-2 justify-center lg:justify-start">
          <span>
            <img alt={T("App Store")} className="h-11" src={bc["newDesign-stores-applestore-b.svg"]} />
          </span>
          <span>
            <img alt={T("AppGallery")} className="h-11" src={bc["newDesign-stores-appgallery-b.svg"]} />
          </span>
          <span>
            <img alt={T("Google Play")} className="h-11" src={bc["newDesign-stores-googleplay-b.svg"]} />
          </span>
        </div>
      </div>
    </section>
    <section className="mt-24 bg-bcare-sky py-20">
      <div className="max-w-[1366px] mx-auto px-4 md:px-9">
        <h2 className="text-3xl md:text-5xl font-extrabold text-bcare-blue text-center leading-tight">
          {T("الأسئلة")}
          {" "}
          <span className="text-bcare-orange">
            {T("الشائعة")}
          </span>
        </h2>
        <p className="text-center text-bcare-blue mt-2">
          {T("إجابات واضحة من خبرائنا عن أسئلتك حول تأمين السيارات، لمساعدتك على فهم وثيقتك والتغطيات والمطالبات وغيرها")}
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-background p-4 space-y-4">
          <div className="rounded-lg border border-border">
            <button type="button" aria-expanded={faq === 0} onClick={() => setFaq(faq === 0 ? -1 : 0)} className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-start font-bold text-bcare-blue">
              {T("وش الفرق بين التأمين ضد الغير والتأمين الشامل والمميز؟")}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${faq === 0 ? "rotate-180 " : ""}transition-transform lucide lucide-chevron-down w-5 h-5 shrink-0 transition`} aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
{(faq === 0 || allFaq) && (<p className="px-4 pb-4 text-start text-[14px] leading-6 text-bcare-ink/90">{T("ببساطة، التأمين ضد الغير هو النوع الإلزامي اللي يغطي الأضرار اللي تسببها للآخرين وما يغطي سيارتك. أما التأمين الشامل، فهو يحميك بالكامل؛ يغطي تصليح سيارتك (سواء كنت المخطئ أو لا)، ويحميك من السرقة، الحريق، والسيول. أما التأمين المميز فهو الحل المثالي إذا تبي حماية أكثر من العادي وسعر أقل من الشامل لأنه يغطي أضرار الآخرين بحدود تغطية أعلى ومزايا إضافية متنوعة مع وجود نسبة تحمل يحددها العميل.")}</p>)}
          </div>
          <div className="rounded-lg border border-border">
            <button type="button" aria-expanded={faq === 1} onClick={() => setFaq(faq === 1 ? -1 : 1)} className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-start font-bold text-bcare-blue">
              {T("ليش يختلف السعر من شخص للثاني، حتى لو كانت نفس السيارة؟")}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${faq === 1 ? "rotate-180 " : ""}transition-transform lucide lucide-chevron-down w-5 h-5 shrink-0 transition`} aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
{(faq === 1 || allFaq) && (<p className="px-4 pb-4 text-start text-[14px] leading-6 text-bcare-ink/90">{T("لأن شركات التأمين تعتمد على تقييم المخاطر، والسعر يتأثر بسجلك في الحوادث، وعمرك، والمدينة اللي ساكن فيها، وسنة صنع السيارة.")}</p>)}
          </div>
          <div className="rounded-lg border border-border">
            <button type="button" aria-expanded={faq === 2} onClick={() => setFaq(faq === 2 ? -1 : 2)} className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-start font-bold text-bcare-blue">
              {T("هل موقع بي كير آمن للدفع الإلكتروني؟")}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${faq === 2 ? "rotate-180 " : ""}transition-transform lucide lucide-chevron-down w-5 h-5 shrink-0 transition`} aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
{(faq === 2 || allFaq) && (<p className="px-4 pb-4 text-start text-[14px] leading-6 text-bcare-ink/90">{T("جداً آمن. نوفر جميع وسائل الدفع الآمنة مثل مدى، فيزا، Apple Pay، تابي، سداد، وأمريكان إكسبريس.")}</p>)}
          </div>
          <div className="rounded-lg border border-border">
            <button type="button" aria-expanded={faq === 3} onClick={() => setFaq(faq === 3 ? -1 : 3)} className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-start font-bold text-bcare-blue">
              {T("هل أقدر أقسط مبلغ التأمين؟")}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${faq === 3 ? "rotate-180 " : ""}transition-transform lucide lucide-chevron-down w-5 h-5 shrink-0 transition`} aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
{(faq === 3 || allFaq) && (<p className="px-4 pb-4 text-start text-[14px] leading-6 text-bcare-ink/90">{T("طبعاً! بي كير يوفر التقسيط عبر تابي حتى 12 دفعة في بعض العروض، بالإضافة إلى خدمة المساعدة على الطريق (الباقة المرنة).")}</p>)}
          </div>
          <div className="rounded-lg border border-border">
            <button type="button" aria-expanded={faq === 4} onClick={() => setFaq(faq === 4 ? -1 : 4)} className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-start font-bold text-bcare-blue">
              {T("كيف ألغي الوثيقة وأسترجع فلوسي؟")}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${faq === 4 ? "rotate-180 " : ""}transition-transform lucide lucide-chevron-down w-5 h-5 shrink-0 transition`} aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
{(faq === 4 || allFaq) && (<p className="px-4 pb-4 text-start text-[14px] leading-6 text-bcare-ink/90">{T("الإلغاء يتم مباشرة عن طريق شركة التأمين المصدرة للوثيقة، وإذا احتجت أي مساعدة ففريق الدعم الفني جاهز لخدمتك.")}</p>)}
          </div>
          <div className="rounded-lg border border-border">
            <button type="button" aria-expanded={faq === 5} onClick={() => setFaq(faq === 5 ? -1 : 5)} className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-start font-bold text-bcare-blue">
              {T("هل بي كير يذكرني قبل ما يخلص التأمين؟")}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${faq === 5 ? "rotate-180 " : ""}transition-transform lucide lucide-chevron-down w-5 h-5 shrink-0 transition`} aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
{(faq === 5 || allFaq) && (<p className="px-4 pb-4 text-start text-[14px] leading-6 text-bcare-ink/90">{T("أكيد! نرسل إشعارات على الجوال والإيميل قبل انتهاء التأمين بوقت كافٍ.")}</p>)}
          </div>
        </div>
        <button type="button" onClick={() => setAllFaq(!allFaq)} className="mt-6 flex sm:ms-auto items-center justify-center w-full sm:w-[310px] h-11 rounded-full bg-bcare-blue text-primary-foreground font-bold">
          {T("عرض جميع الأسئلة")}
        </button>
      </div>
    </section>
    </div>
  );
}
