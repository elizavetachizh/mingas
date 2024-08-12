import { Overlay } from '../ModalWindowAdvertising/styles';
import React from 'react';

export default function ModalWindowAIS() {
  return (
    <Overlay style={{ display: 'block' }} id="overlay-AIS">
      <div className="popup">
        <div className="pl-left">
          <h2 style={{textAlign:'center'}}>Внимание! Центр обслуживания клиентов УП «МИНГАЗ» переезжает!</h2>
          <p style={{fontSize:'16px'}}>
            УП «МИНГАЗ» настоящим сообщает, что с 27.07.2024 обслуживание граждан будет производиться в Центре обслуживания клиентов по адресу:
            г.Минск., ул. П.Бровки., д.1., режим работы: ежедневно с 08.00 до 20.00, кроме праздничных дней
          </p>
          <p style={{fontSize:'16px'}}>
            Прием граждан и юридических лиц по адресу: г. Минск, ул.Ботаническая, д.11/1 <strong>осуществляться не будет</strong>.
          </p>
          <p style={{fontSize:'16px'}}>
            Дополнительную консультацию по интересующим вопросам можно получить в Контакт-центре УП «МИНГАЗ›› по номеру <strong>162</strong>, режим работы:
            ежедневно с 08.00 до 20.00, кроме праздничных дней.
          </p>
        </div>
        <button
          className="close"
          title="Закрыть"
          onClick={() => {
            document.getElementById('overlay-AIS').style.display = 'none';
          }}
        />
      </div>
    </Overlay>
  );
}
