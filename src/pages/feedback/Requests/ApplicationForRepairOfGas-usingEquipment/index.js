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
import { UseForRepairOfGasUsingEquipment } from './useHookForRepair';
import TitleFun from '../../../../components/title';
import SubTitleFun from "../../../../components/SubTitle";

export default function ApplicationForRepairOfGasUsingEquipment() {
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
  } = UseForRepairOfGasUsingEquipment();
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
            value={requestValues.name}
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
            value={requestValues.email}
            error={email && errors.email}
            label={t('form:email')}
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
            value={requestValues.phone}
            error={phone && errors.phone}
            label={t('form:phone')}
            span={'*'}
          />
        </DivInput>
        <DivInput>
          <Label>
            Адрес объекта:
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
            label={t('form:address')}
            span={'*'}
          />
        </DivInput>
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
            value={requestValues.date}
            placeholder={'Введите желаемую дату выполнения работы'}
          />
        </DivInput>
        <Select
          label={' Желаемое время выполнения работы'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestValues.time}
          inputName={'time'}
          error={errors.time}
          options={OPTIONS_TIME}
        ></Select>
        <Select
          label={'Выбрать вид работы:'}
          span={'*'}
          onChange={handleChangeWork}
          value={requestValues.work}
          inputName={'work'}
          error={errors.work}
          options={OPTIONS}
        ></Select>
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
