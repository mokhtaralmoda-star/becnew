import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/travel-insurance-request")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "تأمين السفر - طلب العروض",
        description: "مقارنة عروض تأمين السفر لشنغن والعالم مع شهادة معتمدة للسفارات.",
      },
      {
        title: "Travel insurance - Request quotes",
        description: "Compare Schengen and worldwide travel insurance offers with embassy-approved certification.",
      },
    ),
  component: () => <ReferenceFrame name="travel" title="travel-insurance-request" />,
});
