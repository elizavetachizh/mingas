import { Overlay } from '../ModalWindowAdvertising/styles';
import React from 'react';

export default function ModalWindowAIS() {
  return (
    <Overlay style={{ display: 'block' }} id="overlay-AIS">
      <div className="popup">
        <div className="pl-left">
          <h2 style={{textAlign:'center'}}>Уважаемый потребитель!</h2>
          <p style={{fontSize:'16px'}}>
            В настоящее время осуществляется поэтапный переход начисления платы за газоснабжение в
            АИС "Расчет-ЖКУ" (ЕРИП).
          </p>
          <p style={{fontSize:'16px'}}>
            Для оплаты за газоснабжение просим Вас перейти на новую ветку ЕРИП:{' '}
            <strong>
              Система «Расчет» (ЕРИП) - Коммунальные платежи - Газоснабжение АИС Расчет-ЖКУ - Минск
              - Мингаз - Газоснабжение АИС Расчет-ЖКУ - № Вашего лицевого счета.
            </strong>
          </p>
          <p style={{fontSize:'16px'}}>
            В случае отсутствия информации о лицевом счете при проведении оплаты необходимо
            вернуться на старую ветку ЕРИП: Система «Расчет» (ЕРИП) - Коммунальные платежи -
            Газоснабжение - Минск - Мингаз - Газоснабжение - № Вашего лицевого счета.
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
