import React from 'react';
import ButtonFun from '../../../components/button';
import { data } from '../../../assets/data_service';
import { Container, DivInform, DivUp, Title, TitleCard, DivDown, BackgroundStyle } from './styles';
import LinkServices from './dataComponents';
import lines from '../../../assets/background/lines.png';

export default function HomeServices() {
  return (
    <Container>
      <DivInform>
        <Title>УСЛУГИ РЕСПУБЛИКАНСКОГО УНИТАРНОГО ПРЕДПРИЯТИЯ “МИНГАЗ”</Title>
        <DivUp>
          <TitleCard>НАСЕЛЕНИЮ</TitleCard>
          <TitleCard>ЮРИДИЧЕСКИМ ЛИЦАМ</TitleCard>
        </DivUp>
        <DivDown>
          {data.map((element) => (
            <LinkServices
              key={element.cardDesc}
              img={element.cardImg}
              text={element.cardDesc}
            ></LinkServices>
          ))}
        </DivDown>
      </DivInform>
      <ButtonFun backgroundColor={'gray'} infoButton={'Перейти в раздел'}></ButtonFun>
    </Container>
  );
}
