import React from 'react';
import {
  DivInputName,
  DivInputEmail,
  DivInputPhone,
  DivInputAdress,
  DivInputText,
  DivInputCheckbox,
  Form,
  Input,
  Label,
  Span,
  TwoColumnTextAndForm,
  OneColumn,
  TwoColumn,
  InputCheckbox,
  InputTextBox,
} from './styles';

import ButtonFun from '../button';
import { Container } from '../../pages/styles';
import name from '../../assets/formPng/name.png';
import phone from '../../assets/formPng/tel.png';
import email from '../../assets/formPng/email.png';
import address from '../../assets/formPng/map.png';
import { Trans, useTranslation } from 'react-i18next';
import { useForm } from '../../hooks/use-form-hook';
import InputName from '../input';
import Select from "../select";

const NameImage = {
  backgroundImage: `url(${name})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 8px center',
};

const PhoneImage = {
  backgroundImage: `url(${phone})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
};

const EmailImage = {
  backgroundImage: `url(${email})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
};

const AddressImage = {
  backgroundImage: `url(${address})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
};

export default function FormQuestion() {
  const {
    handleUserInput,
    formValues,
    errors,
    handleChangeCountry,
    handleFileInput,
    handleCheckBox,
    handleSwitcher,
    isButtonDisabled,
    handleSubmit,
    cards,
  } = useForm();
  const { t } = useTranslation();
  return (
    <Container>
      <TwoColumnTextAndForm>
        <OneColumn>
          <h2>
            <Trans i18nKey="form:h2"></Trans>
          </h2>
          <h3>{t('form:h3')}</h3>
          <h2>{t('form:h2Question')}</h2>
          <ButtonFun href={'/'} infoButton={'Перейти'} backgroundColor={'blue'} />
        </OneColumn>
        <TwoColumn>
          <Form onSubmit={handleUserInput}>
            <DivInputName>
              <Label>
                {t('form:name')}
                <Span>*</Span>
              </Label>
              <InputName
                inputName={'name'}
                type={'text'}
                placeholder={'Введите ФИО полностью'}
                onChange={handleUserInput}
                value={formValues.name}
                error={errors.name}
              />
            </DivInputName>
            <DivInputName>
              <Label>
                {t('form:email')}
                <Span>*</Span>
              </Label>
              <InputName
                inputName={'email'}
                type="email"
                placeholder={'Введите ваш e-mail'}
                onChange={handleUserInput}
                value={formValues.email}
                error={errors.email}
              />
            </DivInputName>
            <DivInputName>
              <Label>
                {t('form:date')}
                <Span>*</Span>
                <InputName
                  inputName={'date'}
                  type={'date'}
                  placeholder={'Выберете дату'}
                  onChange={handleUserInput}
                  value={formValues.date}
                  error={errors.date}
                />
              </Label>
            </DivInputName>
<Select label={} span={} onChange={} value={} inputName={} error={} options={}/>
            {/*<select*/}
            {/*  label="Country"*/}
            {/*  span={'*'}*/}
            {/*  onChange={handleChangeCountry}*/}
            {/*  value={formValues.country}*/}
            {/*  inputName="country"*/}
            {/*  error={errors.country}*/}
            {/*/>*/}
            <input name="file" type="file" id="file-input" onChange={handleFileInput} />
            <input
              type="checkbox"
              label="Согласен на обработку данных"
              span={'*'}
              onChange={handleCheckBox}
              checked={formValues.isAgree}
              inputName='"isAgree"'
              error={errors.isAgree}
            />
            <input
              label="Не получать/получать уведомления"
              onChange={handleSwitcher}
              checked={formValues.male}
              inputName="male"
              error={errors.male}
            />
            <button
              disabled={isButtonDisabled}
              type="submit"
              onClick={handleSubmit}
              data-testid="submit-button"
            >
              Отправить
            </button>
            {isButtonDisabled && (
              <span style={{ color: 'red' }}>Заполните, пожалуйста все необходимые поля</span>
            )}
          </Form>
        </TwoColumn>
      </TwoColumnTextAndForm>
    </Container>
  );
}
