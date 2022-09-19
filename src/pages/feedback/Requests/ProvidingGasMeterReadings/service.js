const path = require('path');
const express = require('express');

const nodemailer = require('nodemailer');
const app = express();
const inlineBase64 = require('nodemailer-plugin-inline-base64');
const cors = require('cors');
const PORT = 3000;
app.use(cors());
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));
app.get('/', function (req, res) {
  res.send('hello world');
  req.body;
});
app.use('/users', express.static('users'));
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
  const file = req.body.file;
  const document = req.body.document;
  const mailOptionsFormQuestion = {
    from: req.body.email, // sender address
    to: 'chizhem@mingas.by', // list of receivers
    subject: 'Обращение физ. лиц', // Subject line
    text: req.body.name,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>Обращение от: ${req.body.name}</p>
        <ul>
            <li>ФИО: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Контактный телефон: ${req.body.phone}</li>
            <li>Адрес: ${req.body.address}</li>
                   <li>Тема обращения: ${req.body.text}</li>
        </ul>
           <p>Сообщение: ${req.body.message}</p> 
        `,
    attachments: [
      {
        // define custom content type for the attachment
        href: `${document}`,
        encoding: 'base64',
      },
    ],
  };
  transporterQuestions.use('compile', inlineBase64({ cidPrefix: 'somePrefix_' }));
  transporterQuestions.sendMail(mailOptionsFormQuestion, function (error, info) {
    if (error) {
      res.json({ status: false, respMesg: 'Форма не отправлена, попробуйте еще раз' });
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
  const file = req.body.file;
  const document = req.body.document;
  const mailOptionsFormQuestionForEntity = {
    from: req.body.email, // sender address
    to: 'chizhem@mingas.by', // list of receivers
    subject: 'Обращение юр. лиц', // Subject line
    text: req.body.name,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>Обращение от: ${req.body.name}</p>
        <ul>
            <li>Наименование юридического лица: ${req.body.organization}</li>
            <li>ФИО руководителя или лица, уполномоченного подписывать обращения: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Юридический адрес: ${req.body.address}</li>
            <li>Почтовый адрес: ${req.body.text}</li>
            <li>Почтовый индекс: ${req.body.index}</li>
        </ul>
         <p>Текст сообщения: ${req.body.message}</p>
        `,
    attachments: [
      // {
      //   filename: 'Вложение',
      //   path: `${file}`,
      //   cid: 'image-for-entity', //same cid value as in the html img src
      // },
      {
        // define custom content type for the attachment
        href: `${document}`,
        encoding: 'base64',
      },
    ],
  };
  transporterQuestionsForEntity.use('compile', inlineBase64({ cidPrefix: 'somePrefix_' }));
  transporterQuestionsForEntity.sendMail(mailOptionsFormQuestionForEntity, function (error, info) {
    if (error) {
      res.json({ status: false, respMesg: 'Форма не отправлена, попробуйте еще раз' });
    } else {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    }
  });
});

app.post('/cylinders', (req, res) => {
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
    to: 'chizhem@mingas.by', // list of receivers
    subject: 'Заявка на заказ баллонов СУГ 50 литров', // Subject line
    text: req.body.name,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>От ${req.body.name}</p>
        <p>Тема: заказ баллонов СУГ 50 литров</p>
        <p>Сообщение</p>
        <ul>
            <li>ФИО: ${req.body.name}</li>
            <li>Номер абонента: ${req.body.text}</li>
            <li>Адрес: ${req.body.address}</li>
            <li>Номер телефона: ${req.body.phone}</li>
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

app.post('/feedback', (req, res) => {
  const transporterFeedback = nodemailer.createTransport({
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
  const mailOptionsFormQuestionForEntity = {
    from: req.body.email, // sender address
    to: 'chizhem@mingas.by', // list of receivers
    subject: 'Форма обратной связи', // Subject line
    text: req.body.name,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>Отзыв от: ${req.body.name}</p>
        <ul>
            <li>ФИО: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Контактный телефон: ${req.body.phone}</li>
            <li>Адрес электронной почты: ${req.body.email}</li>
            <li>Тема обращения: ${req.body.text}</li>
        </ul>
         <p>Текст сообщения: ${req.body.message}</p>  
        `,
    attachments: [
      {
        // define custom content type for the attachment
        href: `${file}`,
        encoding: 'base64',
      },
    ],
  };
  transporterFeedback.use('compile', inlineBase64({ cidPrefix: 'somePrefix_' }));
  transporterFeedback.sendMail(mailOptionsFormQuestionForEntity, function (error, info) {
    if (error) {
      res.json({ status: false, respMesg: 'Форма не отправлена, попробуйте еще раз' });
    } else {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    }
  });
});

// listen to the port
app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
