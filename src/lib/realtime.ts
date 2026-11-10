import { io, type Socket } from "socket.io-client";

export type ConnectionState = "unconfigured" | "connecting" | "connected" | "disconnected";
export interface SupportMessage {
  id: string;
  text: string;
  sender: "visitor" | "support";
  timestamp: string;
}
export interface RequestReceipt {
  requestId: string;
  status: "received" | "processing" | "completed";
  message?: string;
}
export const events = {
  supportSend: "support:send",
  supportMessage: "support:message",
  requestSubmit: "insurance:submit",
  requestStatus: "insurance:status",
} as const;
export function createRealtimeClient(url?: string): Socket | null {
  if (!url?.trim()) return null;
  return io(url, {
    autoConnect: false,
    transports: ["websocket", "polling"],
    reconnection: true,
    reconnectionAttempts: 5,
    timeout: 10000,
  });
}
export function initialConnectionState(url?: string): ConnectionState {
  return url?.trim() ? "disconnected" : "unconfigured";
}
