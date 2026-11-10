import { createFileRoute } from "@tanstack/react-router";
import { ReferenceFrame } from "@/components/bc/ReferenceFrame";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "تأمين السيارات ومقارنة التغطيات",
        description: "بي كير لمقارنة تأمين المركبات والتعرف على التغطيات وخدمات التأمين في السعودية.",
      },
      {
        title: "Car insurance and coverage comparison",
        description:
          "Compare motor insurance, explore coverages and insurance services in Saudi Arabia with BCare.",
      },
    ),
  component: () => <ReferenceFrame name="home" title="home" />,
});
