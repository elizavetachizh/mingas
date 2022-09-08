import { Container } from '../styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import React from 'react';
import { DivServices } from '../../services/styles';
import { links } from '../../../assets/data/linksBranches';
import ServicesList from '../../services/servicesList';
import { useNavigate } from 'react-router';
import HeaderCompany from '../header_company';
import TitleForHome from '../../../components/TitleForHome';

export default function Branches() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <HeaderCompany />
      <AdditionalDiv>
        <TitleForHome className={'company'} infoTitle={'Филиалы УП "МИНГАЗ"'} color={'blue'} />
        <DivServices>
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
