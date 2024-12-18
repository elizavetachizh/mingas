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
          <a
            type={'download'}
            href={
              'https://back.mingas.by/admin/upload/files/1734512353959-Политика_куки_Мингаз (2).docx'
            }
          >
            Политика обработки файлов cookie УП «МИНГАЗ»
          </a>
          <ol>
            <li>
              <strong>Куки</strong> (англ. cookies) являются текстовым файлом, сохраненным в
              браузере компьютера (мобильного устройства) пользователя официального интернет-сайта
              производственного республиканского унитарного предприятия «МИНГАЗ» (далее – сайт) при
              его посещении пользователем для отражения совершенных им действий.
            </li>
            <p>
              Этот файл позволяет не вводить заново или выбирать те же параметры при повторном
              посещении сайта, например, выбор языковой версии. <br /> Целью обработки куки является
              обеспечение удобства пользователей сайта и повышение качества его функционирования.{' '}
              <br /> Мы не передаем куки третьим лицам и не используем их для идентификации
              субъектов персональных данных.
            </p>
            <li>
              <strong> На сайте обрабатываются следующие типы куки:</strong>
            </li>
            <p>
              функциональные – позволяют обеспечить индивидуальный опыт использования сайта и
              устанавливаются в ответ на действия субъекта персональных данных;
            </p>
            <p>
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
                        setCookie('HSID', true, {
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
                        setCookie('ymex', true, {
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
                        removeCookie('ymex', {
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
                        setCookie('yandexuid', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('googtrans', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('CookieConsent', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('connect.sid', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('i', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('is_gdpr', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('is_gdpr_b', true, {
                          path: '/',
                          maxAge: 365 * 24 * 60 * 60,
                        });
                        setCookie('ymex', true, {
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
                        removeCookie('yandexuid');
                        removeCookie('googtrans');
                        removeCookie('CookieConsent');
                        removeCookie('waSessionId');
                        removeCookie('widget_spinner_id');
                        removeCookie('connect.sid');
                        removeCookie('i');
                        removeCookie('is_gdpr');
                        removeCookie('is_gdpr_b');
                        removeCookie('ymex');
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
            <Button style={{ width: '350px' }} type="submit" onClick={() => navigate(-1)}>
              Подтвердить выбор настроек cookies
            </Button>
            <li>
              <strong>
                Помимо настроек куки на сайте субъекты персональных данных могут принять или
                отклонить сбор всех или некоторых куки в настройках своего браузера.
              </strong>
              <p>
                При этом некоторые браузеры позволяют посещать интернет-сайты в режиме «инкогнито»,
                чтобы ограничить хранимый на компьютере объем информации и автоматически удалять
                сессионные куки. Кроме того, субъект персональных данных может удалить ранее
                сохраненные куки, выбрав соответствующую опцию в истории браузера.
              </p>
              <p>
                Подробнее о параметрах управления куки можно ознакомиться, перейдя по внешним
                ссылкам, ведущим на соответствующие страницы сайтов основных браузеров:
              </p>
              <div>
                <a
                  href={
                    'https://support.mozilla.org/ru/kb/udalenie-kukov-i-dannyh-sajtov-v-firefox?redirectslug=udalenie-kukov-dlya-udaleniya-informacii-kotoruyu-&redirectlocale=ru'
                  }
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <img src={require('./images/Firefox_Icon.png')} alt={'firefox'} />
                </a>
                <a
                  href={'https://support.google.com/chrome/answer/95647?hl=ru'}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <img src={require('./images/Chrome_Icon.png')} alt={'chrome'} />
                </a>
                <a
                  href={'https://support.apple.com/ru-ru/guide/safari/sfri11471/mac'}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <img src={require('./images/Safari_Icon.png')} alt={'safari'} />
                </a>
                <a
                  href={
                    'https://help.opera.com/ru/latest/web-preferences/#%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0%D0%BC%D0%B8-cookie'
                  }
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <img src={require('./images/Opera_Icon.png')} alt={'opera'} />
                </a>
                <a
                  href={
                    'https://support.microsoft.com/ru-ru/windows/%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0%D0%BC%D0%B8-cookie-%D0%B2-microsoft-edge-%D0%BF%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80-%D1%80%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-168dab11-0753-043d-7c16-ede5947fc64d'
                  }
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <img src={require('./images/Edge_Icon.png')} alt={'edge'} />
                </a>
              </div>
            </li>
          </ol>
        </ContainerInform>
      }
    />
  );
}
