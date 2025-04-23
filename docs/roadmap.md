# Roadmap

✅ Start roadmap file

## H0 – MVP (0 → 100 users)

- Brevo from MailerLite -- See brevoFromMailerLite.md

- Connect to Cloudflare D1: provision database, create `rsvps` table schema
  
- rsvp Pages Function saving to D1
- Brevo transactional confirmation email helper
- Manual CSV export from D1
- Basic /events list view
- No admin UI
- Determine calendar strategy: prototype a shared national calendar and evaluate feasibility of generating local group calendars via Markdown files

## H1 – Early traction (100 → 1,000 users)

- Migrate to Brevo marketing automations for reminders
- Filtered event list by tag/group
- Launch national calendar view; evaluate dynamic or Markdown-driven generation of local calendars
- Add one co-admin via GitHub PR workflow
- Cloudflare Access-protected /admin/events CRUD form
- Slack/Discord webhook on new RSVP
- D1 → R2 nightly backup

## H2 – Scaling (1,000 → 10,000 users)

- Markdown workflow for local sub-sites (/groups/{slug})
- Local calendars integrated per group slug (`/groups/{slug}/calendar`) based on content-driven or dynamic model
- Cloudflare Access admin panel with full CRUD + CSV export
- Analytics dashboard (worker logging → Brevo stats)
- Optional subdomain support per city (`indy.rfindiana.org`), if justified by group autonomy or branding — default remains `/groups/{slug}`
- Automated A/B subject-line testing via Brevo
- Vector search of resources
