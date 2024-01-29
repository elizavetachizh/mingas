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
import Select from '../../../../components/select';
import { OPTIONS_EQUIPMENT } from '../../../../const/consts';
import { useRequestForIssuance } from './IssuanceOfTS-hook';
import InputDate from '../../../../components/input/InputDate';
import FormInput from '../../../../components/input/inputPhone';

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
        <DivInput>
          <Label>
            ФИО заявителя полностью: <Span>*</Span>
          </Label>
          <FormInput
            name={'name'}
            type={'text'}
            placeholder={'Введите ФИО полностью'}
            onChange={handleUserInput}
            value={requestIssuanceValues.name}
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
            value={requestIssuanceValues.email}
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
            placeholder={'лицевой счёт'}
            onChange={handleUserInput}
            value={requestIssuanceValues.text}
            error={errors.text}
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
            value={requestIssuanceValues.address}
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
            value={requestIssuanceValues.phone}
            error={errors.phone}
          />
        </DivInput>
        <Select
          label={'Тип оборудования'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestIssuanceValues.time}
          inputName={'time'}
          error={errors.time}
          options={OPTIONS_EQUIPMENT}
        ></Select>

        <InputDate
          span={'*'}
          label={'Желаемая дата выполнения работы'}
          error={errors.date}
          inputDate={'date'}
          onChange={handleUserInput}
          type={'date'}
          value={requestIssuanceValues.date}
          placeholder={'Введите желаемую дату выполнения работы'}
        />

        <span style={{ color: 'red' }}>
          *при обратном звонке специалист Вам предложит доступную дат у выполнения работ
        </span>
        <DivInputCheckbox>
          <InputCheckbox
            type="checkbox"
            onChange={handleCheckBox}
            checked={requestIssuanceValues.isAgree}
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
