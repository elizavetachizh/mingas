const express = require('express');
const nodemailer = require('nodemailer');
const inlineBase64 = require('nodemailer-plugin-inline-base64');
const router = express.Router();
const { Console } = require('console');
const transporter = nodemailer.createTransport({
  secure: true,
  host: 'ms2.g-cloud.by',
  port: 465,
  auth: {
    user: 'chizhem@mingas.by',
    pass: 'JlUqVN5tv98T',
  },
});
router.post('/feedback/electronic-appeal', (req, res) => {
  const file = req.body.file;
  console.log(req.body);
  const mailOptions = {
    from: 'chizhem@mingas.by', // sender address
    to: 'elizavetka.chizh@gmail.com', // list of receivers
    subject: 'Предоставление показаний счётчика газа', // Subject line
    text: req.body.name,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>От ${req.body.name}</p>
        <h3>Сообщение:</h3>
        <ul>
            <li>ФИО: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Контактный телефон: ${req.body.phone}</li>
            <li>Адрес: ${req.body.address}</li>
            <li>Желаемое время для связи: ${req.body.time}</li>
            <li>Лицевой счёт: ${req.body.text}</li>
            <img src="cid:uniq-name"/>
        </ul>
        `,
    attachments: [
      {
        filename: 'Вложение',
        path: `${file.length ? file : ''}`,
        cid: 'uniq-name', //same cid value as in the html img src
      },
    ],
  };
  transporter.use('compile', inlineBase64({ cidPrefix: 'somePrefix_' }));
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
  res.status(200).json({ message: req.body.name });
});
