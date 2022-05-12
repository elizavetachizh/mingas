import React from 'react';
import ButtonFun from '../../../components/button';
import { data } from '../../../assets/data_service';
import { Container, DivInform, DivUp, Title, TitleCard, DivDown } from './styles';
import LinkServices from './dataComponents';
import { Trans, useTranslation } from "react-i18next";

export default function HomeServices() {
  const { t } = useTranslation();
  return (
    <Container>
      <DivInform>
        <Title><Trans i18nKey="services:title"></Trans></Title>
        <DivUp>
          <TitleCard>НАСЕЛЕНИЮ</TitleCard>
          <TitleCard>ЮРИДИЧЕСКИМ ЛИЦАМ</TitleCard>
        </DivUp>
        <DivDown>
          {data.map((element) => (
            <LinkServices key={element.cardDesc} img={element.cardImg} text={element.cardDesc} />
          ))}
        </DivDown>
      </DivInform>
      <ButtonFun href={'/Services'} backgroundColor={'gray'} infoButton={t("infoButton:gotoSection")} />
    </Container>
  );
}
