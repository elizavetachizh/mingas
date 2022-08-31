import React from 'react';
import { DivApplication, Form } from '../styles';
import {
  Button,
  DivInput,
  DivInputCheckbox,
  DivInputFile,
  InputCheckbox,
  InputFile,
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
import { OPTIONS_TIME } from '../../../../const/consts';
import TitleFun from '../../../../components/title';
import { useProvidingGasMasterReadings } from './ProvidingGasMasterReadings-hook';
import InputAddress from '../../../../components/input/inputAddress';
import InputPhone from '../../../../components/input/inputPhone';

export default function ProvidingGasMeterReadings() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleFileInput,
    handleChangeTime,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
    email,
    phone,
  } = useProvidingGasMasterReadings();
  return (
    <DivApplication>
      <Form ref={form} onSubmit={handleSubmit}>
        <p>
          <b>{msg}</b>
        </p>
        <DivInput>
          <Label>
            ФИО заявителя полностью: <Span>*</Span>
          </Label>
          <InputName
            name={'name'}
            type={'text'}
            placeholder={'Введите ФИО полностью'}
            onChange={handleUserInput}
            value={requestValues.name}
            error={name && errors.name}
            inputName={'name'}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:email')}
            <Span>*</Span>
          </Label>
          <InputAddress
            type="email"
            inputAddress={'email'}
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
            type="tel"
            inputPhone={'phone'}
            name="phone"
            placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
            onChange={handleUserInput}
            value={requestValues.phone}
            error={phone && errors.phone}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:address')}
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'address'}
            type="text"
            name={'address'}
            placeholder={'Введите адрес проживания'}
            onChange={handleUserInput}
            value={requestValues.address}
            error={address && errors.address}
            label={t('form:address')}
            span={'*'}
          />
        </DivInput>
        <Select
          label={'Желаемое время для связи:'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestValues.time}
          inputName={'time'}
          name={'time'}
          error={errors.time}
          options={OPTIONS_TIME}
        />
        {/*<DivInput>*/}
        {/*  <Label>*/}
        {/*    Лицевой счёт: <Span>*</Span>*/}
        {/*  </Label>*/}
        {/*  <InputName*/}
        {/*    inputName={'text'}*/}
        {/*    name={'text'}*/}
        {/*    type={'text'}*/}
        {/*    placeholder={'Введите Лицевой счёт'}*/}
        {/*    onChange={handleUserInput}*/}
        {/*    value={requestValues.text}*/}
        {/*    error={errors.text}*/}
        {/*    label={'Лицевой счёт'}*/}
        {/*    span={'*'}*/}
        {/*  />*/}
        {/*</DivInput>*/}
        <DivInput>
          <Label>
            Показания счётчика<Span>*</Span>
          </Label>
          <InputName
            inputName={'reading'}
            name={'reading'}
            type={'text'}
            placeholder={'Введите ваши показания счётчика'}
            onChange={handleUserInput}
            value={requestValues.reading}
            error={errors.reading}
            span={'*'}
          />
        </DivInput>
        <DivInputFile>
          {/*<Label>*/}
          {/*  Фото счётчика<Span>*</Span>*/}
          {/*</Label>*/}
          <InputFile name="file" type="file" id="file-input" onChange={handleFileInput} />
        </DivInputFile>
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
    </DivApplication>
  );
}
