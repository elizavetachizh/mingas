import Header from '../header';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import Footer from '../footer';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';
import React from 'react';
import { AdministrativeServicesForBusines } from '../../assets/data/AdministrativeServicesForBusines';
import { ContainerInform } from '../administrativeServices/InformaationAdministrativeService/styles';
import { Container } from '../../pages/company/styles';
import Feedback from '../../pages/feedback';
import minsk from '../../assets/background/phone.webp';
import DopFunctional from '../administrativeServices/InformaationAdministrativeService/DopFunctional';

export default function AdministartiveServicesForLegal() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback
        className={'none'}
        img={minsk}
        name={'Административные процедуры для юридических лиц'}
      />
      <AdditionalDiv>
        <ContainerInform>
          {AdministrativeServicesForBusines.map((el) => (
            <DopFunctional
              key={el.uniqueName}
              uniqueName={el.uniqueName}
              maximumImplementationPeriod={el.maximumImplementationPeriod}
              certificateValidityPeriod={el.certificateValidityPeriod}
              boardSize={el.boardSize}
              documents={el.documents}
              contactInform={el.contactInform}
            />
          ))}
        </ContainerInform>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
