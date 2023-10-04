import React from 'react';
import ButtonFun from '../../../components/button';
import { Container, DivDown, ButtonServicesHome, ServicesDiv } from './styles';
import LinkServices from './dataComponents';
import TitleForHome from '../../../components/TitleForHome';
import LinkServicesForLegalEntities from './dataComponentsForLEgalEntities';
import { useSelector } from 'react-redux';

export default function HomeServices() {
  const service = useSelector((state) => state.services.data);
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
      {service?.length ? (
        <ServicesDiv>
          <DivDown>
            {service
              .slice(0, 4)
              .map(
                (element) =>
                  element.type === '1' && (
                    <LinkServices key={element._id} cardId={element._id} nameCard={element.name} />
                  )
              )}
          </DivDown>
          <DivDown>
            {service
              .slice(-7, -3)
              .map(
                (element) =>
                  element.type === '2' && (
                    <LinkServicesForLegalEntities
                      key={element._id}
                      cardId={element._id}
                      nameCard={element.name}
                    />
                  )
              )}
          </DivDown>
        </ServicesDiv>
      ) : (
        <p style={{ color: 'white' }}>Загрузка данных...</p>
      )}
    </Container>
  );
}
