import React from 'react';
import { DivApplication, Form } from '../styles';
import {
  Button,
  DivInput,
  Label,
  Span,
} from '../../../../components/formQuestion/styles';
import InputName from '../../../../components/input';
import Select from '../../../../components/select';
import { OPTIONS_EQUIPMENT } from '../../../../const/consts';
import { UseForRepairOfGasUsingEquipment } from './useHookForRepair';
import FormInput from '../../../../components/input/inputPhone';
import AgreeWithRules from '../../../../components/AgreeWithRules';

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
        <DivInput>
          <Label>
            ФИО заявителя полностью: <Span>*</Span>
          </Label>
          <FormInput
            name={'name'}
            type={'text'}
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
            name={'phone'}
            type="tel"
            placeholder={'+375ХХХХХХХХХ'}
            onChange={handleUserInput}
            value={requestValues.phone}
            error={errors.phone}
          />
        </DivInput>
        <DivInput>
          <Label>
            Адрес:
            <Span>*</Span>
          </Label>
          <FormInput
            name={'address'}
            type="text"
            placeholder={'Введите ваш адрес'}
            onChange={handleUserInput}
            value={requestValues.address}
            error={errors.address}
          />
        </DivInput>

        <Select
          label={'Тип оборудования:'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestValues.time}
          inputName={'time'}
          error={errors.time}
          options={OPTIONS_EQUIPMENT}
        ></Select>

        <DivInput style={{ margin: '30px auto' }}>
          <Label>
            Опишите неисправность: <Span>*</Span>
          </Label>
          <InputName
            style={{ height: '100px', padding: '0 18px' }}
            error={errors.message}
            inputName={'message'}
            onChange={handleUserInput}
            type={'text'}
            value={requestValues.message}
            placeholder={'Опишите неисправность'}
          />
        </DivInput>
        <DivInput>
          <Label>
            Желаемая дата выполнения работы: <Span>*</Span>
          </Label>
          <FormInput
            error={errors.date}
            name={'date'}
            onChange={handleUserInput}
            type={'date'}
            value={requestValues.date}
            placeholder={'Введите желаемую дату выполнения работы'}
          />
        </DivInput>

        <span style={{ color: 'red' }}>
          *при обратном звонке специалист Вам предложит доступную дат у выполнения работ
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
