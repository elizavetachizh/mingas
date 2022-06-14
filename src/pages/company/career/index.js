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
import anketa from '../../../assets/ANKETA.doc';
import TitleFun from '../../../components/title';
import useMediaQuery from "../../Home/parallax/useMediaQuery";
import Headermini from "../../../components/header/Headermini";
export default function Career() {
  const isDesktop = useMediaQuery('(max-width: 1285px)');
  const isPhone = useMediaQuery('(min-width: 900px)');
  return (
    <Container>
      {isDesktop && isPhone ? <Headermini /> : <Header  backgroundHeader="blue"/>}

      <HeaderCompany currentPage={'career'} />
      <TitleFun color={'blue'} infoTitle={'Работа в РУП “Мингаз”'}></TitleFun>
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
                При приеме на работу предлагаем заполнить{' '}
                <a download href={anketa}>
                  анкету
                </a>{' '}
              </p>
            </DivForm>
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
