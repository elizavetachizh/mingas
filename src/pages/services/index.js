import React, { useCallback, useState } from 'react';
import Header from '../../components/header';
import { DivServices } from './styles';
import { data } from '../../assets/data_services';
import ServicesList from './servicesList';
import Footer from '../../components/footer';
import { Container } from '../company/styles';
import up from '../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import TitleFun from '../../components/title';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';
import { useNavigate } from 'react-router';

export default function Services() {
  const navigate = useNavigate();
  const handlerServiceClick = useCallback((descriptionID) => {
    const current = data.find((element) => element.serviceId === descriptionID);
    navigate(`/services/${current.serviceId}`);
  }, []);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Услуги жителям столичного региона'} />
        <DivServices>
          {data.map((element) => (
            <ServicesList
              onClick={() => {
                handlerServiceClick(element.serviceId);
              }}
              key={element.serviceId}
              serviceId={element.serviceId}
              imgCard={element.cardImg}
              nameCard={element.nameCard}
              description={element.description}
            />
          ))}
          {/*{data.map((element) => (*/}
          {/*  <Button*/}
          {/*    onClick={() => {*/}
          {/*      animate(element.serviceId);*/}
          {/*      console.log(element.serviceId);*/}
          {/*    }}*/}
          {/*    key={element.serviceId}*/}
          {/*    // serviceId={element.serviceId}*/}
          {/*    // imgCard={element.cardImg}*/}
          {/*    // nameCard={element.nameCard}*/}
          {/*    // description={element.description}*/}
          {/*  >*/}
          {/*    {element.nameCard}*/}
          {/*  </Button>*/}
          {/*))}*/}
        </DivServices>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
