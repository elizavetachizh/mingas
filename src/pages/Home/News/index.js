import React from 'react';
import ButtonFun from '../../../components/button';
import {DivInform } from './styles';
import { data } from '../../../assets/data_news';
import LinkNews from './LinkToNews';
import TitleForHome from "../../../components/TitleForHome";
import { Container } from "../services/styles";

export default function News() {
  return (
    <Container>
      <TitleForHome color={'white'} infoTitle={'Новости предприятия'} />
      <DivInform>
        {data.map((element) => (
          <LinkNews
            cardImg={element.cardImg}
            cardDate={element.cardDate}
            cardLink={element.cardLink}
            cardDesc={element.cardDesc}
          />
        ))}
      </DivInform>
      <ButtonFun href={'/Press-Center'} infoButton={'Показать ещё'} backgroundColor={'white'} />
    </Container>
  );
}
