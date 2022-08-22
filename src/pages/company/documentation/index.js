import React, { useCallback, useState } from 'react';
import { Container, ContainerGraditude } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleForHome from '../../../components/TitleForHome';
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import LitsenziiFunction from './litsenzii';
import {certifications} from "../../../assets/data/certifications";

export default function Documentation() {
  const [visible, setVisible] = useState(false);
  const [currentServiceID, setServiceID] = useState(null);
  const openImage = useCallback(
    (id) => {
      if (currentServiceID === id) {
        setServiceID(null);
        setVisible(false);
      } else {
        setServiceID(id);
        setVisible(true);
      }
    },
    [visible, currentServiceID]
  );
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'documentation'} />
      <TitleForHome infoTitle={'Сертификаты, лицензии, свидетельства'} color={'blue'} />
      <AdditionalDiv>
       <div style={{width: '80%', margin: '2% auto'}}> <Carousel
           plugins={[
               'arrows',
               {
                   resolve: autoplayPlugin,
                   options: {
                       interval: 2000,
                   },
               },
           ]}
           animationSpeed={1000}
       >
           {certifications.map((element) => (
               <ContainerGraditude onClick={() => openImage(element.id)}>
                   <img
                       className={currentServiceID === element.id && visible && 'visibleOpen'}
                       src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${element.img}.png`)}
                       alt={''}
                   />
               </ContainerGraditude>
           ))}
       </Carousel></div>
       <div style={{width: '80%', margin: '2% auto'}}> <LitsenziiFunction /></div>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
