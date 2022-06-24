import React from 'react';
import name from '../../assets/formPng/name.png';
import phone from '../../assets/formPng/tel.png';
import email from '../../assets/formPng/email.png';
import address from '../../assets/formPng/map.png';
import { useTranslation } from 'react-i18next';
import InputName from '../input';
import {
  Form,
  Label,
  Span,
  DivInputFile,
  DivInputCheckbox,
  InputCheckbox,
  InputFile,
  Button,
  DivInput,
} from '../formQuestion/styles';

import { useForm } from '../../hooks/use-form-hook';

export default function FormQuestionForEntity() {
  const {
    handleUserInput,
    formValues,
    errors,
    handleFileInput,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
  } = useForm();
  const { t } = useTranslation();
  return (
    <Form onSubmit={handleSubmit} ref={form}>
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
        />
      </DivInput>
      <DivInput>
        <Label>
          {t('form:address')}
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'text'}
          type="text"
          name={'text'}
          placeholder={'Введите адрес проживания'}
          onChange={handleUserInput}
          value={formValues.text}
          error={address && errors.text}
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
          placeholder={'+375(ХХ)-ХХХ-ХХ-ХХ'}
          onChange={handleUserInput}
          value={formValues.phone}
          error={phone && errors.phone}
        />
      </DivInput>
      <DivInput>
        <Label>
          Название организации (полностью)
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'organization'}
          name={'organization'}
          type={'text'}
          placeholder={'Введите Название организации'}
          onChange={handleUserInput}
          value={formValues.name}
          error={name && errors.name}
        />
      </DivInput>
      <DivInput>
        <Label>
          ФИО руководителя (полностью)
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'name'}
          name={'name'}
          type={'text'}
          placeholder={'Введите ФИО руководителя'}
          onChange={handleUserInput}
          value={formValues.name}
          error={name && errors.name}
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
        />
      </DivInput>
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
