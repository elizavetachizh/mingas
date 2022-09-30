import React, { useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container } from '../company/styles';
import up from '../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';
import { DivServices, NavLinkService } from './styles';
import { links } from '../../assets/data/liksForServices';
import { Name } from './servicesList/styles';
import Feedback from '../feedback';
import minsk from '../../assets/background/phone.jpg';

export default function Services() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Услуги жителям столичного региона'} />
      <AdditionalDiv>
        <DivServices>
          {links.map((element) => (
            <NavLinkService key={element.idService} to={element.linkService}>
              <img
                alt={''}
                src={require(`../../assets/icons_services/${element.imgService}.png`)}
              />
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
