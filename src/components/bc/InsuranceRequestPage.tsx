import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Car,
  CreditCard,
  Hash,
  Phone,
  Shield,
  Sparkles,
  Type,
  User,
} from "lucide-react";
import { bc } from "@/lib/bcare-media";
import { useBc } from "@/components/bc/common";
import { PlainPage } from "@/components/bc/PlainChrome";

const INPUT =
  "w-full h-9 px-3 rounded-lg bg-secondary/50 border-2 text-foreground font-semibold text-xs placeholder:text-muted-foreground/60 transition-all duration-300 outline-none backdrop-blur-sm border-border/60 hover:border-primary/50 hover:bg-secondary/80 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-background focus:shadow-md focus:shadow-primary/5";
const SELECT =
  "w-full h-9 px-3 rounded-lg bg-secondary/50 border-2 border-border/60 text-foreground font-semibold text-xs transition-all duration-300 outline-none cursor-pointer appearance-none backdrop-blur-sm hover:border-primary/50 hover:bg-secondary/80 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-background focus:shadow-md focus:shadow-primary/5";
const NEXT =
  "inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 py-2 bg-gradient-to-l from-primary to-primary/80 text-primary-foreground rounded-xl px-8 h-12 font-bold text-sm shadow-xl shadow-primary/25 gap-2 border border-primary-foreground/10";
const MONTHS = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
const BIRTH_YEARS = Array.from({ length: 2008 - 1940 + 1 }, (_, i) => String(2008 - i));
const CAR_YEARS = Array.from({ length: 2027 - 1990 + 1 }, (_, i) => String(2027 - i));
const STEPS = [
  { icon: User, label: "بيانات المالك" },
  { icon: Car, label: "بيانات المركبة" },
  { icon: Shield, label: "تفاصيل التأمين" },
];

function Field({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="flex items-center gap-2 text-sm font-black text-foreground">
        {icon}
        {label}
      </label>
      <div className="relative">{children}</div>
      <div className="min-h-[14px]" />
    </div>
  );
}

/**
 * Copied reference request page. Entries stay on this page only: nothing is sent
 * until the backend is connected, so the last step shows an unavailable notice.
 */
