
import Header from '../header';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import TitleFun from '../title';
import { Table, Tbody } from '../../pages/feedback/receptionOfCitizens/styles';
import one from '../../assets/RegularyDocuments/1.pdf';
import two from '../../assets/RegularyDocuments/2.docx';
import three from '../../assets/RegularyDocuments/3.docx';
import four from '../../assets/RegularyDocuments/4.docx';
import five from '../../assets/RegularyDocuments/5.docx';
import six from '../../assets/RegularyDocuments/6.pdf';
import seven from '../../assets/RegularyDocuments/7.pdf';
import eight from '../../assets/RegularyDocuments/8.pdf';
import nine from '../../assets/RegularyDocuments/9.pdf';
import ten from '../../assets/RegularyDocuments/10.pdf';
import eleven from '../../assets/RegularyDocuments/11.pdf';
import twelve from '../../assets/RegularyDocuments/12.pdf';
import thirteen from '../../assets/RegularyDocuments/13.pdf';
import fourteen from '../../assets/RegularyDocuments/14.pdf';
import fifteen from '../../assets/RegularyDocuments/15.pdf';
import { IoMdDocument } from 'react-icons/io';
import { Container } from "../../pages/company/styles";

export default function RegulatoryDocuments() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun infoTitle={'Регламинитрующие документы'} color={'blue'} />
        <Table style={{width: '80%', margin: '0 auto'}}>
          <thead style={{textAlign: 'center', height: '50px'}}>
            <tr>
              <th>Наименование документа</th>
              <th>Документ</th>
            </tr>
          </thead>
          <Tbody>
            <tr>
              {' '}
              <td>
                Указ Президента Республики Беларусь от 02.06.2006 № 368 (ред. от 14.04.2020) «О
                мерах по регулированию отношений при газификации природным газом эксплуатируемого
                жилищного фонда граждан»
              </td>
              <td>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={one}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              {' '}
              <td>
                Постановление Совета Министров Республики Беларусь от 18.11.2006 № 1554 (ред. от
                25.05.2015) «Об утверждении Положения о порядке предоставления льготных кредитов
                гражданам на газификацию природным газом эксплуатируемого ими жилищного фонда»;
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={two}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              {' '}
              <td>
                Постановление Министерства энергетики Республики Беларусь от 22.03.2007 № 10 (ред.
                от 12.05.2020) «О порядке проведения некоторых административных процедур по вопросам
                подключения электроустановок одноквартирных жилых домов и других капитальных
                строений граждан к электрическим сетям и газификации одноквартирных жилых домов»;
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={three}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              {' '}
              <td>
                Постановление Совета Министров Республики Беларусь 6 июля 2020 г. № 403 (ред. от
                29.10.2021) «О реализации Указа президента Республики Беларусь от 14 апреля 2020 г.
                № 127».
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={four}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              {' '}
              <td>
                Закон Республики Беларусь от 4 января 2003 г. N 176-3 (ред. 24.05.2021) «О
                газоснабжении».
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={five}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              {' '}
              <td>
                Постановление Совета Министров Республики Беларусь от 19 ноября 2007 г. № 1539 (ред.
                16.11.2021) «Об утверждении правил пользований газом в быту».
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={six}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              {' '}
              <td>
                Указ Президента Республики Беларусь от 26 апреля 2010 г. № 200 (ред. 21.10.2021) «Об
                административных процедурах, осуществляемых государственными органами и иными
                организациями по заявлениям граждан».
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={seven}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              {' '}
              <td>
                Постановление Совета Министров Республики Беларусь от 22 декабря 2015г. № 1079 (ред.
                25.03.2022) «О дополнительных мерах по обеспечению условий для заселения граждан в
                жилые помещения в завершенных строительством многоквартирных жилых домах».
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={eight}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              {' '}
              <td>
                Постановление Совета Министров Республики Беларусь от 15 декабря 2008 г. № 1934
                (ред. 26.10.2021) «Об утверждении правил учета природного газа»
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={nine}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              {' '}
              <td>
                «Положение о порядке установления охранных зон объектов газораспределительной
                системы, размерах и режиме их использования» утверждены Постановлением Совета
                Министров Республики Беларусь от 6 ноября 2007г. №1474.
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={ten}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>{' '}
            <tr>
              {' '}
              <td>
                Стандарт ГПО «Белтопгаз» СТП 03.13-2022 Система технического обслуживания и ремонта
                объектов газораспределительной системы и газопотребления. Техническое обслуживание и
                ремонт запорных устройств на газопроводах-вводах, вводных и внутренних газопроводах,
                вводных газопроводов, внутренних газопроводов и газового оборудования жилых зданий.
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={eleven}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>{' '}
            <tr>
              {' '}
              <td>
                Закон Республики Беларусь от 28 октября 2008г. № 433-З (ред. от 09.01.2017) «Об
                основах административных процедур»
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={twelve}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>{' '}
            <tr>
              {' '}
              <td>
                Контроль качества строительства и приемка в эксплуатацию объектов газоснабжения
                одноквартирных блокированных жилых домов граждан
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={thirteen}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>{' '}
            <tr>
              {' '}
              <td>
                Постановление Министерства Архитектуры и Строительства Республики Беларусь от 4
                февраля 2014 г. № 4 (ред. 17.05.2018) «Об установлении перечня функций заказчика,
                застройщика, руководителя (управляющего) проекта по возведению, реконструкции,
                капитальному ремонту, реставрации
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={fourteen}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>{' '}
            <tr>
              {' '}
              <td>
                Закон Республики Беларусь от 18.07.2011 N 300-З (ред. от 17.07.2020) "ОБ ОБРАЩЕНИЯХ
                ГРАЖДАН И ЮРИДИЧЕСКИХ ЛИЦ"
              </td>
              <td>
                {' '}
                <a
                  style={{ width: '100%', margin: '0 auto' }}
                  target={'_blank'}
                  href={fifteen}
                  rel="noreferrer"
                >
                  <IoMdDocument style={{ width: '100%', height: '34px', margin: '0 auto' }} />
                </a>
              </td>
            </tr>
          </Tbody>
        </Table>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
