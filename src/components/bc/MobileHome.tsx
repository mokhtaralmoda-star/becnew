// Phone/tablet home copied from the bcare.com.sa reference markup (shown below 1200px).
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { bc } from "@/lib/bcare-media";
import { media } from "@/lib/media";
import { BUSINESS, COVER, CoverMark, PRODUCTS, TIERS, useBc } from "./common";

export function MobileHome() {
  const { T, S, L } = useBc();
  const navigate = useNavigate();
  const goQuote = () => navigate({ to: "/insurance-request", search: S });
  const [slide, setSlide] = useState(0);
  const [tier, setTier] = useState(0);
  const [cat, setCat] = useState(0);
  const [offer, setOffer] = useState(0);
  const [aud, setAud] = useState(0);
  const [faq, setFaq] = useState(-1);
  const [allFaq, setAllFaq] = useState(false);
  const offersRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % 3), 5000);
    return () => clearInterval(id);
  }, []);
  const onOffersScroll = () => {
    const el = offersRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    setOffer(Math.round(Math.abs(el.scrollLeft) / (first.offsetWidth + 12)));
  };
  const scrollOffers = (i: number) => {
    const card = offersRef.current?.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setOffer(i);
  };
  return (
    <div className="bc-mobile">
    <div>
      <div>
        <main className="relative w-full flex items-center overflow-hidden h-[min(477px,calc(100svh-120px))] min-h-[430px] mb-400:min-h-[400px] mt-2">
          <div className="absolute inset-0 px-4 pointer-events-none">
            <img alt={T("Background")} className="w-full h-full pointer-events-none object-cover object-[left_bottom] rounded-[8px] overflow-hidden" src={L("newDesign-motorBannerMain-mob-ar.jpg")} style={{transform: "none"}} />
          </div>
          <div className="responsive-container relative z-10 desktop-sm:px-12 px-5 h-full flex flex-col justify-start pt-3">
            <div className="px-1">
              <div>
                <h1 className="text-start font-bold tracking-normal !text-[#146394] !mt-[5%] desktop-sm:!mt-[2.5%] text-[25px]/[37px] w-[76%] mb-400:w-[86%]">
                  {T("المنصة الأذكى لمقارنة عروض تأمين السيارات في السعودية")}
                </h1>
                <p className="!mt-[2.5%] !text-[#393636] desktop-sm:!mt-[1.5%] mb-400:w-[84%] text-[14px]/[17px] text-normal text-start tracking-normal w-[60%]">
                  {T("المنصة الأذكى لمقارنة عروض أكثر من 20 شركة تأمين. احصل على أرخص تأمين سيارات مع إصدار فوري وربط مباشر بنجم")}
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className="pt-[15px] responsive-container px-4 flex justify-center">
          <button type="button" onClick={goQuote} className="w-full bg-[#FAA62E] rounded-[5px] h-[60px] text-[18px] leading-[33px] text-white font-bold tracking-[0.5px]">
            {T("طلب العروض")}
          </button>
        </div>
      </div>
      <div className="responsive-container overflow-x-hidden max-w-screen desktop-sm:mt-20 px-4">
        <div className="w-full mt-[50px]">
          <div className="relative w-full rounded-[10px] overflow-hidden select-none cursor-grab active:cursor-grabbing">
            <div dir="ltr" className="flex flex-row flex-nowrap transition-transform duration-500 ease-out w-full" style={{transform: `translateX(${-slide * 100}%)`}}>
              <div className="w-full flex-shrink-0 cursor-pointer">
                <img draggable="false" className="w-full block h-[148px] object-fill rounded-[10px] select-none pointer-events-none" src={L("newDesign-supercare-mob-ar.jpg")} alt={T("Super Care")} />
              </div>
              <div className="w-full flex-shrink-0 cursor-pointer">
                <img draggable="false" className="w-full block h-[148px] object-fill rounded-[10px] select-none pointer-events-none" src={media["predict.jpg"]} alt={T("Predict & Win")} />
              </div>
              <div className="w-full flex-shrink-0">
                <img draggable="false" className="w-full block h-[148px] object-fill rounded-[10px] select-none pointer-events-none" src={bc["newDesign-roshnmob.jpg"]} alt={T("Roshn")} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 mt-3 mb-1 w-full">
{[0, 1, 2].map((i) => (<button key={i} type="button" onClick={() => setSlide(i)} className={`w-3 h-3 transition-all duration-300 rounded-full cursor-pointer p-0 border ${slide === i ? "bg-[#146394] border-[#0C5D86]" : "bg-white border-[#707070] hover:border-[#0C5D86]"}`} aria-label={`Slide ${i + 1}`} />))}


          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="my-6">
                <main className="flex flex-col items-center w-full mt-6">
                  <div>
                    <h1 className="text-center font-bold text-[28px] leading-[45px] tracking-normal !text-[#146394] !mt-8">
                      {T("التغطية المناسبة لتأمين")}
                      {" "}
                      <span className="!text-[#FAA62E] inline-block before:hidden">
                        {T("سيارتك")}
                      </span>
                    </h1>
                    <p className="text-center my-5 font-normal text-lg leading-5 tracking-normal text-[#146394]">
                      {T("قارن بين أبرز مزايا أنواع تأمين السيارات الثلاثة، واختر التغطية التي تناسب احتياجاتك وميزانيتك")}
                    </p>
                  </div>
                  <div className="bg-white bg-no-repeat bg-origin-padding border border-[#D2D2D2] rounded-[10px] p-4 opacity-100">
                    <div className="w-full mb-[20px] flex justify-center">
                      <img className="w-full h-[300px] object-cover rounded-[10px] border border-gray-200" src={bc["newDesign-car_table.jpg"]} alt={T("شامل")} />
                    </div>
                    <div className="w-full mb-[20px]">
                      <div className="flex gap-2 w-full">
{TIERS.map((t, i) => (<button key={t} type="button" onClick={() => setTier(i)} className={`flex-1 px-1 text-[14px] leading-[20px] tracking-[0.28px] opacity-100 rounded-[5px] transition-all duration-200 h-[30px] ${tier === i ? "bg-[#FAA62E] text-white" : "bg-[#F7F7F7] text-[#9E9E9E]"}`}>{T(t)}</button>))}
                      </div>
                    </div>
                    <div className="w-full mb-[20px]">
                      <div className="bg-[#E9F1F5] rounded-[10px] p-4 border border-gray-200 w-full">
                        <h3 className="font-bold text-[16px] leading-[22px] text-[#136494] mb-2">
                          {T("ما الذي يغطيه التأمين؟")}
                        </h3>
                        <p className="font-normal text-[13px] leading-[20px] text-[#000000] text-justify">
                          {T("التأمين الشامل من بي كير هو خيارك الأول والذكي لو تبحث عن أرخص تأمين شامل في السعودية يجمع بين السعر المنافس والحماية، لأنه يوفر حماية كاملة لسيارتك تضمن تصليحها أو استبدالها في حال وقوع حادث حتى لو كان الخطأ عليك 100%، بالإضافة لتغطية المسؤولية تجاه الغير (ضد الغير) اللي تسمح لك بتجديد الاستمارة فوراً مع الربط الآلي بنظام نجم وأبشر؛ وتتميز هذه الوثيقة بشمولية")}
                        </p>
                        <div className="text-end underline font-bold text-[12px] leading-[20px] tracking-normal text-[#136494] cursor-pointer mt-1">
                          {T("... اقرأ المزيد")}
                        </div>
                        <div className="flex justify-center gap-2 pb-[4px] mt-[20px]">
{TIERS.map((t, i) => (<button key={t} type="button" aria-label={T(t)} onClick={() => setTier(i)} className={`w-2 h-2 rounded-full transition-all duration-200 border ${tier === i ? "bg-[#0C5D86] border-[#0C5D86]" : "bg-white border-[#707070]"}`} />))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="bg-white border border-[#D2D2D2] rounded-[10px] divide-y overflow-hidden">
                        <div className="flex items-center justify-between p-3 bg-[#E9F1F5] font-bold text-[14px] leading-[20px] text-[#136494]">
                          <div className="ps-10">
                            {T("الميزة")}
                          </div>
                          <div className="text-center ps-10 w-[40%]">
                            {T(TIERS[tier] ?? "")}
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 min-h-[58px] w-[100%] gap-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="block w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <g>
                                  <rect y="0" width="30" height="30" rx="10" ry="10" fill="#fff" />
                                  <rect x=".5" y=".5" width="29" height="29" rx="9.5" ry="9.5" fill="none" stroke="#d2d2d2" />
                                </g>
                                <path d="M10,20v.83c0,.22-.08.44-.24.59-.16.16-.37.25-.59.24h-.83c-.22,0-.44-.08-.59-.24-.16-.16-.25-.37-.24-.59v-6.67l1.75-5c.08-.24.24-.45.45-.6.21-.15.46-.23.72-.23h9.17c.26,0,.51.08.72.23.21.15.37.36.45.6l1.75,5v6.67c0,.22-.08.44-.24.59-.16.16-.37.25-.59.24h-.83c-.22,0-.44-.08-.59-.24-.16-.16-.25-.37-.24-.59v-.83h-10ZM9.83,12.5h10.33l-.88-2.5h-8.58l-.88,2.5ZM9.17,14.17,11.25,17.5c.33,0,.65-.13.89-.36.24-.23.37-.55.36-.89,0-.33-.13-.65-.36-.89-.23-.24-.55-.37-.89-.36-.33,0-.65.13-.89.36-.24.23-.37.55-.36.89,0,.33.13.65.36.89.23.24.55.37.89.36h0ZM18.75,17.5c.33,0,.65-.13.88-.36.24-.23.37-.55.37-.89,0-.33-.13-.65-.37-.89-.23-.24-.55-.37-.88-.36-.33,0-.65.13-.88.36-.24.23-.37.55-.37.89,0,.33.13.65.37.89.23.24.55.37.89.36h0ZM9.17,18.33h11.67v-4.17h-11.67v4.17Z" fill="#707070" />
                              </svg>
                            </span>
                            <div className="min-w-0 w-[70%]">
                              <div className="font-bold text-[13px] leading-[16px] text-[#136494] text-wrap">
                                {T("المسؤولية تجاه الغير")}
                              </div>
                              <div className="font-normal text-[11px] leading-[14px] text-[#136494] text-wrap">
                                {T("الأضرار أو الإصابات التي تلحق بالآخرين")}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center justify-center w-[80px] pe-3">
<CoverMark on={!!COVER[tier]?.[0]} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 min-h-[58px] w-[100%] gap-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="block w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <g>
                                  <rect width="30" height="30" rx="10" ry="10" fill="#fff" />
                                  <rect x=".5" y=".5" width="29" height="29" rx="9.5" ry="9.5" fill="none" stroke="#d2d2d2" />
                                </g>
                                <path d="M11.67,10.33l-2.5-2.5,1.17-1.17,2.5,2.5-1.17,1.17ZM18.33,10.33l-1.17-1.17,2.5-2.5,1.17,1.17-2.5,2.5ZM14.17,9.17v-4.17h1.67v4.17h-1.67ZM8.33,25c-.22,0-.44-.08-.59-.24-.16-.16-.25-.37-.24-.59v-6.67l1.75-5c.08-.24.24-.45.45-.6.21-.15.46-.23.72-.23h9.17c.26,0,.51.08.72.23.21.15.37.36.45.6l1.75,5v6.67c0,.22-.08.44-.24.59-.16.16-.37.25-.59.24h-.83c-.22,0-.44-.08-.59-.24-.16-.16-.25-.37-.24-.59v-.83h-10v.83c0,.22-.08.44-.24.59-.16.16-.37.25-.59.24h-.83ZM9.83,15.83h10.33l-.88-2.5h-8.58l-.88,2.5ZM11.25,20.83c.33,0,.65-.13.89-.36.24-.23.37-.55.36-.89,0-.33-.13-.65-.36-.89-.23-.24-.55-.37-.89-.36-.33,0-.65.13-.89.36-.24.23-.37.55-.36.89,0,.33.13.65.36.89.23.24.55.37.89.36ZM18.75,20.83c.33,0,.65-.13.88-.36.24-.23.37-.55.37-.89,0-.33-.13-.65-.37-.89-.23-.24-.55-.37-.88-.36-.33,0-.65.13-.88.36-.24.23-.37.55-.37.89,0,.33.13.65.37.89.23.24.55.37.88.36ZM9.17,21.67h11.67v-4.17h-11.67v4.17ZM9.17,21.67" fill="#707070" />
                              </svg>
                            </span>
                            <div className="min-w-0 w-[70%]">
                              <div className="font-bold text-[13px] leading-[16px] text-[#136494] text-wrap">
                                {T("تغطية أضرار المركبة")}
                              </div>
                              <div className="font-normal text-[11px] leading-[14px] text-[#136494] text-wrap">
                                {T("تغطي تكاليف إصلاح مركبتك")}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center justify-center w-[80px] pe-3">
<CoverMark on={!!COVER[tier]?.[1]} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 min-h-[58px] w-[100%] gap-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="block w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <g>
                                  <rect width="30" height="30" rx="10" ry="10" fill="#fff" />
                                  <rect x=".5" y=".5" width="29" height="29" rx="9.5" ry="9.5" fill="none" stroke="#d2d2d2" />
                                </g>
                                <path d="M11.18,20.45c-.76,0-1.51-.14-2.22-.41-.71-.27-1.35-.68-1.9-1.2-.72-.67-1.26-1.5-1.58-2.42-.33-.93-.49-1.91-.49-2.9-.05-1.03.26-2.04.86-2.88.61-.75,1.55-1.16,2.52-1.1.2,0,.4.02.6.06.2.04.39.1.58.17l5.44,2.02,5.43-2.02c.19-.07.38-.13.58-.17.2-.04.4-.06.6-.06.97-.06,1.91.35,2.52,1.1.61.83.91,1.85.87,2.88,0,.99-.16,1.97-.49,2.9-.32.92-.86,1.75-1.58,2.42-.55.52-1.19.93-1.9,1.2-.71.27-1.46.41-2.22.41-.9.03-1.78-.21-2.55-.68l-1.04-.68h-.46l-1.04.68c-.76.47-1.65.71-2.54.68ZM11.18,18.64c.55,0,1.09-.14,1.57-.4.49-.27.94-.59,1.34-.97h1.82c.41.38.86.7,1.34.97.48.26,1.02.4,1.57.4.54,0,1.07-.09,1.58-.28.51-.19.97-.49,1.35-.88.51-.51.89-1.13,1.1-1.82.22-.69.33-1.41.33-2.14.02-.54-.11-1.08-.39-1.56-.26-.42-.74-.65-1.23-.6-.17.02-.34.05-.5.09l-6.07,2.27-6.07-2.27c-.08-.03-.16-.05-.24-.07-.09-.02-.17-.02-.26-.02-.49-.04-.96.2-1.23.61-.27.47-.41,1-.39,1.55,0,.73.11,1.46.33,2.16.22.69.6,1.32,1.12,1.82.38.37.84.66,1.34.85.5.19,1.03.29,1.57.28ZM12.3,17.27c.47.03.93-.1,1.32-.38.32-.25.49-.63.48-1.03-.1-.91-.65-1.71-1.47-2.12-.9-.65-1.99-1-3.1-1.01-.47-.03-.93.1-1.32.38-.32.25-.49.63-.48,1.03.1.91.65,1.71,1.47,2.12.9.65,1.99,1,3.1,1.01h0ZM12.16,15.91c-.66-.03-1.31-.22-1.88-.57-.53-.23-.95-.64-1.19-1.16.08-.03.17-.06.26-.08.1-.02.2-.03.31-.03.66.03,1.31.23,1.88.58.53.23.95.65,1.19,1.17-.08.03-.17.06-.26.07-.1.02-.2.02-.31.02h0ZM17.7,17.29c1.11,0,2.2-.37,3.1-1.02.81-.43,1.36-1.23,1.47-2.14.02-.4-.16-.79-.47-1.04-.38-.28-.86-.42-1.33-.39-1.11,0-2.2.37-3.1,1.02-.81.43-1.36,1.23-1.47,2.14-.02.4.16.79.48,1.04.38.28.85.41,1.32.39ZM17.84,15.91c-.1,0-.2,0-.3-.02-.09-.01-.17-.04-.25-.07.24-.52.67-.93,1.19-1.16.57-.35,1.21-.54,1.88-.57.1,0,.2,0,.3.02.09.01.17.04.25.07-.24.52-.67.93-1.19,1.16-.56.35-1.21.54-1.87.57h0Z" fill="#707070" />
                              </svg>
                            </span>
                            <div className="min-w-0 w-[70%]">
                              <div className="font-bold text-[13px] leading-[16px] text-[#136494] text-wrap">
                                {T("الحماية من السرقة")}
                              </div>
                              <div className="font-normal text-[11px] leading-[14px] text-[#136494] text-wrap">
                                {T("تغطي مركبتك في حال تعرضها للسرقة")}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center justify-center w-[80px] pe-3">
<CoverMark on={!!COVER[tier]?.[2]} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 min-h-[58px] w-[100%] gap-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="block w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <g>
                                  <rect width="30" height="30" rx="10" ry="10" fill="#fff" />
                                  <rect x=".5" y=".5" width="29" height="29" rx="9.5" ry="9.5" fill="none" stroke="#d2d2d2" />
                                </g>
                                <path d="M10.26,16.18c0,.67.14,1.33.41,1.94.28.61.68,1.16,1.18,1.61-.01-.06-.02-.12-.02-.18v-.18c0-.41.08-.81.24-1.18.16-.38.4-.72.69-1.01l2.23-2.19,2.23,2.19c.29.29.53.63.69,1.01.16.37.24.78.24,1.18v.18c0,.06,0,.12-.02.18.5-.45.91-1,1.18-1.61.28-.61.42-1.27.41-1.94,0-.64-.12-1.27-.37-1.86-.24-.59-.6-1.12-1.06-1.57-.26.17-.54.3-.83.39-.29.09-.59.13-.89.13-.78.01-1.54-.28-2.12-.81-.58-.51-.95-1.22-1.04-1.99-.49.41-.95.86-1.36,1.35-.38.44-.71.92-1,1.42-.26.46-.47.96-.61,1.47-.13.48-.2.98-.2,1.48ZM15,17.21l-1.12,1.1c-.14.14-.26.31-.34.49-.08.18-.12.38-.12.57,0,.41.16.81.46,1.09.29.3.7.46,1.12.45.42,0,.82-.16,1.12-.45.3-.28.47-.67.46-1.09,0-.2-.04-.4-.12-.58-.08-.18-.2-.34-.34-.48l-1.13-1.1ZM15,7.5v2.6c0,.42.16.83.46,1.12.3.3.71.46,1.13.45.23,0,.45-.05.66-.15.21-.11.4-.26.54-.44l.35-.43c.97.54,1.76,1.34,2.31,2.31.56.98.86,2.09.85,3.22.03,1.68-.63,3.3-1.84,4.48-1.18,1.2-2.8,1.87-4.48,1.84-1.68.03-3.3-.63-4.48-1.84-1.2-1.18-1.87-2.8-1.84-4.48.02-1.76.62-3.46,1.71-4.84,1.23-1.61,2.81-2.92,4.61-3.85Z" fill="#707070" />
                              </svg>
                            </span>
                            <div className="min-w-0 w-[70%]">
                              <div className="font-bold text-[13px] leading-[16px] text-[#136494] text-wrap">
                                {T("الحريق والانفجار")}
                              </div>
                              <div className="font-normal text-[11px] leading-[14px] text-[#136494] text-wrap">
                                {T("تغطي الأضرار الناتجة عن الحريق أو الانفجار")}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center justify-center w-[80px] pe-3">
<CoverMark on={!!COVER[tier]?.[3]} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 min-h-[58px] w-[100%] gap-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="block w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <g>
                                  <rect width="30" height="30" rx="10" ry="10" fill="#fff" />
                                  <rect x=".5" y=".5" width="29" height="29" rx="9.5" ry="9.5" fill="none" stroke="#d2d2d2" />
                                </g>
                                <path d="M7.5,22.5v-1.5c.39.03.78-.11,1.06-.38.42-.31.94-.44,1.45-.38.51-.07,1.03.07,1.44.38.28.27.66.41,1.05.38.39.03.77-.1,1.05-.38.41-.31.93-.44,1.44-.38.51-.06,1.03.08,1.45.38.29.26.67.4,1.06.38.39.03.77-.1,1.05-.38.41-.31.93-.44,1.44-.38.51-.07,1.03.07,1.44.38.28.27.66.41,1.05.38v1.5c-.51.06-1.03-.07-1.44-.38-.28-.27-.66-.4-1.05-.38-.39-.03-.77.11-1.05.38-.42.3-.93.44-1.44.38-.51.06-1.03-.07-1.45-.38-.29-.27-.67-.4-1.06-.38-.39-.03-.77.1-1.05.38-.41.31-.93.44-1.44.38-.51.07-1.03-.07-1.44-.38-.28-.27-.66-.41-1.05-.38-.39-.03-.77.11-1.05.38-.42.31-.94.44-1.46.38ZM12.51,19.12c-.51.06-1.03-.07-1.44-.38-.28-.26-.66-.4-1.05-.38-.39-.02-.76.12-1.05.38-.43.3-.95.43-1.46.38v-1.5c.39.03.77-.1,1.05-.38.41-.31.93-.44,1.44-.38.07,0,.15,0,.22,0,.07,0,.14.01.21.03l-.71-2.62-1.03,1.35-1.18-.94,5.83-7.2,8.64,3.3-.54,1.41-1.57-.64,1.52,5.64c.18.1.35.19.52.28.19.09.4.14.61.13v1.5c-.51.05-1.02-.09-1.44-.38-.29-.26-.67-.39-1.05-.37-.39-.03-.77.1-1.05.38-.41.31-.93.44-1.44.38-.51.06-1.03-.08-1.45-.38-.29-.26-.67-.4-1.06-.38-.39-.03-.77.1-1.05.38-.41.31-.93.44-1.44.38ZM12.51,17.62c.31.02.62-.07.87-.26.28-.21.6-.35.95-.41l-.69-2.55,2.91-.77,1.05,3.97c.34,0,.66-.13.92-.35.36-.25.78-.38,1.22-.37l-1.61-6.02-4.29-1.57-2.94,3.53,1.29,4.76c.05.01.11.02.16.03.06,0,.12,0,.18,0Z" fill="#707070" />
                              </svg>
                            </span>
                            <div className="min-w-0 w-[70%]">
                              <div className="font-bold text-[13px] leading-[16px] text-[#136494] text-wrap">
                                {T("الكوارث الطبيعية")}
                              </div>
                              <div className="font-normal text-[11px] leading-[14px] text-[#136494] text-wrap">
                                {T("تغطي الفيضانات والعواصف والزلازل وغيرها")}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center justify-center w-[80px] pe-3">
<CoverMark on={!!COVER[tier]?.[4]} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 min-h-[58px] w-[100%] gap-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="block w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <g>
                                  <rect width="30" height="30" rx="10" ry="10" fill="#fff" />
                                  <rect x=".5" y=".5" width="29" height="29" rx="9.5" ry="9.5" fill="none" stroke="#d2d2d2" />
                                </g>
                                <path d="M13.13,14.99c-.5-.49-.77-1.17-.76-1.87-.02-.7.26-1.38.76-1.87.49-.5,1.17-.77,1.87-.76.7-.02,1.38.26,1.87.76.5.49.77,1.17.76,1.87.02.7-.26,1.38-.76,1.87-.49.5-1.17.77-1.87.76-.7.02-1.38-.26-1.87-.76ZM15.81,13.93c.21-.21.33-.5.32-.81,0-.3-.11-.59-.32-.81-.21-.21-.5-.33-.81-.32-.3,0-.59.11-.81.32-.21.21-.33.5-.32.81,0,.3.11.59.32.81.21.21.5.33.81.32.3,0,.59-.11.81-.32h0ZM15,22.5c-1.75-.45-3.27-1.51-4.3-2.99-1.11-1.5-1.71-3.32-1.7-5.18v-4.58l6-2.25,6,2.25v4.58c.01,1.87-.59,3.69-1.7,5.18-1.03,1.48-2.55,2.55-4.3,2.99ZM15,9.09l-4.5,1.69v3.54c0,.67.09,1.33.28,1.97.18.63.44,1.23.77,1.8.53-.26,1.08-.47,1.65-.62.59-.15,1.19-.23,1.8-.22.61,0,1.21.07,1.8.22.57.15,1.12.36,1.65.62.33-.57.59-1.17.77-1.8.19-.64.28-1.3.28-1.97v-3.54l-4.5-1.69ZM13.69,18.9c-.42.1-.83.24-1.22.41.36.37.75.7,1.18.97.42.27.87.49,1.35.64.48-.15.93-.37,1.35-.64.43-.28.83-.61,1.18-.97-.39-.18-.8-.31-1.22-.41-.43-.1-.87-.15-1.31-.15-.44,0-.88.05-1.31.15Z" fill="#707070" />
                              </svg>
                            </span>
                            <div className="min-w-0 w-[70%]">
                              <div className="font-bold text-[13px] leading-[16px] text-[#136494] text-wrap">
                                {T("تغطية الحوادث الشخصية")}
                              </div>
                              <div className="font-normal text-[11px] leading-[14px] text-[#136494] text-wrap">
                                {T("تغطي السائق والركاب")}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center justify-center w-[80px] pe-3">
<CoverMark on={!!COVER[tier]?.[5]} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 min-h-[58px] w-[100%] gap-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="block w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <g>
                                  <rect width="30" height="30" rx="10" ry="10" fill="#fff" />
                                  <rect x=".5" y=".5" width="29" height="29" rx="9.5" ry="9.5" fill="none" stroke="#d2d2d2" />
                                </g>
                                <path d="M12.77,15.27c-.28-.37-.53-.75-.76-1.16-.05.14-.08.29-.1.45-.02.15-.02.3-.02.45-.01.83.31,1.62.91,2.2.58.59,1.37.92,2.2.91.15,0,.3-.01.45-.03.15-.02.3-.05.45-.09-.4-.23-.79-.48-1.16-.76-.37-.28-.72-.59-1.05-.91-.33-.33-.63-.67-.91-1.04ZM16.36,16.8c.66.38,1.37.68,2.11.88-.41.53-.93.95-1.53,1.24-.6.3-1.26.45-1.92.45-1.16.02-2.29-.44-3.1-1.27-.83-.81-1.29-1.94-1.27-3.1,0-.67.15-1.32.44-1.92.29-.6.72-1.12,1.24-1.53.2.74.5,1.45.88,2.11.38.65.84,1.25,1.37,1.78.53.53,1.13.99,1.78,1.37ZM19.11,16.56c-.21-.05-.41-.11-.62-.17s-.4-.14-.6-.22c.08-.18.14-.37.18-.57.04-.2.06-.4.06-.6.01-.83-.32-1.63-.91-2.21-.58-.6-1.38-.93-2.21-.91-.2,0-.4.02-.6.05-.2.04-.39.1-.57.18-.08-.19-.15-.39-.21-.59-.06-.2-.11-.4-.16-.61.25-.09.5-.16.77-.21.26-.05.53-.07.8-.07,1.16-.02,2.29.44,3.1,1.27.83.81,1.29,1.94,1.27,3.1,0,.27-.02.54-.07.8-.05.26-.12.52-.22.77h0ZM14.38,9.37v-1.87h1.25v1.88h-1.25ZM14.38,22.5v-1.88h1.25v1.88h-1.25ZM19.42,11.46l-.89-.89,1.33-1.31.89.88-1.33,1.33ZM10.14,20.73l-.89-.88,1.33-1.33.89.89-1.33,1.31ZM20.62,15.62v-1.25h1.88v1.25h-1.88ZM7.5,15.62v-1.25h1.88v1.25h-1.88ZM19.86,20.75l-1.33-1.33.89-.89,1.31,1.33-.88.89ZM10.58,11.47l-1.31-1.33.88-.89,1.33,1.33-.89.89Z" fill="#707070" />
                              </svg>
                            </span>
                            <div className="min-w-0 w-[70%]">
                              <div className="font-bold text-[13px] leading-[16px] text-[#136494] text-wrap">
                                {T("المساعدة على الطريق على مدار الساعة")}
                              </div>
                              <div className="font-normal text-[11px] leading-[14px] text-[#136494] text-wrap">
                                {T("تشمل السحب والإطارات المتضررة وتوصيل الوقود وغيرها")}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center justify-center w-[80px] pe-3">
<CoverMark on={!!COVER[tier]?.[6]} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 min-h-[58px] w-[100%] gap-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="block w-[30px] h-[30px] [&>svg]:w-full [&>svg]:h-full flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <g>
                                  <rect x="0" width="30" height="30" rx="10" ry="10" fill="#fff" />
                                  <rect x=".5" y=".5" width="29" height="29" rx="9.5" ry="9.5" fill="none" stroke="#d2d2d2" />
                                </g>
                                <path d="M15,22.5c-1.74-.45-3.26-1.51-4.28-3-1.11-1.5-1.72-3.31-1.72-5.18v-4.57l6-2.25,6,2.25v4.57c0,1.86-.61,3.68-1.73,5.18-1.01,1.49-2.53,2.55-4.27,3ZM15,20.93c1.31-.46,2.44-1.33,3.23-2.47.83-1.21,1.28-2.65,1.27-4.13v-3.52l-4.5-1.73-4.5,1.73v3.52c0,1.47.44,2.91,1.28,4.12.76,1.17,1.9,2.04,3.22,2.48Z" fill="#707070" />
                              </svg>
                            </span>
                            <div className="min-w-0 w-[70%]">
                              <div className="font-bold text-[13px] leading-[16px] text-[#136494] text-wrap">
                                {T("خيارات التغطية الإضافية")}
                              </div>
                              <div className="font-normal text-[11px] leading-[14px] text-[#136494] text-wrap">
                                {T("تشمل حماية المحرك وتعويض قيمة الفاتورة وغيرها")}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center justify-center w-[80px] pe-3">
<CoverMark on={!!COVER[tier]?.[7]} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
                <div className="mt-[50px]">
                  <div>
                    <div className="text-center mb-6">
                      <h2 className="font-bold tracking-normal text-[#146394] text-[28px] leading-[45px]">
                        {T("عروض")}
                        {" "}
                        <span className="text-[#FAA62E]">
                          {T("و")}
                        </span>
                        {" "}
                        {T("خصومات حصرية")}
                      </h2>
                      <p className="font-normal text-base leading-5 tracking-normal text-[#146394]">
                        {T("خصومات وعروض من مجموعة متنوعة من المتاجر المحلية والعالمية لعملاء بي كير")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="w-full bg-[#EBF3FA] p-1.5 rounded-[10px] overflow-hidden relative border-gray-200 header-carousel no-scrollbar" style={{maxWidth: "848px"}}>
                      <div className="flex gap-2 text-xs font-semibold py-1 items-center overflow-x-auto w-full no-scrollbar" style={{scrollbarWidth: "none"}}>
                        <div>
                          <div role="button" tabIndex={0} onClick={() => setCat(0)} className={`shrink-0 flex-none w-max h-[50px] px-5 py-2.5 rounded-full flex items-center gap-2 ${cat === 0 ? "bg-[#146394] text-white" : "bg-white text-[#146394]"} whitespace-nowrap cursor-pointer transition-all duration-200 select-none`}>
                            <img className="selected-icon-color w-[30px] h-[30px] shrink-0" src={bc["newDesign-homepage-Car-a-Services.svg"]} />
                            <span className={`tracking-normal opacity-100 whitespace-nowrap text-[15px] leading-[20px] ${cat === 0 ? "font-bold text-white" : "font-normal text-[#146394]"}`}>
                              {T("خدمات السيارات")}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div role="button" tabIndex={0} onClick={() => setCat(1)} className={`shrink-0 flex-none w-max h-[50px] px-5 py-2.5 rounded-full flex items-center gap-2 ${cat === 1 ? "bg-[#146394] text-white" : "bg-white text-[#146394]"} whitespace-nowrap cursor-pointer transition-all duration-200 select-none`}>
                            <img src={bc["newDesign-homepage-Health-a-Beauty.svg"]} className="w-[30px] h-[30px] shrink-0" />
                            <span className={`tracking-normal opacity-100 whitespace-nowrap text-[15px] leading-[20px] ${cat === 1 ? "font-bold text-white" : "font-normal text-[#146394]"}`}>
                              {T("الصحة والجمال")}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div role="button" tabIndex={0} onClick={() => setCat(2)} className={`shrink-0 flex-none w-max h-[50px] px-5 py-2.5 rounded-full flex items-center gap-2 ${cat === 2 ? "bg-[#146394] text-white" : "bg-white text-[#146394]"} whitespace-nowrap cursor-pointer transition-all duration-200 select-none`}>
                            <img src={bc["newDesign-homepage-Shopping.svg"]} className="w-[30px] h-[30px] shrink-0" />
                            <span className={`tracking-normal opacity-100 whitespace-nowrap text-[15px] leading-[20px] ${cat === 2 ? "font-bold text-white" : "font-normal text-[#146394]"}`}>
                              {T("التسوق")}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div role="button" tabIndex={0} onClick={() => setCat(3)} className={`shrink-0 flex-none w-max h-[50px] px-5 py-2.5 rounded-full flex items-center gap-2 ${cat === 3 ? "bg-[#146394] text-white" : "bg-white text-[#146394]"} whitespace-nowrap cursor-pointer transition-all duration-200 select-none`}>
                            <img src={bc["newDesign-homepage-Hotels-a-travel.svg"]} className="w-[30px] h-[30px] shrink-0" />
                            <span className={`tracking-normal opacity-100 whitespace-nowrap text-[15px] leading-[20px] ${cat === 3 ? "font-bold text-white" : "font-normal text-[#146394]"}`}>
                              {T("الفنادق والسفر")}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div role="button" tabIndex={0} onClick={() => setCat(4)} className={`shrink-0 flex-none w-max h-[50px] px-5 py-2.5 rounded-full flex items-center gap-2 ${cat === 4 ? "bg-[#146394] text-white" : "bg-white text-[#146394]"} whitespace-nowrap cursor-pointer transition-all duration-200 select-none`}>
                            <img src={bc["newDesign-homepage-Restaurants-a-cafes.svg"]} className="w-[30px] h-[30px] shrink-0" />
                            <span className={`tracking-normal opacity-100 whitespace-nowrap text-[15px] leading-[20px] ${cat === 4 ? "font-bold text-white" : "font-normal text-[#146394]"}`}>
                              {T("المطاعم والمقاهي")}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-[50px] z-10" style={{transform: "matrix(0, 1, -1, 0, 0, 0)", background: "transparent linear-gradient(180deg, #EBF2FA 0%, #EBF2FA00 100%) 0% 0% no-repeat padding-box"}} />
                    </div>
                    <div className="w-full relative flex flex-col items-center" style={{maxWidth: "848px"}}>
                      <div ref={offersRef} onScroll={onOffersScroll} className="w-full flex flex-row overflow-x-auto gap-3 snap-x snap-mandatory scroll-smooth no-scrollbar py-2 px-1 mb-4" style={{scrollbarWidth: "none"}}>
                        <div className="snap-center shrink-0">
                          <div className="w-[375px] max-w-full h-[235px] border-[#D2D2D2] bg-white border rounded-[10px] border-solid flex flex-col justify-between transition-all duration-300 relative overflow-hidden p-3">
                            <div className="w-full max-w-[310px] mx-auto flex-1 flex items-center justify-center relative z-10">
                              <div className="relative z-10 w-[90px] h-[90px] bg-white border-[1px] border-solid border-[#D2D2D2] rounded-[10px] shadow-[0_0_6px_#0000001A] p-3 flex items-center justify-center shrink-0">
                                <img className="w-full h-full rounded-[10px] object-contain" src={bc["wareef_images-85.png"]} alt={T("سبيرو")} />
                              </div>
                              <div className="relative z-10 flex-1 min-w-0 ps-3 flex flex-col justify-center text-start">
                                <h4 className="font-bold leading-[22px] pb-[10px] pt-[20px] tracking-normal text-[#146394] truncate text-[24px]">
                                  {T("10% خصم")}
                                </h4>
                                <p className="font-normal text-[19px] leading-[31px] text-[#146394]">
                                  {T("سبيرو")}
                                </p>
                              </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 transform-[matrix(0,-1,1,0,0,0)] bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] opacity-100 z-0" />
                          </div>
                        </div>
                        <div className="snap-center shrink-0">
                          <div className="w-[375px] max-w-full h-[235px] border-[#D2D2D2] bg-white border rounded-[10px] border-solid flex flex-col justify-between transition-all duration-300 relative overflow-hidden p-3">
                            <div className="w-full max-w-[310px] mx-auto flex-1 flex items-center justify-center relative z-10">
                              <div className="relative z-10 w-[90px] h-[90px] bg-white border-[1px] border-solid border-[#D2D2D2] rounded-[10px] shadow-[0_0_6px_#0000001A] p-3 flex items-center justify-center shrink-0">
                                <img className="w-full h-full rounded-[10px] object-contain" src={bc["wareef_images-116.png"]} alt={T("كلارو")} />
                              </div>
                              <div className="relative z-10 flex-1 min-w-0 ps-3 flex flex-col justify-center text-start">
                                <h4 className="font-bold leading-[22px] pb-[10px] pt-[20px] tracking-normal text-[#146394] truncate text-[24px]">
                                  {T("15% خصم")}
                                </h4>
                                <p className="font-normal text-[19px] leading-[31px] text-[#146394]">
                                  {T("كلارو")}
                                </p>
                              </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 transform-[matrix(0,-1,1,0,0,0)] bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] opacity-100 z-0" />
                          </div>
                        </div>
                        <div className="snap-center shrink-0">
                          <div className="w-[375px] max-w-full h-[235px] border-[#D2D2D2] bg-white border rounded-[10px] border-solid flex flex-col justify-between transition-all duration-300 relative overflow-hidden p-3">
                            <div className="w-full max-w-[310px] mx-auto flex-1 flex items-center justify-center relative z-10">
                              <div className="relative z-10 w-[90px] h-[90px] bg-white border-[1px] border-solid border-[#D2D2D2] rounded-[10px] shadow-[0_0_6px_#0000001A] p-3 flex items-center justify-center shrink-0">
                                <img className="w-full h-full rounded-[10px] object-contain" src={bc["wareef_images-124.png"]} alt={T("اطلبها")} />
                              </div>
                              <div className="relative z-10 flex-1 min-w-0 ps-3 flex flex-col justify-center text-start">
                                <h4 className="font-bold leading-[22px] pb-[10px] pt-[20px] tracking-normal text-[#146394] truncate text-[24px]">
                                  {T("5% خصم")}
                                </h4>
                                <p className="font-normal text-[19px] leading-[31px] text-[#146394]">
                                  {T("اطلبها")}
                                </p>
                              </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 transform-[matrix(0,-1,1,0,0,0)] bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] opacity-100 z-0" />
                          </div>
                        </div>
                        <div className="snap-center shrink-0">
                          <div className="w-[375px] max-w-full h-[235px] border-[#D2D2D2] bg-white border rounded-[10px] border-solid flex flex-col justify-between transition-all duration-300 relative overflow-hidden p-3">
                            <div className="w-full max-w-[310px] mx-auto flex-1 flex items-center justify-center relative z-10">
                              <div className="relative z-10 w-[90px] h-[90px] bg-white border-[1px] border-solid border-[#D2D2D2] rounded-[10px] shadow-[0_0_6px_#0000001A] p-3 flex items-center justify-center shrink-0">
                                <span className="text-[#146394] font-bold text-[13px] leading-4 text-center">{T("منار العصرية لصيانة السيارات")}</span>
                              </div>
                              <div className="relative z-10 flex-1 min-w-0 ps-3 flex flex-col justify-center text-start">
                                <h4 className="font-bold leading-[22px] pb-[10px] pt-[20px] tracking-normal text-[#146394] truncate text-[24px]">
                                  {T("25% خصم")}
                                </h4>
                                <p className="font-normal text-[19px] leading-[31px] text-[#146394]">
                                  {T("منار العصرية لصيانة السيارات")}
                                </p>
                              </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 transform-[matrix(0,-1,1,0,0,0)] bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] opacity-100 z-0" />
                          </div>
                        </div>
                        <div className="snap-center shrink-0">
                          <div className="w-[375px] max-w-full h-[235px] border-[#D2D2D2] bg-white border rounded-[10px] border-solid flex flex-col justify-between transition-all duration-300 relative overflow-hidden p-3">
                            <div className="w-full max-w-[310px] mx-auto flex-1 flex items-center justify-center relative z-10">
                              <div className="relative z-10 w-[90px] h-[90px] bg-white border-[1px] border-solid border-[#D2D2D2] rounded-[10px] shadow-[0_0_6px_#0000001A] p-3 flex items-center justify-center shrink-0">
                                <span className="text-[#146394] font-bold text-[13px] leading-4 text-center">{T("أخطبوط للعناية بالسيارة")}</span>
                              </div>
                              <div className="relative z-10 flex-1 min-w-0 ps-3 flex flex-col justify-center text-start">
                                <h4 className="font-bold leading-[22px] pb-[10px] pt-[20px] tracking-normal text-[#146394] truncate text-[24px]">
                                  {T("25% خصم")}
                                </h4>
                                <p className="font-normal text-[19px] leading-[31px] text-[#146394]">
                                  {T("أخطبوط للعناية بالسيارة")}
                                </p>
                              </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 transform-[matrix(0,-1,1,0,0,0)] bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] opacity-100 z-0" />
                          </div>
                        </div>
                        <div className="snap-center shrink-0">
                          <div className="w-[375px] max-w-full h-[235px] border-[#D2D2D2] bg-white border rounded-[10px] border-solid flex flex-col justify-between transition-all duration-300 relative overflow-hidden p-3">
                            <div className="w-full max-w-[310px] mx-auto flex-1 flex items-center justify-center relative z-10">
                              <div className="relative z-10 w-[90px] h-[90px] bg-white border-[1px] border-solid border-[#D2D2D2] rounded-[10px] shadow-[0_0_6px_#0000001A] p-3 flex items-center justify-center shrink-0">
                                <span className="text-[#146394] font-bold text-[13px] leading-4 text-center">{T("جيني")}</span>
                              </div>
                              <div className="relative z-10 flex-1 min-w-0 ps-3 flex flex-col justify-center text-start">
                                <h4 className="font-bold leading-[22px] pb-[10px] pt-[20px] tracking-normal text-[#146394] truncate text-[24px]">
                                  {T("40% خصم")}
                                </h4>
                                <p className="font-normal text-[19px] leading-[31px] text-[#146394]">
                                  {T("جيني")}
                                </p>
                              </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 transform-[matrix(0,-1,1,0,0,0)] bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] opacity-100 z-0" />
                          </div>
                        </div>
                        <div className="snap-center shrink-0">
                          <div className="w-[375px] max-w-full h-[235px] border-[#D2D2D2] bg-white border rounded-[10px] border-solid flex flex-col justify-between transition-all duration-300 relative overflow-hidden p-3">
                            <div className="w-full max-w-[310px] mx-auto flex-1 flex items-center justify-center relative z-10">
                              <div className="relative z-10 w-[90px] h-[90px] bg-white border-[1px] border-solid border-[#D2D2D2] rounded-[10px] shadow-[0_0_6px_#0000001A] p-3 flex items-center justify-center shrink-0">
                                <span className="text-[#146394] font-bold text-[13px] leading-4 text-center">{T("مسمار")}</span>
                              </div>
                              <div className="relative z-10 flex-1 min-w-0 ps-3 flex flex-col justify-center text-start">
                                <h4 className="font-bold leading-[22px] pb-[10px] pt-[20px] tracking-normal text-[#146394] truncate text-[24px]">
                                  {T("75% على رسوم خدمة (الاعطال والصيانة الخفيفة ) خصم")}
                                </h4>
                                <p className="font-normal text-[19px] leading-[31px] text-[#146394]">
                                  {T("مسمار")}
                                </p>
                              </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 transform-[matrix(0,-1,1,0,0,0)] bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] opacity-100 z-0" />
                          </div>
                        </div>
                        <div className="snap-center shrink-0">
                          <div className="w-[375px] max-w-full h-[235px] border-[#D2D2D2] bg-white border rounded-[10px] border-solid flex flex-col justify-between transition-all duration-300 relative overflow-hidden p-3">
                            <div className="w-full max-w-[310px] mx-auto flex-1 flex items-center justify-center relative z-10">
                              <div className="relative z-10 w-[90px] h-[90px] bg-white border-[1px] border-solid border-[#D2D2D2] rounded-[10px] shadow-[0_0_6px_#0000001A] p-3 flex items-center justify-center shrink-0">
                                <span className="text-[#146394] font-bold text-[13px] leading-4 text-center">{T("غسّل")}</span>
                              </div>
                              <div className="relative z-10 flex-1 min-w-0 ps-3 flex flex-col justify-center text-start">
                                <h4 className="font-bold leading-[22px] pb-[10px] pt-[20px] tracking-normal text-[#146394] truncate text-[24px]">
                                  {T("25% خصم")}
                                </h4>
                                <p className="font-normal text-[19px] leading-[31px] text-[#146394]">
                                  {T("غسّل")}
                                </p>
                              </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 transform-[matrix(0,-1,1,0,0,0)] bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] opacity-100 z-0" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center w-full gap-1 mt-2">
                        <div className="text-center text-[#9E9E9E] text-[13px] font-normal">
                          {offer + 1}/8
                        </div>
                        <div className="flex items-center justify-center">
                          <div>
                            <div className="flex justify-center gap-2">
                              {[0, 1].map((i) => (<span key={i} role="button" tabIndex={0} onClick={() => scrollOffers(i === 0 ? 0 : 7)} className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${(i === 0 ? offer < 4 : offer >= 4) ? "bg-[#0C5D86]" : "bg-white border-2 border-gray-300"}`} />))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2 mb-[25px]">
                      <button type="button" onClick={() => scrollOffers(Math.min(offer + 1, 7))} className="w-[305px] h-[40px] bg-[#146394] border border-[#146394] rounded-[20px] text-center font-bold text-[18px] leading-[20px] tracking-normal text-white">
                        {T("عرض المزيد من العروض")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative pointer-events-none">
        <img alt={T("Riyadh City")} src={bc["newDesign-homepage-Rcity.svg"]} className="w-full h-full" />
      </div>
      <div>
        <div className="w-full bg-[#EBF2FA]">
          <div className="w-full px-4 mx-auto">
            <h1 className="relative text-center pt-10 text-[28px] leading-[45px] font-bold tracking-normal text-[#136494] opacity-100">
              {T("رحلة")}
              {" "}
              <span className="text-[#FAA62E]">
                {T("آمنة")}
              </span>
              {" "}
              {T("مع بي كير")}
            </h1>
            <p className="mt-2 mx-auto text-center text-[15px] font-normal leading-[20px] tracking-normal text-[#146394] opacity-100">
              {T("إجابات واضحة ومتخصصة عن أسئلتك حول تأمين المركبات لمساعدتك على فهم وثيقتك والتغطيات والمطالبات والمزيد.")}
            </p>
            <div className="flex items-center justify-center w-full pt-[20px] pb-[50px]">
              <div className="grid mobile-grid relative grid-row-2 gap-2 justify-between w-full">
                <div className="item flex flex-col items-center mobile-item bg-white bg-no-repeat shadow-[0px_11px_30px_#2D688B29] rounded-[5px] opacity-100">
                  <img className="h-[35px] w-[35px] mtm mb-[4px]" src={bc["newDesign-motor-withbcare-icon1.svg"]} alt={T("Various Options")} />
                  <div className="flex flex-col">
                    <h3 className="text-center font-bold text-[12px] text-[#136494]">
                      {T("خيارات متنوعة")}
                    </h3>
                  </div>
                </div>
                <div className="item flex flex-col items-center mobile-item bg-white bg-no-repeat shadow-[0px_11px_30px_#2D688B29] rounded-[5px] opacity-100">
                  <img className="h-[35px] w-[35px] mtm mb-[4px]" src={bc["newDesign-motor-withbcare-icon2.svg"]} alt={T("Customize your insurance")} />
                  <div className="flex flex-col">
                    <h3 className="text-center font-bold text-[12px] text-[#136494]">
                      {T("خصص تأمينك")}
                    </h3>
                  </div>
                </div>
                <div className="item flex flex-col items-center mobile-item bg-white bg-no-repeat shadow-[0px_11px_30px_#2D688B29] rounded-[5px] opacity-100">
                  <img className="h-[35px] w-[35px] mtm mb-[4px]" src={bc["newDesign-motor-withbcare-icon3.svg"]} alt={T("Lower prices")} />
                  <div className="flex flex-col">
                    <h3 className="text-center font-bold text-[12px] text-[#136494]">
                      {T("أسعار أقل")}
                    </h3>
                  </div>
                </div>
                <div className="item flex flex-col items-center mobile-item bg-white bg-no-repeat shadow-[0px_11px_30px_#2D688B29] rounded-[5px] opacity-100">
                  <img className="h-[35px] w-[35px] mtm mb-[4px]" src={bc["newDesign-motor-withbcare-icon4.svg"]} alt={T("Schedule your insurance")} />
                  <div className="flex flex-col">
                    <h3 className="text-center font-bold text-[12px] text-[#136494]">
                      {T("حدد موعد تأمينك")}
                    </h3>
                  </div>
                </div>
                <div className="item flex flex-col items-center mobile-item bg-white bg-no-repeat shadow-[0px_11px_30px_#2D688B29] rounded-[5px] opacity-100">
                  <img className="h-[35px] w-[35px] mtm mb-[4px]" src={bc["newDesign-motor-withbcare-icon5.svg"]} alt={T("Fast integration")} />
                  <div className="flex flex-col">
                    <h3 className="text-center font-bold text-[12px] text-[#136494]">
                      {T("ربط سريع")}
                    </h3>
                  </div>
                </div>
                <div className="item flex flex-col items-center mobile-item bg-white bg-no-repeat shadow-[0px_11px_30px_#2D688B29] rounded-[5px] opacity-100">
                  <img className="h-[35px] w-[35px] mtm mb-[4px]" src={bc["newDesign-motor-withbcare-icon6.svg"]} alt={T("Promotion programs")} />
                  <div className="flex flex-col">
                    <h3 className="text-center font-bold text-[12px] text-[#136494]">
                      {T("خصومات خاصة")}
                    </h3>
                  </div>
                </div>
                <div className="item flex flex-col items-center mobile-item bg-white bg-no-repeat shadow-[0px_11px_30px_#2D688B29] rounded-[5px] opacity-100">
                  <img className="h-[35px] w-[35px] mtm mb-[4px]" src={bc["newDesign-motor-withbcare-icon7.svg"]} alt={T("Benefits protect you")} />
                  <div className="flex flex-col">
                    <h3 className="text-center font-bold text-[12px] text-[#136494]">
                      {T("مزايا تحميك")}
                    </h3>
                  </div>
                </div>
                <div className="item flex flex-col items-center mobile-item bg-white bg-no-repeat shadow-[0px_11px_30px_#2D688B29] rounded-[5px] opacity-100">
                  <img className="h-[35px] w-[35px] mtm mb-[4px]" src={bc["newDesign-motor-withbcare-icon8.svg"]} alt={T("One place")} />
                  <div className="flex flex-col">
                    <h3 className="text-center font-bold text-[12px] text-[#136494]">
                      {T("كل شيء في مكان واحد")}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="bg-white relative mb-[6%] w-full border-none">
          <div className="mx-auto px-4">
            <div className="text-center mb-[4px]">
              <h2 className="font-bold tracking-normal text-[#146394] opacity-100 text-[28px] leading-[45px]">
                {T("دليل تأمين السيارات ونصائح التأمين الإلكتروني")}
              </h2>
              <p className="mt-2 mx-auto text-center text-[15px] desktop-sm:text-xs font-normal leading-[20px] tracking-normal text-[#146394] opacity-100 mb-[20px]">
                {T("اكتشف أحدث مقالات بي كير حول تأمين السيارات، وتجديد الوثائق، ونقل الملكية، وخصم عدم وجود مطالبات، وخدمات الدعم في السعودية.")}
              </p>
              <div className="border text-start border-gray-200 rounded-xl">
                <div className="p-[12px] desktop-sm:p-2.5 gap-3 desktop-sm:gap-2 flex flex-col bg-[#E9F1F5] bg-no-repeat border border-[#D2D2D2] rounded-[10px] opacity-100 p-[10px]">
                  <div className="flex flex-col gap-3 desktop-sm:gap-2 w-2/3 sm:w-full">
                    <div className="ReadMoreClick group p-2">
                      <div className="flex items-center gap-3 desktop-sm:gap-2">
                        <img className="object-cover rounded-lg flex-shrink-0 w-[83px] h-[65px]" src={bc["newDesign-blogs1.jpg"]} alt={T("How to Buy Car Insurance Online")} />
                        <h4 className="font-bold leading-snug text-[#146394] opacity-100 text-[13px] leading-[27px]">
                          {T("طريقة تأمين المركبة أونلاين | بي كير لوساطة التأمين")}
                        </h4>
                      </div>
                      <div className="rounded-full flex-shrink-0 group-hover:bg-gray-50 mb-1 text-[#146394] border-1 border-[#146394] p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="5.0" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 19.5-7.5-7.5 7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="ReadMoreClick group p-3 desktop-sm:p-2">
                      <div className="flex items-center gap-3 desktop-sm:gap-2">
                        <img className="object-cover rounded-lg flex-shrink-0 w-[83px] h-[65px]" src={bc["newDesign-blogs2.jpg"]} alt={T("Technical Support Ticket")} />
                        <h4 className="font-bold leading-snug text-[#146394] opacity-100 text-[13px] leading-[27px]">
                          {T("طريقة رفع تذكرة للدعم الفني | لملاحظاتكم في منصة بي كير")}
                        </h4>
                      </div>
                      <div className="rounded-full flex-shrink-0 group-hover:bg-gray-50 mb-1 text-[#146394] border-1 border-[#146394] p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="5.0" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 19.5-7.5-7.5 7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="ReadMoreClick group p-3 desktop-sm:p-2">
                      <div className="flex items-center gap-3 desktop-sm:gap-2">
                        <img className="object-cover rounded-lg flex-shrink-0 w-[83px] h-[65px]" src={bc["newDesign-blogs3.jpg"]} alt={T("Technical Support Ticket")} />
                        <h4 className="font-bold leading-snug text-[#146394] opacity-100 text-[13px] leading-[27px]">
                          {T("تأمين نقل الملكية | بي كير")}
                        </h4>
                      </div>
                      <div className="rounded-full flex-shrink-0 group-hover:bg-gray-50 mb-1 text-[#146394] border-1 border-[#146394] p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="5.0" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 19.5-7.5-7.5 7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="ReadMoreClick group p-3 desktop-sm:p-2">
                      <div className="flex items-center gap-3 desktop-sm:gap-2">
                        <img className="object-cover rounded-lg flex-shrink-0 w-[83px] h-[65px]" src={bc["newDesign-blogs4.jpg"]} alt={T("Technical Support Ticket")} />
                        <h4 className="font-bold leading-snug text-[#146394] opacity-100 text-[13px] leading-[27px]">
                          {T("بي كير | الانتظام في تجديد التأمين يرفع من استحقاقك لخدمة خصم “أحقية”")}
                        </h4>
                      </div>
                      <div className="rounded-full flex-shrink-0 group-hover:bg-gray-50 mb-1 text-[#146394] border-1 border-[#146394] p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="5.0" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 19.5-7.5-7.5 7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex mx-auto my-10 desktop-sm:my-4 justify-center">
                <button type="button" className="browsePostBtn">
                  <span className="browsePostBtn-sp">
                    {T("تصفح جميع المقالات")}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="L-page-Switch">
        <div className="flex-shrink-0">
          <div className="p-0.5 border border-[#D2D2D2] bg-[#f7f7f7] rounded-[46px] opacity-100 backdrop-blur-[12px] flex text-xs !border-2 flex-shrink-0 w-[248px] h-[39px]">
            <button type="button" onClick={() => setAud(0)} className={`w-[50%] px-5 py-1 rounded-full text-center !px-[35px] !py-0 text-[13px]/[24px] tracking-[0.26px] opacity-100 ${aud === 0 ? "bg-[#146394] shadow-sm font-bold text-white" : "font-normal text-[#146394] bg-[#f7f7f7]"}`}>
              {T("أفراد")}
            </button>
            <button type="button" onClick={() => setAud(1)} className={`w-[50%] px-5 py-1 rounded-full text-center !px-[35px] !py-0 text-[13px]/[24px] tracking-[0.26px] opacity-100 ${aud === 1 ? "bg-[#146394] shadow-sm font-bold text-white" : "font-normal text-[#146394] bg-[#f7f7f7]"}`}>
              {T("شركات")}
            </button>
          </div>
        </div>
      </div>
      <div className="responsive-container overflow-x-hidden max-w-screen min-h-[300px] px-4">
        <div>
          <div>
            <div className="my-6">
              <div className="relative z-10 w-full overflow-hidden">
                <div>
                  <div className="relative z-10 w-full overflow-hidden">
                    <div className="flex flex-row overflow-x-auto gap-3 scroll-smooth no-scrollbar py-1 w-full" style={{scrollbarWidth: "none"}}>
{(aud === 0 ? PRODUCTS : BUSINESS).map((p) => (<Link key={p.img} to={p.to} search={S} className="relative flex-shrink-0 flex items-center justify-center cursor-pointer"><img className="rounded-[15px] sponsor-mobile-img object-contain" src={L(p.img)} alt={T(p.alt)} /></Link>))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="bg-white relative block w-full pt-20 mobile-bg">
          <div className="w-full text-center px-2">
            <h1 className="font-bold text-[28px] leading-[45px] tracking-normal text-[#146394] opacity-100 mb-3">
              {T("تأمينك")}
              {" "}
              <span className="text-[#FAA62E]">
                {T("في جيبك")}
              </span>
            </h1>
            <p className="font-normal text-[15px] leading-[20px] tracking-normal text-[#146394] pb-[7px]">
              {T("احصل على عروض أسعار فورية، وجدد وثيقتك خلال ثوان، وأدرها من مكان واحد، في أي وقت ومن أي مكان!")}
            </p>
          </div>
          <div className="flex items-center justify-center pointer-events-none">
            <div />
            <img alt={T("Mockup")} className="relative w-[359px] h-[357px] max-w-none object-contain px-[20px]" src={bc["newDesign-mock.png"]} />
          </div>
          <div className="relative w-full" />
        </section>
        <div className="flex justify-center my-4">
          <button type="button" className="w-[248px] h-[69px] btn-w bg-[#FAA62E] bg-no-repeat rounded-[10px] text-[#146394] font-bold py-2 px-4 rounded text-[21px] leading-[39px] tracking-[0.5px] text-white opacity-100">
            {T("حمل الآن")}
          </button>
        </div>
        <div className="bg-[#146394] items-center justify-center flex flex-col p-2">
          <div>
            <h2 className="text-center font-bold text-[28px] leading-[45px] tracking-normal text-white">
              {T("حمل التطبيق واستمتع")}
              {" "}
              <span className="text-[#FAA62E]">
                {T("بخدمات حصرية")}
              </span>
            </h2>
          </div>
          <div>
            <p className="font-normal text-[21px] leading-[27px] my-[26px] tracking-normal text-white text-center">
              {T("أدر تأمينك بسهولة، واحصل على عروض وأسعار فورية، وتابع المطالبات، وجدد الوثائق، واستفد من مزايا حصرية عبر التطبيق، كل ذلك في تطبيق واحد وآمن.")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 justify-items-center w-full my-2 px-3">
          <span className="w-auto h-[41px]">
            <img className="h-[41px] w-auto object-contain" src={bc["newDesign-stores-applestore-b.svg"]} />
          </span>
          <span className="w-auto h-[41px] pt-[2px]">
            <img className="h-[41px] w-auto object-contain" src={bc["newDesign-stores-appgallery-b.svg"]} />
          </span>
          <span className="w-auto h-[41px] pt-[2px]">
            <img className="h-[41px] w-auto object-contain" src={bc["newDesign-stores-googleplay-b.svg"]} />
          </span>
        </div>
      </div>
      <div>
        <section className="relative overflow-visible w-full pb-[6%]">
          <div className="bg-[#ebf2fa] px-4 pb-[35px]">
            <div className="text-center mb-3">
              <h2 className="font-cairo font-bold text-[#146394] text-[28px] leading-[45px] pt-5">
                {T("الأسئلة")}
                {" "}
                <span className="text-[#FAA62E]">
                  {T("الشائعة")}
                </span>
              </h2>
              <p className="py-3 font-normal text-[15px] desktop-sm:text-xs leading-[20px] text-[#146394]">
                {T("إجابات واضحة من خبرائنا عن أسئلتك حول تأمين السيارات، لمساعدتك على فهم وثيقتك والتغطيات والمطالبات وغيرها")}
              </p>
            </div>
            <div>
              <div className="flex-1 w-full min-w-0">
                <div className="bg-white border border-[#D2D2D2] rounded-2xl p-4 shadow-sm space-y-4 desktop-sm:p-5 desktop-sm:space-y-3 lg:px-4 m-2">
                  <div className="border-[1px] border-[#D2D2D2] rounded-xl overflow-hidden transition-all duration-200 bg-white w-full max-w-full break-words">
                    <button type="button" aria-expanded={faq === 0} onClick={() => setFaq(faq === 0 ? -1 : 0)} className="w-full flex items-center justify-between p-4 md:p-5 desktop-sm:p-4 bg-white max-w-full overflow-hidden text-start">
                      <span className="font-bold text-[#146394] break-words whitespace-normal flex-1 text-[15px] leading-[22px] text-start">
                        {T("وش الفرق بين التأمين ضد الغير والتأمين الشامل والمميز؟")}
                      </span>
                      <span className="faq-chev text-[#707070] flex-shrink-0 transition-transform duration-200 ms-3 md:ms-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <div className="transition-all duration-300 ease-in-out overflow-hidden max-w-full" style={{maxHeight: faq === 0 || allFaq ? "600px" : "0px"}}>
                      <div className="p-3 pt-1 bg-white">
                        <div className="bg-[#F9FBFE] rounded-[10px] py-3 px-3">
                          <p className="font-normal text-[#146394] break-words whitespace-normal text-[14px] leading-[22px] text-start">
                            {T("ببساطة، التأمين ضد الغير هو النوع الإلزامي اللي يغطي الأضرار اللي تسببها للآخرين وما يغطي سيارتك. أما التأمين الشامل، فهو يحميك بالكامل؛ يغطي تصليح سيارتك (سواء كنت المخطئ أو لا)، ويحميك من السرقة، الحريق، والسيول. أما التأمين المميز فهو الحل المثالي إذا تبي حماية أكثر من العادي وسعر أقل من الشامل لأنه يغطي أضرار الآخرين بحدود تغطية أعلى ومزايا إضافية متنوعة مع وجود نسبة تحمل يحددها العميل.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#D2D2D2] rounded-xl overflow-hidden transition-all duration-200 bg-white w-full max-w-full break-words">
                    <button type="button" aria-expanded={faq === 1} onClick={() => setFaq(faq === 1 ? -1 : 1)} className="w-full flex items-center justify-between p-4 md:p-5 desktop-sm:p-4 bg-white max-w-full overflow-hidden text-start">
                      <span className="font-bold text-[#146394] break-words whitespace-normal flex-1 text-[15px] leading-[22px] text-start">
                        {T("ليش يختلف السعر من شخص للثاني، حتى لو كانت نفس السيارة؟")}
                      </span>
                      <span className="faq-chev text-[#707070] flex-shrink-0 transition-transform duration-200 ms-3 md:ms-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <div className="transition-all duration-300 ease-in-out overflow-hidden max-w-full" style={{maxHeight: faq === 1 || allFaq ? "600px" : "0px"}}>
                      <div className="p-3 pt-1 bg-white">
                        <div className="bg-[#F9FBFE] rounded-[10px] py-3 px-3">
                          <p className="font-normal text-[#146394] break-words whitespace-normal text-[14px] leading-[22px] text-start">
                            {T("لأن شركات التأمين تعتمد على تقييم المخاطر، والسعر يتأثر بسجلك في الحوادث، وعمرك، والمدينة اللي ساكن فيها، وسنة صنع السيارة.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#D2D2D2] rounded-xl overflow-hidden transition-all duration-200 bg-white w-full max-w-full break-words">
                    <button type="button" aria-expanded={faq === 2} onClick={() => setFaq(faq === 2 ? -1 : 2)} className="w-full flex items-center justify-between p-4 md:p-5 desktop-sm:p-4 bg-white max-w-full overflow-hidden text-start">
                      <span className="font-bold text-[#146394] break-words whitespace-normal flex-1 text-[15px] leading-[22px] text-start">
                        {T("هل موقع بي كير آمن للدفع الإلكتروني؟")}
                      </span>
                      <span className="faq-chev text-[#707070] flex-shrink-0 transition-transform duration-200 ms-3 md:ms-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <div className="transition-all duration-300 ease-in-out overflow-hidden max-w-full" style={{maxHeight: faq === 2 || allFaq ? "600px" : "0px"}}>
                      <div className="p-3 pt-1 bg-white">
                        <div className="bg-[#F9FBFE] rounded-[10px] py-3 px-3">
                          <p className="font-normal text-[#146394] break-words whitespace-normal text-[14px] leading-[22px] text-start">
                            {T("جداً آمن. نوفر جميع وسائل الدفع الآمنة مثل مدى، فيزا، Apple Pay، تابي، سداد، وأمريكان إكسبريس.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#D2D2D2] rounded-xl overflow-hidden transition-all duration-200 bg-white w-full max-w-full break-words">
                    <button type="button" aria-expanded={faq === 3} onClick={() => setFaq(faq === 3 ? -1 : 3)} className="w-full flex items-center justify-between p-4 md:p-5 desktop-sm:p-4 bg-white max-w-full overflow-hidden text-start">
                      <span className="font-bold text-[#146394] break-words whitespace-normal flex-1 text-[15px] leading-[22px] text-start">
                        {T("هل أقدر أقسط مبلغ التأمين؟")}
                      </span>
                      <span className="faq-chev text-[#707070] flex-shrink-0 transition-transform duration-200 ms-3 md:ms-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <div className="transition-all duration-300 ease-in-out overflow-hidden max-w-full" style={{maxHeight: faq === 3 || allFaq ? "600px" : "0px"}}>
                      <div className="p-3 pt-1 bg-white">
                        <div className="bg-[#F9FBFE] rounded-[10px] py-3 px-3">
                          <p className="font-normal text-[#146394] break-words whitespace-normal text-[14px] leading-[22px] text-start">
                            {T("طبعاً! بي كير يوفر التقسيط عبر تابي حتى 12 دفعة في بعض العروض، بالإضافة إلى خدمة المساعدة على الطريق (الباقة المرنة).")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#D2D2D2] rounded-xl overflow-hidden transition-all duration-200 bg-white w-full max-w-full break-words">
                    <button type="button" aria-expanded={faq === 4} onClick={() => setFaq(faq === 4 ? -1 : 4)} className="w-full flex items-center justify-between p-4 md:p-5 desktop-sm:p-4 bg-white max-w-full overflow-hidden text-start">
                      <span className="font-bold text-[#146394] break-words whitespace-normal flex-1 text-[15px] leading-[22px] text-start">
                        {T("كيف ألغي الوثيقة وأسترجع فلوسي؟")}
                      </span>
                      <span className="faq-chev text-[#707070] flex-shrink-0 transition-transform duration-200 ms-3 md:ms-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <div className="transition-all duration-300 ease-in-out overflow-hidden max-w-full" style={{maxHeight: faq === 4 || allFaq ? "600px" : "0px"}}>
                      <div className="p-3 pt-1 bg-white">
                        <div className="bg-[#F9FBFE] rounded-[10px] py-3 px-3">
                          <p className="font-normal text-[#146394] break-words whitespace-normal text-[14px] leading-[22px] text-start">
                            {T("الإلغاء يتم مباشرة عن طريق شركة التأمين المصدرة للوثيقة، وإذا احتجت أي مساعدة ففريق الدعم الفني جاهز لخدمتك.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#D2D2D2] rounded-xl overflow-hidden transition-all duration-200 bg-white w-full max-w-full break-words">
                    <button type="button" aria-expanded={faq === 5} onClick={() => setFaq(faq === 5 ? -1 : 5)} className="w-full flex items-center justify-between p-4 md:p-5 desktop-sm:p-4 bg-white max-w-full overflow-hidden text-start">
                      <span className="font-bold text-[#146394] break-words whitespace-normal flex-1 text-[15px] leading-[22px] text-start">
                        {T("هل بي كير يذكرني قبل ما يخلص التأمين؟")}
                      </span>
                      <span className="faq-chev text-[#707070] flex-shrink-0 transition-transform duration-200 ms-3 md:ms-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <div className="transition-all duration-300 ease-in-out overflow-hidden max-w-full" style={{maxHeight: faq === 5 || allFaq ? "600px" : "0px"}}>
                      <div className="p-3 pt-1 bg-white">
                        <div className="bg-[#F9FBFE] rounded-[10px] py-3 px-3">
                          <p className="font-normal text-[#146394] break-words whitespace-normal text-[14px] leading-[22px] text-start">
                            {T("أكيد! نرسل إشعارات على الجوال والإيميل قبل انتهاء التأمين بوقت كافٍ.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-8 desktop-sm:mt-4 flex justify-center">
                  <button type="button" onClick={() => setAllFaq(!allFaq)} className="showMoreBtn w-[305px] h-[40px] flex items-center justify-center !px-4 whitespace-nowrap text-[15px]">
                    {T("عرض جميع الأسئلة")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
