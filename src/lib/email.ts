import { Resend } from "resend";

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Email addresses
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@rewenue.com";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "partners@rewenue.com";

interface NewRegistrationEmailData {
    restaurantName: string;
    ownerName: string;
    email: string;
    phone: string;
    city: string;
    locality: string;
    cuisineType: string;
    restaurantType: string;
}

interface NewContactEmailData {
    name: string;
    email: string;
    phone?: string;
    restaurantName?: string;
    subject?: string;
    message: string;
}

export async function sendNewRegistrationNotification(data: NewRegistrationEmailData) {
    const subject = `🍽️ New Partner Registration: ${data.restaurantName}`;

    const htmlContent = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%); padding: 30px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Restaurant Registration</h1>
      </div>
      
      <div style="background: #fff; padding: 30px; border: 1px solid #E8E0D5; border-radius: 0 0 12px 12px;">
        <h2 style="color: #134252; margin-top: 0;">${data.restaurantName}</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C;">Contact Person</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50; text-align: right;">${data.ownerName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50; text-align: right;"><a href="mailto:${data.email}" style="color: #FF6B35;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50; text-align: right;"><a href="tel:+91${data.phone}" style="color: #FF6B35;">+91 ${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C;">Location</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50; text-align: right;">${data.locality}, ${data.city}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C;">Cuisine</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50; text-align: right;">${data.cuisineType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6B7C8C;">Type</td>
            <td style="padding: 10px 0; color: #2C3E50; text-align: right;">${data.restaurantType}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="https://wa.me/91${data.phone}" style="display: inline-block; padding: 12px 24px; background: #25D366; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
            Contact on WhatsApp
          </a>
        </div>
      </div>
      
      <p style="text-align: center; color: #6B7C8C; font-size: 12px; margin-top: 20px;">
        This is an automated notification from Rewenue Partner Portal
      </p>
    </div>
  `;

    return sendEmail({
        to: ADMIN_EMAIL,
        subject,
        html: htmlContent,
    });
}

export async function sendRegistrationConfirmation(data: { email: string; restaurantName: string; ownerName: string }) {
    const subject = `Welcome to Rewenue, ${data.ownerName}! 🎉`;

    const htmlContent = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%); padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Rewenue!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">Your registration has been received</p>
      </div>
      
      <div style="background: #fff; padding: 30px; border: 1px solid #E8E0D5; border-radius: 0 0 12px 12px;">
        <p style="color: #2C3E50; font-size: 16px; line-height: 1.6;">
          Hi ${data.ownerName},
        </p>
        
        <p style="color: #6B7C8C; font-size: 16px; line-height: 1.6;">
          Thank you for registering <strong style="color: #2C3E50;">${data.restaurantName}</strong> with Rewenue! 
          We're excited to have you join India's premium dining network.
        </p>
        
        <div style="background: #FFFAF0; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #134252; margin-top: 0;">What happens next?</h3>
          <ol style="color: #6B7C8C; padding-left: 20px; line-height: 1.8;">
            <li>Our team will review your application (within 24-48 hours)</li>
            <li>We'll call you to discuss the partnership details</li>
            <li>You'll be onboarded and ready to welcome premium diners!</li>
          </ol>
        </div>
        
        <p style="color: #6B7C8C; font-size: 16px; line-height: 1.6;">
          Have questions? Reply to this email or WhatsApp us at <a href="https://wa.me/919876543210" style="color: #FF6B35;">+91 98765 43210</a>.
        </p>
        
        <p style="color: #2C3E50; font-size: 16px; margin-top: 30px;">
          Best regards,<br>
          <strong>The Rewenue Team</strong>
        </p>
      </div>
      
      <p style="text-align: center; color: #6B7C8C; font-size: 12px; margin-top: 20px;">
        © ${new Date().getFullYear()} Rewenue. All rights reserved.
      </p>
    </div>
  `;

    return sendEmail({
        to: data.email,
        subject,
        html: htmlContent,
    });
}

export async function sendContactNotification(data: NewContactEmailData) {
    const subject = data.subject
        ? `📧 Contact Form: ${data.subject}`
        : `📧 New Contact Form Submission from ${data.name}`;

    const htmlContent = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #134252; padding: 30px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      
      <div style="background: #fff; padding: 30px; border: 1px solid #E8E0D5; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C; width: 120px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50;"><a href="mailto:${data.email}" style="color: #FF6B35;">${data.email}</a></td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50;">${data.phone}</td>
          </tr>
          ` : ''}
          ${data.restaurantName ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C;">Restaurant</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50;">${data.restaurantName}</td>
          </tr>
          ` : ''}
          ${data.subject ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #6B7C8C;">Subject</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8E0D5; color: #2C3E50;">${data.subject}</td>
          </tr>
          ` : ''}
        </table>
        
        <div style="background: #FFFAF0; border-radius: 8px; padding: 20px;">
          <h3 style="color: #134252; margin-top: 0;">Message</h3>
          <p style="color: #2C3E50; white-space: pre-wrap; margin: 0;">${data.message}</p>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
          <a href="mailto:${data.email}" style="display: inline-block; padding: 12px 24px; background: #FF6B35; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
            Reply to ${data.name}
          </a>
        </div>
      </div>
    </div>
  `;

    return sendEmail({
        to: ADMIN_EMAIL,
        subject,
        html: htmlContent,
    });
}

// Core email sending function
async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
    // If Resend is not configured, log to console
    if (!resend) {
        console.log("📧 Email would be sent (Resend not configured):");
        console.log(`  To: ${to}`);
        console.log(`  Subject: ${subject}`);
        console.log("  (Set RESEND_API_KEY to enable email sending)");
        return { success: true, simulated: true };
    }

    try {
        const result = await resend.emails.send({
            from: FROM_EMAIL,
            to,
            subject,
            html,
        });

        console.log(`✅ Email sent to ${to}: ${subject}`);
        return { success: true, data: result };
    } catch (error) {
        console.error(`❌ Failed to send email to ${to}:`, error);
        return { success: false, error };
    }
}
