import React from 'react';
import ButtonFun from '../../../components/button';
import { Container, DivDown, ButtonServicesHome, ServicesDiv } from './styles';
import LinkServices from './dataComponents';
import TitleForHome from '../../../components/TitleForHome';
import { useSelector } from 'react-redux';
import Loader from '../../../components/Loader';

export default function HomeServices() {
  const service = useSelector((state) => state.services.data);
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
      {service?.length ? (
        <ServicesDiv>
          <DivDown>
            {service
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
            {service
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
