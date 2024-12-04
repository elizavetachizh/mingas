import ContainerContent from '../Container';
import { ContainerInform } from '../../pages/feedback/electronicСirculation/styles';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Button } from '../formQuestion/styles';
import { useNavigate } from 'react-router';

export default function ContainerCookies() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['CookieConsent']);

  return (
    <ContainerContent
      name={'Политика в отношении обработки cookie'}
      content={
        <ContainerInform>
          <h3>Политика в отношении обработки cookie</h3>
          <ol>
            <li>
              <strong>Куки</strong> (англ. cookies) являются текстовым файлом, сохраненным в
              браузере компьютера (мобильного устройства) пользователя официального интернет-сайта
              производственного республиканского унитарного предприятия «МИНГАЗ» (далее – сайт) при
              его посещении пользователем для отражения совершенных им действий.
            </li>
            <p>
              Этот файл позволяет не вводить заново или выбирать те же параметры при повторном
              посещении сайта, например, выбор языковой версии. Целью обработки куки является
              обеспечение удобства пользователей сайта и повышение качества его функционирования. Мы
              не передаем куки третьим лицам и не используем их для идентификации субъектов
              персональных данных.
            </p>
            <li>
              <strong> На сайте обрабатываются следующие типы куки:</strong>
            </li>
            <p>
              функциональные – позволяют обеспечить индивидуальный опыт использования сайта и
              устанавливаются в ответ на действия субъекта персональных данных; <br />
              статистические – позволяют хранить историю посещений страниц сайта в целях повышения
              качества его функционирования, чтобы определить наиболее и наименее популярные
              страницы.
            </p>
            <p>
              Вы можете настроить использование каждого типа файлов cookie, за исключением типа
              «технические/функциональные (обязательные) cookie», без которых невозможно корректное
              функционирование сайта УП "МИНГАЗ" (далее – Сайт).
            </p>
            <li>
              <strong>Функциональные/Технические файлы cookie</strong>
            </li>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <div
                  style={{ margin: '0.5rem 0 0.5rem' }}
                  className="uk-grid-small uk-child-width-auto uk-grid"
                >
                  <label htmlFor={'radio1-true'}>
                    <input
                      id={'radio1-true'}
                      className="uk-radio"
                      type="checkbox"
                      disabled={true}
                      checked={true}
                      name="radio1"
                    />
                    <span>
                      Эти файлы cookie необходимы для корректного функционирования веб-сайта
                    </span>
                  </label>
                </div>
              </li>
            </ul>
            <li>
              <strong>Рекламные файлы cookie</strong>
            </li>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <div
                  style={{ margin: '0.5rem 0 0.5rem' }}
                  className="uk-grid-small uk-child-width-auto uk-grid"
                >
                  <label htmlFor={'radio1-true'}>
                    <input
                      id={'radio2-true'}
                      onChange={() => {
                        setCookie('APISID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('DV', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('HSID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('NID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-1PSID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-1PSIDCC', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-1PSIDTS', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('SAPISID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-1PAPISID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-3PSID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-3PAPISID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-3PSIDCC', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-3PSIDTS', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('SID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                      }}
                      className="uk-radio"
                      type="radio"
                      name="radio2"
                    />
                    <span>Принять</span>
                  </label>
                  <label htmlFor={'radio1-false'}>
                    <input
                      id={'radio2-false'}
                      onChange={() => {
                        removeCookie('APISID', {
                          path: '/',
                        });
                        removeCookie('DV', {
                          path: '/',
                        });
                        removeCookie('HSID', {
                          path: '/',
                        });
                        removeCookie('NID', {
                          path: '/',
                        });
                        removeCookie('__Secure-1PSID', {
                          path: '/',
                        });
                        removeCookie('__Secure-1PSIDCC', {
                          path: '/',
                        });
                        removeCookie('__Secure-1PSIDTS', {
                          path: '/',
                        });
                        removeCookie('SAPISID', {
                          path: '/',
                        });
                        removeCookie('__Secure-1PAPISID', {
                          path: '/',
                        });
                        removeCookie('__Secure-3PSID', {
                          path: '/',
                        });
                        removeCookie('__Secure-3PAPISID', {
                          path: '/',
                        });
                        removeCookie('__Secure-3PSIDCC', {
                          path: '/',
                        });
                        removeCookie('__Secure-3PSIDTS', {
                          path: '/',
                        });
                        removeCookie('SID', {
                          path: '/',
                        });
                      }}
                      className="isObject"
                      type="radio"
                      name="radio2"
                    />
                    <span>Отклонить</span>
                  </label>
                </div>
              </li>
            </ul>
            <li>
              <strong>Аналитические файлы cookie</strong>
            </li>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <div
                  style={{ margin: '0.5rem 0 0.5rem' }}
                  className="uk-grid-small uk-child-width-auto uk-grid"
                >
                  <label htmlFor={'radio1-true'}>
                    <input
                      id={'radio2-true'}
                      onChange={() => {
                        setCookie('SSID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('_ga', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                      }}
                      className="uk-radio"
                      type="radio"
                      name="radio2"
                    />
                    <span>Принять</span>
                  </label>
                  <label htmlFor={'radio1-false'}>
                    <input
                      id={'radio2-false'}
                      onChange={() => {
                        removeCookie('SSID', {
                          path: '/',
                        });
                        removeCookie('_ga', {
                          path: '/',
                        });
                      }}
                      className="isObject"
                      type="radio"
                      name="radio2"
                    />
                    <span>Отклонить</span>
                  </label>
                </div>
              </li>
            </ul>
            <li>
              <strong>
                Возможность «Принять все» или «Отклонить все» обрабатываемые на сайте куки.
              </strong>
            </li>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <div
                  style={{ margin: '0.5rem 0 0.5rem' }}
                  className="uk-grid-small uk-child-width-auto uk-grid"
                >
                  <label htmlFor={'radio2-true'}>
                    <input
                      id={'radio2-true'}
                      onChange={() => {
                        setCookie('APISID', "hOju7gGjtkzaejt-/A2NaiF1iklIpmJGaA", {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('DV', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('HSID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('NID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-1PSID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-1PSIDCC', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-1PSIDTS', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('SAPISID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-1PAPISID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-3PSID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-3PAPISID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-3PSIDCC', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('__Secure-3PSIDTS', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('SID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('SSID', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('_ga', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                      }}
                      className="uk-radio"
                      type="radio"
                      name="radio2"
                    />
                    <span>Принять все</span>
                  </label>
                  <label htmlFor={'radio2-false'}>
                    <input
                      id={'radio2-false'}
                      onChange={() => {
                        removeCookie('_ga');
                        removeCookie('googtrans');
                        removeCookie('CookieConsent');
                        removeCookie('waSessionId');
                        removeCookie('waUserId_1000088280-mingazbot-1000088280-XWf-20942513239');
                        removeCookie('APISID', {
                          path: '/',
                        });
                        removeCookie('DV', {
                          path: '/',
                        });
                        removeCookie('HSID', {
                          path: '/',
                        });
                        removeCookie('NID', {
                          path: '/',
                        });
                        removeCookie('__Secure-1PSID', {
                          path: '/',
                        });
                        removeCookie('__Secure-1PSIDCC', {
                          path: '/',
                        });
                        removeCookie('__Secure-1PSIDTS', {
                          path: '/',
                        });
                        removeCookie('SAPISID', {
                          path: '/',
                        });
                        removeCookie('__Secure-1PAPISID', {
                          path: '/',
                        });
                        removeCookie('__Secure-3PSID', {
                          path: '/',
                        });
                        removeCookie('__Secure-3PAPISID', {
                          path: '/',
                        });
                        removeCookie('__Secure-3PSIDCC', {
                          path: '/',
                        });
                        removeCookie('__Secure-3PSIDTS', {
                          path: '/',
                        });
                        removeCookie('SID', {
                          path: '/',
                        });
                      }}
                      className="isObject"
                      type="radio"
                      name="radio2"
                    />
                    <span>Отклонить все</span>
                  </label>
                </div>
              </li>
            </ul>
          </ol>
          <Button style={{ width: '350px' }} type="submit" onClick={() => navigate(-1)}>
            Подтвердить выбор настроек cookies
          </Button>
        </ContainerInform>
      }
    />
  );
}
