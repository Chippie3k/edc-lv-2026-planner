# EDC LV 2026 Planner

A live, shared planner for EDC Las Vegas 2026 — schedule, picks, crews, and route planning across the Speedway.

## Stack
- Static HTML + vanilla JS (no build step)
- Supabase (Postgres + Realtime) for shared crews
- Vercel for hosting

## Files
- `index.html` — markup + CSS
- `app.js` — all data + logic (schedule, routes, Supabase ops, realtime)
- `vercel.json` — deploy config (no build, static)

## Run locally
Just open `index.html` in a browser, or serve with any static server:
```
npx serve .
```

## Deploy to Vercel
1. Push this folder to a GitHub repo
2. In Vercel: **Add New → Project → Import Git Repository**
3. Framework Preset: **Other** (static)
4. Build/Output: leave defaults (no build needed)
5. Deploy

Or via CLI:
```
npm i -g vercel
vercel
```

## Supabase
Tables live in the connected Supabase project under `public.edc_*`:
- `edc_groups` — shared crews with `join_code`
- `edc_group_members` — names of members per crew
- `edc_group_picks` — sets each crew has picked

The anon key is embedded in `app.js`. RLS is permissive (public read/write) — crews are gated by knowing the 6-char join code, not by auth.

## Onboarding flow
1. Enter name
2. Create or Join a crew (or skip)
3. Get a shareable join code

Personal picks stay in localStorage. Crew picks/members sync via Supabase Realtime.
