import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/motor-insurance")({
  head: (ctx) =>
    pageHead(
      ctx,
      { title: "تأمين المركبات", description: "طلب تأمين المركبات وبيانات المالك والمركبة." },
      { title: "Motor insurance", description: "Motor insurance request with owner and vehicle details." },
    ),
  component: () => <ReferenceFrame name="motor" title="تأمين المركبات | Motor insurance" />,
});
