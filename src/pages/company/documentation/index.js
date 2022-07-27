import React, { useEffect } from "react";
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import ScriptTag from 'react-script-tag';
import { ContainerDocumentation, ContainerIframe } from './styles';
import TitleForHome from '../../../components/TitleForHome';
import SubTitleFun from '../../../components/SubTitle';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import AttestatsFunction from './attestats';
import CertificatsFunction from './certifications';
import useScript from "../../../hooks/useScript";
const styled = {
  width: '100%',
  zIndex: '10',
  height: '100%',
  backgroundImage: `url(${require('../../../assets/background/background.png')})`,
};

export default function Documentation() {
  useScript('https://use.typekit.net/foobar.js');
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'documentation'} />
      <TitleForHome infoTitle={'Сертификаты, лицензии, свидетельства'} color={'blue'} />
      {/*<img style={styled} src={backgroundBefore}></img>*/}
      {/*<Carousel*/}
      {/*  plugins={[*/}
      {/*    'infinite',*/}
      {/*    {*/}
      {/*      resolve: autoplayPlugin,*/}
      {/*      options: {*/}
      {/*        interval: 2000,*/}
      {/*      }*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  animationSpeed={1000}*/}
      {/*>*/}
      {/*  <iframe src={attesttat} />*/}
      {/*  <iframe src={attesttat_1} />*/}
      {/*  <iframe src={attestat_2} />*/}
      {/*  <iframe src={attestat_3} />*/}
      {/*  <iframe src={attestat_4} />*/}
      {/*</Carousel>*/}
      <AdditionalDiv>
        <ContainerDocumentation>
          {' '}
          <AttestatsFunction />
          <CertificatsFunction />
          <iframe>
            {' '}
            <script
              className="hh-script"
              src="https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2"
            ></script>
          </iframe>
          <ScriptTag
            className="hh-script"
            isHydrating={true}
            type="modules"
            src="https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2"
          />
        </ContainerDocumentation>

        {/*  <SubTitleFun color={'blue'} infoSubTitle={'Аттестаты'} />*/}
        {/*  <ContainerIframe>*/}
        {/*    <iframe src={attesttat} />*/}
        {/*    <iframe src={attesttat_1} />*/}
        {/*    <iframe src={attestat_2} />*/}
        {/*    <iframe src={attestat_3} />*/}
        {/*    <iframe src={attestat_4} />*/}
        {/*  </ContainerIframe>*/}
        {/*  <SubTitleFun color={'blue'} infoSubTitle={'Лицензии'} />*/}
        {/*  <ContainerIframe>*/}
        {/*    <iframe src={license} />*/}
        {/*    <iframe src={license_1} />*/}
        {/*    <iframe src={license_2} />*/}
        {/*    <iframe src={license_3} />*/}
        {/*    <iframe src={license_4} />*/}
        {/*    <iframe src={license_5} />*/}
        {/*  </ContainerIframe>*/}
        {/*  <SubTitleFun color={'blue'} infoSubTitle={'Разрешения'} />*/}
        {/*  <ContainerIframe>*/}
        {/*    <iframe src={permission} />*/}
        {/*    <iframe src={permission_1} />*/}
        {/*  </ContainerIframe>*/}
        {/*  <SubTitleFun color={'blue'} infoSubTitle={'Сертификаты'} />*/}
        {/*  <ContainerIframe>*/}
        {/*    <iframe src={sertificat} />*/}
        {/*    <iframe src={sertificqat_1} />*/}
        {/*    <iframe src={sertificat_2} />*/}
        {/*    <iframe src={sertificat_3} />*/}
        {/*    <iframe src={sertificat_4} />*/}
        {/*    <iframe src={sertificat_5} />*/}
        {/*    <iframe src={sertificat_6} />*/}
        {/*    <iframe src={sertificat_7} />*/}
        {/*    <iframe src={sertificat_8} />*/}
        {/*  </ContainerIframe>*/}
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
