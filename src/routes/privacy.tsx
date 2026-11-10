import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/bc/PrivacyPage";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/privacy")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "سياسة الخصوصية",
        description: "سياسة جمع البيانات واستخدامها وحمايتها وحقوق المستخدم.",
      },
      {
        title: "Privacy Policy",
        description: "How we collect, use and protect your data, and your rights as a user.",
      },
    ),
  component: PrivacyPage,
});
