import React from 'react';
import { DivApplication, Form } from '../styles';
import { Button } from '../../../../components/formQuestion/styles';
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
        <FormInput
          span={true}
          label={'ФИО заявителя полностью:'}
          name={'name'}
          type={'text'}
          placeholder={'ФИО заявителя полностью'}
          onChange={handleUserInput}
          value={requestValues.name}
          error={errors.name}
        />
        <FormInput
          name={'email'}
          span={true}
          label={' Введите ваш e-mail:'}
          type="email"
          placeholder={'ваш e-mail'}
          onChange={handleUserInput}
          value={requestValues.email}
          error={errors.email}
        />
        <FormInput
          span={true}
          label={' Номер абонента:'}
          name={'text'}
          type={'text'}
          placeholder={'Номер абонента'}
          onChange={handleUserInput}
          value={requestValues.text}
          error={errors.text}
        />
        <FormInput
          span={true}
          label={'Адрес проживания:'}
          name={'address'}
          type="text"
          placeholder={'Адрес проживания'}
          onChange={handleUserInput}
          value={requestValues.address}
          error={errors.address}
        />
        <FormInput
          name={'phone'}
          label={'Контактный телефон:'}
          span={true}
          type="tel"
          placeholder={'+375ХХХХХХХХХ'}
          onChange={handleUserInput}
          value={requestValues.phone}
          error={errors.phone}
        />

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
