import React from 'react';
import ButtonFun from '../../../components/button';
import { data } from '../../../assets/data_service_individuals';
import { dataLegalEntities } from '../../../assets/data_service_legalEntities';
import { Container, DivInform, DivDown, ButtonServicesHome, ServicesDiv } from './styles';
import LinkServices from './dataComponents';
import { Trans, useTranslation } from 'react-i18next';
import { Title } from '../useful_information/styles';
import TitleFun from '../../../components/title';

export default function HomeServices() {
  const { t } = useTranslation();
  return (
    <Container>
      <DivInform>
        {/*<Title>*/}
        {/*  <Trans i18nKey="services:title"></Trans>*/}
        {/*</Title>*/}
        <TitleFun color={'white'} infoTitle={<Trans i18nKey="services:title"></Trans>}></TitleFun>
        <ButtonServicesHome>
          <ButtonFun
            href={'/services'}
            backgroundColor={'gray'}
            infoButton={'Для физических лиц'}
          />
          <ButtonFun
            href={'/services/legal-entities'}
            backgroundColor={'gray'}
            infoButton={'Для юридических лиц'}
          />
        </ButtonServicesHome>
        <ServicesDiv>
          <DivDown>
            {data.map((element) => (
              <LinkServices key={element.cardDesc} img={element.cardImg} text={element.cardDesc} />
            ))}
          </DivDown>
          <DivDown>
            {dataLegalEntities.map((element) => (
              <LinkServices key={element.cardDesc} img={element.cardImg} text={element.cardDesc} />
            ))}
          </DivDown>
        </ServicesDiv>
      </DivInform>
    </Container>
  );
}
