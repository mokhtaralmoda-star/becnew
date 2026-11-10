import { describe, expect, it } from "vitest";
import { createRealtimeClient, initialConnectionState } from "./realtime";
describe("Deferred backend connection", () => {
  it("does not create a connection without the backend supplied later", () => {
    expect(createRealtimeClient(undefined)).toBeNull();
    expect(createRealtimeClient(" ")).toBeNull();
    expect(initialConnectionState()).toBe("unconfigured");
  });
  it("prepares a Socket.IO client without connecting automatically", () => {
    const socket = createRealtimeClient("https://example.invalid");
    expect(socket?.connected).toBe(false);
    expect(socket?.io.opts.autoConnect).toBe(false);
    socket?.disconnect();
  });
});
