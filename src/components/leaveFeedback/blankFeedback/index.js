import { DivApplication, Form } from '../../../pages/feedback/Requests/styles';
import { Button } from '../../formQuestion/styles';
import React, { useRef, useState } from 'react';
import ComponentQuestion from './componentQuestion';
import { Table } from './styles';
import axios from 'axios';

export default function BlankFeedback() {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const options = ['Да', 'Почти да', 'Не вполне', 'Нет'];
  const questionsData = [
    {
      question: 'Качество товаров (услуг), предоставляемых Вам, соответствует Вашим ожиданиям?',
      options,
    },
    {
      question: 'Вас устраивает компетентность нашего персонала?',
      options,
    },
    {
      question: 'Вы удовлетворены сроками предоставления услуги (поставки товара)?',
      options,
    },
    {
      question: 'Оцените достаточно ли информации на сайте УП «МИНГАЗ»?',
      options,
    },
    {
      question: 'Вас устраивает оперативность реагирования на Ваши обращения в УП «МИНГАЗ»?',
      options,
    },
    {
      question: 'Вы удовлетворены культурой общения наших работников?',
      options,
    },
    {
      question: 'Устраивают ли Вас цены на выпускаемые товары и оказываемые услуги?',
      options,
    },
    {
      question:
        'Удовлетворяет ли Вас качество применяемых материалов и комплектующих при производстве изделий (товара) УП «МИНГАЗ»?',
      options,
    },
    {
      question: 'Удовлетворены ли Вы сотрудничеством с УП «МИНГАЗ» в целом?',
      options,
    },
  ];
  const [success, setSuccess] = useState('');
  const initialAnswers = questionsData.reduce((acc, curr) => {
    acc[curr.question] = { selectedOption: '', comment: '' };
    return acc;
  }, {});

  const [answers, setAnswers] = useState(initialAnswers);

  const handleSelectOption = (question, selectedOption) => {
    setAnswers({
      ...answers,
      [question]: {
        ...answers[question],
        selectedOption,
      },
    });
  };
  const handleSubmit = async (e) => {
    setLoading(true); // Показываем loader
    e.preventDefault();

    await axios
      .post('https://back.mingas.by/submit-survey', {
        name,
        service,
        date,
        answers: Object.values(answers),
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setSuccess('Форма успешно отправлена, спасибо!');
      });
  };
  const handleCommentChange = (question, comment) => {
    setAnswers({
      ...answers,
      [question]: {
        ...answers[question],
        comment,
      },
    });
  };

  return (
    <DivApplication>
      <Form
        style={{ border: 'none', borderRadius: 'none', width: '100%' }}
        onSubmit={handleSubmit}
        ref={form}
      >
        <label
          htmlFor={'service'}
          style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}
        >
          Наименование услуги/административной процедуры/произведенного товара УП «МИНГАЗ»:
          <input
            style={{
              width: '100%',
              marginTop: '0.5rem',
              border: 'none',
              borderBottom: '1px solid black',
            }}
            type="text"
            name={'service'}
            placeholder={
              'Наименование услуги/административной процедуры/произведенного товара УП «МИНГАЗ»'
            }
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
        </label>
        <Table>
          <thead>
            <tr>
              <th rowSpan={2}>Критерии оценки</th>
              <th colSpan={4}>Оценка</th>
              <th rowSpan={2}>
                Комментарии (причины оценок «не вполне», «нет»), пожелания Заказчика
              </th>
            </tr>
            <tr>
              {options.map((option) => (
                <th
                  style={{
                    border: '1px solid black',
                    transform: 'rotate(180deg)',
                    writingMode: 'vertical-rl',
                  }}
                >
                  {option}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {questionsData.map((el, index) => (
              <ComponentQuestion
                key={index}
                question={el.question}
                options={el.options}
                selectedOption={answers[el.question].selectedOption}
                onSelectOption={(option) => handleSelectOption(el.question, option)}
                comment={answers[el.question].comment}
                onCommentChange={(comment) => handleCommentChange(el.question, comment)}
              />
            ))}
          </tbody>
        </Table>
        <label
          htmlFor={'name'}
          style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}
        >
          Анкету-отзыв заполнил:
          <input
            style={{
              border: 'none',
              marginTop: '0.5rem',
              borderBottom: '1px solid black',
            }}
            type="text"
            name={'name'}
            placeholder={'Наименование организации (при наличии), адрес, Ф.И.О. Заказчика'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label
          htmlFor={'date'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '1rem',
            fontSize: '12px',
          }}
        >
          <input
            style={{
              margin: '1rem 0 0',
              border: 'none',
              borderBottom: '1px solid black',
            }}
            type="date"
            name={'date'}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          дата заполнения анкеты
        </label>
        {/*<AgreeWithRules handleCheckBox={handleCheckBox} requestValues={formValues} />*/}
        <Button type="submit" disabled={loading} onClick={handleSubmit}>
          Отправить
        </Button>
        {loading && <span style={{ color: 'red' }}>Пожалуйста, подождите...</span>}

        {success && <span style={{ color: 'red' }}>{success}</span>}
      </Form>
    </DivApplication>
  );
}
