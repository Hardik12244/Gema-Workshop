import nodemailer from 'nodemailer';

export const sendRegistrationEmail = async (toEmail: string, parentName: string, childName: string, workshop: string) => {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("⚠️ SMTP_USER or SMTP_PASS missing in .env! Skipping real email delivery. Please add them to send actual emails.");
      return null;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"Gema Workshops" <noreply@gema.com>',
      to: toEmail,
      subject: "Registration Confirmed! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #4F46E5;">Welcome to Gema Workshops!</h1>
          <p>Hi ${parentName},</p>
          <p>We are thrilled to confirm the registration for <strong>${childName}</strong> in our upcoming <strong>${workshop}</strong>.</p>
          <div style="background-color: #F3F4F6; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Next Steps:</h3>
            <ul>
              <li>We will send a detailed schedule 1 week before the workshop starts.</li>
              <li>Please ensure ${childName} brings a notebook (laptops are provided).</li>
            </ul>
          </div>
          <p>If you have any questions, simply reply to this email!</p>
          <p>Best regards,<br>The Gema Team</p>
        </div>
      `,
    });

    console.log("Real email sent to %s. Message ID: %s", toEmail, info.messageId);
    return info.messageId;
  } catch (error) {
    console.error("Error sending real email:", error);
    return null;
  }
};
