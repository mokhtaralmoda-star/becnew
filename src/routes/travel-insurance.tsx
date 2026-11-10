import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/travel-insurance")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "تأمين السفر",
        description: "مقارنة عروض تأمين السفر لشنغن والعالم مع شهادة معتمدة للسفارات.",
      },
      {
        title: "Travel insurance",
        description: "Compare Schengen and worldwide travel insurance offers with embassy-approved certification.",
      },
    ),
  component: () => <ReferenceFrame name="landing-travel" title="travel-insurance" />,
});
