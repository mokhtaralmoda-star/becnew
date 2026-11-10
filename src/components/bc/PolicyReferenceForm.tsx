import { useState } from "react";
import { Info, Printer, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBc } from "./common";
import { bc } from "@/lib/bcare-media";

export function PolicyReferenceForm({ print = false }: { print?: boolean }) {
  const { T, lang } = useBc();
  const [purpose, setPurpose] = useState("new");
  const [registration, setRegistration] = useState("form");
  const [consent, setConsent] = useState(false);
  const [captcha, setCaptcha] = useState("8248");
  const [notice, setNotice] = useState(false);
  const title = lang === "en" ? "Print your policy" : "طباعة وثيقتك";
  return (
    <>
      <section className={`policy-reference-hero${print ? " policy-print-hero" : ""}`}>
        {print ? <h1>{title}</h1> : <img src={bc["newDesign-motor-inquiry-hero.jpg"]} alt={T("بي كير تربحك ثلاث سيارات جينيسيس")} />}
      </section>
      <div className={`policy-reference-wrap${print ? " policy-print-wrap" : ""}`}>
        <form className="policy-reference-form" onSubmit={(e) => { e.preventDefault(); setNotice(true); }}>
          {print && <div className="policy-print-heading"><Printer /><strong>{title}</strong></div>}
          <div className="policy-reference-fields">
            <div className="policy-owner-field">
              {!print && <>
                <span>{T("الغرض من التأمين")}</span>
                <div className="policy-choice">
                  {([["new", T("تأمين جديد")], ["transfer", T("نقل ملكية")]] as const).map(([value, label]) => <Button key={value} type="button" variant="ghost" aria-pressed={purpose === value} onClick={() => setPurpose(value)}><i />{label}</Button>)}
                </div>
              </>}
              <label>
                {print && <span>{lang === "en" ? "Insured ID Number" : "رقم هوية طالب التأمين"}</span>}
                <input required inputMode="numeric" placeholder={T(purpose === "transfer" ? "رقم هوية البائع" : "رقم الهوية / الإقامة")} aria-label={T("رقم الهوية / الإقامة")} />
              </label>
            </div>
            <div className="policy-registration-field">
              {!print && <span>{T("نوع تسجيل المركبة")}</span>}
              <div className="policy-choice">
                {([["form", T("استمارة")], ["customs", T("بطاقة جمركية")]] as const).map(([value, label]) => <Button key={value} type="button" variant="ghost" aria-pressed={registration === value} onClick={() => setRegistration(value)}><i />{label}</Button>)}
              </div>
              <label className="policy-serial"><input required inputMode="numeric" placeholder={T(registration === "form" ? "الرقم التسلسلي" : "رقم البطاقة الجمركية")} aria-label={T(registration === "form" ? "الرقم التسلسلي" : "رقم البطاقة الجمركية")} />{!print && <Info />}</label>
            </div>
            <label className="product-field product-captcha">
              <span>{T("رمز التحقق")}</span>
              <div className="captcha-input">
                <input required name="captcha" inputMode="numeric" aria-label={T("رمز التحقق")} />
                <Button type="button" variant="ghost" size="icon" aria-label={T("تحديث رمز التحقق")} onClick={() => setCaptcha(String(1000 + Math.floor(Math.random() * 9000)))}><RefreshCw /></Button>
                <span className="captcha-code">{captcha.split("").map((d, i) => <i key={i} className={`digit-${i}`}>{d}</i>)}</span>
              </div>
            </label>
            {!print && <label className="policy-consent-long"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="sr-only" />{lang === "en" ? "I agree to grant the Broker Care Company the right to inquire from Najm and/or National Information Center on my data" : "أوافق على منح شركة عناية الوسيط الحق في الاستعلام من شركة نجم و/أو مركز المعلومات الوطني عن بياناتي"}</label>}
            <div className="policy-submit">
              <Button type="submit" disabled={!print && !consent}>{print ? T("بحث") : lang === "en" ? "BUY NOW" : T("إظهار العروض")}</Button>
              {!print && <label className="policy-consent-short"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />{T("أوافق على منح حق الاستعلام")}</label>}
            </div>
          </div>
          {notice && <p role="status" className="text-muted-foreground mt-4">{lang === "en" ? "This service is currently unavailable." : "الخدمة غير متاحة حالياً."}</p>}
        </form>
      </div>
    </>
  );
}