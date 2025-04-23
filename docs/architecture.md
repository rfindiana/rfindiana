# docs/architecture.md

## Core Invariants (v0.1 – 2025‑04‑23)

- **Public content workflow**: structured long-form content (event descriptions, chapter profiles, blog posts, etc.) is authored in Markdown (`/content/**`) and rendered via Astro templates. Page layout, navigation, and interactive logic are handled in `.astro` files.
- **Dynamic data**: Cloudflare **D1** is the authoritative store for RSVPs, surveys, and any per‑user records.
- **Write access paths**
  - **GitHub Pull Request** workflow for Markdown edits (groups, events, static pages).
  - **Cloudflare Access** protects any browser‑based admin pages and CRUD APIs.
- **Email stack**: **Brevo** (Sendinblue) is the sole outbound email platform and contact CRM.  All transactional & marketing messages flow through its API.  The code must keep the provider pluggable via a `sendEmail()` helper.
- **Edge runtime**: Cloudflare Pages + Functions handle all serverless logic; no separate server.
- **Security**: Secrets (e.g. Brevo API key, Access JWT secret) are injected via Cloudflare environment variables in production. During local development, a `.env.local` file should be used to mirror these values. This file is excluded from Git to prevent accidental exposure.
- **Backups**: nightly export of D1 to R2 

