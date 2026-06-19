import nodemailer from 'nodemailer';

// Generate a test Ethereal account if real credentials aren't provided
export const sendRegistrationEmail = async (toEmail: string, parentName: string, childName: string, workshop: string) => {
  try {
    // Generate test SMTP service account from ethereal.email
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
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

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return nodemailer.getTestMessageUrl(info);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
