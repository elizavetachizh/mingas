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
import { t } from 'i18next';
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
            name={'name'}
            inputName={'name'}
            placeholder={'Введите ФИО полностью'}
            onChange={handleUserInput}
            value={requestValues.name}
            error={errors.name}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:email')}
            <Span>*</Span>
          </Label>
          <InputAddress
            inputAddress={'email'}
            type="email"
            name="email"
            placeholder={'Введите ваш e-mail'}
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
            name={'text'}
            type={'text'}
            placeholder={'Введите абонентский номер'}
            onChange={handleUserInput}
            value={requestValues.text}
            error={errors.text}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:phone')}
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
            Адрес объекта
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'address'}
            type="text"
            name={'address'}
            placeholder={'Введите адрес объекта'}
            onChange={handleUserInput}
            value={requestValues.address}
            error={errors.address}
          />
        </DivInput>
        <DivInput>
          <Label>
            Желаемая дата выполнения работы <Span>*</Span>
          </Label>
          <InputDate
            error={errors.date}
            inputDate={'date'}
            onChange={handleUserInput}
            type={'date'}
            name={'date'}
            value={requestValues.date}
            placeholder={'Введите желаемую дату выполнения работы'}
          />
        </DivInput>
        <span style={{ color: 'red' }}>
          *при обратном звонке специалист Вам предложит доступную дат у выполнения работ
        </span>
        <DivInputCheckbox>
          <InputCheckbox
            type="checkbox"
            span={'*'}
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
        {isButtonDisabled ? (
          <span style={{ color: 'red' }}>Заполните, пожалуйста все необходимые поля</span>
        ) : (
          <span style={{ color: 'red' }}>Форма успешно заполнена</span>
        )}
        <p>
          <b>{msg}</b>
        </p>
      </Form>
    </DivApplication>
  );
}
