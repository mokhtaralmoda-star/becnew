import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { useRealtime } from "@/hooks/use-realtime";

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
  const frame = useRef<HTMLIFrameElement>(null);
  const { state, messages, send } = useRealtime();
  const sendRef = useRef(send);
  const stateRef = useRef(state);
  const forwarded = useRef(new Set<string>());
  sendRef.current = send;
  stateRef.current = state;

  const reply = (data: Record<string, unknown>) =>
    frame.current?.contentWindow?.postMessage(data, window.location.origin);

  // Support-chat messages typed inside the copy go out over Socket.IO; none are queued or stored.
  useEffect(() => {
    const onChat = (e: MessageEvent) => {
      if (e.origin !== window.location.origin || e.source !== frame.current?.contentWindow) return;
      const data = e.data as { type?: string; id?: unknown; text?: unknown };
      if (data?.type !== "ref-chat-send" || typeof data.id !== "string" || typeof data.text !== "string") return;
      const id = data.id;
      const text = data.text.trim().slice(0, 2000);
      if (!text) return;
      if (stateRef.current !== "connected") {
        reply({ type: "ref-chat-result", id, ok: false, reason: "offline" });
        return;
      }
      sendRef
        .current(text)
        .then(() => reply({ type: "ref-chat-result", id, ok: true }))
        .catch(() => reply({ type: "ref-chat-result", id, ok: false, reason: "failed" }));
    };
    window.addEventListener("message", onChat);
    return () => window.removeEventListener("message", onChat);
  }, []);

  useEffect(() => {
    messages.forEach((m) => {
      if (m.sender !== "support" || forwarded.current.has(m.id)) return;
      forwarded.current.add(m.id);
      reply({ type: "ref-chat-incoming", text: m.text });
    });
  }, [messages]);

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
      ref={frame}
      key={`${name}-${lang}${variant}`}
      src={`/ref/${name}-${lang}${variant}.html`}
      title={title}
      className="fixed inset-0 h-dvh w-full border-0 bg-background"
    />
  );
}
