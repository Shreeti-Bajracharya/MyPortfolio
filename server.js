const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'shreetibajracharya73@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'nvqn sxqy poyv fwcs',
  },
});

// Test Email Connection
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email connection error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Contact Form Route
app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Validation
  if (!firstName || !email || !message) {
    return res.status(400).json({
      code: 400,
      message: 'First name, email, and message are required',
    });
  }

  try {
    // Email to You (Admin)
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'shreetibajracharya73@gmail.com',
      to: process.env.EMAIL_USER || 'shreetibajracharya73@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c6ac8f;">New Message from Your Portfolio</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #c6ac8f;">
              ${message}
            </p>
          </div>

          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Confirmation Email to Visitor
    const visitorMailOptions = {
      from: process.env.EMAIL_USER || 'shreetibajracharya73@gmail.com',
      to: email,
      subject: "Message Received - Shreeti's Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c6ac8f;">Thank You for Reaching Out! 🎉</h2>
          
          <p>Hi ${firstName},</p>
          
          <p>I received your message and I really appreciate you taking the time to reach out. I'll get back to you as soon as possible!</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 5px;">
              ${message}
            </p>
          </div>

          <p>In the meantime, feel free to connect with me on:</p>
          <ul style="list-style: none; padding: 0;">
            <li>📧 <a href="mailto:shreetibajracharya73@gmail.com">Email</a></li>
            <li>💼 <a href="https://www.linkedin.com/in/shreeti-bajracharya-b2878a33b/">LinkedIn</a></li>
            <li>💻 <a href="https://github.com/Shreeti-Bajracharya">GitHub</a></li>
          </ul>

          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            Best regards,<br>
            Shreeti Bajracharya
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(visitorMailOptions);

    return res.status(200).json({
      code: 200,
      message: 'Email sent successfully!',
      success: true,
    });
  } catch (error) {
    console.error('❌ Email sending error:', error);
    return res.status(500).json({
      code: 500,
      message: 'Failed to send email. Please try again later.',
      error: error.message,
    });
  }
});

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running ✅' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});