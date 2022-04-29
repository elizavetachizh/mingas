import React from 'react';
import { Container } from '../styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Title } from '../Home/useful_information/styles';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';
import { AdvantageDiv, AdvantageTitle } from './styles';
import { data } from '../../assets/data_service-sentr';
import AdvantageList from './advantageList';
export default function ServiceCenter() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <Title>Сервинсый центр</Title>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YRaIG9j1zKM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <AdvantageDiv>
          <AdvantageTitle>Преимущества сервисного центра</AdvantageTitle>
          {data.map((element) => (
            <AdvantageList>
              cardImg={element.cardImg}
              cardText={element.cardText}
            </AdvantageList>
          ))}
        </AdvantageDiv>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
