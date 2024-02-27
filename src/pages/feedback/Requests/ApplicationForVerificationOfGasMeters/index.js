import React from 'react';
import { DivApplication, Form } from '../styles';
import { Button } from '../../../../components/formQuestion/styles';
import { useRequestForVerificationOfGasMeters } from './verificationOfGasMeters-hook';
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
        <FormInput
          type={'text'}
          label={'ФИО заявителя полностью:'}
          span={true}
          name={'name'}
          placeholder={'Введите ФИО полностью'}
          onChange={handleUserInput}
          value={requestValues.name}
          error={errors.name}
        />

        <FormInput
          span={true}
          label={'Введите ваш e-mail:'}
          name={'email'}
          type="email"
          placeholder={'ваш e-mail'}
          onChange={handleUserInput}
          value={requestValues.email}
          error={errors.email}
        />

        <FormInput
          span={true}
          label={'Номер договора (лицевой счёт):'}
          name={'text'}
          type={'text'}
          placeholder={'Введите абонентский номер'}
          onChange={handleUserInput}
          value={requestValues.text}
          error={errors.text}
        />

        <FormInput
          type="tel"
          span={true}
          label={'Контактный телефон:'}
          name="phone"
          placeholder={'+375ХХХХХХХХХ'}
          onChange={handleUserInput}
          value={requestValues.phone}
          error={errors.phone}
        />

        <FormInput
          name={'address'}
          span={true}
          label={'Адрес объекта:'}
          type="text"
          placeholder={'Введите адрес объекта'}
          onChange={handleUserInput}
          value={requestValues.address}
          error={errors.address}
        />

        <FormInput
          span={true}
          label={'Желаемая дата выполнения работы'}
          placeholder={'Введите желаемую дату выполнения работы'}
          error={errors.date}
          type={'date'}
          onChange={handleUserInput}
          value={requestValues.date}
          name={'date'}
        />

        <span style={{ color: 'red' }}>
          *при обратном звонке специалист Вам предложит доступную дату выполнения работ
        </span>
        <AgreeWithRules
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
