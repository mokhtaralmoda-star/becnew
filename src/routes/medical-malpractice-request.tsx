import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/medical-malpractice-request")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "تأمين الأخطاء الطبية - طلب العروض",
        description: "مقارنة عروض الحماية المهنية وتأمين الأخطاء الطبية لممارس بلس.",
      },
      {
        title: "Medical malpractice insurance - Request quotes",
        description: "Compare professional protection offers and medical malpractice cover for Practitioner Plus.",
      },
    ),
  component: () => <ReferenceFrame name="mm" title="medical-malpractice-request" />,
});
