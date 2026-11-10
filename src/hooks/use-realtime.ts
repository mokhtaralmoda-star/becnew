import { useCallback, useEffect, useRef, useState } from "react";
import type { Socket } from "socket.io-client";
import {
  createRealtimeClient,
  initialConnectionState,
  events,
  type ConnectionState,
  type SupportMessage,
} from "@/lib/realtime";

const url = import.meta.env["VITE_SOCKET_URL"] as string | undefined;
export function useRealtime() {
  const socket = useRef<Socket | null>(null);
  const [state, setState] = useState<ConnectionState>(initialConnectionState(url));
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  useEffect(() => {
    const client = createRealtimeClient(url);
    if (!client) return;
    socket.current = client;
    const connect = () => setState("connected");
    const disconnect = () => setState("disconnected");
    const receive = (message: SupportMessage) => {
      if (typeof message?.id !== "string" || typeof message?.text !== "string") return;
      setMessages((previous) =>
        previous.some((item) => item.id === message.id)
          ? previous
          : [...previous, { ...message, sender: "support" }],
      );
    };
    setState("connecting");
    client
      .on("connect", connect)
      .on("disconnect", disconnect)
      .on("connect_error", disconnect)
      .on(events.supportMessage, receive);
    client.connect();
    return () => {
      client
        .off("connect", connect)
        .off("disconnect", disconnect)
        .off("connect_error", disconnect)
        .off(events.supportMessage, receive);
      client.disconnect();
      socket.current = null;
    };
  }, []);
  const send = useCallback(async (text: string) => {
    const client = socket.current;
    if (!client?.connected)
      throw new Error("خدمة المحادثة غير متصلة حالياً. يمكنك التواصل معنا هاتفياً.");
    const message: SupportMessage = {
      id: crypto.randomUUID(),
      text: text.trim(),
      sender: "visitor",
      timestamp: new Date().toISOString(),
    };
    const ack = await client.timeout(10000).emitWithAck(events.supportSend, message);
    if (!ack?.ok) throw new Error("لم يتم إرسال الرسالة، حاول مجدداً.");
    setMessages((previous) => [...previous, message]);
  }, []);
  return { state, messages, send };
}
