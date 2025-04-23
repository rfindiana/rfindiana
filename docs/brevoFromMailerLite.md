


# Switching from MailerLite to Brevo for RFIndiana.org

This document outlines the necessary steps to migrate from MailerLite to Brevo, with a focus on supporting RSVP confirmation emails via Brevo's transactional email API. This transition supports our H0 roadmap objectives.

---

## ✅ Step 1: Create Brevo Account

- Visit [https://www.brevo.com](https://www.brevo.com)
- Register and verify your account
- Set up a sender email (e.g., info@rfindiana.org)

---

## ✅ Step 2: Generate Brevo API Key

- Go to **SMTP & API** → **API keys**
- Create a new API key (e.g., `ChatGPT RSVP handler`)
- Store this key securely
- Later, add it to your Cloudflare Pages **environment variables**:
  ```
  BREVO_API_KEY = your-key-here
  ```

---

## ✅ Step 3: Create a Brevo Email Template

- Navigate to **Campaigns** → **Templates**
- Create a new **Transactional** template:
  - Subject: `You're confirmed for {{ event_name }}`
  - Body (example):
    ```
    Thanks, {{ name }}! You're signed up for {{ event_date }} at {{ event_time }}.
    Zoom link: {{ zoom_url }}
    ```
- Save the **Template ID** for API usage

---

## ✅ Step 4: Build the Email Helper

Create a helper function (e.g., `sendConfirmationEmail()`) inside your Pages Function (`rsvp.js`):

```js
async function sendConfirmationEmail({ email, name, event }) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      to: [{ email, name }],
      templateId: YOUR_TEMPLATE_ID,
      params: {
        name,
        event_name: event.title,
        event_date: event.date,
        event_time: event.time,
        zoom_url: event.zoom
      }
    })
  });

  if (!response.ok) {
    console.error("Brevo email failed:", await response.text());
  }
}
```

---

## ✅ Step 5: Connect to Cloudflare

- Go to your Cloudflare Pages project
- Navigate to **Settings → Environment Variables**
- Add your API key:
  ```
  BREVO_API_KEY = your-api-key
  ```

---

## ✅ Result

After implementing this, your RSVP Pages Function can:
- Save data to D1
- Trigger a transactional confirmation email via Brevo
- Lay the foundation for Brevo marketing automations in H1

This completes the email migration needed for H0 milestone delivery.