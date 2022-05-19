import React, { useCallback, useState } from 'react';
import { Container } from '../styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Title } from '../Home/useful_information/styles';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';
import {
  AdvantageDiv,
  AdvantageTitle,
  AdvantageRow,
  Realize,
  RealizeTitle,
  RealizeRow,
  Brands,
  BrandsTitle,
  BrandsPagination,
} from './styles';
import { data } from '../../assets/data_service-centre';
import { dataRealize } from '../../assets/data_service-centre_realize';
import AdvantageList from './advantageList';
import RealizeList from './realizeList';
import ModalWindowServicesCenter from '../../components/modalWindow/modalWindowServicesCenter';

export default function ServiceCenter() {
  const numbersOfImages = Array.from({ length: 43 }, (v, k) => k + 1);
  const [isModalVisible, setModalVisible] = useState(true);
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);
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
      </AdditionalDiv>
      <AdvantageDiv>
        <AdvantageTitle>Преимущества сервисного центра</AdvantageTitle>
        <AdvantageRow>
          {data.map((element) => (
            <AdvantageList cardImg={element.cardImg} cardText={element.cardText} />
          ))}
        </AdvantageRow>
      </AdvantageDiv>
      <Realize>
        <RealizeTitle>Сервисный центр осуществляет:</RealizeTitle>
        <RealizeRow>
          {dataRealize.map((element) => (
            <RealizeList cardImg={element.cardImg} cardText={element.cardText} />
          ))}
        </RealizeRow>
      </Realize>
      <Brands>
        <BrandsTitle>Обслуживаемые бренды</BrandsTitle>
        <BrandsPagination>
          {numbersOfImages.map((el) => (
            <img src={require(`../../assets/brands/${el}.png`)} key={el} />
          ))}
        </BrandsPagination>
      </Brands>
      {isModalVisible && (
        <ModalWindowServicesCenter handleCloseCLick={handleCloseCLick}></ModalWindowServicesCenter>
      )}

      <Footer />
    </Container>
  );
}
