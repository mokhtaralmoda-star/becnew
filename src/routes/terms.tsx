import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "@/components/bc/TermsPage";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/terms")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "الشروط والأحكام",
        description: "الشروط المنظمة لاستخدام منصة بي كير وخدمات وساطة التأمين.",
      },
      {
        title: "Terms and Conditions",
        description: "The terms governing use of the BCare platform and its insurance brokerage services.",
      },
    ),
  component: TermsPage,
});
