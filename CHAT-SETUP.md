# Lunaar Chat — setup

The chat is static files in `extra/chat/` (served at `/chat/`) and talks to Supabase.

1. Supabase → **SQL Editor** → run `chat-sql/schema.sql` once (safe to re-run).
2. Optional owner tools: run `chat-sql/owner-tools.sql`. Edit the owner email inside
   it first. Keep these SQL files out of the public web folder (they are not served).
3. Supabase → **Authentication → URL Configuration**: set Site URL to your deployed
   site (e.g. `https://<name>.onrender.com`) and add `https://<name>.onrender.com/chat/**`
   to Redirect URLs.
4. `extra/chat/config.js` already points at your Supabase project. It uses the
   publishable/anon key, which is safe in the browser **only because Row Level Security
   is on**. Never put a `service_role` key in this repo.
