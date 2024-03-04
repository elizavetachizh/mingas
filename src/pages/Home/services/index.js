import React from 'react';
import ButtonFun from '../../../components/button';
import { Container, DivDown, ButtonServicesHome, ServicesDiv } from './styles';
import LinkServices from './dataComponents';
import TitleForHome from '../../../components/TitleForHome';
import Loader from '../../../components/Loader';
import { useFetchServicesQuery } from '../../../redux/services/services';

export default function HomeServices() {
  const { data: servicesName } = useFetchServicesQuery();
  return (
    <Container>
      <TitleForHome infoTitle={'Услуги республиканского унитарного предприятия "Мингаз"'} />
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
      {servicesName?.length ? (
        <ServicesDiv>
          <DivDown>
            {servicesName
              .slice(0, 4)
              .map(
                (element) =>
                  element.type === '1' && (
                    <LinkServices
                      key={element._id}
                      cardId={element._id}
                      nameCard={element.name}
                      link={'services'}
                    />
                  )
              )}
          </DivDown>
          <DivDown>
            {servicesName
              .slice(-7, -3)
              .map(
                (element) =>
                  element.type === '2' && (
                    <LinkServices
                      link={'services-legal-entities'}
                      key={element._id}
                      cardId={element._id}
                      nameCard={element.name}
                    />
                  )
              )}
          </DivDown>
        </ServicesDiv>
      ) : (
        <Loader />
      )}
    </Container>
  );
}
