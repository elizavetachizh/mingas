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
import phone from '../../../../assets/formPng/tel.png';
import { useForOrderingCylinders } from './ForOrderingCylinders-hook';
import address from '../../../../assets/formPng/map.png';

export default function ApplicationForOrderingCylinders() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
  } = useForOrderingCylinders();
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
            Номер абонента: <Span>*</Span>
          </Label>
          <InputName
            inputName={'text'}
            name={'text'}
            type={'text'}
            placeholder={'Введите абонентский номер'}
            onChange={handleUserInput}
            value={requestValues.text}
            error={errors.text}
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
          <div style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: 'red', width: '100%', margin: '0 auto' }}>
              Заполните, пожалуйста все необходимые поля
            </span>
          </div>
        )}
      </Form>
    </DivApplication>
  );
}
