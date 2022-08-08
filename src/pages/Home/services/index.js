import React from 'react';
import ButtonFun from '../../../components/button';
import { data } from '../../../assets/data/data_service_individuals';
import { dataLegalEntities } from '../../../assets/data/data_service_legalEntities';
import { Container, DivInform, DivDown, ButtonServicesHome, ServicesDiv } from './styles';
import LinkServices from './dataComponents';
import { useTranslation } from 'react-i18next';
import TitleForHome from '../../../components/TitleForHome';
import LinkServicesForLegalEntities from './dataComponentsForLEgalEntities';

export default function HomeServices() {
  const { t } = useTranslation();
  return (
    <Container>
      <DivInform>
        <TitleForHome
          fontSize={'m'}
          infoTitle={'Услуги республиканского унитарного предприятия "Мингаз"'}
        />
        <ButtonServicesHome>
          <ButtonFun
            href={'/services'}
            backgroundColor={'gray'}
            infoButton={'Для физических лиц'}
          />
          <ButtonFun
            href={'/services-legal-entities'}
            backgroundColor={'gray'}
            infoButton={'Для юридических лиц'}
          />
        </ButtonServicesHome>
        <ServicesDiv>
          <DivDown>
            {data.map((element) => (
              <LinkServices
                key={element.cardId}
                img={element.cardImg}
                nameCard={element.nameCard}
                cardId={element.cardId}
              />
            ))}
          </DivDown>
          <DivDown>
            {dataLegalEntities.map((element) => (
              <LinkServicesForLegalEntities
                key={element.cardId}
                cardId={element.cardId}
                img={element.cardImg}
                nameCard={element.nameCard}
              />
            ))}
          </DivDown>
        </ServicesDiv>
      </DivInform>
    </Container>
  );
}
