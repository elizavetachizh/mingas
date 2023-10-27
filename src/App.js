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
          Для обеспечения удобства пользователей сайта используются cookies
          <Button
            onClick={() => {
              ref.current.classList.add('passive');
              setCookie('_ga', 'GA1.1.1461999740.1696242335', { path: '/' });
              setCookie('googtrans', '/ru/ru', { path: '/' });
              setCookie('CookieConsent', true, { path: '/' });
            }}
            className={'cookie-container'}
          >
            Принять
          </Button>
          <Button
            onClick={() => {
              ref.current.classList.add('passive');
              removeCookie('_ga');
              removeCookie('googtrans');
              removeCookie('CookieConsent');
              removeCookie('waSessionId');
              removeCookie('waUserId_1000088280-mingazbot-1000088280-XWf-20942513239');
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
