# Lunaar — by james :)

A fast web proxy site built on [Interstellar](https://github.com/UseInterstellar/Interstellar)
(GPL-3.0), plus the Lunaar Chat (accounts, servers, channels, DMs) in the nav.

## Deploy (recommended: Render, free, ~5 minutes, works from a phone)

The proxy's fast transport (Wisp) needs a host that allows **WebSockets**.
**Vercel cannot do this**, which is why a proxy on Vercel is slow or broken. Use Render:

1. Push this folder to your GitHub repo (replace the old files).
2. On <https://render.com>: **New → Web Service → connect your repo**.
   Render reads `render.yaml` / `Dockerfile` automatically. Pick the **Free** plan.
3. Deploy. You get a `https://<name>.onrender.com` link. Open it, done.

Notes
- Free Render instances **sleep when idle**; the first visit after a while takes
  ~30-60 s to wake. A paid instance (or any VPS) stays awake and is the fastest.
- Any Docker/Node host with WebSockets works the same way (Koyeb, Fly.io, Railway, a VPS).
- Run locally: `pnpm install && pnpm build && pnpm start` → <http://localhost:8080>
  (Node 22 required).
- **The proxy's internal paths are re-randomised on every build/deploy.** Old
  bookmarks to `/games`-style paths are not stable; use the nav bar.

## Chat

The chat lives in `extra/chat/` and is copied into the build as `/chat/`.
Database setup: see [CHAT-SETUP.md](CHAT-SETUP.md).

## Changes from stock Interstellar

- Removed the maintainers' **popunder ad script** and **Google Analytics tag** that
  stock Interstellar injects on forks (`static/assets/js/main.js`, `analytics.js`,
  `ads.txt`). If you'd like to support the Interstellar team instead, see their
  Patreon, or restore those parts from upstream.
- Added the **Chat** link, rebranded the home heading/splash, removed upstream
  Discord/email links.
- Chat is kept in `extra/` (not `static/`) so Interstellar's build, which renames
  CSS classes and verifies every HTML file, never touches it.
- Dockerfile uses pnpm + `pnpm build` (the upstream Dockerfile skips the optimised build).

## Settings worth knowing

Interstellar ships with **auto about:blank cloaking on** and tab-title/icon cloaking
(default "Thesaurus.com"). Visitors can change or turn these off on the Settings
page. Defaults live in `static/assets/js/home.js` and `settings.js`.

## License

GPL-3.0-or-later (see LICENSE). Based on Interstellar by InterstellarNetwork.
If you publish a modified copy, keep the source available under the same license.
