/**
 * Product landing pages. Each product keeps the reference wording in Arabic and
 * an English equivalent; index positions are irrelevant here, the component reads
 * the fields array in order.
 */
export type ProductField =
  | {
      kind: "text";
      name: string;
      label: [string, string];
      placeholder: [string, string];
      inputMode?: "numeric" | "text";
    }
  | { kind: "date"; name: string; label: [string, string] }
  | { kind: "birth"; name: string; label: [string, string] };

export type Product = {
  slug: string;
  title: [string, string];
  subtitle: [string, string];
  submit: [string, string];
  /** Full consent sentence the original shows on phones. */
  consent: [string, string];
  /** Establishment medical shows "By clicking …" under the button instead of above it. */
  consentAfterSubmit?: boolean;
  fields: ProductField[];
};

export const products = {
  travel: {
    consent: ["أوافق على منح شركة عناية الوسيط الحق في الاستعلام عن بياناتي من مركز المعلومات الوطني", "I agree to grant the Broker Care Company the right to inquire from National Information Center on my data."],
    slug: "travel-insurance",
    title: [
      "المنصة الأذكى لمقارنة عروض تأمين السفر لشنغن والعالم في السعودية",
      "The Smartest Platform to compare Travel Insurance offers for Schengen & Global in KSA",
    ],
    subtitle: [
      "المنصة الأذكى لمقارنة عروض السفر العالمية. احصل على أرخص تأمين سفر (شنغن ودولي) مع شهادة معتمدة للسفارات وتغطية فورية.",
      "The smartest platform to compare global travel offers. Get the cheapest travel insurance (Schengen & International) with an embassy-approved certificate and instant coverage.",
    ],
    submit: ["إظهار العروض", "BUY NOW"],
    fields: [
      {
        kind: "text",
        name: "identity",
        label: ["رقم الهوية", "Insured ID"],
        placeholder: ["رقم الهوية / الإقامة", "National Id / Iqama"],
        inputMode: "numeric",
      },
    ],
  },
  malpractice: {
    consent: ["أوافق على منح شركة عناية الوسيط الحق في الاستعلام عن بياناتي من مركز المعلومات الوطني", "I agree to grant the Broker Care Company the right to inquire from National Information Center on my data"],
    slug: "medical-malpractice",
    title: [
      "المنصة الأذكى لمقارنة عروض تأمين الأخطاء الطبية لممارس بلس في السعودية",
      "The Smartest Platform to compare Medical Malpractice offers for Mumaris Plus in KSA",
    ],
    subtitle: [
      "المنصة الأذكى لمقارنة عروض الحماية المهنية. احصل على أرخص تأمين أخطاء طبية (ممارس بلس) مع تغطية شاملة ومعتمدة لدى هيئة التخصصات الطبية.",
      "The smartest platform to compare professional protection offers. Get the cheapest malpractice insurance (Mumaris Plus) with comprehensive coverage approved by SCFHS.",
    ],
    submit: ["إظهار العروض", "BUY NOW"],
    fields: [
      {
        kind: "text",
        name: "identity",
        label: ["رقم هوية طالب التأمين", "Insured ID Number"],
        placeholder: ["رقم الهوية / الإقامة", "National Id / Iqama"],
        inputMode: "numeric",
      },
      { kind: "date", name: "start", label: ["تاريخ بداية التأمين", "Insurance start date"] },
    ],
  },
  domestic: {
    consent: ["أوافق على منح شركة عناية الوسيط الحق في الاستعلام من مركز المعلومات الوطني عن بياناتي", "I agree to grant the Broker Care Company the right to inquire from the National Information Center on my data."],
    slug: "domestic-workers",
    title: [
      "المنصة الأذكى لمقارنة عروض التأمين الطبي للعمالة المنزلية في السعودية",
      "The Smartest Platform to compare Medical Insurance offers for Domestic Workers in KSA",
    ],
    subtitle: [
      "المنصة الأذكى لمقارنة خيارات تأمين العمالة. احصل على أرخص تأمين طبي للعمالة المنزلية لحفظ حقوقك، مع ربط مباشر بمجلس الضمان الصحي.",
      "The smartest platform to compare domestic labor options. Get the cheapest medical insurance for domestic workers to protect your rights, with direct link to CCHI.",
    ],
    submit: ["إظهار العروض", "BUY NOW"],
    fields: [
      {
        kind: "text",
        name: "identity",
        label: ["هوية الكفيل / رقم الإقامة", "Sponsor ID / Iqama Number"],
        placeholder: ["هوية الكفيل / رقم الإقامة", "Sponsor ID / Iqama Number"],
        inputMode: "numeric",
      },
      { kind: "birth", name: "birth", label: ["تاريخ الميلاد", "Date of Birth"] },
    ],
  },
  business: {
    consent: [
      "فإنك توافق على منح شركة عناية الوسيط الحق في الاستفسار من وزارة التجارة و/أو مركز المعلومات الوطني و/أو المؤسسة العامة للتأمينات الاجتماعية عن بياناتي",
      "You agreed to grant the Broker Care Company the right to inquire from Ministry of Commerce and/or National Information Center and/or General Organization for Social Insurance on my data",
    ],
    consentAfterSubmit: true,
    slug: "medical-insurance",
    title: [
      "المنصة الأذكى لمقارنة عروض التأمين الطبي للشركات والمنشآت في السعودية",
      "The Smartest Platform to compare Medical Insurance offers for SME & Corporate in KSA",
    ],
    subtitle: [
      "المنصة الأذكى لمقارنة أفضل شركات التأمين الطبي. احصل على أرخص تأمين للشركات والمنشآت، مع إصدار فوري وربط مباشر بمجلس الضمان الصحي.",
      "The smartest platform to compare top medical insurance companies. Get the cheapest insurance for companies and establishments, with instant issuance and direct link to CCHI.",
    ],
    submit: ["طلب العروض", "Get Quotations"],
    fields: [
      {
        kind: "text",
        name: "cr",
        label: ["السجل التجاري/ الرقم الموحد", "Company CR or Company Unified Number"],
        placeholder: ["السجل التجاري / الرقم الموحد", "Company CR or Company Unified Number"],
      },
    ],
  },
} satisfies Record<string, Product>;

export const months: [string, string][] = [
  ["يناير", "January"],
  ["فبراير", "February"],
  ["مارس", "March"],
  ["أبريل", "April"],
  ["مايو", "May"],
  ["يونيو", "June"],
  ["يوليو", "July"],
  ["أغسطس", "August"],
  ["سبتمبر", "September"],
  ["أكتوبر", "October"],
  ["نوفمبر", "November"],
  ["ديسمبر", "December"],
];

/** Birth years offered by the reference date-of-birth dropdowns. */
export const years = Array.from({ length: 80 }, (_, i) => String(new Date().getFullYear() - i));
