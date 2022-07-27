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
import { Button } from '../../components/administrativeServices/Header/styles';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import DopFunctionService from './DopFunction';

export default function Services() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState('');
  const navigate = useNavigate();
  const handlerServiceClick = useCallback((nameCard) => {
    navigate(`/services/${nameCard}`);
  }, []);
  const { nameCard } = useParams();
  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element.serviceId === descriptionID);
      setInform(current.description);
      handlerServiceClick(current.nameCard);
      setServiceID(currentServiceID ? '' : descriptionID);
    },
    [currentServiceID]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Услуги жителям столичного региона'} />
        <DivServices>
          {data.map((element) => (
            <ServicesList
              onClick={() => {
                animate(element.serviceId);
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
        {inform.map((el) => (
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
