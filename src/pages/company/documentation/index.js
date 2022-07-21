import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import attesttat from '../../../assets/pdf/certificates/Аттестат_аккредитации_поверочной_лаборатории_СГЭМОиООС.pdf';
import attestat_4 from '../../../assets/pdf/certificates/Аттестат соответствия Строительство объектов 3 категория_геодезические работы, устройство внутренних систем газоснабжения объектов жилищного фонда.pdf';
import attesttat_1 from '../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД.pdf';
import attestat_2 from '../../../assets/pdf/certificates/Аттестат соответствия Выполнение функций заказчика при осуществлении деятельности по возведению, реконструкции, реставрации, благоустройству объектов строительства.pdf';
import attestat_3 from '../../../assets/pdf/certificates/Аттестат соответствия на  оказание инженерных услуг_оказание инженерных услуг по комплексному управлению строит.деят.; технический надзор.pdf';
import sertificat from '../../../assets/pdf/certificates/Сертификат продукции собственного производства. Торф фрезерный. Брикет.pdf';
import sertificqat_1 from '../../../assets/pdf/certificates/Сертификат соответствия Выполнение работ по заполнению оконных и дверных проемов.pdf';
import sertificat_2 from '../../../assets/pdf/certificates/Сертификат соответствия Выполнение работ по монтажу внутренних инженерных систем зданий и сооружений, монтаж внутреннего газоснабжения.pdf';
import sertificat_3 from '../../../assets/pdf/certificates/Сертификат соответствия Выполнение работ по монтажу наружных сетей и сооружений_ монтаж газопроводов.pdf';
import sertificat_4 from '../../../assets/pdf/certificates/Сертификат соответствия Выполнение работ по устройству дорожных одежд с покрытием из плит тротуарных.pdf';
import sertificat_6 from '../../../assets/pdf/certificates/ISO 9001-2015.pdf';
import sertificat_7 from '../../../assets/pdf/certificates/ISO 14001-2015.pdf';
import sertificat_8 from '../../../assets/pdf/certificates/СТБ  ISO 45001.pdf';
import sertificat_5 from '../../../assets/pdf/certificates/Сертификат соответствия Выполнение работ по устройству тепловой изоляции ограждающих конструкций зданий и сооружений_ устройство легких и тяжелых штукатурных систем.pdf';
import permission from '../../../assets/pdf/certificates/Разрешение на право изготовления ШРП №11-02-166-2019.pdf';
import permission_1 from '../../../assets/pdf/certificates/Разрешение на право изготовления  неразъемнные соединения ПЭ труб со стальными №11-02-145-2019.pdf';
import license from '../../../assets/pdf/certificates/Лицензия На право осуществления деятельности в области автомобильного транспорта.pdf'
import license_1 from '../../../assets/pdf/certificates/Лицензия На право осуществления деятельности в области использования атомной энергии и источников ионизирующего излучения.pdf'
import license_2 from '../../../assets/pdf/certificates/Лицензия на право осуществления деятельности в области промышленной безопасности.pdf'
import license_3 from '../../../assets/pdf/certificates/Лицензия на право осуществления деятельности по обеспечению пожарной безопасности.pdf'
import license_4 from '../../../assets/pdf/certificates/Лицензия на право осуществления Медицинская деятельность.pdf'
import license_5 from '../../../assets/pdf/certificates/Лицензия Охранной деятельности.pdf'
import { ContainerIframe } from './styles';
import TitleForHome from '../../../components/TitleForHome';
import SubTitleFun from '../../../components/SubTitle';
const styled = {
  width: '100%',
  zIndex: '10',
  height: '100%',
  backgroundImage: `url(${require('../../../assets/background/background.png')})`,
};

export default function Documentation() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'documentation'} />
      <TitleForHome infoTitle={'Сертификаты, лицензии, свидетельства'} color={'blue'} />
      {/*<img style={styled} src={backgroundBefore}></img>*/}
      <AdditionalDiv>
        <SubTitleFun color={'blue'} infoSubTitle={'Аттестаты'} />
        <ContainerIframe>
          <iframe src={attesttat} />
          <iframe src={attesttat_1} />
          <iframe src={attestat_2} />
          <iframe src={attestat_3} />
          <iframe src={attestat_4} />
        </ContainerIframe>
        <SubTitleFun color={'blue'} infoSubTitle={'Лицензии'} />
        <ContainerIframe>
          <iframe src={license} />
          <iframe src={license_1} />
          <iframe src={license_2} />
          <iframe src={license_3} />
          <iframe src={license_4} />
          <iframe src={license_5} />
        </ContainerIframe>
        <SubTitleFun color={'blue'} infoSubTitle={'Разрешения'} />
        <ContainerIframe>
          <iframe src={permission} />
          <iframe src={permission_1} />
        </ContainerIframe>
        <SubTitleFun color={'blue'} infoSubTitle={'Сертификаты'} />
        <ContainerIframe>
          <iframe src={sertificat} />
          <iframe src={sertificqat_1} />
          <iframe src={sertificat_2} />
          <iframe src={sertificat_3} />
          <iframe src={sertificat_4} />
          <iframe src={sertificat_5} />
          <iframe src={sertificat_6} />
          <iframe src={sertificat_7} />
          <iframe src={sertificat_8} />
        </ContainerIframe>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
