import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/insurance-request")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "طلب تأمين مركبة",
        description: "طلب تأمين المركبات وبيانات المالك والمركبة.",
      },
      {
        title: "Motor insurance request",
        description: "Motor insurance request with owner and vehicle details.",
      },
    ),
  component: () => <ReferenceFrame name="motor" title="insurance-request" />,
});
