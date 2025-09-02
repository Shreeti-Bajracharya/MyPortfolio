require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

contactEmail.verify(error => {
  if (error) console.log(error);
  else console.log('Ready to Send');
});

router.post('/contact', (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const mail = {
    from: `${firstName} ${lastName}`,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) res.json(error);
    else res.json({ code: 200, status: 'Message Sent' });
  });
});
