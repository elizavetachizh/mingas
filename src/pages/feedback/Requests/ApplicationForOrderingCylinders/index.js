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
import { useForOrderingCylinders } from './ForOrderingCylinders-hook';
import { useTranslation } from 'react-i18next';

export default function ApplicationForOrderingCylinders() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  } = useForOrderingCylinders();
  const { t } = useTranslation();

  return (
    <DivApplication>
      <Form ref={form} onSubmit={handleSubmit} id={'form'}>
        <DivInput>
          <Label>
            {t('form:name')}: <Span>*</Span>
          </Label>
          <InputName
            inputName={'name'}
            name={'name'}
            type={'text'}
            placeholder={` ${t('form:name')}`}
            onChange={handleUserInput}
            value={requestValues.name}
            error={errors.name}
            label={t('form:name')}
            span={'*'}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:SubscriberNumber')} <Span>*</Span>
          </Label>
          <InputName
            inputName={'text'}
            name={'text'}
            type={'text'}
            placeholder={` ${t('form:SubscriberNumber')} `}
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
            placeholder={` ${t('form:address')}`}
            onChange={handleUserInput}
            value={requestValues.address}
            error={errors.address}
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
            error={errors.phone}
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
            {t('form:agree')}
            <Span>*</Span>
          </Label>
        </DivInputCheckbox>
        <Button
          disabled={isButtonDisabled}
          type="submit"
          onClick={handleSubmit}
          data-testid="submit-button"
        >
          {t('infoButton:send')}
        </Button>
        {isButtonDisabled && (
          <div style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: 'red', width: '100%', margin: '0 auto' }}>
              {t('form:Please')}
            </span>
          </div>
        )}
        <p>
          <b>{msg}</b>
        </p>
      </Form>
    </DivApplication>
  );
}
