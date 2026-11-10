import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import {
  Car,
  HeartPulse,
  Plane,
  House,
  Headphones,
  Search,
  Globe,
  MessageCircle,
  X,
  Send,
  Phone,
  Menu,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/media";
import { useRealtime } from "@/hooks/use-realtime";
import { DesktopHeader, MobileHeader } from "@/components/bc/Headers";
import { DesktopFooter, MobileFooter } from "@/components/bc/Footers";
import { langSearch, useLang } from "@/lib/lang";

export function SiteShell({
  children,
  frame,
}: {
  children: ReactNode;
  frame?: "product";
  /** Kept for existing pages; the copied reference header is the same on every page. */
  compact?: boolean;
}) {
  const { lang, dir } = useLang();
  return (
    <div dir={dir} lang={lang} className={`site-shell bc-site${frame === "product" ? " product-site" : ""}`}>
      <div className={frame === "product" ? "min-[960px]:hidden" : "min-[1200px]:hidden"}>
        <MobileHeader productFrame={frame === "product"} />
      </div>
      <div className={frame === "product" ? "hidden min-[960px]:block" : "hidden min-[1200px]:block"}>
        <DesktopHeader productFrame={frame === "product"} />
      </div>
      <main>{children}</main>
      <div className="min-[1200px]:hidden">
        <MobileFooter productFrame={frame === "product"} />
      </div>
      <div className="hidden min-[1200px]:block">
        <DesktopFooter productFrame={frame === "product"} />
      </div>
      <SupportChat product={frame === "product"} />
      <BackToTop always={frame === "product"} />
    </div>
  );
}

/** Frame for copied reference pages that bring their own top bar and footer. */
export function PlainShell({ children }: { children: ReactNode }) {
  const { lang, dir } = useLang();
  return (
    <div dir={dir} lang={lang} className="site-shell bc-site font-tajawal text-foreground">
      {children}
      <SupportChat />
      <BackToTop />
    </div>
  );
}

function BackToTop({ always = false }: { always?: boolean }) {
  const [show, setShow] = useState(always);
  const { t } = useLang();
  useEffect(() => {
    const onScroll = () => setShow(always || window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [always]);
  if (!show) return null;
  return (
    <button
      className="back-to-top"
      aria-label={t("العودة للأعلى", "Back to top")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp />
    </button>
  );
}

/** Product subsites use the original orange headset launcher. */
function SupportChat({ product = false }: { product?: boolean }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { state, messages, send } = useRealtime();
  const { t } = useLang();
  return (
    <div className="support-widget">
      {open && (
        <section className="chat-panel" aria-label={t("محادثة مركز المساعدة", "Help chat")}>
          <div className="chat-heading">
            <div>
              <strong>{t("مركز المساعدة", "Help Center")}</strong>
              <small>
                {state === "connected"
                  ? t("متصل الآن", "Online now")
                  : t("غير متصل حالياً", "Currently offline")}
              </small>
            </div>
            <Button
              size="icon"
              variant="ghost"
              aria-label={t("إغلاق المحادثة", "Close chat")}
              onClick={() => setOpen(false)}
            >
              <X />
            </Button>
          </div>
          <div className="chat-messages">
            <p className="chat-welcome">
              {t("أهلاً بك في بي كير، كيف نقدر نساعدك؟", "Welcome to BCare, how can we help?")}
            </p>
            {messages.map((m) => (
              <p className={`chat-message ${m.sender}`} key={m.id}>
                {m.text}
              </p>
            ))}
            {state !== "connected" && (
              <p className="chat-notice">
                {t(
                  "خدمة المحادثة غير متاحة حالياً. تواصل معنا على",
                  "Chat is currently unavailable. Call us on",
                )}{" "}
                <a href="tel:8001180044">8001180044</a>
              </p>
            )}
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!text.trim()) return;
              setError("");
              setSending(true);
              try {
                await send(text);
                setText("");
              } catch (e) {
                setError(e instanceof Error ? e.message : t("تعذر الإرسال", "Could not send"));
              } finally {
                setSending(false);
              }
            }}
          >
            <input
              aria-label={t("رسالتك", "Your message")}
              placeholder={t("اكتب رسالتك...", "Type your message...")}
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={state !== "connected"}
            />
            <Button
              type="submit"
              size="icon"
              aria-label={t("إرسال الرسالة", "Send message")}
              disabled={sending || state !== "connected" || !text.trim()}
            >
              <Send />
            </Button>
          </form>
          {error && <p role="alert">{error}</p>}
        </section>
      )}
      <Button
        className="chat-launcher"
        size="icon"
        aria-label={open ? t("إغلاق الدعم", "Close support") : t("محادثة الدعم", "Support chat")}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : product ? <Headphones /> : <MessageCircle />}
      </Button>
    </div>
  );
}
