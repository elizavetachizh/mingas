import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../backend';

export default function GasSupplyTariffs() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/description/63ad990eaab324eb9e07a42f`)
      .then((res) => {
        setInfo(Object.values(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);
  const element = document.getElementById(`info`);
  useEffect(() => {
    if (element) {
      element.innerHTML += info[2];
    }
  }, [element, info]);
  return (
    <div>
      <div id={'info'} />
      <h4>Обращаем Ваше внимание!</h4>
      <p>
        Трудоспособным гражданам, не занятым в экономике, начисление платы за услуги газоснабжения
        при наличии индивидуальных газовых отопительных приборов осуществляется по тарифам,
        обеспечивающим полное возмещение затрат на оказание данных услуг.
      </p>
      <p>
        Решить вопрос трудоустройства можно, обратившись в Государственную службу занятости
        населения, постоянно действующую комиссию по координации работы по содействию занятости
        населения.
      </p>
      <p>
        С вакансиями можно ознакомиться на портале <strong>gsz.gov. by.</strong>
      </p>
      <p>
        Справки по <strong>ТРУДОУСТРОЙСТВУ </strong>по тел.:{' '}
        <a href={'tel:+375 (017) 353-57-40'}>+375 (017) 353-57-40</a> (г. Минск) <br />
        <a href={'tel:+375 (017) 395-21-58'}>+375 (017) 395-21-58</a> (Минский р-н) <br />{' '}
        <a href={'tel:+375 (017) 377-29-28'}>+375 (017) 377-29-28</a> (Минский р-н)
      </p>
      <strong>
        Способ оплаты через систему расчёт ЕРИП
        <ol>
          <li>Выбрать пункт «Система Расчет» (ЕРИП)</li>
          <li>
            Выбрать последовательно вкладки: ЕРИП/ Коммунальные
            платежи/Газоснабжение/Минск/Мингаз/Газоснабжение (код 31)
          </li>
          <li>Ввести номер лицевого счета (номер договора на газоснабжение)</li>
          <li>Далее нажмите инфо и убедитесь в достоверности информации</li>
          <li>Ввести последние показания счетчиков и нажмите продолжить</li>
          <li>
            В случае если оплата производится по сумме показания счётчика вводить не нужно. Ввести
            сумму платежа (если не указана к оплате)
          </li>
          <li>Проверить корректность информации</li>
          <li>Совершить платеж</li>
        </ol>
      </strong>
    </div>
  );
}
