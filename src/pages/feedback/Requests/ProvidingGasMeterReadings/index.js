import React from 'react';
import { DivApplication, Form } from '../styles';
import {
  Button,
  DivInputAdress,
  DivInputCheckbox,
  DivInputEmail,
  DivInputFile,
  DivInputName,
  DivInputPhone,
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
import { OPTIONS, OPTIONS_TIME } from '../../../../const/consts';
import { useRequest } from '../../../../hooks/use-request-hook';
import TitleFun from '../../../../components/title';

export default function ProvidingGasMeterReadings() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleChangeWork,
    handleFileInput,
    handleChangeTime,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
  } = useRequest();
  return (
    <DivApplication>
      <TitleFun color={'blue'} infoTitle={'предоставлений показаний счётчика газа'} />
      <Form onSubmit={handleSubmit}>
        <DivInputName>
          <Label>
            ФИО заявителя полностью: <Span>*</Span>
          </Label>
          <InputName
            inputName={'name'}
            name={'name'}
            type={'text'}
            placeholder={'Введите ФИО полностью'}
            onChange={handleUserInput}
            value={requestValues.name}
            error={name && errors.name}
            label={t('form:name')}
            span={'*'}
          />
        </DivInputName>
        <DivInputEmail>
          <Label>
            {t('form:email')}
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'email'}
            type="email"
            name="email"
            placeholder={'Введите ваш e-mail'}
            onChange={handleUserInput}
            value={requestValues.email}
            error={email && errors.email}
            label={t('form:email')}
            span={'*'}
          />
        </DivInputEmail>
        <DivInputPhone>
          <Label>
            {t('form:phone')}
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'phone'}
            type="tel"
            name="phone"
            placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
            onChange={handleUserInput}
            value={requestValues.phone}
            error={phone && errors.phone}
            label={t('form:phone')}
            span={'*'}
          />
        </DivInputPhone>
        <DivInputAdress>
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
        </DivInputAdress>
        <Select
          label={' Желаемое время для связи:'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestValues.time}
          inputName={'time'}
          error={errors.time}
          options={OPTIONS_TIME}
        ></Select>
        <DivInputName>
          <Label>
            Лицевой счёт: <Span>*</Span>
          </Label>
          <InputName
            inputName={'text'}
            name={'text'}
            type={'text'}
            placeholder={'Введите Лицевой счёт'}
            onChange={handleUserInput}
            value={requestValues.text}
            error={errors.text}
            label={'Лицевой счёт'}
            span={'*'}
          />
        </DivInputName>
        <DivInputName>
          <Label>
            Показания счётчика<Span>*</Span>
          </Label>
          <InputName
            inputName={'text'}
            name={'text'}
            type={'text'}
            placeholder={'Введите ваши показания счётчика'}
            onChange={handleUserInput}
            value={requestValues.text}
            error={errors.text}
            span={'*'}
          />
        </DivInputName>
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
