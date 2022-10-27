import React from 'react';
import ButtonFun from '../../../components/button';
import { data } from '../../../assets/data/data_service_individuals';
import { dataLegalEntities } from '../../../assets/data/data_service_legalEntities';
import { Container, DivDown, ButtonServicesHome, ServicesDiv } from './styles';
import LinkServices from './dataComponents';
import TitleForHome from '../../../components/TitleForHome';
import LinkServicesForLegalEntities from './dataComponentsForLEgalEntities';

export default function HomeServices() {
  return (
    <Container>
      <TitleForHome
        fontSize={'m'}
        infoTitle={'Услуги республиканского унитарного предприятия "Мингаз"'}
      />
      <ButtonServicesHome>
        <ButtonFun
          href={'/services'}
          backgrounder={'gray'}
          infoButton={'Жителям столичного региона'}
        />
        <ButtonFun
          href={'/services-legal-entities'}
          backgrounder={'gray'}
          infoButton={'Для бизнеса'}
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
    </Container>
  );
}
