import { CompanyReferencePage } from "./CompanyReferencePage";
import content from "@/lib/reference/about.json";

export function AboutPage() {
  return <CompanyReferencePage content={content} active="/about" />;
}
