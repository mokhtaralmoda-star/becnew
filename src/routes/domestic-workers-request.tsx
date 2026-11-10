import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/domestic-workers-request")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "العمالة المنزلية - طلب العروض",
        description: "مقارنة عروض التأمين الطبي للعمالة المنزلية مع ربط مباشر بمجلس الضمان الصحي.",
      },
      {
        title: "Domestic workers insurance - Request quotes",
        description: "Compare domestic worker medical insurance offers with a direct link to the health insurance council.",
      },
    ),
  component: () => <ReferenceFrame name="helpers" title="domestic-workers-request" />,
});
