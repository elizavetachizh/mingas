import React from 'react';
import { DivApplication, Form } from '../styles';
import {
  Button,
  DivInput,
  InputCheckbox,
  Label,
  Span,
} from '../../../../components/formQuestion/styles';
import InputName from '../../../../components/input';
import { t } from 'i18next';
import Select from '../../../../components/select';
import { OPTIONS_TIME } from '../../../../const/consts';
import { useGardenHouse } from './GardenHouse-hook';
import InputAddress from '../../../../components/input/inputAddress';
import InputPhone from '../../../../components/input/inputPhone';
import InputInform from '../../../../components/input/InputInform';
import SubTitleFun from '../../../../components/SubTitle';

export default function ApplicationForGasificationOfResidentialGardenHouse() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleChangeTime,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
  } = useGardenHouse();
  return (
    <DivApplication>
      <SubTitleFun
        color={'blue'}
        infoTitle={'заявка на газификацию жилого (садового) дома'}
      ></SubTitleFun>
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
          />
        </DivInput>
        <DivInput>
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
            error={errors.email}
          />
        </DivInput>
        <DivInput>
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
            error={errors.phone}
          />
        </DivInput>
        <DivInput>
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
            error={errors.address}
          />
        </DivInput>
        <Select
          label={' Желаемое время для связи'}
          span={'*'}
          onChange={handleChangeTime}
          value={requestValues.time}
          name={'time'}
          error={errors.time}
          options={OPTIONS_TIME}
          inputName={'time'}
        ></Select>
        <DivInput>
          <Label>
            Производство проектно-изыскательских работ по устройству:<Span>*</Span>
          </Label>
          <span>
            <Label>
              <InputCheckbox
                name="production"
                type={'checkbox'}
                inputInform="production"
                value={'газопровода-ввода'}
                error={errors.isAgree}
                onChange={handleCheckBox}
              />
              газопровода-ввода
            </Label>
          </span>
          <span>
            <Label>
              <InputInform
                name="production"
                inputInform="production"
                type={'checkbox'}
                value={'внутридомовой системы газоснабжения'}
                error={errors.isAgree}
                onChange={handleCheckBox}
              />
              внутридомовой системы газоснабжения
            </Label>
          </span>
        </DivInput>
        {/*<DivInput>*/}
        {/*  <Label>*/}
        {/*    Выполнение строительно-монтажных работ по устройству:<Span>*</Span>*/}
        {/*  </Label>*/}
        {/*  <span>*/}
        {/*    <Label>*/}
        {/*      <InputInform*/}
        {/*        name="performance"*/}
        {/*        inputInform="performance"*/}
        {/*        type={'checkbox'}*/}
        {/*        value={'газопровода-ввода'}*/}
        {/*        error={errors.isAgree}*/}
        {/*        onChange={handleCheckBox}*/}
        {/*      />*/}
        {/*      газопровода-ввода*/}
        {/*    </Label>*/}
        {/*  </span>*/}
        {/*  <span>*/}
        {/*    <Label>*/}
        {/*      <InputInform*/}
        {/*        name="performance"*/}
        {/*        inputInform="performance"*/}
        {/*        type={'checkbox'}*/}
        {/*        value={'внутридомовой системы газоснабжения'}*/}
        {/*        error={errors.isAgree}*/}
        {/*        onChange={handleCheckBox}*/}
        {/*      />*/}
        {/*      внутридомовой системы газоснабжения*/}
        {/*    </Label>*/}
        {/*  </span>*/}
        {/*</DivInput>*/}
        {/*<DivInputCheckbox>*/}
        {/*  <InputInform*/}
        {/*    type="checkbox"*/}
        {/*    span={'*'}*/}
        {/*    onChange={handleCheckBox}*/}
        {/*    checked={requestValues.isAgree}*/}
        {/*    inputName="isAgree"*/}
        {/*    error={errors.isAgree}*/}
        {/*    inputInform={'isAgree'}*/}
        {/*    value={' Согласен на обработку данных'}*/}
        {/*  />*/}
        {/*  <Label>*/}
        {/*    Согласен на обработку данных*/}
        {/*    <Span>*</Span>*/}
        {/*  </Label>*/}
        {/*</DivInputCheckbox>*/}
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
