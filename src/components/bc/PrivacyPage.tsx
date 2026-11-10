import { CompanyReferencePage } from "./CompanyReferencePage";
import content from "@/lib/reference/privacy.json";

export function PrivacyPage() {
  return <CompanyReferencePage content={content} active="/privacy" />;
}
