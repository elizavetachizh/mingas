import './App.css';
import CookieConsent from 'react-cookie-consent';
import Routers from './routers';
export default function App() {
  return (
    <div>
      <Routers />
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
        debug={true}
      >
        Этот сайт использует файлы cookies для более комфортной работы пользователя. Продолжая
        просмотр страниц сайта, вы соглашаетесь с использованием файлов cookies
      </CookieConsent>
    </div>
  );
}
