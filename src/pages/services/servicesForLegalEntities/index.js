import React, { useCallback, useState } from 'react';
import { Container } from '../../Home/styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleFun from '../../../components/title';
import { DivServices } from '../styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import { dataLegalEntities } from '../../../assets/data_service_legalEntities_general';
import ServicesList from './serviceList';
import { useNavigate } from 'react-router';
import DopFunctionService from '../DopFunction';

export default function ServicesForLegalEntities() {
  const [informLegal, setInformLegal] = useState([]);
  const [currentServiceID, setServiceID] = useState('');
  const navigate = useNavigate();
  const handlerServiceClick = useCallback((nameCard) => {
    navigate(`/services-legal-entities/${nameCard}`);
  }, []);
  const animate = useCallback(
    (descriptionLegalID) => {
      const current = dataLegalEntities.find((element) => element.serviceId === descriptionLegalID);
      setInformLegal(current.description);
      handlerServiceClick(current.nameCard);
      setServiceID(currentServiceID ? '' : descriptionLegalID);
    },
    [currentServiceID]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Услуги для бизнеса'} />
        <DivServices>
          {dataLegalEntities.map((element) => (
            <ServicesList
              onClick={() => {
                animate(element.serviceId);
                console.log(element.serviceId);
              }}
              serviceId={element.serviceId}
              imgCard={element.cardImg}
              nameCard={element.nameCard}
              description={element.description}
            />
          ))}
        </DivServices>
        {informLegal.map((el) => (
          <DopFunctionService nameDescription={el.nameDescription} inform={el.inform} />
        ))}
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
