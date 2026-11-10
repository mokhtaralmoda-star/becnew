import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/medical-insurance-request")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "التأمين الطبي للمنشآت - طلب العروض",
        description: "مقارنة عروض التأمين الطبي للشركات والمنشآت مع إصدار فوري.",
      },
      {
        title: "Establishment medical insurance - Request quotes",
        description: "Compare medical insurance offers for companies and establishments with instant issuance.",
      },
    ),
  component: () => <ReferenceFrame name="medical" title="medical-insurance-request" />,
});
