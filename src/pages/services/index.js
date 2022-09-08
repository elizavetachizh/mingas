import React, { useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container } from '../company/styles';
import up from '../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import TitleFun from '../../components/title';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';
import { DivServices, NavLinkService } from './styles';
import { links } from '../../assets/data/liksForServices';
import { Name } from './servicesList/styles';

export default function Services() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Услуги жителям столичного региона'} />
        <DivServices>
          {links.map((element) => (
            <NavLinkService to={element.linkService}>
              <img src={require(`../../assets/icons_services/${element.imgService}.png`)} />
              <Name>{element.nameService}</Name>
            </NavLinkService>
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
