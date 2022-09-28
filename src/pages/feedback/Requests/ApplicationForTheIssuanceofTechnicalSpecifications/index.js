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
import Select from '../../../../components/select';
import { OPTIONS_EQUIPMENT } from '../../../../const/consts';
import InputAddress from '../../../../components/input/inputAddress';
import InputPhone from '../../../../components/input/inputPhone';
import { useRequestForIssuance } from './IssuanceOfTS-hook';

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
          <InputName
            inputName={'name'}
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
            {t('form:email')}
            <Span>*</Span>
          </Label>
          <InputAddress
            inputAddress={'email'}
            type="email"
            name="email"
            placeholder={'Введите ваш e-mail'}
            onChange={handleUserInput}
            value={requestIssuanceValues.email}
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
            value={requestIssuanceValues.text}
            error={errors.text}
          />
        </DivInput>
        <DivInput>
          <Label>
            Адрес:
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'address'}
            type="text"
            name={'address'}
            placeholder={'Введите ваш адрес'}
            onChange={handleUserInput}
            value={requestIssuanceValues.address}
            error={errors.address}
            label={t('form:address')}
            span={'*'}
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
        <DivInput>
          <Label>
            Желаемая дата выполнения работы <Span>*</Span>
          </Label>
          <InputName
            error={errors.date}
            inputName={'date'}
            onChange={handleUserInput}
            type={'date'}
            name={'date'}
            value={requestIssuanceValues.date}
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
