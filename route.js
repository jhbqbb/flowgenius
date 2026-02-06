import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const revalidate = 0;
export const fetchCache = "force-no-store";

const rateLimitStore = new Map();

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return "unknown";
}

function isRateLimited(ip, limit, windowMs) {
  const now = Date.now();
  const windowStart = now - windowMs;
  const entries = rateLimitStore.get(ip) || [];
  const recent = entries.filter((ts) => ts > windowStart);
  recent.push(now);
  rateLimitStore.set(ip, recent);
  return recent.length > limit;
}

export async function POST(request) {
  const formData = await request.formData();

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const website = String(formData.get("website") || "").trim();

  if (website.length > 0) {
    return Response.redirect(new URL("/?sent=1#kontakt", request.url), 303);
  }

  if (!name || !email || !company || !message) {
    return new Response(JSON.stringify({ error: "Pflichtfelder fehlen." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const rateLimitMax = Number(process.env.RATE_LIMIT_MAX || 5);
  const rateLimitWindow = Number(process.env.RATE_LIMIT_WINDOW_SECONDS || 60) * 1000;
  const ip = getClientIp(request);

  if (isRateLimited(ip, rateLimitMax, rateLimitWindow)) {
    return new Response(JSON.stringify({ error: "Zu viele Anfragen. Bitte später erneut versuchen." }), {
      status: 429,
      headers: { "Content-Type": "application/json" }
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || "true") === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
  const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

  const safeMessage = message.length > 5000 ? message.slice(0, 5000) : message;

  await transporter.sendMail({
    from: `FlowGenius <${fromEmail}>`,
    to: toEmail,
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    text:
      `Name: ${name}\n` +
      `E-Mail: ${email}\n` +
      `Unternehmen: ${company}\n\n` +
      `Nachricht:\n${safeMessage}`
  });

  await transporter.sendMail({
    from: `FlowGenius <${fromEmail}>`,
    to: email,
    subject: "Danke für Ihre Nachricht bei FlowGenius",
    text:
      `Hallo ${name},\n\n` +
      `vielen Dank für Ihre Nachricht. Wir melden uns in Kürze mit den nächsten Schritten.\n\n` +
      `Ihre Angaben:\n` +
      `Unternehmen: ${company}\n` +
      `Nachricht: ${safeMessage}\n\n` +
      `Beste Grüße\n` +
      `FlowGenius`
  });

  return Response.redirect(new URL("/?sent=1#kontakt", request.url), 303);
}
