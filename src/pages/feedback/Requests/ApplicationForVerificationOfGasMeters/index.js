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
import InputName from '../../../../components/input';
import InputAddress from '../../../../components/input/inputAddress';
import InputPhone from '../../../../components/input/inputPhone';
import { useRequestForVerificationOfGasMeters } from './verificationOfGasMeters-hook';
import InputDate from '../../../../components/input/InputDate';

export default function ApplicationForVerificationOfGasMeters() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  } = useRequestForVerificationOfGasMeters();
  return (
    <DivApplication>
      <Form ref={form} onSubmit={handleSubmit}>
        <DivInput>
          <Label>
            ФИО заявителя полностью: <Span>*</Span>
          </Label>
          <InputName
            type={'text'}
            inputName={'name'}
            placeholder={'Введите ФИО полностью'}
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
          <InputAddress
            inputAddress={'email'}
            type="email"
            placeholder={'ваш e-mail'}
            onChange={handleUserInput}
            value={requestValues.email}
            error={errors.email}
          />
        </DivInput>
        <DivInput>
          <Label>
            Номер договора (лицевой счёт): <Span>*</Span>
          </Label>
          <InputName
            inputName={'text'}
            type={'text'}
            placeholder={'Введите абонентский номер'}
            onChange={handleUserInput}
            value={requestValues.text}
            error={errors.text}
          />
        </DivInput>
        <DivInput>
          <Label>
            Контактный телефон:
            <Span>*</Span>
          </Label>
          <InputPhone
            inputPhone={'phone'}
            type="tel"
            name="phone"
            placeholder={'+375ХХХХХХХХХ'}
            onChange={handleUserInput}
            value={requestValues.phone}
            error={errors.phone}
          />
        </DivInput>
        <DivInput>
          <Label>
            Адрес объекта:
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'address'}
            type="text"
            placeholder={'Введите адрес объекта'}
            onChange={handleUserInput}
            value={requestValues.address}
            error={errors.address}
          />
        </DivInput>

        <InputDate
          span={'*'}
          label={'Желаемая дата выполнения работы'}
          error={errors.date}
          inputDate={'date'}
          onChange={handleUserInput}
          type={'date'}
          value={requestValues.date}
          placeholder={'Введите желаемую дату выполнения работы'}
        />

        <span style={{ color: 'red' }}>
          *при обратном звонке специалист Вам предложит доступную дат у выполнения работ
        </span>
        <DivInputCheckbox>
          <InputCheckbox
            type="checkbox"
            onChange={handleCheckBox}
            checked={requestValues.isAgree}
            inputName="isAgree"
            error={errors.isAgree}
          />
          <Label>
            Согласен на обработку данных
            <Span>*</Span>
          </Label>
        </DivInputCheckbox>

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
