import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure Node.js runtime for nodemailer compatibility
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const formData = await req.json();

    // Validate required fields
    if (!formData.email || !formData.fullname || !formData.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Resolve SMTP credentials with fallbacks to avoid mismatched env names
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass =
      process.env.SMTP_PASS ||
      process.env.SMTP_PASSWORD ||
      process.env.EMAIL_PASSWORD;
    const smtpHost = process.env.SMTP_HOST || process.env.EMAIL_HOST;
    const smtpPort = Number(
      process.env.SMTP_PORT || process.env.EMAIL_PORT || 587,
    );
    const emailTo = process.env.EMAIL_TO;

    // Validate environment variables required for SMTP
    if (!smtpHost || !smtpUser || !smtpPass || !emailTo) {
      console.error("Missing required environment variables for email");
      console.error(
        "Required: SMTP_HOST/EMAIL_HOST, SMTP_USER/EMAIL_USER, SMTP_PASS/SMTP_PASSWORD/EMAIL_PASSWORD, EMAIL_TO",
      );
      return NextResponse.json(
        { success: false, error: "Email service not configured properly" },
        { status: 500 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort === 587, // STARTTLS on 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        // Allow self-signed certs if provider uses them; prevents handshake issues
        rejectUnauthorized: false,
      },
    });

    // Email to admin
    const Info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME || "Website Contact"}" <${process.env.EMAIL_FROM || process.env.SMTP_USER}>`,
      to: emailTo,
      subject: `New Contact from ${formData.fullname}`,
      text: `
        Name: ${formData.fullname}
        Email: ${formData.email}
        Phone: ${formData.telefone}
        Date of Birth: ${formData.date}
        Message: ${formData.message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.fullname}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.telefone}</p>
        <p><strong>Date of Birth:</strong> ${formData.date}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME || "Website Contact"}" <${process.env.EMAIL_FROM || process.env.SMTP_USER}>`,
      to: formData.email,
      subject: "Thank you for contacting us",
      text: `Dear ${formData.fullname},\n\nThank you for your message. We'll contact you soon.\n\nBest regards,\n${process.env.EMAIL_FROM_NAME || "Baus Praxis"}`,
      html: `
        <div>
          <h1>Thank you for contacting us</h1>
          <p>Dear ${formData.fullname},</p>
          <p>Thank you for your message. We'll contact you soon.</p>
          <p>Best regards,<br/>${process.env.EMAIL_FROM_NAME || "Baus Praxis"}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    const isAuthError = error && error.code === "EAUTH";
    const message = isAuthError
      ? "SMTP authentication failed. Check SMTP_USER/SMTP_PASS (or SMTP_PASSWORD) and host/port."
      : error.message || "Failed to send email";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
