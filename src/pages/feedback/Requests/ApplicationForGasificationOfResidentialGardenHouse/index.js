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
import { OPTIONS_TIME } from '../../../../const/consts';
import { useGardenHouse } from './GardenHouse-hook';
import InputAddress from '../../../../components/input/inputAddress';
import InputPhone from '../../../../components/input/inputPhone';
import InputText from '../../../../components/input/inputText';

export default function ApplicationForGasificationOfResidentialGardenHouse() {
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
  } = useGardenHouse();
  return (
    <DivApplication>
      <p>Заявка на газификацию жилого (садового) дома</p>
      <Form ref={form} onSubmit={handleSubmit}>
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
          />
        </DivInputName>
        <DivInputEmail>
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
        </DivInputEmail>
        <DivInputPhone>
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
        </DivInputPhone>
        <DivInputAdress>
          <Label>
            Адрес объекта
            <Span>*</Span>
          </Label>
          <InputAddress
            inputAddress={'address'}
            type="text"
            name={'address'}
            placeholder={'Введите адрес объекта'}
            onChange={handleUserInput}
            value={requestValues.address}
            error={address && errors.address}
          />
        </DivInputAdress>
        <Select
          label={' Желаемое время для связи:'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestValues.time}
          name={'time'}
          error={errors.time}
          options={OPTIONS_TIME}
        ></Select>
        <DivInputName>
          <Label>
            Лицевой счёт: <Span>*</Span>
          </Label>
          <InputText
            inputText={'text'}
            name={'text'}
            type={'text'}
            placeholder={'Введите Лицевой счёт'}
            onChange={handleUserInput}
            value={requestValues.text}
            error={errors.text}
          />
        </DivInputName>
        <DivInputName>
          <Label>
            Показания счётчика:<Span>*</Span>
          </Label>
          <InputText
            inputText={'text'}
            name={'text'}
            type={'text'}
            placeholder={'Введите ваши показания счётчика'}
            onChange={handleUserInput}
            value={requestValues.text}
            error={errors.text}
          />
        </DivInputName>
        <DivInputFile>
          <span>Прекрипите файл</span>
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
