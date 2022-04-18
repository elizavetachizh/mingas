import React from 'react';
import {
  DivInputName,
  DivInputEmail,
  DivInputPhone,
  DivInputAdress,
  DivInputText,
  DivInputCheckbox,
  Form,
  Input,
  Label,
  Span,
  TwoColumnTextAndForm,
  OneColumn,
  TwoColumn,
  InputCheckbox,
  InputTextBox,
} from './styles';

import ButtonFun from '../button';
import { Container } from '../../pages/styles';
import name from '../../assets/formPng/name.png';
import phone from '../../assets/formPng/tel.png';
import email from '../../assets/formPng/email.png';
import address from '../../assets/formPng/map.png';

const NameImage = {
  backgroundImage: `url(${name})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
};

const PhoneImage = {
  backgroundImage: `url(${phone})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
};

const EmailImage = {
  backgroundImage: `url(${email})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
};

const AddressImage = {
  backgroundImage: `url(${address})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
};

export default function FormQuestion() {
  return (
    <Container>
      <TwoColumnTextAndForm>
        <OneColumn>
          <h2>Задать вопрос</h2>
          <h3>
            Наши сотрудники всегда готовы <br />
            ответить на все ваши вопросы
          </h3>
          <h2>Часто задаваемые вопросы</h2>
          <ButtonFun infoButton={'Перейти'} backgroundColor={'blue'} />
        </OneColumn>
        <TwoColumn>
          <Form>
            <DivInputName>
              <Label>
                Имя
                <Span>*</Span>
              </Label>
              <Input style={NameImage} type="text" name="ФИО" />
            </DivInputName>
            <DivInputEmail>
              <Label>
                Адрес электронной почты
                <Span>*</Span>
              </Label>
              <Input style={EmailImage} type="text" />
            </DivInputEmail>
            <DivInputPhone>
              <Label>
                Телефон
                <Span>*</Span>
              </Label>
              <Input style={PhoneImage} type="text" />
            </DivInputPhone>
            <DivInputAdress>
              <Label>
                Адрес проживания
                <Span>*</Span>
              </Label>
              <Input style={AddressImage} type="text" />
            </DivInputAdress>
            <DivInputText>
              <Label>
                Текст сообщения
                <Span>*</Span>
              </Label>
              <InputTextBox type="text" />
            </DivInputText>
            <DivInputCheckbox>
              <Label>
                Я согласен с политикой обработки персональных данных
                <Span>*</Span>
              </Label>
              <InputCheckbox type="checkbox" />
            </DivInputCheckbox>
            <ButtonFun backgroundColor={'blue'} infoButton={'Отправить'} />
          </Form>
        </TwoColumn>
      </TwoColumnTextAndForm>
    </Container>
  );
}
