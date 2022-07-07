const path = require('path');
const express = require('express');

const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
app.use(cors());
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/users', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elizavetka.chizh@gmail.com',
      pass: 'fmxzdaboecgvxeft',
    },
  });

  const mailOptions = {
    from: 'elizavetka.chizh@gmail.com', // sender address
    to: req.body.name, // list of receivers
    subject: req.body.phone, // Subject line
    text: req.body.email,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Email: ${req.body.name}</li>
            <li>Subject: ${req.body.phone}</li>
            <li>Message: ${req.body.email}</li>
        </ul>
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ status: true, respMesg: 'Email Sent Successfully' });
    } else {
      res.json({ status: true, respMesg: 'Email Sent Successfully' });
    }
  });
});

// listen to the port
app.listen(5000, () => {
  console.log('server start on port 3030');
});
