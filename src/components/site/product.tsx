import { useEffect, useState } from "react";
import { CalendarDays, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLang } from "@/lib/lang";
import { months, products, years, type Product, type ProductField } from "@/lib/products";

function Field({ field }: { field: ProductField }) {
  const { t } = useLang();
  const [startDate, setStartDate] = useState<Date>();
  const [dateOpen, setDateOpen] = useState(false);
  useEffect(() => {
    if (field.kind !== "date") return;
    const next = new Date();
    next.setDate(next.getDate() + 1);
    setStartDate(next);
  }, [field.kind]);
  if (field.kind === "date") {
    return (
      <div className="product-field product-date-field">
        <span>{t(field.label[0], field.label[1])}</span>
        <input type="hidden" name={field.name} value={startDate ? `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, "0")}-${String(startDate.getDate()).padStart(2, "0")}` : ""} />
        <Popover open={dateOpen} onOpenChange={setDateOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="outline" className="product-date-trigger" aria-label={t("تاريخ بداية التأمين", "Insurance start date")}>
              <span>{startDate ? `${String(startDate.getDate()).padStart(2, "0")}/${String(startDate.getMonth() + 1).padStart(2, "0")}/${startDate.getFullYear()}` : ""}</span>
              <CalendarDays />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="product-calendar w-auto p-0" align="start">
            <Calendar mode="single" selected={startDate} {...(startDate ? { defaultMonth: startDate } : {})} onSelect={(date) => { if (date) { setStartDate(date); setDateOpen(false); } }} />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  if (field.kind === "birth") {
    return (
      <div className="product-field product-birth-field">
        <span>{t(field.label[0], field.label[1])}</span>
        <div className="product-birth">
          <select name={`${field.name}-month`} defaultValue="" aria-label={t("شهر الميلاد", "Birth Month")}>
            <option value="">{t("شهر الميلاد", "Birth Month")}</option>
            {months.map((m, i) => (
              <option key={m[0]} value={String(i + 1)}>
                {t(m[0], m[1])}
              </option>
            ))}
          </select>
          <select name={`${field.name}-year`} defaultValue="" aria-label={t("سنة الميلاد", "Birth Year")}>
            <option value="">{t("سنة الميلاد", "Birth Year")}</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  return (
    <label className="product-field product-wide">
      <span>{t(field.label[0], field.label[1])}</span>
      <input
        type="text"
        name={field.name}
        inputMode={field.inputMode}
        placeholder={t(field.placeholder[0], field.placeholder[1])}
      />
    </label>
  );
}

/** Phone-only consent: the original shows the full sentence instead of the short checkbox label. */
function LongConsent({ product, checked, onChange }: { product: Product; checked: boolean; onChange: (v: boolean) => void }) {
  const { t } = useLang();
  return (
    <label className={`consent-long${product.consentAfterSubmit ? " consent-long-after" : ""}`}>
      <input className="sr-only" type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {product.consentAfterSubmit && (
        <>
          {t("بالضغط على ", "By click on ")}
          <b>"{t(product.submit[0], product.submit[1])}"</b>{" "}
        </>
      )}
      {t(product.consent[0], product.consent[1])}
    </label>
  );
}

export function ProductPage({ product }: { product: Product }) {
  const { t } = useLang();
  const [captcha, setCaptcha] = useState("");
  const [consent, setConsent] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    setCaptcha(String(Math.floor(1000 + Math.random() * 9000)));
  }, []);

  return (
    <>
      <section className="product-hero">
        <div className="site-width">
          <h1>{t(product.title[0], product.title[1])}</h1>
          <p>{t(product.subtitle[0], product.subtitle[1])}</p>
        </div>
      </section>
      <div className={`product-form-wrap product-form-${product.slug}`}>
        <form
          className="product-form"
          onSubmit={(e) => {
            e.preventDefault();
            setNotice(
              t(
                "خدمة طلب التأمين غير متاحة حالياً. يرجى المحاولة لاحقاُ أو الاتصال على 8001180044.",
                "Insurance requests are not available yet. Please try again later or call 8001180044.",
              ),
            );
          }}
        >
          {product.fields.map((field) => (
            <Field key={field.name} field={field} />
          ))}
          <div className="product-actions">
          <div className="product-actions-row">
          <label className="product-field product-captcha">
            <span>{t("رمز التحقق", "Captcha Code")}</span>
            <div className="captcha-input">
              <input type="text" name="captcha" autoComplete="off" />
              <Button variant="ghost" size="icon"
                type="button"
                aria-label={t("تحديث رمز التحقق", "Refresh the verification code")}
                onClick={() => setCaptcha(String(Math.floor(1000 + Math.random() * 9000)))}
              >
                <RefreshCw />
              </Button>
              <span className="captcha-code" aria-label={`${t("رمز التحقق", "Verification code")} ${captcha}`}>
                {captcha.split("").map((d, i) => (
                  <i key={`${d}-${i}`} className={`digit-${i % 4}`}>
                    {d}
                  </i>
                ))}
              </span>
            </div>
          </label>
          {!product.consentAfterSubmit && <LongConsent product={product} checked={consent} onChange={setConsent} />}
          <div className="product-field form-submit">
            <Button type="submit" disabled={!consent}>
              {t(product.submit[0], product.submit[1])}
            </Button>
            <label className="consent-short">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>{t("أوافق على منح حق الاستعلام", "I agree to grant the right to inquire")}</span>
            </label>
          </div>
          {product.consentAfterSubmit && <LongConsent product={product} checked={consent} onChange={setConsent} />}
          </div>
          </div>
          {notice && <p className="form-notice">{notice}</p>}
        </form>
      </div>
    </>
  );
}
