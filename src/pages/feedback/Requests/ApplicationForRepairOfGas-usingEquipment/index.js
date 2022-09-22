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
import { t } from 'i18next';
import Select from '../../../../components/select';
import { OPTIONS_EQUIPMENT } from '../../../../const/consts';
import { UseForRepairOfGasUsingEquipment } from './useHookForRepair';

export default function ApplicationForRepairOfGasUsingEquipment() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleChangeTime,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
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
            error={errors.name}
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
            error={errors.email}
            label={t('form:email')}
            span={'*'}
          />
        </DivInput>
        <DivInput>
          <Label>
            Номер договора (лицевой счёт): <Span>*</Span>
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
        <DivInput>
          <Label>
            Адрес:
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'address'}
            type="text"
            name={'address'}
            placeholder={'Введите ваш адрес'}
            onChange={handleUserInput}
            value={requestValues.address}
            error={errors.address}
            label={t('form:address')}
            span={'*'}
          />
        </DivInput>
        <Select
          label={'Тип оборудования'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestValues.time}
          inputName={'time'}
          error={errors.time}
          options={OPTIONS_EQUIPMENT}
        ></Select>
        <DivInput style={{ margin: '30px auto' }}>
          <Label>
            Опишите неисправность <Span>*</Span>
          </Label>
          <InputName
            style={{ height: '100px', padding: '0 18px' }}
            error={errors.message}
            inputName={'message'}
            onChange={handleUserInput}
            type={'text'}
            name={'message'}
            value={requestValues.message}
            placeholder={'Опишите неисправность'}
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

        <span style={{ color: 'red' }}>
          *при обратном звонке специалист Вам предложит доступную дат у выполнения работ
        </span>
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
        <p>
          <b>{msg}</b>
        </p>
      </Form>
    </DivApplication>
  );
}
