import TitleForHome from '../TitleForHome';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { DivCarousel } from './styles';
import { DivInform } from '../../pages/Home/useful_information/styles';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import React from 'react';
import { BlockContainerRequests } from '../../pages/feedback/styles';
import quality from '../../assets/png/quality.png';
const styledTitle = {
  margin: '0',
};
export default function StateInformResources() {
  const isPhone = useMediaQuery('(max-width: 800px)');
  return (
    <BlockContainerRequests>
      <TitleForHome
        style={styledTitle}
        fontSize={'m'}
        color={'blue'}
        infoTitle={'ГОСУДАРСТВЕННЫЕ ИНФОРМАЦИОННЫЕ РЕСУРСЫ'}
      />
      <img
        alt={'ornament'}
        style={{ width: '100%', height: 'auto' }}
        src={require('../../assets/background/ornament.png')}
      />
      <DivInform>
        {isPhone ? (
          <Carousel
            plugins={[
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 4000,
                },
              },
            ]}
            animationSpeed={1000}
          >
            <DivCarousel className={'isPhone'} title={'Портал Президента Республики Беларусь'}>
              <figure>
                <a rel="noopener" target={'_blank'} href={'https://president.gov.by/ru'}>
                  <img src={require('../../assets/png/portal-prezidenta.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel
              className={'isPhone'}
              title={'Администрация Первомайского района г. Минска'}
            >
              <figure>
                <a target={'_blank'} href={'https://pervadmin.gov.by/'}>
                  <img src={require('../../assets/png/pervoma.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Минский областной исполнительный комитет'}>
              <figure>
                <a rel="noopener" target={'_blank'} href={'https://www.minsk-region.gov.by/'}>
                  <img src={require('../../assets/png/oblispolcom.webp')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'БЕЛТА'}>
              <figure>
                <a rel="noopener" target={'_blank'} href={'https://www.belta.by/ru'}>
                  <img src={require('../../assets/png/belta.webp')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Беларусь сегодня'}>
              <a target={'_blank'} href="https://www.sb.by/" rel="noreferrer">
                <img src={require('../../assets/png/belarus-today.webp')} alt="" />
              </a>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Минская правда'}>
              <figure>
                <a rel="noopener" target={'_blank'} href={'https://mlyn.by/'}>
                  <img src={require('../../assets/png/minsk_truth.webp')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Минск-Сегодня'}>
              <a href="https://minsknews.by/" target="_blank" rel="noreferrer">
                <img src={require('../../assets/png/minsk-today.webp')} alt="" />
              </a>
            </DivCarousel>
            <DivCarousel
              className={'isPhone'}
              title={
                ' Портал рейтинговой оценки качества оказания услуг орагнизациями Республики Беларусь'
              }
            >
              <a
                href="http://xn----7sbgfh2alwzdhpc0c.xn--90ais/organization/33279/org-page"
                target="_blank"
                rel="noreferrer"
              >
                <img src={quality} alt="" />
              </a>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Национальный правовой интернет-портал'}>
              <a href="https://pravo.by/" target="_blank" rel="noreferrer">
                <img src="https://pravo.by/local/templates/.default/i/logo-main.png" alt="" />
              </a>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Минский городской исполнительный комитет'}>
              <a href="https://minsk.gov.by/ru/" target="_blank" rel="noreferrer">
                <img alt={''} src={require('../../assets/png/comitet-ispolkom.jpg')} />
              </a>
            </DivCarousel>
          </Carousel>
        ) : (
          <Carousel
            plugins={[
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 3000,
                },
              },
            ]}
            animationSpeed={1000}
          >
            <DivCarousel title={'Портал Президента Республики Беларусь'}>
              <figure>
                <a rel="noopener" target={'_blank'} href={'https://president.gov.by/ru'}>
                  <img src={require('../../assets/png/portal-prezidenta.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel title={'Администрация Первомайского района г. Минска'}>
              <figure>
                <a rel="noopener" target={'_blank'} href={'https://pervadmin.gov.by/'}>
                  <img
                    style={{ width: '80%' }}
                    src={require('../../assets/png/pervoma.png')}
                    alt=""
                  />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel title={'Минский областной исполнительный комитет'}>
              <figure>
                <a rel="noopener" target={'_blank'} href={'https://www.minsk-region.gov.by/'}>
                  <img
                    style={{ width: '30%' }}
                    src={require('../../assets/png/oblispolcom.webp')}
                    alt=""
                  />
                </a>
              </figure>
            </DivCarousel>
                         <DivCarousel title={'Министерство по чрезвычайным ситуациям Республики Беларусь'}>
              <figure>
                <a rel="noopener" target={'_blank'} href={'https://mchs.gov.by/'}>
                  <img
                    style={{ width: '30%' }}
                    src={require('../../assets/png/mchs.png')}
                    alt=""
                  />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel title={'БЕЛТА'}>
              <figure>
                <a rel="noopener" target={'_blank'} href={'https://www.belta.by/ru'}>
                  <img src={require('../../assets/png/belta.webp')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel title={'Беларусь сегодня'}>
              <a href="https://www.sb.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '44%' }}
                  src={require('../../assets/png/belarus-today.webp')}
                  alt=""
                />
              </a>
            </DivCarousel>
            <DivCarousel title={'Минская правда'}>
              <figure>
                <a rel="noreferrer" target={'_blank'} href={'https://mlyn.by/'}>
                  <img
                    style={{ width: '50%' }}
                    src={require('../../assets/png/minsk_truth.webp')}
                    alt=""
                  />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel title={'Минск-сегодня'}>
              <a href="https://minsknews.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '40%' }}
                  src={require('../../assets/png/minsk-today.webp')}
                  alt=""
                />
              </a>
            </DivCarousel>
            <DivCarousel
              title={
                ' Портал рейтинговой оценки качества оказания услуг орагнизациями Республики Беларусь'
              }
            >
              <a
                href="http://xn----7sbgfh2alwzdhpc0c.xn--90ais/organization/33279/org-page"
                target="_blank"
                rel="noreferrer"
              >
                <img src={quality} alt="" style={{ width: '40%' }} />
              </a>
            </DivCarousel>
            <DivCarousel title={'Национальный правовой интернет-портал'}>
              <a href="https://pravo.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '100%' }}
                  src="https://pravo.by/local/templates/.default/i/logo-main.png"
                  alt=""
                />
              </a>
            </DivCarousel>
            <DivCarousel title={'Минский городской исполнительный комитет'}>
              <a href="https://minsk.gov.by/ru/" target="_blank" rel="noreferrer">
                <img
                  alt={''}
                  src={require('../../assets/png/comitet-ispolkom.jpg')}
                  style={{ width: '70%' }}
                />
              </a>
            </DivCarousel>
          </Carousel>
        )}
      </DivInform>
      <img
        alt={'ornament'}
        style={{ width: '100%', marginBottom: '2%', height: 'auto' }}
        src={require('../../assets/background/ornament.png')}
      />
    </BlockContainerRequests>
  );
}
