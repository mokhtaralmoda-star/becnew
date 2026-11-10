import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/bc/AboutPage";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/about")({
  head: (ctx) =>
    pageHead(
      ctx,
      {
        title: "عن بي كير",
        description: "تعرّف على بي كير وقيمها ورؤيتها وإجابات الأسئلة الشائعة.",
      },
      {
        title: "About BCare",
        description: "Learn about BCare, its values, its vision and answers to common questions.",
      },
    ),
  component: AboutPage,
});
