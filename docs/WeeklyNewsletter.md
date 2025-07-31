# 📬 RFIndiana Weekly Newsletter System

## Overview

The RFIndiana Weekly Newsletter System streamlines newsletter creation by converting Astro components into email-ready HTML. This system enables team members to write and edit content in reusable components while maintaining consistent formatting and branding for email campaigns.

### Strategic Goals
- **Component-Based Content**: Reusable Astro components for consistent newsletter sections
- **Automated Generation**: Python script automatically builds and formats HTML
- **Consistent Branding**: Maintain visual consistency across all newsletters
- **Efficient Workflow**: Reduce time from content creation to email delivery
- **Quality Control**: Preview newsletters before sending to subscribers

---

## 🛠️ Technical Architecture

### Project Structure
```
rfindiana-astroship/
├── email-preview/
│   ├── generate_newsletter.py   # Python script for automated generation
│   ├── requirements.txt         # Python dependencies
│   ├── venv/                    # Python virtual environment
│   ├── README.md               # Generation instructions
│   └── output/                 # Generated newsletters
│       ├── YYYYMMDD-newsletter-raw.html     # Raw HTML for Brevo
│       └── YYYYMMDD-newsletter-preview.html # Team preview
├── src/components/email-preview/    # Astro newsletter components
│   ├── OnOurCalendar.astro
│   ├── AugustPrayerWatch.astro
│   ├── YouHaventMissedYourChance.astro
│   ├── VolunteersNeeded.astro
│   ├── OngoingAdvocacy.astro
│   ├── AdvocacyTeamNews.astro
│   ├── EducationTeamNews.astro
│   └── InTheNews.astro
├── src/pages/email-preview.astro    # Preview page for team
└── public/email-preview/
    ├── newsletter-raw.html          # Always current raw HTML
    ├── newsletter-preview-YYYYMMDD.html # Timestamped previews
    └── images/                      # Newsletter images
```

### How It Works
1. **Content Creation**: Team members edit Astro components with TypeScript interfaces
2. **Automated Build**: Python script runs `npm run build` to generate latest HTML
3. **Content Extraction**: Script extracts newsletter content from built preview page
4. **HTML Cleaning**: Removes Astro-specific attributes and formats nicely
5. **File Generation**: Creates both raw HTML (for Brevo) and preview (for team)
6. **Public Deployment**: Copies files to public directory for web access

---

## 🚀 Setup Guide

### 1. Development Environment
1. **Node.js and npm**: Required for Astro build process
2. **Python 3.7+**: Required for newsletter generation script
3. **Text editor**: For editing Astro components (VS Code recommended)

### 2. Python Environment Setup
```bash
cd email-preview
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Component Development
- **Edit components** in `src/components/email-preview/`
- **Use TypeScript interfaces** for type safety and IntelliSense
- **Test locally** with `npm run dev` at `/email-preview`
- **Add images** to `public/email-preview/images/`

---

## 📝 Content Guidelines

### Astro Component Structure
- **Use TypeScript interfaces** for props and data structures
- **Inline CSS styles** for email compatibility
- **Email-safe HTML** (tables for layout, web-safe fonts)
- **Production image paths** (https://rfindiana.org/email-preview/images/)

### Component Development Best Practices
- **Consistent styling**: Use Arial font family and established color schemes
- **Mobile-first**: Ensure components work on small screens
- **Email client compatibility**: Test with various email clients
- **Accessible markup**: Include alt text for images, proper heading hierarchy
- **TypeScript typing**: Define interfaces for all component props

### Image Guidelines
- **Optimize file sizes**: Keep images under 500KB when possible
- **Use web-safe formats**: JPG, PNG work best for email
- **Descriptive filenames**: Use clear, descriptive names
- **Alt text**: Always include meaningful alt attributes

---

## 🔄 Workflow

### For Content Contributors
1. **Edit Astro components** in `src/components/email-preview/`
2. **Update component content** using TypeScript interfaces for type safety
3. **Add images** to `public/email-preview/images/` directory
4. **Test locally** by running `npm run dev` and visiting `/email-preview`
5. **Notify content maintainer** when ready for generation

### For Content Maintainer

#### First-Time Setup (One Time Only)
1. **Set up Python environment**:
   ```bash
   cd email-preview
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

#### Generate Newsletter (Every Time)
1. **Run the automated generator**:
   ```bash
   cd email-preview
   source venv/bin/activate  # Activate virtual environment
   python generate_newsletter.py
   ```

2. **The script automatically**:
   - Builds the Astro site (`npm run build`) - you don't run this manually
   - Extracts newsletter content from `/email-preview` page
   - Cleans and formats the HTML
   - Generates two files in `email-preview/output/`:
     - `YYYYMMDD-newsletter-raw.html` (for Brevo)
     - `YYYYMMDD-newsletter-preview.html` (for team review)
   - Copies files to `public/email-preview/` for web access

