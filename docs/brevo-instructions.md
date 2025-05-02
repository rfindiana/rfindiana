# Brevo Integration Instructions

This document outlines the setup and implementation details for integrating Brevo (formerly Sendinblue) with the RFIndiana.org website.

## Email Newsletter Integration (Brevo)

This site uses Brevo for newsletter signups and email communications. The implementation uses Brevo's embedded form approach for simplicity.

### Setup Instructions

1. Create a signup form in Brevo:

   - Log in to your Brevo account
   - Go to Contacts → Forms
   - Create a new form with all required fields (email, name, etc.)
   - Include an "Email Frequency" dropdown with options:
     - Weekly updates
     - Monthly updates
     - Important announcements only

2. Get your embed code from Brevo and update:

   Embed the correct iFrame for the Brevo code

3. Managing user preferences:
   - Since there's no direct API integration, users are instructed to email the admin for preference updates
   - Admin manually updates contact preferences in the Brevo dashboard

### Implementation Notes

- The embedded form approach was chosen instead of API integration to avoid the complexity of Cloudflare Workers
- Contact data is stored directly in Brevo, not in our Cloudflare D1 database
- The form is responsive and maintains the site's styling
