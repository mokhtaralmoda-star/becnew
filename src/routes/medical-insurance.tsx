import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/medical-insurance")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "التأمين الطبي للمنشآت",
        description: "مقارنة عروض التأمين الطبي للشركات والمنشآت مع إصدار فوري.",
      },
      {
        title: "Establishment medical insurance",
        description: "Compare medical insurance offers for companies and establishments with instant issuance.",
      },
    ),
  component: () => <ReferenceFrame name="landing-medical" title="medical-insurance" />,
});
