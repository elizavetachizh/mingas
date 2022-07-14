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
} from './styles';
import career from '../../../assets/png/oszczedzanie-gazu.jpg';
import up from '../../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import anketa from '../../../assets/wordFile/ANKETA.doc';
import TitleFun from '../../../components/title';
import TitleForHome from "../../../components/TitleForHome";
export default function Career() {
  return (
    <Container>
      <Header backgroundHeader="blue" />

      <HeaderCompany currentPage={'career'} />
      <TitleForHome color={'blue'} infoTitle={'Работа в РУП “Мингаз”'}></TitleForHome>
      <DivAfterAndBefore>
        <DivAboutManagementBackground>
          <DivAboutmanagementWhiteFont>
            <DivBasicManagement>
              <DivDescriptionCareer>
                <TextCareer>
                  <p>УП «МИНГАЗ» приглашает на работу следующих соискателей:</p>
                  <ul>
                    <li>слесарь по обслуживанию и ремонту газоиспользующего оборудования;</li>
                    <li>слесарь по обслуживанию и ремонту наружных газопроводов;</li>
                    <li>слесарь по ремонту автомобилей 5 разряда;</li>
                    <li>электрогазосварщик 5 разряда;</li>
                    <li>тракторист (работа вахтовым методом).</li>
                  </ul>
                </TextCareer>
              </DivDescriptionCareer>
              <PhotoCareer src={career} />
            </DivBasicManagement>
            {/*<DivVacancies>*/}
            {/*  <TitleCareer>Вакансии</TitleCareer>*/}
            {/*</DivVacancies>*/}
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
          </DivAboutmanagementWhiteFont>
        </DivAboutManagementBackground>
      </DivAfterAndBefore>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
