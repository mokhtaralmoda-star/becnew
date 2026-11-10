import { CompanyReferencePage } from "./CompanyReferencePage";
import content from "@/lib/reference/terms.json";

export function TermsPage() {
  return <CompanyReferencePage content={content} active="/terms" />;
}
