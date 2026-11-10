# Socket.IO handoff

The frontend runs without a backend. Set the public `VITE_SOCKET_URL` once the backend is supplied. No identity, vehicle or chat information is stored, queued or sent while disconnected. No payment, OTP, identity-provider login or insurance-result pages exist.

`src/lib/realtime.ts` is the provisional contract; align these names/payloads with the actual backend before enabling submission.

- `support:send` (client → server): `{ id, text, sender: "visitor", timestamp }`; acknowledge `{ ok: true }` only after accepting the message.
- `support:message` (server → client): `{ id, text, sender: "support", timestamp }`.
- `insurance:submit` and `insurance:status` are reserved only; forms deliberately do not emit them until the real backend contract, authentication, authorization, validation and consent requirements are supplied.

The chat uses acknowledged sends, a ten-second timeout, reconnection and listener cleanup. The server must validate all payloads, authenticate callers where required, restrict CORS to the app origin and enforce room access. Use HTTPS/WSS in production. Never put server credentials in VITE variables.

The motor/request forms show an unavailable message and never manufacture an insurance quote or successful submission. Support offers the existing phone number while offline. Informational/legal copy is copied from the provided reference, not a claim that this deployment already provides its data handling guarantees.
