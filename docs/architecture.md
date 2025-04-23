# docs/architecture.md

## Core Invariants (v0.1 – 2025‑04‑23)

- **Content source of truth**: all publicly rendered pages are Markdown (or MDX) files stored in `/content/**` and version‑controlled in the GitHub repo.  No CMS database will override this.
- **Dynamic data**: Cloudflare **D1** is the authoritative store for RSVPs, surveys, and any per‑user records.
- **Write access paths**
  - **GitHub Pull Request** workflow for Markdown edits (groups, events, static pages).
  - **Cloudflare Access** protects any browser‑based admin pages and CRUD APIs.
- **Email stack**: **Brevo** (Sendinblue) is the sole outbound email platform and contact CRM.  All transactional & marketing messages flow through its API.  The code must keep the provider pluggable via a `sendEmail()` helper.
- **Edge runtime**: Cloudflare Pages + Functions handle all serverless logic; no separate server.
- **Security**: Secrets (Brevo API key, Access JWT secret, etc.) live only in Cloudflare environment variables; never committed to Git.
- **Backups**: nightly export of D1 to R2 (implemented by Q3 2025).

---

# docs/roadmap.md

| Horizon | Target Users | Must‑haves | Nice‑to‑haves |
|---------|--------------|------------|---------------|
| **H0 – Prototype** (now → 100) | 0‑100 | * Static Astro site with Markdown pages  
* `rsvp` Pages Function saving to D1  
* **Brevo transactional** confirmation email helper  
* Manual CSV export from D1 | * Basic `/events` list view  
* No admin UI |
| **H1 – Early traction** (100 → 1 000) | 100‑1 000 | * Migrate to **Brevo marketing automations** for reminders  
* Filtered event list by tag/group  
* Add one co‑admin via GitHub PR workflow  
* Cloudflare Access‑protected `/admin/events` CRUD form | * Slack/Discord webhook on new RSVP  
* D1 → R2 nightly backup |
| **H2 – Scaling** (1 000 → 10 000) | 1 000‑10 000 | * Markdown workflow for local sub‑sites (`/groups/{slug}`)  
* Cloudflare Access admin panel with full CRUD + CSV export  
* Analytics dashboard (worker logging → Brevo stats)  
* Subdomain support per city (`indy.rfindiana.org`) | * Automated A/B subject‑line testing via Brevo  
* Vector search of resources |

---

## Sprint 0 Check‑list (two‑week spike)

1. **Docs** – architecture & roadmap committed (✓ today)
2. **Scaffold** `/content/events/sample-event.md` with RSVP form and `/functions/rsvp.js` (Brevo API).
3. **Enable** D1 and create tables `events`, `rsvps`.
4. **Deploy** to preview – invite first local admin to test PR flow.
5. **Retrospective doc** `/docs/retrospectives/2025‑05‑07.md` after user feedback.

