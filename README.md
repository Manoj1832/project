# Adithya Constructions & Architects

Web application and AI studio assistant for **Adithya Constructions & Architects** (Coimbatore & Salem, Tamil Nadu, India) — covering residential turnkey construction, commercial & PEB buildings, architectural & Vaastu design, structural engineering, and DTCP/Corporation approvals.

## Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Radix UI (`shadcn/ui`), React Router v6
- **Validation & Security:** Zod schemas ([`src/lib/validation.ts`](src/lib/validation.ts), [`src/lib/rag-guards.ts`](src/lib/rag-guards.ts)), CSP & security headers ([`vercel.json`](vercel.json))
- **AI Studio Assistant (RAG):** Client-side knowledge retrieval ([`src/lib/rag.ts`](src/lib/rag.ts)) backed by a server-side Vercel Function proxy ([`api/chat.ts`](api/chat.ts)) calling Groq (`llama-3.3-70b-versatile`) with structured JSON output and automatic local KB fallback
- **CI/CD:** GitHub Actions quality gates ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) & Dependabot ([`.github/dependabot.yml`](.github/dependabot.yml))

## Local Development

```bash
npm install
cp .env.example .env
npm run dev
```

## Verification Commands

```bash
npm run lint          # ESLint
npx tsc --noEmit      # TypeScript check
npm test              # Node native unit tests (validation, RAG guards, WhatsApp formatting)
npm run build         # Production Vite bundle -> dist/
```

## Environment Variables

Configure these in **Vercel Project Settings → Environment Variables** (or local `.env` when running `vercel dev`):

| Variable | Scope | Required | Description |
| --- | --- | --- | --- |
| `GROQ_API_KEY` | Server-side only | Optional (falls back to local KB if unset) | Groq API key used exclusively by `api/chat.ts` |
| `VITE_EMAILJS_SERVICE_ID` | Client | Optional | EmailJS service ID for email inquiries |
| `VITE_EMAILJS_PUBLIC_KEY` | Client | Optional | EmailJS public key |
| `VITE_EMAILJS_CONTACT_TEMPLATE_ID` | Client | Optional | EmailJS contact template ID |
| `VITE_EMAILJS_APPOINTMENT_TEMPLATE_ID` | Client | Optional | EmailJS consultation template ID |

> Never prefix `GROQ_API_KEY` with `VITE_`—client `VITE_*` variables are bundled into browser JavaScript.

## Deploying to Vercel & Custom Domain

1. Import `https://github.com/Manoj1832/project.git` in Vercel (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
2. Add `GROQ_API_KEY` (and optional EmailJS keys) under **Settings → Environment Variables**.
3. Deploy. `/api/chat` will run automatically as a Vercel Serverless Function alongside the static SPA.
4. Connect your custom domain under **Settings → Domains** and update `domain` in [`src/config/site.ts`](src/config/site.ts), [`index.html`](index.html), [`public/robots.txt`](public/robots.txt), and [`public/sitemap.xml`](public/sitemap.xml) if the domain changes.
