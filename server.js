const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const path = require('path');


app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res, next) => {
  if (req.path === '/sendmail') {
    next();
  } else {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
});
app.post('/sendmail', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'taha.ahmed1786@gmail.com',
      pass: 'mcvyxprprodbjrvp',
    },
  });

  const mailOptions = {
    from: email,
    to: 'taha.ahmed1786@gmail.com',
    subject: 'Message Sent From Personal Website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ message: 'Error sending email', error: error });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send({ message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
