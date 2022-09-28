import React, { useCallback, useEffect } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleFun from '../../../components/title';
import { DivServices } from '../styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import { dataLegalEntities } from '../../../assets/data/data_service_legalEntities_general';
import ServicesList from './serviceList';
import { useNavigate } from 'react-router';
import { Container } from '../../company/styles';
import minsk from '../../../assets/background/phone.jpg';
import Feedback from '../../feedback';

export default function ServicesForLegalEntities() {
  const navigate = useNavigate();
  const handlerServiceClick = useCallback((descriptionLegalID) => {
    const current = dataLegalEntities.find((element) => element.serviceId === descriptionLegalID);
    navigate(`/services-legal-entities/${current.serviceId}`);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Услуги для бизнеса'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Услуги для бизнеса'} />
        <DivServices>
          {dataLegalEntities.map((element) => (
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
        </DivServices>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
