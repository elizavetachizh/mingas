import React from 'react';
import ButtonFun from '../../../components/button';
import { DivInform } from './styles';
import { data } from '../../../assets/data/data_news';
import LinkNews from './LinkToNews';
import TitleForHome from '../../../components/TitleForHome';
import { Container } from '../services/styles';

export default function News() {
  return (
    <Container style={{ boxShadow: ' 0 0 5px 3px rgba(0, 0, 0, 0.2)', borderRadius: '20px'}}>
      <TitleForHome fontSize={'m'} color={'white'} infoTitle={'СМИ о нас'} />
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
