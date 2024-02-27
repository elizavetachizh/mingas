import React from 'react';
import { DivApplication, Form } from '../styles';
import { Button } from '../../../../components/formQuestion/styles';
import Select from '../../../../components/select';
import { OPTIONS_EQUIPMENT } from '../../../../const/consts';
import { UseForRepairOfGasUsingEquipment } from './useHookForRepair';
import FormInput from '../../../../components/input/inputPhone';
import AgreeWithRules from '../../../../components/AgreeWithRules';
import InputText from '../../../../components/input/inputText';

export default function ApplicationForRepairOfGasUsingEquipment() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleChangeTime,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  } = UseForRepairOfGasUsingEquipment();

  return (
    <DivApplication>
      <Form ref={form} onSubmit={handleSubmit}>
        <FormInput
          name={'name'}
          label={'ФИО заявителя полностью:'}
          span={true}
          type={'text'}
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
          name={'text'}
          label={'Номер договора (лицевой счёт):'}
          span={true}
          type={'text'}
          placeholder={'Введите абонентский номер'}
          onChange={handleUserInput}
          value={requestValues.text}
          error={errors.text}
        />
        <FormInput
          span={true}
          label={'Контактный телефон:'}
          name={'phone'}
          type="tel"
          placeholder={'+375ХХХХХХХХХ'}
          onChange={handleUserInput}
          value={requestValues.phone}
          error={errors.phone}
        />
        <FormInput
          span={true}
          label={'Адрес:'}
          name={'address'}
          type="text"
          placeholder={'Введите ваш адрес'}
          onChange={handleUserInput}
          value={requestValues.address}
          error={errors.address}
        />

        <Select
          label={'Тип оборудования:'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestValues.time}
          inputName={'time'}
          error={errors.time}
          options={OPTIONS_EQUIPMENT}
        />

        <InputText
          wrap={'soft'}
          label={'Опишите неисправность:'}
          span={true}
          text={'message'}
          className={'message'}
          type="message"
          name="message"
          placeholder={'Опишите неисправность'}
          onChange={handleUserInput}
          value={requestValues.message}
          error={errors.message}
        />

        <FormInput
          span={true}
          label={'Желаемая дата выполнения работы:'}
          error={errors.date}
          name={'date'}
          onChange={handleUserInput}
          type={'date'}
          value={requestValues.date}
          placeholder={'Введите желаемую дату выполнения работы'}
        />

        <span style={{ color: 'red' }}>
          *при обратном звонке специалист Вам предложит доступную дат у выполнения работ
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
