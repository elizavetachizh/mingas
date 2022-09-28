import { Container } from '../styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import React, { useEffect } from 'react';
import { DivServices } from '../../services/styles';
import { links } from '../../../assets/data/linksBranches';
import ServicesList from '../../services/servicesList';
import { useNavigate } from 'react-router';
import HeaderCompany from '../header_company';
import Feedback from '../../feedback';
import minsk from '../../../assets/background/phone.jpg';

export default function Branches() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Feedback className={'none'} img={minsk} name={'Филиалы УП "МИНГАЗ"'} />
      <HeaderCompany />
      <AdditionalDiv style={{ margin: '4% auto' }}>
        <DivServices style={{ margin: '0 auto' }}>
          {links.map((element) => (
            <ServicesList
              onClick={() => navigate(element.link)}
              key={element.id}
              serviceId={element.id}
              imgCard={element.cardImg}
              nameCard={element.name}
            />
          ))}
        </DivServices>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
