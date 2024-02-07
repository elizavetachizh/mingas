import React from 'react';
import { DivApplication, Form } from '../styles';
import {
  Button,
  DivInput,
  Label,
  Span,
} from '../../../../components/formQuestion/styles';
import { useRequestForVerificationOfGasMeters } from './verificationOfGasMeters-hook';
import InputDate from '../../../../components/input/InputDate';
import FormInput from '../../../../components/input/inputPhone';
import AgreeWithRules from '../../../../components/AgreeWithRules';

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
          <FormInput
            type={'text'}
            name={'name'}
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
            Номер договора (лицевой счёт): <Span>*</Span>
          </Label>
          <FormInput
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
            Контактный телефон:
            <Span>*</Span>
          </Label>
          <FormInput
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
          <FormInput
            name={'address'}
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
          *при обратном звонке специалист Вам предложит доступную дату выполнения работ
        </span>
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
