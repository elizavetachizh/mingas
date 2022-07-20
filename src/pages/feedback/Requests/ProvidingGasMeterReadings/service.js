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

  const mailOptions = {
    from: req.body.email, // sender address
    to: 'chizhem@mingas.by', // list of receivers
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
            <li>Показания счётчика: ${req.body.reading}</li>
            <li>Фото счётчика: ${req.body.filename}</li>
        </ul>
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    } else {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    }
  });
});
app.post('/questions', (req, res) => {
  const transporterQuestions = nodemailer.createTransport({
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

  const mailOptionsFormQuestion = {
    from: req.body.email, // sender address
    to: 'chizhem@mingas.by ', // list of receivers
    subject: 'Обращение физ. лиц', // Subject line
    text: req.body.name,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>От ${req.body.name}</p>
        <h3>Сообщение: ${req.body.message}</h3>
        <ul>
            <li>ФИО: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Контактный телефон: ${req.body.phone}</li>
            <li>Адрес: ${req.body.address}</li>
        </ul>
        `,
  };

  transporterQuestions.sendMail(mailOptionsFormQuestion, function (error, info) {
    if (error) {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    } else {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    }
  });
});
app.post('/question-for-entity', (req, res) => {
  const transporterQuestionsForEntity = nodemailer.createTransport({
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

  const mailOptionsFormQuestionForEntity = {
    from: req.body.email, // sender address
    to: 'chizhem@mingas.by ', // list of receivers
    subject: 'Обращение юр. лиц', // Subject line
    text: req.body.name,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>От ${req.body.name}</p>
        <ul>
            <li>Наименование юридического лица: ${req.body.organization}</li>
            <li>ФИО руководителя или лица, уполномоченного подписывать обращения: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Юридический адрес: ${req.body.address}</li>
            <li>Почтовый адрес: ${req.body.text}</li>
            <li>Почтовый индекс: ${req.body.index}</li>
            <li>Текст сообщения: ${req.body.message}</li>
        </ul>
        `,
  };

  transporterQuestionsForEntity.sendMail(mailOptionsFormQuestionForEntity, function (error, info) {
    if (error) {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    } else {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    }
  });
});

// listen to the port
app.listen(5000, () => {
  console.log('server start on port 5000');
});
