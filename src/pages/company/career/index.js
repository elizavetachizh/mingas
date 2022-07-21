import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import {
  DivAboutManagementBackground,
  DivAboutmanagementWhiteFont,
  DivBasicManagement,
} from '../managment/styles';
import {
  DivAfterAndBefore,
  DivDescriptionCareer,
  DivForm,
  TextCareer,
  PhotoCareer,
  DivVacancies,
  TitleCareer,
} from './styles';
import career from '../../../assets/png/oszczedzanie-gazu.jpg';
import up from '../../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import anketa from '../../../assets/wordFile/ANKETA.doc';
import workImg from '../../../assets/company/photo_2022-07-21_16-56-06.jpg'
import TitleForHome from '../../../components/TitleForHome';
import background from '../../../assets/background/подложка_3.png';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
export default function Career() {
  const styleImage = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'round',
    // backgroundAttachment: 'fixed'
  };
  return (
    <Container style={styleImage}>
      <Header backgroundHeader="blue" />
      <>
        <HeaderCompany currentPage={'career'} />
        <TitleForHome color={'blue'} infoTitle={'Работа в РУП “Мингаз”'}></TitleForHome>
        {/*<DivAfterAndBefore >*/}
        {/*  <DivAboutManagementBackground>*/}
        {/*    <DivAboutmanagementWhiteFont>*/}
        {/*      <DivBasicManagement>*/}
        {/*        <DivDescriptionCareer>*/}
        {/*          /!*<TextCareer>*!/*/}
        {/*          /!*  <p>УП «МИНГАЗ» приглашает на работу следующих соискателей:</p>*!/*/}
        {/*          /!*  <ul>*!/*/}
        {/*          /!*    <li>слесарь по обслуживанию и ремонту газоиспользующего оборудования;</li>*!/*/}
        {/*          /!*    <li>слесарь по обслуживанию и ремонту наружных газопроводов;</li>*!/*/}
        {/*          /!*    <li>слесарь по ремонту автомобилей 5 разряда;</li>*!/*/}
        {/*          /!*    <li>электрогазосварщик 5 разряда;</li>*!/*/}
        {/*          /!*    <li>тракторист (работа вахтовым методом).</li>*!/*/}
        {/*          /!*  </ul>*!/*/}
        {/*          /!*</TextCareer>*!/*/}
        {/*        </DivDescriptionCareer>*/}
        {/*        <PhotoCareer src={career} />*/}
        {/*      </DivBasicManagement>*/}
        {/*      /!*<DivVacancies>*!/*/}
        {/*      /!*  <TitleCareer>Вакансии</TitleCareer>*!/*/}
        {/*      /!*</DivVacancies>*!/*/}
        {/*      <DivForm className="form-div">*/}
        {/*        <p>*/}
        {/*          При приеме на работу предлагаем заполнить*/}
        {/*          <a download href={anketa}>*/}
        {/*            анкету*/}
        {/*          </a>*/}
        {/*        </p>*/}
        {/*      </DivForm>*/}
        {/*      <p>Телефон отдела кадров УП «МИНГАЗ»: 80172992830, 80172992936</p>*/}
        {/*      <p>e-mail: ok@mingas.by</p>*/}
        {/*      <p>*/}
        {/*        По вопросам трудоустройства обращаться по адресу: г. Минск, ул. Ботаническая, д. 11/1*/}
        {/*        каб. 103.*/}
        {/*      </p>*/}
        {/*    </DivAboutmanagementWhiteFont>*/}
        {/*  </DivAboutManagementBackground>*/}
        {/*</DivAfterAndBefore>*/}
        <AdditionalDiv>
          <a
            href={
              'https://rabota.by/search/vacancy?text=%D0%9C%D0%B8%D0%BD%D0%B3%D0%B0%D0%B7&from=suggest_post&salary=&clusters=true&area=1002&ored_clusters=true&enable_snippets=true'
            }
          >
            <PhotoCareer src={workImg} />
            Актуальные вакансии на УП "МИНГАЗ"
          </a>
          <DivForm className="form-div">
            <p>
              При приеме на работу предлагаем заполнить
              <a download href={anketa}>
                анкету
              </a>
            </p>
          </DivForm>
          <p>Телефон отдела кадров УП «МИНГАЗ»: 80172992830, 80172992936</p>
          <p>e-mail: ok@mingas.by</p>
          <p>
            По вопросам трудоустройства обращаться по адресу: г. Минск, ул. Ботаническая, д. 11/1
            каб. 103.
          </p>
        </AdditionalDiv>
      </>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
