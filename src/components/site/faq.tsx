import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang } from "@/lib/lang";

export const questions = [
  [
    "ما هو تأمين المركبات؟",
    "تأمين المركبات يحميك من الأعباء المالية الناتجة عن الحوادث، وتختلف التغطية حسب نوع الوثيقة والشروط المحددة من شركة التأمين.",
  ],
  [
    "ما الفرق بين التأمين الشامل والتأمين ضد الغير؟",
    "التأمين ضد الغير يغطي المسؤولية تجاه الآخرين، بينما يشمل التأمين الشامل أضرار مركبتك وفق شروط وأحكام الوثيقة.",
  ],
  [
    "كيف أحصل على وثيقة التأمين؟",
    "بعد إتمام الإجراءات لدى شركة التأمين تصدر الوثيقة إلكترونياً، ويمكنك التواصل مع مركز المساعدة للاستفسار عن وثيقتك.",
  ],
  ["كيف يمكنني التواصل مع خدمة العملاء؟", "يمكنك التواصل مع مركز المساعدة على الرقم 8001180044."],
  [
    "هل يمكن إلغاء وثيقة التأمين؟",
    "يخضع الإلغاء والاسترداد لشروط شركة التأمين ولوائح هيئة التأمين. تواصل مع الشركة المُصدِرة للوثيقة لمعرفة الإجراءات.",
  ],
];

export const questionsEn = [
  [
    "What is motor insurance?",
    "Motor insurance protects you from the financial burden of accidents. Coverage depends on the policy type and the insurer's terms.",
  ],
  [
    "What is the difference between comprehensive and third-party insurance?",
    "Third-party insurance covers your liability towards others, while comprehensive insurance also covers damage to your own vehicle under the policy terms.",
  ],
  [
    "How do I get my insurance policy?",
    "Once the insurer completes the process, the policy is issued electronically. Contact the Help Center for any questions about your policy.",
  ],
  ["How can I contact customer service?", "Call the Help Center on 8001180044."],
  [
    "Can I cancel my insurance policy?",
    "Cancellation and refunds follow the insurer's terms and Insurance Authority regulations. Contact the issuing insurer for the steps.",
  ],
];

export function Faq() {
  const { lang, t } = useLang();
  const list = lang === "en" ? questionsEn : questions;
  return (
    <section className="faq-section site-width" id="faq">
      <h2>{t("الأسئلة الشائعة", "Frequently Asked Questions")}</h2>
      <Accordion type="single" collapsible>
        {list.map(([q, a], i) => (
          <AccordionItem key={q} value={String(i)}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
