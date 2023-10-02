import React, { useEffect, useState } from 'react';
import ButtonFun from '../../../components/button';
import { Container, DivDown, ButtonServicesHome, ServicesDiv } from './styles';
import LinkServices from './dataComponents';
import TitleForHome from '../../../components/TitleForHome';
import LinkServicesForLegalEntities from './dataComponentsForLEgalEntities';
import axios from 'axios';
import { API } from '../../../backend';

export default function HomeServices() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/services`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setData]);
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
      {data?.length ? (
        <ServicesDiv>
          <DivDown>
            {data
              .slice(0, 4)
              .map(
                (element) =>
                  element.type === '1' && (
                    <LinkServices key={element._id} cardId={element._id} nameCard={element.name} />
                  )
              )}
          </DivDown>
          <DivDown>
            {data
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