3. **Find your generated files**:
   - **Team preview**: `email-preview/output/YYYYMMDD-newsletter-preview.html`
   - **Web preview**: `https://rfindiana.org/email-preview/newsletter-raw.html`
   - **Brevo-ready HTML**: `email-preview/output/YYYYMMDD-newsletter-raw.html`

4. **Deploy to Brevo**:
   - Open `email-preview/output/YYYYMMDD-newsletter-raw.html` in a text editor
   - Copy all HTML content (Ctrl+A, Ctrl+C)
   - Paste into Brevo campaign editor
   - Send test emails before final deployment

#### Troubleshooting
- **"npm not found"**: Ensure Node.js is installed
- **"Built preview file not found"**: Check that Astro build succeeded
- **Virtual environment issues**: Recreate with `python3 -m venv venv`

---

## 🎨 Styling Reference

### HTML Conversion Rules
| Element | Style |
|---------|--------|
| Headings (H2) | `font-size: 30px; font-family: Arial; color: #333;` |
| Body Text | `font-size: 18px; font-family: Arial; line-height: 1.6;` |
| Bulleted Lists (UL) | `margin: 4px 0 0 0; padding-left: 40px; list-style-type: disc;` |
| List Items (LI) | `margin-bottom: 8px; list-style-type: disc; font-family: Arial, sans-serif; font-size: 18px; line-height: 1.6;` |
| Links | Auto-converted to `mailto:` for email addresses |
| Images | `max-width: 100%; height: auto;` |

### Email-Safe Styling
- **Inline CSS only**: No external stylesheets
- **Table-based layouts**: For complex structures
- **Web-safe fonts**: Arial, Helvetica, sans-serif
- **High contrast**: Ensure readability across email clients

---

## 🔧 Troubleshooting

### Common Issues

**"npm not found"**
- Install Node.js from https://nodejs.org/
- Verify installation with `node --version` and `npm --version`

**"Built preview file not found"**
- Check that `npm run build` completed successfully
- Verify `/email-preview` page exists in Astro project
- Ensure Astro components are properly imported

**"Python virtual environment issues"**
- Recreate virtual environment: `rm -rf venv && python3 -m venv venv`
- Activate virtual environment before running script
- Install dependencies: `pip install -r requirements.txt`

**"BeautifulSoup/lxml not found"**
- Ensure virtual environment is activated
- Reinstall dependencies: `pip install -r requirements.txt`

**"HTML formatting issues"**
- Test generated HTML in multiple email clients
- Validate HTML structure using online validators
- Check that inline CSS styles are preserved

**"Images not displaying in email"**
- Verify images are in `public/email-preview/images/`
- Check that image paths use production URLs (https://rfindiana.org/...)
- Ensure image files are web-optimized (under 500KB)

### Debug Mode
Add this to `generate_newsletter.py` for detailed logging:
```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

---

## 📊 Performance Metrics

### Track These KPIs
- **Open rates**: Monitor email engagement
- **Click-through rates**: Measure link effectiveness
- **Content completion time**: From draft to published
- **Contributor feedback**: Survey content creators quarterly

### Optimization Strategies
- **A/B test subject lines**: Use Brevo's built-in testing
- **Analyze content performance**: Track which sections get most engagement
- **Iterate on design**: Test different layouts and styling
- **Monitor deliverability**: Check spam scores and inbox placement

---

## 🚀 Future Enhancements

### Planned Features
- **Google Docs Integration**: Pull content from Google Docs API (as originally planned)
- **Automated image optimization**: Compress and resize images during processing
- **Content scheduling**: Queue newsletters for future sending
- **Analytics integration**: Direct connection to email metrics
- **Template variations**: Support for different newsletter formats

### Development Ideas
- **Enhanced image processing**: Automatic resizing and optimization in Python script
- **Live preview mode**: Real-time updates during Astro development
- **Content approval workflow**: Review process before publishing
- **Automated link checking**: Verify all URLs before sending
- **Multi-language support**: Localization for different audiences
- **Component library**: Expand newsletter component options

### Technical Implementation Notes
The current system could be extended to:
- **Google Docs API integration**: Pull content dynamically from shared docs
- **Image processing pipeline**: Automatic optimization and format conversion
- **Brevo API integration**: Direct publishing without manual copy/paste
- **Content versioning**: Track changes and maintain newsletter history
- **A/B testing support**: Generate multiple newsletter variations

---

## 👥 Team Contacts

**Content Maintainer**: [Add contact information]
**Technical Support**: [Add contact information]
**Content Contributors**: [List active contributors]

---

## 📚 Additional Resources

- [Google Docs API Documentation](https://developers.google.com/docs/api)
- [Brevo Email Best Practices](https://help.brevo.com/)
- [Email HTML/CSS Guidelines](https://www.campaignmonitor.com/css/)
- [Accessibility in Email](https://www.emailonacid.com/blog/article/email-development/email-accessibility-in-2021/)