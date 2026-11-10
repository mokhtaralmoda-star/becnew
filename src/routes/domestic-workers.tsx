import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/domestic-workers")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "العمالة المنزلية",
        description: "مقارنة عروض التأمين الطبي للعمالة المنزلية مع ربط مباشر بمجلس الضمان الصحي.",
      },
      {
        title: "Domestic workers insurance",
        description: "Compare domestic worker medical insurance offers with a direct link to the health insurance council.",
      },
    ),
  component: () => <ReferenceFrame name="landing-helpers" title="domestic-workers" />,
});
