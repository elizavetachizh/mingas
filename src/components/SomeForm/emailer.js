require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: 'elizavetka.chizh@gmail.com',
  to: 'elizavetka.chizh@gmail.com',
  subject: 'Письмо отпрпвлено от elizavetka.chizh@gmail.com',
  text: 'Текст письма отправлен от elizavetka.chizh@gmail.com',
};
transporter.sendMail(mailOptions, (err) => {
  console.log(err);
});
