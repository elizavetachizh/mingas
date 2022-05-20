import React from 'react';
import {
  DivInputName,
  DivInputEmail,
  DivInputAdress,
  DivInputPhone,
  DivInputText,
  DivInputCheckbox,
  DivInputFile,
  Form,
  Label,
  Span,
  TwoColumnTextAndForm,
  OneColumn,
  TwoColumn,
  InputCheckbox,
  InputTextBox,
  InputFile,
} from './styles';

import ButtonFun from '../button';
import name from '../../assets/formPng/name.png';
import phone from '../../assets/formPng/tel.png';
import email from '../../assets/formPng/email.png';
import address from '../../assets/formPng/map.png';
import { Trans, useTranslation } from 'react-i18next';
import { useForm } from '../../hooks/use-form-hook';
import InputName from '../input';

export default function FormQuestion() {
  const {
    handleUserInput,
    formValues,
    errors,
    handleFileInput,
    handleCheckBox,
    handleSwitcher,
    isButtonDisabled,
    handleSubmit,
  } = useForm();
  const { t } = useTranslation();
  return (
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
              name={'name'}
              type={'text'}
              placeholder={'Введите ФИО полностью'}
              onChange={handleUserInput}
              value={formValues.name}
              error={name && errors.name}
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
              name={'email'}
              placeholder={'Введите ваш e-mail'}
              onChange={handleUserInput}
              value={formValues.email}
              error={email && errors.email}
            />
          </DivInputEmail>
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
              value={formValues.address}
              error={address && errors.address}
            />
          </DivInputAdress>
          <DivInputPhone>
            <Label>
              {t('form:phone')}

              <Span>*</Span>
            </Label>
            <InputName
              inputName={'phone'}
              type="tel"
              name="phone"
              placeholder={'+375(ХХ)-ХХХ-ХХ-ХХ'}
              onChange={handleUserInput}
              value={formValues.phone}
              error={phone && errors.phone}
            />
          </DivInputPhone>
          <DivInputText>
            <Label>
              {t('form:text')}
              <Span>*</Span>
            </Label>

            <InputName
              inputName={'text'}
              type="text"
              name="text"
              placeholder={'Текст сообщения'}
              onChange={handleUserInput}
              value={formValues.text}
              error={errors.text}
            />
          </DivInputText>
          <DivInputFile>
            <span>Прекрипите файл</span>
            <InputFile name="file" type="file" id="file-input" onChange={handleFileInput} />
          </DivInputFile>
          <DivInputCheckbox>
            <InputCheckbox
              type="checkbox"
              span={'*'}
              onChange={handleCheckBox}
              checked={formValues.isAgree}
              inputName="isAgree"
              error={errors.isAgree}
            />
            <Label>
              Согласен на обработку данных
              <Span>*</Span>
            </Label>
          </DivInputCheckbox>
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
  );
}
