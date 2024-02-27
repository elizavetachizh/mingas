import { Button, DivInput, Form, Label } from '../../formQuestion/styles';
import React from 'react';
import { useFormTelemetria } from './telemetria-hook';
import FormInput from '../../input/inputPhone';

export default function FormTelemetria() {
  const { handleUserInput, formValues, errors, isButtonDisabled, handleSubmit, form, msg } =
    useFormTelemetria();
  return (
    <Form onSubmit={handleSubmit} ref={form}>
      <DivInput>
        <Label>
          Наименование организации (согласно договора на газоснабжение)
          <span>*</span>
        </Label>
        <FormInput
          name={'organization'}
          type={'text'}
          placeholder={'Введите Наименование организации (согласно договора на газоснабжение)'}
          onChange={handleUserInput}
          value={formValues.organization}
          error={errors.organization}
        />
      </DivInput>
      <DivInput>
        <Label>
          ФИО контактного лица
          <span>*</span>
        </Label>
        <FormInput
          name={'name'}
          type={'text'}
          placeholder={'Введите ФИО'}
          onChange={handleUserInput}
          value={formValues.name}
          error={errors.name}
        />
      </DivInput>
      <DivInput>
        <Label>
          Адрес электронной почты
          <span>*</span>
        </Label>
        <FormInput
          type="email"
          name="email"
          placeholder={'Введите e-mail контактного лица'}
          onChange={handleUserInput}
          value={formValues.email}
          error={errors.email}
        />
      </DivInput>
      <DivInput>
        <Label>
          Адрес объекта
          <span>*</span>
        </Label>
        <FormInput
          type="text"
          name={'address'}
          placeholder={'Введите адрес объекта'}
          onChange={handleUserInput}
          value={formValues.address}
          error={errors.address}
        />
      </DivInput>
      <DivInput>
        <Label>
          Телефон контактного лица
          <span>*</span>
        </Label>
        <FormInput
          type="tel"
          name="phone"
          placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
          onChange={handleUserInput}
          value={formValues.phone}
          error={errors.phone}
        />
      </DivInput>
      <DivInput>
        <Label>Номер sim-карт(ы), через запятую, если их несколько:</Label>
        <FormInput
          name={'text'}
          type={'text'}
          placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
          onChange={handleUserInput}
          value={formValues.text}
          error={errors.text}
        />
      </DivInput>
      <Button disabled={isButtonDisabled} type="submit" onClick={handleSubmit}>
        Отправить
      </Button>
      {isButtonDisabled ? (
        <span style={{ color: 'red' }}>Заполните, пожалуйста все необходимые поля</span>
      ) : (
        <span style={{ color: 'red' }}>Форма успешно заполнена</span>
      )}
      <p>
        <b>{msg}</b>
      </p>
    </Form>
  );
}
