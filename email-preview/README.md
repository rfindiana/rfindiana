# 📬 RFIndiana Newsletter Generator

This Python script automates the generation of email-safe HTML newsletters from your Astro components.

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   cd email-preview
   pip install -r requirements.txt
   ```

2. **Generate newsletter**:
   ```bash
   python generate_newsletter.py
   ```

3. **Use the output**:
   - Raw HTML for Brevo: `output/YYYYMMDD-newsletter-raw.html`
   - Team preview: `output/YYYYMMDD-newsletter-preview.html`
   - Public URL: `https://rfindiana.org/email-preview/newsletter-raw.html`

## 📁 Output Files

- **`newsletter-raw.html`**: Clean HTML ready to paste into Brevo (no JavaScript, no head section)
- **`newsletter-preview-YYYYMMDD.html`**: Preview with wrapper for team review
- **`YYYYMMDD-newsletter-raw.html`**: Timestamped backup in output/ directory

## 🔄 How It Works

1. **Builds** your Astro site (`npm run build`)
2. **Extracts** newsletter content from `/email-preview` page
3. **Cleans** HTML (removes Astro attributes, converts image paths)
4. **Generates** both raw and preview versions
5. **Copies** files to public directory for web access

## 🛠️ Troubleshooting

**"npm not found"**: Install Node.js and npm
**"Built preview file not found"**: Check that Astro build succeeded
**"Could not find preview-container"**: Verify email-preview.astro page structure

## 📝 Next Steps

This script replaces the manual process of copying HTML. In the future, it can be extended to:
- Pull content from Google Docs (as outlined in the main WeeklyNewsletter.md)
- Process images automatically
- Handle multiple newsletter templates