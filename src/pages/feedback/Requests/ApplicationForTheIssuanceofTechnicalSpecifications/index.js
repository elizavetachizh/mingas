import React from 'react';
import { DivApplication, Form } from '../styles';
import { Button } from '../../../../components/formQuestion/styles';
import Select from '../../../../components/select';
import { OPTIONS_EQUIPMENT } from '../../../../const/consts';
import { useRequestForIssuance } from './IssuanceOfTS-hook';
import FormInput from '../../../../components/input/inputPhone';
import AgreeWithRules from '../../../../components/AgreeWithRules';

export default function ApplicationForTheIssuanceofTechnicalSpecifications() {
  const {
    handleUserInput,
    requestIssuanceValues,
    errors,
    handleChangeTime,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  } = useRequestForIssuance();

  return (
    <DivApplication>
      <Form ref={form} onSubmit={handleSubmit}>
        <FormInput
          span={true}
          label={'ФИО заявителя полностью:'}
          name={'name'}
          type={'text'}
          placeholder={'Введите ФИО полностью'}
          onChange={handleUserInput}
          value={requestIssuanceValues.name}
          error={errors.name}
        />
        <FormInput
          span={true}
          label={'Введите ваш e-mail:'}
          name={'email'}
          type="email"
          placeholder={'ваш e-mail'}
          onChange={handleUserInput}
          value={requestIssuanceValues.email}
          error={errors.email}
        />
        <FormInput
          span={true}
          label={'Номер договора (лицевой счёт):'}
          name={'text'}
          type={'text'}
          placeholder={'лицевой счёт'}
          onChange={handleUserInput}
          value={requestIssuanceValues.text}
          error={errors.text}
        />
        <FormInput
          span={true}
          label={'Адрес:'}
          name={'address'}
          type="text"
          placeholder={'Введите ваш адрес'}
          onChange={handleUserInput}
          value={requestIssuanceValues.address}
          error={errors.address}
        />
        <FormInput
          span={true}
          label={'Контактный телефон:'}
          name={'phone'}
          type="tel"
          placeholder={'+375ХХХХХХХХХ'}
          onChange={handleUserInput}
          value={requestIssuanceValues.phone}
          error={errors.phone}
        />
        <Select
          label={'Тип оборудования'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestIssuanceValues.time}
          inputName={'time'}
          error={errors.time}
          options={OPTIONS_EQUIPMENT}
        ></Select>
        <FormInput
          span={true}
          label={'Желаемая дата выполнения работы'}
          placeholder={'Введите желаемую дату выполнения работы'}
          error={errors.date}
          type={'date'}
          onChange={handleUserInput}
          value={requestIssuanceValues.date}
          name={'date'}
        />

        <span style={{ color: 'red' }}>
          *при обратном звонке специалист Вам предложит доступную дату выполнения работ
        </span>
        <AgreeWithRules
          handleCheckBox={handleCheckBox}
          requestValues={requestIssuanceValues}
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
