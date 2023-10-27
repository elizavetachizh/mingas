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
            <li>
              <strong>выбор языковых предпочтений (функциональные)</strong>
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
                      onChange={() => {
                        setCookie('_ga', 'GA1.1.1461999740.1696242335', { path: '/' });
                        setCookie('googtrans', '/ru/ru', { path: '/' });
                      }}
                      className="uk-radio"
                      type="radio"
                      name="radio1"
                    />
                    <span>Принять</span>
                  </label>
                  <label htmlFor={'radio1-false'}>
                    <input
                      id={'radio1-false'}
                      onChange={() => {
                        removeCookie('_ga');
                        removeCookie('googtrans');
                      }}
                      className="isObject"
                      type="radio"
                      name="radio1"
                    />
                    <span>Отклонить</span>
                  </label>
                </div>
              </li>
            </ul>
            <li>
              <strong>чат-бот (функциональные)</strong>
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
                        setCookie('waSessionId');
                        setCookie('waUserId_1000088280-mingazbot-1000088280-XWf-20942513239');
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
                        removeCookie('waSessionId');
                        removeCookie('waUserId_1000088280-mingazbot-1000088280-XWf-20942513239');
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
                возможность «Принять все» или «Отклонить все» обрабатываемые на сайте куки.
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
                        setCookie('_ga', 'GA1.1.1461999740.1696242335', { path: '/' });
                        setCookie('googtrans', '/ru/ru', { path: '/' });
                        setCookie('CookieConsent', true, { path: '/' });
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
