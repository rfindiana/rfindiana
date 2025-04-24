export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // Parse the form data
    const formData = await request.formData();
    const email = formData.get("email");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const city = formData.get("city");
    const state = formData.get("state");
    const zip = formData.get("zip");
    const phone = formData.get("phone");
    const religiousGroup = formData.get("religiousGroup");
    const emailFrequency = formData.get("emailFrequency");

    // Validate required fields
    if (!email || !firstName || !lastName) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Save to Cloudflare D1
    const db = env.DB; // Ensure DB binding is set up in Cloudflare Pages
    await db.prepare(
      `INSERT INTO profiles (email, firstName, lastName, city, state, zip, phone, religiousGroup, emailFrequency) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) 
       ON CONFLICT(email) DO UPDATE SET 
         firstName = excluded.firstName, 
         lastName = excluded.lastName, 
         city = excluded.city, 
         state = excluded.state, 
         zip = excluded.zip, 
         phone = excluded.phone, 
         religiousGroup = excluded.religiousGroup, 
         emailFrequency = excluded.emailFrequency;`
    ).bind(email, firstName, lastName, city, state, zip, phone, religiousGroup, emailFrequency).run();

    // Trigger Brevo email
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [{ email, name: `${firstName} ${lastName}` }],
        templateId: env.BREVO_TEMPLATE_ID, // Ensure this is set in environment variables
        params: { firstName, lastName },
      }),
    });

    if (!response.ok) {
      console.error("Brevo email failed:", await response.text());
      return new Response("Failed to send email", { status: 500 });
    }

    return new Response("Profile updated successfully", { status: 200 });
  } catch (error) {
    console.error("Error handling profile update:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}