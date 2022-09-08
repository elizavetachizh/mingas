import Header from '../header';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import Footer from '../footer';
import React, { useState } from 'react';
import { ContainerText, ImgERIP } from './styles';
import TitleFun from '../title';
import payment from '../../assets/payment/1.png';
import bankBook from '../../assets/payment/2.png';
import meterReading from '../../assets/payment/3.png';
import meterReading_2 from '../../assets/payment/4.png';
import paymentDetails from '../../assets/payment/5.png';
import ERIP from '../../assets/payment/1-1.png';
import ERIP_2 from '../../assets/payment/2-1.png';
import ERIP_3 from '../../assets/payment/3-1.png';
import ERIP_4 from '../../assets/payment/4-1.png';
import ERIP_5 from '../../assets/payment/5-1.png';
import ERIP_6 from '../../assets/payment/6-1.png';
import results from '../../assets/payment/7.png';
import results_2 from '../../assets/payment/8.png';
import pamyatka from '../../assets/pdf/Pamyatka-ob-oplate-za-potreblennyj-prirodnyj-gaz-v-perehodnyj-period-2022-goda.pdf';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
  BtnIsOpen,
  Div,
  General,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { Container } from '../../pages/company/styles';
export default function MethodPayment() {
  const [open, setOpen] = useState(false);
  const animate = () => {
    setOpen(true);
    if (open) {
      setOpen(false);
    }
  };
  const [close, setClose] = useState(false);
  const animateClose = () => {
    setClose(true);
    if (close) {
      setClose(false);
    }
  };

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun infoTitle={'Способы оплаты'} color={'blue'} />
        <General>
          <BtnIsOpen onClick={animate}>
            <p>
              Памятка об оплате за потребленный природный газ в переходный период через
              Интернет-Банкинг
            </p>
            <div>
              {open ? (
                <IoIosArrowUp style={{ color: '#0e43af', margin: '42% 0' }} />
              ) : (
                <IoIosArrowDown style={{ color: '#0e43af', margin: '42% 0' }} />
              )}
            </div>
          </BtnIsOpen>
          <Div className={open && `shake`}>
            <p>
              Окончание отопительного периода 2022 год г. Минск – 10.05.2022, Минский район –
              11.05.2022.
            </p>
            <p>
              <strong>
                Для проведения платежа за потребленный газ через Интернет-Банкинг необходимо:
              </strong>
            </p>
            <p>1.Выбрать пункт «Система Расчет» (ЕРИП);</p>
            <p>2.Выбрать последовательно вкладки: ЕРИП / Коммунальные платежи /</p>
            <ImgERIP className={'big'} alt={''} src={payment} />
            <p>3.Газоснабжение / Минск / Мингаз / Газоснабжение;</p>
            <p>4.Ввести номер лицевого счета;</p>
            <ImgERIP className={'big'} src={bankBook} alt={''} />
            <p>5.Ввести показания счетчика газа;</p>
            <ImgERIP className={'big'} src={meterReading} alt={''} />
            <ImgERIP className={'big'} alt={''} src={meterReading_2} />
            <ImgERIP className={'big'} alt={''} src={paymentDetails} />
            <p>6.Проверить корректность информации;</p>
            <p>7.Совершить платеж.</p>
          </Div>
        </General>
        <General>
          <BtnIsOpen onClick={animateClose}>
            <p>
              Памятка об оплате за потребленный природный газ в переходный период через М-Банкинг
            </p>
            <div>
              {close ? (
                <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
              ) : (
                <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
              )}
            </div>
          </BtnIsOpen>
          <Div className={close && `shake`}>
            <p>
              <strong>
                Для проведения платежа за потребленный газ через М-Банкинг необходимо:
              </strong>
            </p>
            <p>1.Выбрать пункт «Система Расчет» (ЕРИП);</p>
            <p>2.Выбрать вкладку: ЕРИП / Коммунальные платежи /;</p>
            <ImgERIP alt={''} src={ERIP} />
            <p>3. Выбрать вкладку: ЕРИП /Газоснабжение/;</p>
            <ImgERIP alt={''} src={ERIP_2} />
            <p>4. Выбрать вкладку: ЕРИП /Минск/</p>
            <ImgERIP alt={''} src={ERIP_3} />
            <p>5. Выбрать вкладку: ЕРИП / Мингаз/</p>
            <ImgERIP alt={''} src={ERIP_4} />
            <p>6. Выбрать вкладку: ЕРИП /Газоснабжение/</p>
            <ImgERIP alt={''} src={ERIP_5} />
            <p>
              7. В вкладке /Газоснабжение/, необходимо ввести номер лицевого счета (уникальный
              цифровой код присвоенный при заключении договора), выбрать кнопку «ИНФО»;
            </p>
            <ImgERIP alt={''} src={ERIP_6} />
            <p>
              8. В разделе «Платежи ЕРИП, Мингаз», оплата за потребленный природный газ производится
              следующим образом:
            </p>
            <p>
              <strong> Оплата по зимнему тарифу:</strong> К последним оплаченным показаниям поле
              (Счетчик 1-предыдущ. знач.) прибавить расход газа потребленный в зимний период с
              01.05.2022 по 11.05.2022(окончание отопительного периода в Минском районе), 10.05.2022
              (окончание отопительного периода в Минске) и полученное значение ввести в поле
              (Счетчик 1-текущее знач.).
            </p>
            <p>
              <strong>Оплата по зимнему тарифу</strong>: К предыдущему значению (Счетчик 2-предыдущ.
              знач.) прибавить расход газа потребленного в зимний период с 11.05.2022 (окончание
              отопительного периода в Минском районе), 10.05.2022 (окончание отопительного периода в
              Минске) по 31.05.2022 и полученное значение ввести в поле (Счетчик 2-текущее знач.).
            </p>
            <ImgERIP alt={'results'} src={results} />
            <ImgERIP alt={'results'} src={results_2} />
            <p>9.Проверить корректность информации;</p>
            <p>10.Совершить платеж.</p>
          </Div>
        </General>
        <ContainerText>
          <p>
            <a href={'https://raschet.by/main.aspx?guid=1001'}>Система «Расчет»</a> —
            Автоматизированная Информационная Система Единого Расчетного и Информационного
            Пространства (АИС ЕРИП) создана Национальным банком Республики Беларусь в целях
            упрощения организации приема платежей от физических и юридических лиц. (сайт системы —
            <a href={'https://raschet.by/main.aspx?guid=1001'}>www.raschet.by</a> , телефон
            контакт-центра — 141)
          </p>
          <p>
            Система «Расчет» позволяет произвести оплату в любом удобном для Вас месте, в удобное
            для Вас время, в удобном для Вас пункте банковского обслуживания — банкомате,
            инфокиоске, интернет-банке, кассе банков, с помощью мобильного банкинга и т. д.
          </p>
          <p>
            Вы можете оплатить наши товары/услуги с использованием наличных денежных средств,
            электронных денег и банковских платежных карточек в пунктах банковского обслуживания
            банков, которые оказывают услуги по приему платежей, а также посредством инструментов
            дистанционного банковского обслуживания.
          </p>
          <p>
            <strong>
              Если Вы осуществляете платеж в кассе банка, пожалуйста, сообщите кассиру о
              необходимости проведения платежа через систему «Расчет» (ЕРИП).
            </strong>
          </p>
          <p>
            В каталоге сиcтемы «Расчет» услуги УП «Мингаз» находятся в разделе:ЕРИП / Коммунальные
            платежи / Газоснабжение / Минск / Мингаз
          </p>
          <div>
            <strong>Для проведения платежа за потребленный газ необходимо:</strong>
            <p>1. Выбрать пункт «Система Расчет» (ЕРИП)</p>
            <p>
              2. Выбрать последовательно вкладки: ЕРИП / Коммунальные платежи / Газоснабжение /
              Минск / Мингаз / Газоснабжение
            </p>
            <p>3. Ввести номер лицевого счета</p>
            <p>
              4. Ввести последние показания счетчиков, если оплата производится не по счетчикам —
              ничего не вводить
            </p>
            <p>5. Ввести сумму платежа (если не указана)</p>
            <p>6. Проверить корректность информации</p>
            <p>7. Совершить платеж.</p>
          </div>
          <div>
            <strong>Для проведения платежа за прочие услуги необходимо:</strong>
            <p>1. Выбрать пункт «Система Расчет» (ЕРИП)</p>
            <p>
              2. Выбрать последовательно вкладки: ЕРИП / Коммунальные платежи / Газоснабжение /
              Минск / Мингаз / Прочие услуги
            </p>
            <p>3. Ввести код услуги (указан на выданной квитанции)</p>
            <p>4. Ввести ФИО плательщика</p>
            <p>5. Ввести адрес</p>
            <p>6. Ввести сумму платежа (если не указана)</p>
            <p>7. Проверить корректность информации</p>
            <p>8. Совершить платеж.</p>
          </div>
          <div>
            <strong>
              Для проведения платежа за техническое обслуживание, ремонт и прочие услуги:
            </strong>
            <p>1. Выбрать пункт «Система Расчет» (ЕРИП)</p>
            <p>
              2. Выбрать последовательно вкладки: ЕРИП / Коммунальные платежи / Газоснабжение /
              Минск / Мингаз / ТО, ремонт, услуги
            </p>
            <p>3. Ввести номер лицевого счета</p>
            <p>4. Ввести сумму платежа (если не указана)</p>
            <p>5. Проверить корректность информации</p>
            <p>6. Совершить платеж.</p>
          </div>
          <div>
            <a href={pamyatka} target={'_blank'}>
              Памятка об оплате за потребленный природный газ в переходный период 2022 года.
            </a>
          </div>
        </ContainerText>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