export function InsuranceRequestPage() {
  const { T } = useBc();
  const [step, setStep] = useState(0);
  const [notice, setNotice] = useState(false);
  const [v, setV] = useState<Record<string, string>>({});
  const bind = (name: string) => ({
    value: v[name] ?? "",
    onChange: (e: { target: { value: string } }) => setV((o) => ({ ...o, [name]: e.target.value })),
  });
  const sel = (name: string) => `${SELECT} ${v[name] ? "" : "text-muted-foreground/60"}`;
  const ic = "w-3.5 h-3.5";
  return (
    <PlainPage>
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-16">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={bc["hero-insurance-bg.jpg"]} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="absolute top-6 right-6 w-48 h-48 text-primary-foreground" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="80" fillOpacity="0.15" />
            <circle cx="100" cy="100" r="55" fillOpacity="0.1" />
          </svg>
          <svg className="absolute bottom-6 left-6 w-36 h-36 text-primary-foreground" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="70" fillOpacity="0.12" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-5 py-2 mb-4 border border-primary-foreground/10">
            <Sparkles className="w-3 h-3 text-cta" />
            <span className="text-xs text-primary-foreground font-bold">{T("تأمين جديد")}</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-3 leading-tight max-w-3xl mx-auto">
            {T("طلب تأمين مركبة")}
          </h1>
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {T("أكمل البيانات في ٣ خطوات بسيطة للحصول على أفضل العروض")}
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 -mt-12 pb-16 relative z-10">
        <div className="max-w-lg mx-auto space-y-5">
          <div className="bg-card rounded-2xl p-3 sm:p-5 shadow-sm border border-border">
            <div className="flex items-center justify-between">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const on = i <= step;
                return (
                  <div key={s.label} className={`flex items-center min-w-0 ${i < 2 ? "flex-1" : ""}`}>
                    <button
                      type="button"
                      onClick={() => i < step && setStep(i)}
                      className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 shrink-0 transition-all"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          on
                            ? "bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg shadow-primary/30 ring-2 ring-primary/20"
                            : "bg-muted/50 text-muted-foreground border border-border/50"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-[11px] sm:text-xs text-center leading-tight font-bold ${on ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {T(s.label)}
                      </span>
                    </button>
                    {i < 2 && (
                      <div className="flex-1 min-w-2 h-1 mx-1 sm:mx-2 rounded-full bg-border/30 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${i < step ? "bg-primary" : "bg-transparent"}`}
                          style={{ width: i < step ? "100%" : "0%" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <form
            className="bg-card rounded-2xl shadow-sm border border-border overflow-visible"
            onSubmit={(e) => {
              e.preventDefault();
              if (step < 2) setStep(step + 1);
              else setNotice(true);
            }}
          >
            <div className="h-1 bg-gradient-to-l from-cta via-primary to-cta/60" />
            <div className="p-5 md:p-6">
              <div className="space-y-3">
                {step === 0 && (
                  <>
                    <Field icon={<CreditCard className={ic} />} label={T("رقم الهوية / الإقامة *")}>
                      <input
                        required
                        className={INPUT}
                        placeholder="1, 2 xxxxxxxxx"
                        inputMode="numeric"
                        maxLength={10}
                        autoComplete="off"
                        {...bind("id")}
                      />
                    </Field>
                    <Field icon={<Type className={ic} />} label={T("الاسم الكامل *")}>
                      <input required className={INPUT} placeholder={T("الاسم الكامل *")} autoComplete="off" {...bind("name")} />
                    </Field>
                    <Field icon={<Calendar className={ic} />} label={T("تاريخ الميلاد")}>
                      <div className="grid grid-cols-3 gap-2">
                        <select className={sel("day")} {...bind("day")}>
                          <option value="">{T("اليوم")}</option>
                          {Array.from({ length: 31 }, (_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                        <select className={sel("month")} {...bind("month")}>
                          <option value="">{T("الشهر")}</option>
                          {MONTHS.map((m, i) => (
                            <option key={m} value={i + 1}>
                              {T(m)}
                            </option>
                          ))}
                        </select>
                        <select className={sel("year")} {...bind("year")}>
                          <option value="">{T("السنة")}</option>
                          {BIRTH_YEARS.map((y) => (
                            <option key={y}>{y}</option>
                          ))}
                        </select>
                      </div>
                    </Field>
                    <Field icon={<Phone className={ic} />} label={T("رقم الجوال *")}>
                      <input
                        required
                        className={INPUT}
                        placeholder="05xxxxxxxx"
                        inputMode="numeric"
                        maxLength={10}
                        autoComplete="off"
                        {...bind("mobile")}
                      />
                    </Field>
                  </>
                )}
                {step === 1 && (
                  <>
                    <Field icon={<Hash className={ic} />} label={T("الرقم التسلسلي *")}>
                      <input
                        required
                        className={INPUT}
                        placeholder={T("الرقم التسلسلي")}
                        inputMode="numeric"
                        maxLength={15}
                        autoComplete="off"
                        {...bind("serial")}
                      />
                    </Field>
                    <Field icon={<Car className={ic} />} label={T("ماركة المركبة *")}>
                      <input required className={INPUT} placeholder={T("ماركة المركبة *")} autoComplete="off" {...bind("make")} />
                    </Field>
                    <Field icon={<Car className={ic} />} label={T("طراز المركبة *")}>
                      <input required className={INPUT} placeholder={T("طراز المركبة *")} autoComplete="off" {...bind("model")} />
                    </Field>
                    <Field icon={<Calendar className={ic} />} label={T("سنة الصنع *")}>
                      <select required className={sel("carYear")} {...bind("carYear")}>
                        <option value="">{T("السنة")}</option>
                        {CAR_YEARS.map((y) => (
                          <option key={y}>{y}</option>
                        ))}
                      </select>
                    </Field>
                  </>
                )}
                {step === 2 && (
                  <>
                    <Field icon={<Shield className={ic} />} label={T("نوع التأمين")}>
                      <select required className={sel("coverage")} {...bind("coverage")}>
                        <option value="">{T("اختر نوع التأمين")}</option>
                        <option value="third">{T("ضد الغير")}</option>
                        <option value="comp">{T("شامل")}</option>
                      </select>
                    </Field>
                    <Field icon={<Calendar className={ic} />} label={T("تاريخ بدء التأمين *")}>
                      <input required type="date" className={INPUT} {...bind("start")} />
                    </Field>
                    <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                      <input required type="checkbox" className="w-4 h-4 accent-[hsl(var(--primary))]" />
                      {T("أوافق على الشروط والأحكام ومنح حق الاستعلام")}
                    </label>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-primary/10">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setNotice(false);
                      setStep(step - 1);
                    }}
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-border text-sm font-bold text-foreground hover:bg-secondary transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                    {T("السابق")}
                  </button>
                ) : (
                  <div />
                )}
                <button type="submit" className={NEXT}>
                  {step < 2 ? T("التالي") : T("إرسال الطلب")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {notice && (
                <p role="status" className="mt-4 rounded-xl bg-secondary p-3 text-xs font-semibold text-foreground">
                  {T("خدمة طلب التأمين غير متاحة حالياً. يرجى المحاولة لاحقاً أو الاتصال على 8001180044.")}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </PlainPage>
  );
}
