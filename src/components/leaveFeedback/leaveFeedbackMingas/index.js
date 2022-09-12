import { DivApplication, Form } from '../../../pages/feedback/Requests/styles';
import {
  Button,
  DivInput,
  DivInputCheckbox,
  DivInputFile,
  InputCheckbox,
  InputFile,
  Label,
  Span,
} from '../../formQuestion/styles';
import InputName from '../../input';
import { t } from 'i18next';
import InputAddress from '../../input/inputAddress';
import InputPhone from '../../input/inputPhone';
import React from 'react';

export default function LeaveFeedbackMingas() {
  return (
    <DivApplication>
      <Form>
        <Label style={{ textAlign: 'center' }}>Форма обратной связи</Label>
        <DivInput>
          <Label>
            ФИО полностью: <Span>*</Span>
          </Label>
          <InputName
            name={'name'}
            type={'text'}
            placeholder={'Введите ФИО полностью'}
            inputName={'name'}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:email')}
            <Span>*</Span>
          </Label>
          <InputAddress
            type="email"
            inputAddress={'email'}
            name="email"
            placeholder={'Введите ваш e-mail'}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:phone')}
            <Span>*</Span>
          </Label>
          <InputPhone
            type="tel"
            inputPhone={'phone'}
            name="phone"
            placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
          />
        </DivInput>
        <DivInput>
          <Label>Тема:</Label>
          <InputName inputName={'text'} name={'text'} type={'text'} placeholder={'Напишите тему'} />
        </DivInput>
        <DivInput>
          <Label>
            Сообщение<Span>*</Span>
          </Label>
          <InputName
            className={'message'}
            inputName={'reading'}
            name={'reading'}
            type={'text'}
            placeholder={'Введите ваше сообщение'}
            span={'*'}
          />
        </DivInput>
        <label>
          Прикрепите файл<Span>*</Span>
        </label>
        <DivInputFile>
          <InputFile name="file" type="file" id="file-input" />
        </DivInputFile>
        <DivInputCheckbox>
          <InputCheckbox type="checkbox" span={'*'} inputName="isAgree" />
          <Label>
            Согласен на обработку данных
            <Span>*</Span>
          </Label>
        </DivInputCheckbox>
        <Button type="submit" data-testid="submit-button">
          Отправить
        </Button>
        <span style={{ color: 'red' }}>Заполните, пожалуйста все необходимые поля</span>
      </Form>
    </DivApplication>
  );
}
