const express = require("express");
const ContactSubmission = require("../models/ContactSubmission");
const { escapeHtml } = require("../utils/escapeHtml");
const { sendEmail } = require("../utils/sendgrid");

const router = express.Router();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

router.post("/sendContactForm", async (req, res) => {
  try {
    const formData = req.body || {};

    const name = String(formData.name || "").trim();
    const email = String(formData.email || "")
      .trim()
      .toLowerCase();
    const phone = String(formData.phone || "").trim();
    const eventDate = String(formData.eventDate || "").trim();
    const guestCount = String(formData.guestCount || "").trim();
    const eventType = String(formData.eventType || "").trim();
    const subject = String(formData.subject || "").trim();
    const message = String(formData.message || "").trim();
    const serviceInterest = Array.isArray(formData.serviceInterest)
      ? formData.serviceInterest.map((s) => String(s).trim()).filter(Boolean)
      : [];

    if (
      !name ||
      !email ||
      !eventDate ||
      !guestCount ||
      !eventType ||
      !subject ||
      !message
    ) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }
    if (!isValidEmail(email)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid email address" });
    }
    if (serviceInterest.length === 0) {
      return res
        .status(400)
        .json({ success: false, error: "Please select at least one service" });
    }

    const submission = await ContactSubmission.create({
      name,
      email,
      phone,
      eventDate,
      guestCount,
      eventType,
      serviceInterest,
      subject,
      message,
    });

    const emailTo = process.env.EMAIL_TO;
    const fromEmail = process.env.EMAIL_FROM;
    const fromName = process.env.EMAIL_FROM_NAME || "Event Rules";

    if (!emailTo || !fromEmail) {
      return res.status(500).json({
        success: false,
        error: "Email service not configured (EMAIL_TO / EMAIL_FROM missing)",
      });
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      eventDate: escapeHtml(eventDate),
      guestCount: escapeHtml(guestCount),
      eventType: escapeHtml(eventType),
      subject: escapeHtml(subject),
      message: escapeHtml(message),
      serviceInterest: serviceInterest.map(escapeHtml),
    };

    // 1) Notify business inbox
    await sendEmail({
      to: emailTo,
      from: { email: fromEmail, name: fromName },
      replyTo: email,
      subject: `New Contact: ${subject}`,
      text:
        `New contact form submission\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "-"}\n` +
        `Event date: ${eventDate}\n` +
        `Guest count: ${guestCount}\n` +
        `Event type: ${eventType}\n` +
        `Services: ${serviceInterest.join(", ")}\n\n` +
        `Message:\n${message}\n\n` +
        `Submission ID: ${submission._id}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone || "-"}</p>
        <p><strong>Event date:</strong> ${safe.eventDate}</p>
        <p><strong>Guest count:</strong> ${safe.guestCount}</p>
        <p><strong>Event type:</strong> ${safe.eventType}</p>
        <p><strong>Services:</strong> ${safe.serviceInterest.join(", ")}</p>
        <p><strong>Subject:</strong> ${safe.subject}</p>
        <p><strong>Message:</strong><br/>${safe.message.replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p><strong>Submission ID:</strong> ${escapeHtml(submission._id)}</p>
      `.trim(),
    });

    // 2) Confirmation email to user
    await sendEmail({
      to: email,
      from: { email: fromEmail, name: fromName },
      subject: "Thanks — we received your message",
      text: `Hi ${name},\n\nThanks for reaching out. We received your message and will get back to you soon.\n\n— ${fromName}`,
      html: `
        <div>
          <h1>Thanks for contacting us</h1>
          <p>Hi ${safe.name},</p>
          <p>Thanks for reaching out. We received your message and will get back to you soon.</p>
          <p>— ${escapeHtml(fromName)}</p>
        </div>
      `.trim(),
    });

    return res.json({ success: true, id: submission._id });
  } catch (error) {
    // Avoid leaking provider/db internals to client
    console.error("sendContactForm error:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to process request" });
  }
});

module.exports = router;
