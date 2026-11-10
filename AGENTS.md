<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project architecture
- Keep pages as TanStack file routes; copied reference markup lives in src/components/bc, with SiteShell for pages using the main header/footer and PlainShell for reference pages that carry their own top bar and footer, so each page matches its reference frame.
- Motor uses a verbatim captured ReferenceFrame; print-policy keeps SiteShell's scoped product frame so neither changes the homepage.
- The homepage and product tab routes render captured main-site pages (public/ref/landing-<name>-<lang>[-t|-m].html) and their offer buttons open /<route>-request, which renders the captured sub-site quote form; both use the full-screen ReferenceFrame (desktop/tablet<960/phone<600), and scripts/capture_reference.py regenerates them with internal links, no scripts or trackers, and local bcare assets, so the tab flow matches the reference.
- public/ref/ref.js supplies local behaviour for the copies (tab/language navigation via postMessage, calendar, captcha refresh) and never submits form data.
- Reference offer catalogs stay local in ref.js; screenshot-derived logos use asset pointers, and unseen terms remain unspecified rather than invented because the original API is inaccessible.
- The captured Motor tab opens /motor-insurance; the logo returns home so tab navigation matches the original.
- Company information pages use CompanyReferencePage with captured bilingual content trees; render only whitelisted tags and remap reference classes to semantic tokens to preserve full source text safely.
- Captured motor entry and PolicyReferenceForm print-policy submissions remain disconnected until backend integration.
- Captured Motor button readiness uses filled valid numeric fields and consent locally; clicking only reports the disconnected state, and captcha verification stays server-side when integration is supplied.
- Keep Socket.IO browser-only and disconnected when VITE_SOCKET_URL is absent; never send, queue, or persist form data before backend integration.
- Define provisional realtime event names centrally in src/lib/realtime.ts so the backend contract can be replaced in one place.
