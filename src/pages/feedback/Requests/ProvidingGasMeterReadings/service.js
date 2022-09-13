const path = require('path');
const express = require('express');

const nodemailer = require('nodemailer');
const app = express();
const inlineBase64 = require('nodemailer-plugin-inline-base64');
const cors = require('cors');
const PORT = 8080;
app.use(cors());
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));
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
  console.log(file);
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
<!--             <img src="cid:unique@nodemailer.com"/>-->
<a href={file}>name</a>
        </ul>
        `,
    attachments: [
      // {
      //   filename: `${file}`,
      //   path: `${file}`,
      //   cid: 'unique@nodemailer.com', //same cid value as in the html img src
      // },
      {
        // define custom content type for the attachment
        filename: `name`,
        content: `${file}`,
        contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      },
    ],
  };
  transporter.use('compile', inlineBase64({ cidPrefix: 'somePrefix_' }));
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    } else {
      res.json({ status: true, respMesg: 'Форма успешно отправлена' });
    }
  });
});

// app.post('/questions', (req, res) => {
//   const transporterQuestions = nodemailer.createTransport({
//     service: 'gmail',
//     secure: true,
//     auth: {
//       user: 'elizavetka.chizh@gmail.com',
//       pass: 'jugbujpdqhvpmdyh',
//     },
//     tls: {
//       // do not fail on invalid certs
//       rejectUnauthorized: false,
//     },
//   });
//
//   const mailOptionsFormQuestion = {
//     from: req.body.email, // sender address
//     to: 'elizavetka.chizh@gmail.com', // list of receivers
//     subject: 'Обращение физ. лиц', // Subject line
//     text: req.body.name,
//     html: `
//         <div style="padding:10px;border-style: ridge">
//         <p>От ${req.body.name}</p>
//         <h3>Сообщение: ${req.body.message}</h3>
//         <ul>
//             <li>ФИО: ${req.body.name}</li>
//             <li>Email: ${req.body.email}</li>
//             <li>Контактный телефон: ${req.body.phone}</li>
//             <li>Адрес: ${req.body.address}</li>
// <!--               <li>Документ: ${req.body.formValues}</li>-->
//         </ul>
//         `,
//   };
//
//   transporterQuestions.sendMail(mailOptionsFormQuestion, function (error, info) {
//     if (error) {
//       res.json({ status: true, respMesg: 'Форма успешно отправлена' });
//     } else {
//       res.json({ status: true, respMesg: 'Форма успешно отправлена' });
//     }
//   });
// });

// app.post('/question-for-entity', (req, res) => {
//   const transporterQuestionsForEntity = nodemailer.createTransport({
//     service: 'gmail',
//     secure: true,
//     auth: {
//       user: 'elizavetka.chizh@gmail.com',
//       pass: 'jugbujpdqhvpmdyh',
//     },
//     tls: {
//       // do not fail on invalid certs
//       rejectUnauthorized: false,
//     },
//   });
//
//   const mailOptionsFormQuestionForEntity = {
//     from: req.body.email, // sender address
//     to: 'elizavetka.chizh@gmail.com ', // list of receivers
//     subject: 'Обращение юр. лиц', // Subject line
//     text: req.body.name,
//     html: `
//         <div style="padding:10px;border-style: ridge">
//         <p>От ${req.body.name}</p>
//         <ul>
//             <li>Наименование юридического лица: ${req.body.organization}</li>
//             <li>ФИО руководителя или лица, уполномоченного подписывать обращения: ${req.body.name}</li>
//             <li>Email: ${req.body.email}</li>
//             <li>Юридический адрес: ${req.body.address}</li>
//             <li>Почтовый адрес: ${req.body.text}</li>
//             <li>Почтовый индекс: ${req.body.index}</li>
//             <li>Текст сообщения: ${req.body.message}</li>
//
//         </ul>
//         `,
//   };
//
//   transporterQuestionsForEntity.sendMail(mailOptionsFormQuestionForEntity, function (error, info) {
//     if (error) {
//       res.json({ status: true, respMesg: 'Форма успешно отправлена' });
//     } else {
//       res.json({ status: true, respMesg: 'Форма успешно отправлена' });
//     }
//   });
// });

// listen to the port
app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
