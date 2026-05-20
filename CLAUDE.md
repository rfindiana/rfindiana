# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for Religious Freedom Indiana (rfindiana.org), built with Astro and deployed on Cloudflare Pages. The site promotes religious freedom advocacy and provides resources for Indiana residents.

## Important Instructions

### Git Commit Workflow
- **ALWAYS** present the commit message for approval before creating the actual commit
- When asked to commit, first show the proposed commit message and wait for confirmation
- Only proceed with `git commit` after receiving explicit approval
- Keep commit messages brief — subject line only, no body unless the user asks

## Key Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` or `npm start` - Start development server at http://localhost:3000
- `npm run build` - Build the site (runs `./set-build-version.sh` first)
- `npm run preview` - Preview the production build

### Newsletter Generation
The site includes an automated Python newsletter generation system:
```bash
cd email-preview
python generate_newsletter.py
```
This generates email-safe HTML newsletters from Astro components for use in Brevo campaigns.

**IMPORTANT**: When working with email-preview components or newsletter generation, always refer to `docs/WeeklyNewsletter.md` for detailed instructions, styling standards, and workflow guidelines.

## Architecture

### Tech Stack
- **Framework**: Astro 5.5 with MDX support
- **Styling**: Tailwind CSS with Typography plugin
- **Icons**: Astro Icon with Iconify
- **Email**: Brevo (formerly Sendinblue) for newsletter management
- **Hosting**: Cloudflare Pages with Functions for serverless logic
- **Database**: Cloudflare D1 for dynamic data (RSVPs, surveys, user records)
- **Analytics**: Google Analytics (gtag.js)

### Project Structure
- `src/pages/` - Astro pages (routes)
- `src/components/` - Reusable Astro components
  - `email-preview/` - Newsletter components
  - `navbar/` - Navigation components
  - `ui/` - UI primitives
- `src/layouts/` - Page layouts
- `src/content/` - Content collections (team members)
- `src/data/` - TypeScript data files (events, resources)
- `src/utils/` - Utility functions and constants
- `docs/` - Documentation (architecture, setup guides)
- `email-preview/` - Newsletter generation Python scripts
- `public/` - Static assets (images, documents, PDFs)

### Key Design Patterns

1. **Content Management**: 
   - Static content uses Markdown/MDX files in `/content/`
   - Dynamic data stored in Cloudflare D1
   - Event data managed in `src/data/events.ts`

2. **Email Integration**:
   - Brevo forms embedded via iframe for newsletter signups
   - Custom newsletter generation system using Python/BeautifulSoup
   - Email-specific components in `src/components/email-preview/`
   - **Image URLs**: Components use conditional URLs - local paths for development (`/email-preview/images/`) and absolute URLs for production (`https://www.rfindiana.org/email-preview/images/`)
   - **CRITICAL**: New images must be committed and pushed to production before testing in Brevo, as email clients require absolute URLs to publicly accessible images

3. **Styling**:
   - Tailwind CSS with custom configuration
   - Global styles in `src/styles/global.css`
   - Font loading: Inter Variable and Bricolage Grotesque

4. **Security**:
   - Environment variables for secrets (Brevo API key, etc.)
   - Cloudflare Access protects admin pages
   - `.env.local` for local development (excluded from Git)

### Important Files
- `astro.config.mjs` - Astro configuration
- `src/utils/constants.ts` - Site-wide constants (SITE, SOCIAL)
- `src/layouts/Layout.astro` - Main layout with SEO, analytics, and Brevo integration
- `docs/architecture.md` - Core system invariants and architecture decisions
- `docs/brevo-instructions.md` - Email integration setup guide
- **`docs/WeeklyNewsletter.md`** - Complete newsletter system documentation, styling standards, and workflow instructions

### Deployment
The site is deployed to Cloudflare Pages. The build process:
1. Runs `./set-build-version.sh` to set version metadata
2. Builds the Astro site
3. Deploys to Cloudflare Pages with environment variables

### Newsletter Workflow
1. Create/update newsletter components in `src/components/email-preview/`
2. **If adding new images**: Add to `public/email-preview/images/` and commit/push before testing
3. Run `python email-preview/generate_newsletter.py`
4. Output files in `email-preview/output/`:
   - `newsletter-raw.html` - Clean HTML for Brevo
   - `newsletter-preview.html` - Preview with wrapper

The newsletter system extracts content from the built Astro site and creates email-safe HTML with inline styles compatible with email clients.

**Newsletter Image Requirements:**
- Images must use conditional URLs: `import.meta.env.DEV ? "/email-preview/images/filename.jpg" : "https://www.rfindiana.org/email-preview/images/filename.jpg"`
- The newsletter generation script sets `NODE_ENV=production` to ensure absolute URLs in generated HTML
- Always push image changes to production before testing newsletters in Brevo