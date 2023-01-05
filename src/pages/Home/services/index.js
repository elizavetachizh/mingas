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
      <ServicesDiv>
        <DivDown>
          {data.slice(0, 4).map((element) => {
            if (element.type === '1') {
              return (
                <LinkServices
                  key={element._id}
                  cardId={element._id}
                  img={element.image}
                  nameCard={element.name}
                />
              );
            }
          })}
        </DivDown>
        <DivDown>
          {data.slice(0, 11).map((element) => {
            if (element.type === '2') {
              return (
                <LinkServicesForLegalEntities
                  key={element._id}
                  cardId={element._id}
                  img={element.image}
                  nameCard={element.name}
                />
              );
            }
          })}
        </DivDown>
      </ServicesDiv>
    </Container>
  );
}
