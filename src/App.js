import './App.css';
import Routers from './routers';
import { Button } from './pages/feedback/styles';
import { useCookies } from 'react-cookie';
import { CookieConsent } from './components/ContainerCokies/styles';
import { useRef } from 'react';
export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['CookieConsent']);
  const ref = useRef();

  return (
    <div>
      <Routers />
      {!cookies?.CookieConsent && (
        <CookieConsent ref={ref}>
          Для обеспечения удобства пользователей сайта используются файлы cookie
          <Button
            onClick={() => {
              ref.current.classList.add('passive');
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
            className={'cookie-container'}
          >
            Принять
          </Button>
          <Button
            onClick={() => {
              ref.current.classList.add('passive');
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
            className={'cookie-container'}
          >
            Отклонить
          </Button>
          <a href={'/politika-cookie'} className={'cookie-container'}>
            Подробнее
          </a>
        </CookieConsent>
      )}
    </div>
  );
}
