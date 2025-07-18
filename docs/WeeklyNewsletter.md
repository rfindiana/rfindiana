# 📬 RFIndiana Weekly Newsletter System

## Overview

The RFIndiana Weekly Newsletter System streamlines collaborative newsletter creation by converting Google Docs content into email-ready HTML. This system enables team members to write and edit content in familiar tools while maintaining consistent formatting and branding for email campaigns.

### Strategic Goals
- **Collaborative Content Creation**: Enable multiple team members to contribute using Google Docs
- **Consistent Branding**: Maintain visual consistency across all newsletters
- **Efficient Workflow**: Reduce time from content creation to email delivery
- **Quality Control**: Preview newsletters before sending to subscribers

---

## 🛠️ Technical Architecture

### Project Structure
```
astroship-rfindiana/
├── email-preview/
│   ├── preview.py               # Python script for content processing
│   ├── template.html            # HTML template for newsletters
│   ├── images/                  # Local image assets
│   │   ├── book-cover.jpg
│   │   └── whitehead-diagram.png
│   └── output/
│       └── july-newsletter.html # Generated newsletter
├── site/
│   └── public/
│       └── email-previews/      # Published previews
```

### How It Works
1. **Content Creation**: Team members write content in shared Google Docs
2. **Content Processing**: Python script pulls content via Google Docs API
3. **HTML Generation**: Content is converted to email-safe HTML with inline styles
4. **Image Integration**: Local images are embedded with proper paths
5. **Preview Generation**: Complete newsletter is rendered as standalone HTML
6. **Email Deployment**: HTML is copied to Brevo for distribution

---

## 🚀 Setup Guide

### 1. Google API Configuration

#### Create Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Docs API**
4. Create a **Service Account**
5. Download the `service_account.json` credentials file

#### Set Environment Variable
```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account.json
```

#### Share Documents
Share each Google Doc (view-only access) with the service account email address found in your credentials file.

### 2. Configure Content Sources

Edit `preview.py` to define your newsletter sections:

```python
sections = [
    {
        "title": "On Our Calendar",
        "doc_id": "1XG46j_Wlbv7DqaXBwSYjZltCtCVaSygz2uhzGc5AFiY"
    },
    {
        "title": "What We're Reading",
        "doc_id": "1abcDEFghiJklMnOpQRsTuVwXyz12345678"
    },
    {
        "title": "Community Updates",
        "doc_id": "1zyxWVuTsRqPoNmLkJiHgFeDcBa9876543210"
    }
]
```

### 3. Image Management

#### How Images Work

Contributors insert actual images directly into Google Docs using the standard Insert → Image feature. The Python script extracts these images during processing and saves them locally for the newsletter.

#### For Content Contributors:
1. **Insert images normally** in Google Docs:
   - Click **Insert** → **Image**
   - Choose from **Upload from computer**, **Drive**, or **Photos**
   - Position the image where you want it to appear
2. **Use descriptive images** that are relevant to your content
3. **Keep images reasonably sized** - very large images will be automatically optimized

#### What Happens During Processing:
1. **Python script** scans the Google Doc for embedded images
2. **Downloads each image** from Google's servers to the local `images/` directory
3. **Generates unique filenames** (e.g., `july-2024-book-cover.jpg`)
4. **Converts to HTML** with proper email-safe styling:
   ```html
   <img src="/email-previews/images/july-2024-book-cover.jpg" style="max-width: 100%;" alt="Book cover">
   ```

#### Image Workflow:
1. **Content contributor**: Inserts image directly in Google Doc (normal Insert → Image)
2. **Python script**: Extracts image from Google Doc and saves locally
3. **Final newsletter**: Shows the image with proper email formatting

---

## 📝 Content Guidelines

### Google Docs Structure
- **Use Heading 2** for section titles
- **Use Normal text** for body content
- **Create bulleted/numbered lists** as needed
- **Include image placeholders** where visuals are needed
- **Keep paragraphs concise** for email readability

### Writing Best Practices
- **Lead with value**: Start each section with the most important information
- **Use active voice**: Makes content more engaging
- **Include clear calls-to-action**: Guide readers to next steps
- **Optimize for mobile**: Keep sentences and paragraphs short
- **Test links**: Ensure all URLs work before publishing

### Image Guidelines
- **Use relevant images**: Choose images that support your content
- **Reasonable file sizes**: Very large images will be automatically optimized
- **Use web-safe formats**: JPG, PNG, GIF work best
- **Consider mobile readers**: Images should be clear when viewed on small screens

---

## 🔄 Workflow

### For Content Contributors
1. **Write content** in your assigned Google Doc
2. **Insert images** using Google Docs' Insert → Image feature
3. **Review and edit** content with team members
4. **Notify content maintainer** when ready for processing

### For Content Maintainer
1. **Run the generator**:
   ```bash
   cd email-preview
   python preview.py
   ```
   *Note: The script will automatically extract images from Google Docs and save them to the `images/` directory*

2. **Review output** at:
   ```
   output/july-newsletter.html
   ```

3. **Check extracted images** in:
   ```
   images/
   ```

4. **Copy to public directory**:
   ```bash
   cp output/july-newsletter.html ../site/public/email-previews/
   cp images/* ../site/public/email-previews/images/
   ```

5. **Preview online** at:
   ```
   https://rfindiana.org/email-previews/july-newsletter.html
   ```

6. **Deploy to Brevo**:
   - Open the preview page in browser
   - Copy the full HTML body
   - Paste into Brevo campaign template
   - Send test emails before final deployment

---

## 🎨 Styling Reference

### HTML Conversion Rules
| Element | Style |
|---------|--------|
| Headings (H2) | `font-size: 30px; font-family: Arial; color: #333;` |
| Body Text | `font-size: 18px; font-family: Arial; line-height: 1.6;` |
| Lists | Proper spacing with inline styles |
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

**"Google API credentials not found"**
- Verify `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set
- Ensure the credentials file path is correct and accessible

**"Permission denied accessing Google Doc"**
- Check that the Google Doc is shared with the service account email
- Verify the document ID is correct in the sections configuration

**"Images not displaying"**
- Check that images are properly inserted in the Google Doc (not just pasted as text)
- Verify the Google Doc is shared with the service account
- Confirm the Python script has write access to the `images/` directory
- Check that extracted images were saved correctly in `images/` directory

**"HTML formatting issues"**
- Test the generated HTML in multiple email clients
- Validate HTML structure using online validators
- Check for unsupported CSS properties

### Debug Mode
Add this to `preview.py` for detailed logging:
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
- **Web-based content editor**: Reduce Google Docs dependency
- **Automated image optimization**: Compress images during processing
- **Content scheduling**: Queue newsletters for future sending
- **Analytics integration**: Direct connection to email metrics
- **Template variations**: Support for different newsletter formats

### Development Ideas
- **Enhanced image processing**: Automatic resizing and optimization
- **Live preview mode**: Real-time updates during editing
- **Content approval workflow**: Review process before publishing
- **Automated link checking**: Verify all URLs before sending
- **Multi-language support**: Localization for different audiences

### Technical Implementation Notes
The Python script needs to be updated to:
- Extract images from Google Docs using the Google Docs API
- Download and save images locally with unique filenames
- Convert image references to proper HTML tags
- Handle different image formats and sizes appropriately

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