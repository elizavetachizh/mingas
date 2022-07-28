import React from 'react';
import { Main, WindowDiv } from './styles';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import './styles.css';
import { DivInformAbout, DivText, Text } from '../Content/styles';
import ButtonFun from '../../../components/button';
import phone from '../../../assets/png/PhoneFour.png';
import worker from '../../../assets/png/master.png';
import { Trans, useTranslation } from 'react-i18next';

export default function CarouselFun() {
  const { t, i18n } = useTranslation();
  return (
    <Main>
      <WindowDiv>
        <Carousel
          plugins={[
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 4000,
              },
            },
          ]}
          animationSpeed={2000}
        >
          <DivText>
            <DivInformAbout>
              <Text>
                <Trans i18nKey="description:part1"></Trans>
              </Text>
              <ButtonFun
                href={'/Services'}
                backgroundColor={'blue'}
                infoButton={t('infoButton:more')}
              />
            </DivInformAbout>
            <a href={'tel:162'}>
              <img src={phone} alt={''} />
            </a>
          </DivText>

          <DivText>
            <DivInformAbout>
              <Text>{t('description:part2')}</Text>
              <ButtonFun
                href={'/Press-Center'}
                backgroundColor={'blue'}
                infoButton={t('infoButton:more')}
              />
            </DivInformAbout>
            <a href={''}>
              {' '}
              <img src={worker} alt={''} />
            </a>
          </DivText>
        </Carousel>
      </WindowDiv>
    </Main>
  );
}
