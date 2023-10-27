import './App.css';
import CookieConsent from 'react-cookie-consent';
import Routers from './routers';
import { Button } from './pages/feedback/styles';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
export default function App() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['CookieConsent']);
  return (
    <div>
      <Routers />
      {!cookies?.CookieConsent && (
        <CookieConsent
          style={{
            backgroundColor: 'rgba(14,78,129,1)',
            width: '100%',
            margin: '0 auto',
            justifyContent: 'center',
          }}
          contentStyle={{ maxWidth: '1300px', width: '100%' }}
          buttonStyle={{ display: 'none' }}
          // buttonText={'Принять'}
          debug={true}
        >
          Для обеспечения удобства пользователей сайта используются cookies
          <Button
            onClick={() => {
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
              removeCookie('_ga');
              removeCookie('googtrans');
              removeCookie('CookieConsent');
            }}
            className={'cookie-container'}
          >
            Отклонить
          </Button>
          <Button onClick={() => navigate('/politika-cookie')} className={'cookie-container'}>
            Подробнее
          </Button>
        </CookieConsent>
      )}
    </div>
  );
}
