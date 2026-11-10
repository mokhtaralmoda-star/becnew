import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/shell";
import { VerifyPage } from "@/components/bc/VerifyPage";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/verify")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "التحقق من البوليصة",
        description: "التحقق من صلاحية بيانات وثيقة التأمين.",
      },
      {
        title: "Policy verification",
        description: "Check the validity of your insurance policy details.",
      },
    ),
  component: () => (
    <SiteShell frame="product">
      <VerifyPage />
    </SiteShell>
  ),
});
