import './App.css';
import CookieConsent from 'react-cookie-consent';
import Routers from './routers';
import { Button } from './pages/feedback/styles';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
export default function App() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['CookieConsent']);
  return (
    <div>
      <Routers />
      {!cookies?.CookieConsent && (
        <CookieConsent
          style={{
            backgroundColor: 'rgba(14,78,129,1)',
            width: '100%',
            margin: '0 auto',
            justifyContent: 'left',
          }}
          contentStyle={{ flex: 'none', maxWidth: '1100px', width: '100%' }}
          buttonStyle={{ background: '#fff', padding: '10px 30px', margin: '20px' }}
          buttonText={'Ок'}
          debug={false}
        >
          Этот сайт использует файлы cookies для более комфортной работы пользователя. Продолжая
          просмотр страниц сайта, вы соглашаетесь с использованием файлов cookies
          <Button onClick={() => navigate('/politika-cookie')} className={'cookie-container'}>
            Подробнее
          </Button>
        </CookieConsent>
      )}
    </div>
  );
}
