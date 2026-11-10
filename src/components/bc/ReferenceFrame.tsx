import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";

const MOBILE_BELOW = 960;
const PHONE_BELOW = 600;

/**
 * Shows a captured copy of an original page (public/ref/<name>-<lang>[-m].html)
 * full-screen. Navigation inside the copy is relayed back to the app's own routes.
 */
export function ReferenceFrame({ name, title }: { name: string; title: string }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [variant, setVariant] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVariant(w < PHONE_BELOW ? "-m" : w < MOBILE_BELOW ? "-t" : "");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const data = e.data as { type?: string; to?: string; lang?: string };
      if (data?.type !== "ref-nav" || typeof data.to !== "string" || !data.to.startsWith("/")) return;
      navigate({ to: data.to, search: data.lang === "en" ? { lang: "en" } : {} } as never);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate]);

  if (variant === null) return <div className="fixed inset-0 bg-background" aria-busy="true" />;

  return (
    <iframe
      key={`${name}-${lang}${variant}`}
      src={`/ref/${name}-${lang}${variant}.html`}
      title={title}
      className="fixed inset-0 h-dvh w-full border-0 bg-background"
    />
  );
}
