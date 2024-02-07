import React from 'react';
import { DivApplication, Form } from '../styles';
import {
  Button,
  DivInput,
  DivInputCheckbox,
  InputCheckbox,
  Label,
  Span,
} from '../../../../components/formQuestion/styles';
import { useForOrderingCylinders } from './ForOrderingCylinders-hook';
import FormInput from '../../../../components/input/inputPhone';
import AgreeWithRules from '../../../../components/AgreeWithRules';

export default function ApplicationForOrderingCylinders() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  } = useForOrderingCylinders();

  return (
    <DivApplication>
      <Form ref={form} onSubmit={handleSubmit} id={'form'}>
        <DivInput>
          <Label>
            ФИО заявителя полностью: <Span>*</Span>
          </Label>
          <FormInput
            name={'name'}
            type={'text'}
            placeholder={'ФИО заявителя полностью'}
            onChange={handleUserInput}
            value={requestValues.name}
            error={errors.name}
          />
        </DivInput>
        <DivInput>
          <Label>
            Введите ваш e-mail:
            <Span>*</Span>
          </Label>
          <FormInput
            name={'email'}
            type="email"
            placeholder={'ваш e-mail'}
            onChange={handleUserInput}
            value={requestValues.email}
            error={errors.email}
          />
        </DivInput>
        <DivInput>
          <Label>
            Номер абонента: <Span>*</Span>
          </Label>
          <FormInput
            name={'text'}
            type={'text'}
            placeholder={'Номер абонента'}
            onChange={handleUserInput}
            value={requestValues.text}
            error={errors.text}
          />
        </DivInput>
        <DivInput>
          <Label>
            Адрес проживания:
            <Span>*</Span>
          </Label>
          <FormInput
            name={'address'}
            type="text"
            placeholder={'Адрес проживания'}
            onChange={handleUserInput}
            value={requestValues.address}
            error={errors.address}
          />
        </DivInput>
        <DivInput>
          <Label>
            Контактный телефон:
            <Span>*</Span>
          </Label>
          <FormInput
            name={'phone'}
            type="tel"
            placeholder={'+375ХХХХХХХХХ'}
            onChange={handleUserInput}
            value={requestValues.phone}
            error={errors.phone}
          />
        </DivInput>

        <AgreeWithRules
          errors={errors}
          handleCheckBox={handleCheckBox}
          requestValues={requestValues}
        />
        <Button
          disabled={isButtonDisabled}
          type="submit"
          onClick={handleSubmit}
          data-testid="submit-button"
        >
          Отправить
        </Button>
        {isButtonDisabled && (
          <span style={{ color: 'red' }}>Заполните, пожалуйста, все необходимые поля</span>
        )}
        {!isButtonDisabled && !msg && (
          <span style={{ color: 'red' }}>
            Форма успешно заполнена, нажмите кнопку отправить и ожидайте ответа "Форма успешно
            отправлена".
          </span>
        )}
        <p>
          <b>{msg}</b>
        </p>
      </Form>
    </DivApplication>
  );
}
