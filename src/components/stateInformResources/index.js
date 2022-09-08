import TitleForHome from '../TitleForHome';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { DivCarousel } from './styles';
import { DivInform } from '../../pages/Home/useful_information/styles';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import React from 'react';
import { BlockContainerRequests } from '../../pages/feedback/styles';
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
        margin={'s'}
        color={'blue'}
        infoTitle={'Государственные информационные ресурсы'}
      />
      <img
        alt={'ornament'}
        style={{ width: '100%' }}
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
            ]}
            animationSpeed={1000}
          >
            <DivCarousel className={'isPhone'} title={'Портал Президента Республики Беларусь'}>
              <figure>
                <a href={'https://president.gov.by/ru'}>
                  <img src={require('../../assets/png/portal-prezidenta.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel
              className={'isPhone'}
              title={'Администрация Первомайского района г. Минска'}
            >
              <figure>
                <a href={'https://pervadmin.gov.by/'}>
                  <img src={require('../../assets/png/pervoma.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Минский областной исполнительный комитет'}>
              <figure>
                <a href={'https://www.minsk-region.gov.by/'}>
                  <img src={require('../../assets/png/oblispolcom.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'БЕЛТА'}>
              <figure>
                <a href={'https://www.belta.by/ru'}>
                  <img src={require('../../assets/png/belta.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Беларусь сегодня'}>
              <a href="https://www.sb.by/" target="_blank" rel="noreferrer">
                <img src={require('../../assets/png/belarus-today.png')} alt="" />
              </a>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Минская правда'}>
              <figure>
                <a href={'https://mlyn.by/'}>
                  <img src={require('../../assets/png/minsk_truth.jpg')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Минск-Сегодня'}>
              <a href="https://minsknews.by/" target="_blank" rel="noreferrer">
                <img src={require('../../assets/png/minsk-today.jpg')} alt="" />
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
                <img
                  src="https://mingas.by/wp-content/uploads/2019/03/d676007c6bce67133b0ea05bc310ca0e.png"
                  alt=""
                />
              </a>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Национальный правовой интернет-портал'}>
              <a href="https://pravo.by/" target="_blank" rel="noreferrer">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/pravo-by.jpg"
                  alt=""
                />
              </a>
            </DivCarousel>
            <DivCarousel className={'isPhone'} title={'Минский городской исполнительный комитет'}>
              <a href="https://minsk.gov.by/ru/" target="_blank" rel="noreferrer">
                <img src={require('../../assets/png/comitet-ispolkom.jpg')} />
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
            ]}
            animationSpeed={1000}
          >
            <DivCarousel title={'Портал Президента Республики Беларусь'}>
              <figure>
                <a href={'https://president.gov.by/ru'}>
                  <img src={require('../../assets/png/portal-prezidenta.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel title={'Администрация Первомайского района г. Минска'}>
              <figure>
                <a href={'https://pervadmin.gov.by/'}>
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
                <a href={'https://www.minsk-region.gov.by/'}>
                  <img
                    style={{ width: '30%' }}
                    src={require('../../assets/png/oblispolcom.png')}
                    alt=""
                  />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel title={'БЕЛТА'}>
              <figure>
                <a href={'https://www.belta.by/ru'}>
                  <img src={require('../../assets/png/belta.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel title={'Беларусь сегодня'}>
              <a href="https://www.sb.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '44%' }}
                  src={require('../../assets/png/belarus-today.png')}
                  alt=""
                />
              </a>
            </DivCarousel>
            <DivCarousel title={'Минская правда'}>
              <figure>
                <a href={'https://mlyn.by/'}>
                  <img
                    style={{ width: '50%' }}
                    src={require('../../assets/png/minsk_truth.jpg')}
                    alt=""
                  />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel title={'Минск-сегодня'}>
              <a href="https://minsknews.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '40%' }}
                  src={require('../../assets/png/minsk-today.jpg')}
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
                <img
                  src="https://mingas.by/wp-content/uploads/2019/03/d676007c6bce67133b0ea05bc310ca0e.png"
                  alt=""
                  style={{ width: '80%' }}
                />
              </a>
            </DivCarousel>
            <DivCarousel title={'Национальный правовой интернет-портал'}>
              <a href="https://pravo.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '100%' }}
                  src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/pravo-by.jpg"
                  alt=""
                />
              </a>
            </DivCarousel>
            <DivCarousel title={'Минский городской исполнительный комитет'}>
              <a href="https://minsk.gov.by/ru/" target="_blank" rel="noreferrer">
                <img
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
        style={{ width: '100%', marginBottom: '2%' }}
        src={require('../../assets/background/ornament.png')}
      />
    </BlockContainerRequests>
  );
}
