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
import name from '../../../../assets/formPng/name.png';
import { t } from 'i18next';
import email from '../../../../assets/formPng/email.png';
import phone from '../../../../assets/formPng/tel.png';
import address from '../../../../assets/formPng/map.png';
import Select from '../../../../components/select';
import { OPTIONS, OPTIONS_TIME } from '../../../../const/consts';
import InputAddress from '../../../../components/input/inputAddress';
import InputPhone from '../../../../components/input/inputPhone';
import InputText from '../../../../components/input/inputText';
import InputDate from '../../../../components/input/InputDate';
import TitleFun from '../../../../components/title';
import { useRequestForVerificationOfGasMeters } from './verificationOfGasMeters-hook';
import SubTitleFun from '../../../../components/SubTitle';

export default function ApplicationForVerificationOfGasMeters() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleChangeWork,
    handleChangeTime,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
  } = useRequestForVerificationOfGasMeters();
  return (
    <>
      <SubTitleFun infoTitle={'Заявка на поверку счетчиков газа'} color={'blue'} />
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
            error={name && errors.name}
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
            error={email && errors.email}
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
            placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
            onChange={handleUserInput}
            value={requestValues.phone}
            error={phone && errors.phone}
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
            error={address && errors.address}
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

        <Select
          label={'Желаемое время для выполнения работы'}
          span={'*'}
          name={'time'}
          onChange={handleChangeTime}
          value={requestValues.time}
          inputName={'time'}
          error={errors.time}
          options={OPTIONS_TIME}
        ></Select>
        <Select
          label={'Вид работы'}
          span={'*'}
          name={'work'}
          onChange={handleChangeWork}
          value={requestValues.work}
          inputName={'work'}
          error={errors.work}
          options={OPTIONS}
        ></Select>
        <DivInput>
          <Label>
            Марка индивидуального прибора учета расхода газа: <Span>*</Span>
          </Label>
          <InputText
            inputText={'marka'}
            name={'marka'}
            type={'text'}
            placeholder={'Введите марку индивидуального прибора учета расхода газа'}
            onChange={handleUserInput}
            value={requestValues.marka}
            error={errors.marka}
          />
        </DivInput>
        <DivInput>
          <Label>
            Номер индивидуального прибора учета расхода газа: <Span>*</Span>
          </Label>
          <InputName
            inputName={'number'}
            name={'number'}
            type={'text'}
            placeholder={'Введите номер индивидуального прибора учета расхода газа'}
            onChange={handleUserInput}
            value={requestValues.number}
            error={errors.number}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:text')}
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'message'}
            type="message"
            name="message"
            placeholder={'Текст сообщения'}
            onChange={handleUserInput}
            value={requestValues.message}
            error={errors.message}
            label={t('form:text')}
            span={'*'}
          />
        </DivInput>
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
        {isButtonDisabled && (
          <span style={{ color: 'red' }}>Заполните, пожалуйста все необходимые поля</span>
        )}
      </Form>
    </>
  );
}
