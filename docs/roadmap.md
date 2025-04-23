# Roadmap

## H0 – MVP (0 → 100 users)

- Brevo from MailerLite -- See brevoFromMailerLite.md
  
- rsvp Pages Function saving to D1
- Brevo transactional confirmation email helper
- Manual CSV export from D1
- Basic /events list view
- No admin UI

## H1 – Early traction (100 → 1,000 users)

- Migrate to Brevo marketing automations for reminders
- Filtered event list by tag/group
- Add one co-admin via GitHub PR workflow
- Cloudflare Access-protected /admin/events CRUD form
- Slack/Discord webhook on new RSVP
- D1 → R2 nightly backup

## H2 – Scaling (1,000 → 10,000 users)

- Markdown workflow for local sub-sites (/groups/{slug})
- Cloudflare Access admin panel with full CRUD + CSV export
- Analytics dashboard (worker logging → Brevo stats)
- Subdomain support per city (indy.rfindiana.org)
- Automated A/B subject-line testing via Brevo
- Vector search of resources
