import Header from '../header';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import React, { useEffect, useState } from 'react';
import TitleFun from '../title';
import { ContainerLinks } from '../../pages/company/parentOrganizations/styles';
import { Container } from '../../pages/company/styles';
import { Form } from '../../pages/feedback/Requests/styles';
import {
  Button,
  DivInput,
  DivInputCheckbox,
  DivInputFile,
  InputCheckbox,
  InputFile,
  Label,
  Span,
} from '../formQuestion/styles';
import InputName from '../input';
import name from '../../assets/formPng/name.png';
import { t } from 'i18next';
import InputAddress from '../input/inputAddress';
import InputPhone from '../input/inputPhone';
import address from '../../assets/formPng/map.png';
import Select from '../select';
import { OPTIONS_TIME } from '../../const/consts';

export default function LeaveFeedback() {
  const [data, setData] = useState([]);
  async function getUserAsync() {
    try {
      let response = await fetch(
        `http://xn----7sbgfh2alwzdhpc0c.xn--90ais/api/v1/public/profile/33279`,
        {
          mode: 'no-cors',
        }
      );
      return await response.json();
    } catch (err) {
      console.error(err);
      // Handle errors here
    }
  }

  useEffect(() => {
    getUserAsync()
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun infoTitle={'Возможность оставить отзыв'} color={'blue'} />
        <ContainerLinks>
          {' '}
          <div
            style={{ width: '560px', height: '800px', overflow: 'hidden', position: 'relative' }}
          >
            <iframe
              style={{
                width: '100%',
                height: '100%',
                border: '1px solid #e6e6e6',
                borderRadius: '8px',
                boxSizing: 'border-box',
              }}
              src="https://yandex.ru/maps-reviews-widget/41119693302?comments"
            ></iframe>
            <a
              href="https://yandex.by/maps/org/mingaz/41119693302/"
              target="_blank"
              style={{
                boxSizing: 'border-box',
                textDecoration: 'none',
                color: '#b3b3b3',
                fontSize: '10px',
                fontFamily: 'YS Text,sans-serif',
                padding: '0 20px',
                position: 'absolute',
                bottom: '8px',
                width: '100%',
                textAlign: 'center',
                left: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
                maxHeight: '14px',
                whiteSpace: 'nowrap',
              }}
              rel="noreferrer"
            >
              Мингаз на карте Минска — Яндекс Карты
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <a
                href="http://xn----7sbgfh2alwzdhpc0c.xn--90ais/organization/33279/org-page"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{ margin: '0 20%' }}
                  width="60%"
                  height="60%"
                  src="https://mingas.by/wp-content/uploads/2019/03/d676007c6bce67133b0ea05bc310ca0e.png"
                  className="attachment-full size-full"
                  alt=""
                />
                <p>
                  Портал рейтинговой оценки качества оказания услуг орагнизациями Республики
                  Беларусь
                </p>
              </a>
            </div>
            <a href="/feedback/leave-feedback">
              <img
                src="http://qrcoder.ru/code/?http%3A%2F%2Fxn----7sbgfh2alwzdhpc0c.xn--90ais%2Fpre-auth&4&0"
                width="280px"
                height="280px"
                border="0"
                title="QR код"
              />
            </a>
          </div>
        </ContainerLinks>
        <Form style={{ width: '40%' }}>
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
            <InputName inputName={'text'} name={'text'} type={'text'} />
          </DivInput>
          <DivInput>
            <Label>
              Сообщение<Span>*</Span>
            </Label>
            <InputName
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
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
