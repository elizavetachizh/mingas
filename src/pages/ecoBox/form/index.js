import { DivApplication, Form } from '../../feedback/Requests/styles';
import FormInput from '../../../components/input/inputPhone';
import Select from '../../../components/select';
import { INITIAL_REQUEST_STATE_ECOBOX, OPTIONS_ECOBOX_TYPE } from '../../../const/consts';
import { Button } from '../../../components/formQuestion/styles';
import React, { useCallback, useMemo, useState } from 'react';
import axios from 'axios';

export default function EcoBoxForm() {
  const [requestValues, setRequestValues] = useState(INITIAL_REQUEST_STATE_ECOBOX);
  const [msg, setMsg] = useState('');
  const url = 'https://back.mingas.by/ecobox-form';
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(url, requestValues).then((response) => setMsg(response.data.respMesg));
    } catch (err) {
      console.log('error', err);
    }
  };
  const handleInput = useCallback((event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setRequestValues((prevState) => ({ ...prevState, [name]: value }));
    // validate(name);
  }, []);

  const isButtonDisabled = useMemo(() => {
    return !!(!requestValues.name || !requestValues.type);
  }, [requestValues]);

  return (
    <>
      <h3 style={{ color: '#0d4475', margin: '0 auto' }}>Оставьте заявку на расчёт</h3>
      <DivApplication>
        <Form>
          <FormInput
            name={'name'}
            label={'ФИО заявителя:'}
            type={'text'}
            placeholder={'Введите ФИО'}
            onChange={handleInput}
            value={requestValues.name}
            // error={errors.name}
          />
          <FormInput
            name={'phone'}
            label={'Телефон:'}
            type="text"
            placeholder={'Телефон'}
            onChange={handleInput}
            value={requestValues.phone}
            // error={errors.name}
          />
          <FormInput
            span={true}
            label={'Введите ваш e-mail:'}
            name={'email'}
            type="email"
            placeholder={'Ваш e-mail'}
            onChange={handleInput}
            value={requestValues.email}
            // error={errors.email}
          />
          <Select
            label={'Тип объекта:'}
            onChange={handleInput}
            value={requestValues.type}
            inputName={'type'}
            // error={errors.time}
            options={OPTIONS_ECOBOX_TYPE}
          />
          <Button
            disabled={isButtonDisabled}
            type="submit"
            onClick={handleSubmit}
            data-testid="submit-button"
          >
            Получить расчёт / Запросить консультацию
          </Button>
          {isButtonDisabled && (
            <span style={{ color: 'red' }}>Заполните, пожалуйста, все необходимые поля</span>
          )}
          {!isButtonDisabled && !msg && (
            <span style={{ color: 'red' }}>
              Форма успешно заполнена, нажмите кнопку и ожидайте ответа "Форма успешно отправлена".
            </span>
          )}
          <p>
            <b>{msg}</b>
          </p>
        </Form>
      </DivApplication>
    </>
  );
}
