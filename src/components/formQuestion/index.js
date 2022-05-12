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
import { Trans, useTranslation } from 'react-i18next';

const NameImage = {
  backgroundImage: `url(${name})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 8px center',
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
  const { t } = useTranslation();
  return (
    <Container>
      <TwoColumnTextAndForm>
        <OneColumn>
          <h2>
            <Trans i18nKey="form:h2"></Trans>
          </h2>
          <h3>{t("form:h3")}</h3>
          <h2>{t("form:h2Question")}</h2>
          <ButtonFun href={'/'} infoButton={'Перейти'} backgroundColor={'blue'} />
        </OneColumn>
        <TwoColumn>
          <Form>
            <DivInputName>
              <Label>
                {t("form:name")}
                <Span>*</Span>
              </Label>
              <Input style={NameImage} type="text" name="ФИО" />
            </DivInputName>
            <DivInputEmail>
              <Label>
                {t("form:email")}
                <Span>*</Span>
              </Label>
              <Input style={EmailImage} type="text" />
            </DivInputEmail>
            <DivInputPhone>
              <Label>
                {t("form:phone")}
                <Span>*</Span>
              </Label>
              <Input style={PhoneImage} type="text" />
            </DivInputPhone>
            <DivInputAdress>
              <Label>
                {t("form:residence")}
                <Span>*</Span>
              </Label>
              <Input style={AddressImage} type="text" />
            </DivInputAdress>
            <DivInputText>
              <Label>
                {t("form:text")}
                <Span>*</Span>
              </Label>
              <InputTextBox type="text" />
            </DivInputText>
            <DivInputCheckbox>
              <Label>
                {t("form:agree")}
                <Span>*</Span>
              </Label>
              <InputCheckbox type="checkbox" />
            </DivInputCheckbox>
            <ButtonFun href={'/'} backgroundColor={'blue'} infoButton={t('infoButton:send')} />
          </Form>
        </TwoColumn>
      </TwoColumnTextAndForm>
    </Container>
  );
}
