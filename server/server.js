const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const App = require('../src/App');
const inlineBase64 = require('nodemailer-plugin-inline-base64');
const cors = require('cors');

const PORT = 8000;
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());
app.use('/', (req, res, next) => {
  fs.readFile(path.resolve('./public/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(App)}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('/', function (req, res) {
  res.send('hello world');
});
app.post('/users', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: 'elizavetka.chizh@gmail.com',
      pass: 'jugbujpdqhvpmdyh',
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  const file = req.body.file;
  const mailOptions = {
    from: req.body.email, // sender address
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
      res.json({ status: false, respMesg: 'Форма не отправлена, попробуйте еще раз' });
    } else {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
