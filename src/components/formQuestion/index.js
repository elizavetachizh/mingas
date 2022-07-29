import React from 'react';
import {
  DivInput,
  DivInputCheckbox,
  DivInputFile,
  Form,
  Label,
  Span,
  InputCheckbox,
  InputFile,
  Button,
} from './styles';

import name from '../../assets/formPng/name.png';
import phone from '../../assets/formPng/tel.png';
import email from '../../assets/formPng/email.png';
import address from '../../assets/formPng/map.png';
import { useTranslation } from 'react-i18next';
import { useForm } from '../../hooks/use-form-hook';
import InputName from '../input';

export default function FormQuestion() {
  const {
    handleUserInput,
    formValues,
    errors,
    handleFileInput,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  } = useForm();
  const { t } = useTranslation();
  return (
    <Form onSubmit={handleSubmit} ref={form}>
      <p>
        <b>{msg}</b>
      </p>
      <DivInput>
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
          label={t('form:name')}
          span={'*'}
        />
      </DivInput>
      <DivInput>
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
          value={formValues.email}
          error={email && errors.email}
          label={t('form:email')}
          span={'*'}
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
          value={formValues.address}
          error={address && errors.address}
          label={t('form:address')}
          span={'*'}
        />
      </DivInput>
      <DivInput>
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
          value={formValues.phone}
          error={phone && errors.phone}
          label={t('form:phone')}
          span={'*'}
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
          value={formValues.message}
          error={errors.message}
          label={t('form:text')}
          span={'*'}
        />
      </DivInput>
      <DivInputFile>
        <div>
          <InputFile name="file" type="file" id="file-input" onChange={handleFileInput} />
          <span>Прекрипите файл</span>
        </div>
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
  );
}
