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
import { IoMdDocument } from 'react-icons/io';
import { Container } from '../../pages/company/styles';

export default function RegulatoryDocumentsForLegal() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun infoTitle={'Регламинитрующие документы'} color={'blue'} />
        <Table style={{ width: '80%', margin: '0 auto' }}>
          <thead style={{ textAlign: 'center', height: '50px' }}>
            <tr>
              <th>Наименование документа</th>
              <th>Документ</th>
            </tr>
          </thead>
          <Tbody>
            <tr>
              <td>
                «Положение о порядке подготовки и выдачи разрешительной документации на
                строительство объектов» (ред. от 25.03.2022) (в ред. Постановления Совета Министров
                Республики Беларусь от 31.10.2018 №785)
              </td>
              <td>
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
                Технический кодекс установившейся практики ТКП 241-2018 (33240) «Порядок разработки
                технико-экономического обоснования выбора варианта теплоснабжения при возведении
                реконструкции объектов».
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
                Закон Республики Беларусь от 4 января 2003 г. N 176-3 (ред. 24.05.2021) «О
                газоснабжении».
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
                Указ Президента Республики Беларусь от 02.06.2006 № 368 (ред. от 14.04.2020) «О
                мерах по регулированию отношений при газификации природным газом эксплуатируемого
                жилищного фонда граждан»;
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
                Постановление Совета Министров Республики Беларусь от 18.11.2006 № 1554 (ред. от
                25.05.2015) «Об утверждении Положения о порядке предоставления льготных кредитов
                гражданам на газификацию природным газом эксплуатируемого ими жилищного фонда»;
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
                Закон Республики Беларусь от 5 января 2016г. № 354-З (ред. от 28.05.2021) «О
                промышленной безопасности»
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
                Постановление Совета Министров Республики Беларусь от 24 сентября 2021 г. № 548
                (ред. от 19.07.2022) «Об административных процедурах, осуществляемых в отношении
                субъектов хозяйствования»
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
                Регламент проведения ремонтных работ по замене прибора учета расхода газа с
                максимальным часовым расходом газа до 10нм3 час, установленных у юр.лиц и ИП
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
                Закон Республики Беларусь от 18.07.2011 N 300-З (ред. от 17.07.2020) "ОБ ОБРАЩЕНИЯХ
                ГРАЖДАН И ЮРИДИЧЕСКИХ ЛИЦ"
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
                Постановление Совета Министров Республики Беларусь от 19 ноября 2007 г. № 1539 (ред.
                16.11.2021) «Об утверждении правил пользований газом в быту».
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
                Постановление Совета Министров Республики Беларусь от 22 декабря 2015г. № 1079 (ред.
                25.03.2022) «О дополнительных мерах по обеспечению условий для заселения граждан в
                жилые помещения в завершенных строительством многоквартирных жилых домах».
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
                Постановление Совета Министров Республики Беларусь от 15 декабря 2008 г. № 1934
                (ред. 26.10.2021) «Об утверждении правил учета природного газа»
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
                «Положение о порядке установления охранных зон объектов газораспределительной
                системы, размерах и режиме их использования» утверждены Постановлением Совета
                Министров Республики Беларусь от 6 ноября 2007г. №1474.
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
            </tr>
          </Tbody>
        </Table>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
