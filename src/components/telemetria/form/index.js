import { Button, DivInput, Form, Label, Span } from '../../formQuestion/styles';
import InputName from '../../input';
import React from 'react';
import { useFormTelemetria } from './telemetria-hook';

export default function FormTelemetria() {
  const { handleUserInput, formValues, errors, isButtonDisabled, handleSubmit, form, msg } =
    useFormTelemetria();
  return (
    <Form onSubmit={handleSubmit} ref={form}>
      <DivInput>
        <Label>
          Наименование организации (согласно договора на газоснабжение)
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'organization'}
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
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'name'}
          name={'name'}
          type={'text'}
          placeholder={'Введите ФИО'}
          onChange={handleUserInput}
          value={formValues.name}
          error={errors.name}
          label={'ФИО заявителя полностью'}
        />
      </DivInput>
      <DivInput>
        <Label>
          Адрес электронной почты
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'email'}
          type="email"
          name="email"
          placeholder={'Введите e-mail контактного лица'}
          onChange={handleUserInput}
          value={formValues.email}
          error={errors.email}
          label={'Адрес электронной почты'}
        />
      </DivInput>
      <DivInput>
        <Label>
          Адрес объекта
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'address'}
          type="text"
          name={'address'}
          placeholder={'Введите адрес объекта'}
          onChange={handleUserInput}
          value={formValues.address}
          error={errors.address}
          label={'Адрес объекта'}
        />
      </DivInput>
      <DivInput>
        <Label>
          Телефон контактного лица
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'phone'}
          type="tel"
          name="phone"
          placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
          onChange={handleUserInput}
          value={formValues.phone}
          error={errors.phone}
          label={'Телефон контактного лица'}
        />
      </DivInput>
      <DivInput>
        <Label>Номер sim-карты:</Label>
        <InputName
          inputName={'text'}
          name={'text'}
          type={'text'}
          placeholder={'Напишите тему'}
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
