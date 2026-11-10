import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { bc } from "@/lib/bcare-media";
import { useBc } from "@/components/bc/common";
import { LangToggle } from "@/components/bc/Headers";

/** Top bar copied from the reference inner pages (about, privacy, terms, verify, request). */
export function PlainNav() {
  const { T, S, lang } = useBc();
  return (
    <nav className="sticky top-0 z-50 bg-background border-b-[3px] border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link to="/" search={S} className="flex items-center">
            <img alt={T("BCare")} className="h-7 md:h-8" src={bc["Bcare-logo.svg"]} />
          </Link>
          <div className="flex items-center gap-4">
            <LangToggle className="h-10 px-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors flex items-center">
              {lang === "en" ? "عربي" : "EN"}
            </LangToggle>
          </div>
        </div>
      </div>
    </nav>
  );
}

/** Blue footer copied from the reference inner pages. */
export function PlainFooter() {
  const { T, S } = useBc();
  return (
    <footer className="bg-primary text-primary-foreground py-6 pb-20 md:pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-primary-foreground/15">
          <div className="flex items-center gap-4">
            <img alt={T("BCare")} className="h-7 brightness-0 invert" src={bc["Bcare-logo.svg"]} />
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-3.5 h-3.5 text-cta" aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              <span className="text-sm font-extrabold" dir="ltr">
                {T("8001180044")}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <h4 className="font-bold text-xs mb-2 text-cta">
              {T("عن بي كير")}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/about" search={S} className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("من نحن")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" search={S} className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("سياسة الخصوصية")}
                </Link>
              </li>
              <li>
                <Link to="/terms" search={S} className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("الشروط والأحكام")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs mb-2 text-cta">
              {T("منتجاتنا")}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/motor-insurance" search={S} className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("تأمين المركبات")}
                </Link>
              </li>
              <li>
                <span className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("التأمين الشامل")}
                </span>
              </li>
              <li>
                <span className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("ضد الغير")}
                </span>
              </li>
              <li>
                <Link to="/medical-insurance" search={S} className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("التأمين الطبي")}
                </Link>
              </li>
              <li>
                <Link to="/travel-insurance" search={S} className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("تأمين السفر")}
                </Link>
              </li>
              <li>
                <Link to="/medical-malpractice" search={S} className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("تأمين الأخطاء الطبية")}
                </Link>
              </li>
              <li>
                <Link to="/domestic-workers" search={S} className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("تأمين العمالة المنزلية")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs mb-2 text-cta">
              {T("الدعم الفني")}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/verify" search={S} className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("التحقق من وثيقتك")}
                </Link>
              </li>
              <li>
                <a href="tel:8001180044" className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("إلغاء وثيقتك")}
                </a>
              </li>
              <li>
                <a href="tel:8001180044" className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("اتصل بنا")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs mb-2 text-cta">
              {T("روابط مهمة")}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <span className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("هيئة التأمين")}
                </span>
              </li>
              <li>
                <span className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("طريقة رفع شكوى لهيئة التأمين")}
                </span>
              </li>
              <li>
                <span className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("قواعد ولوائح هيئة التأمين")}
                </span>
              </li>
              <li>
                <span className="text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {T("شهادة ضريبة القيمة المضافة")}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 pt-3 text-center">
          <p className="text-[10px] text-primary-foreground/50">
            {T("2026 © جميع الحقوق محفوظة، شركة عناية الوسيط لوساطة التأمين")}
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Page frame used by the reference inner pages. */
export function PlainPage({ className = "bg-background", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`min-h-screen ${className}`}>
      <PlainNav />
      {children}
      <PlainFooter />
    </div>
  );
}
