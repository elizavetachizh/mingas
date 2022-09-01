import TitleForHome from '../TitleForHome';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { DivCarousel } from './styles';
import { DivInform } from '../../pages/Home/useful_information/styles';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import React from 'react';
const styledTitle = {
  margin: '0',
};
export default function StateInformResources() {
  const isPhone = useMediaQuery('(max-width: 800px)');
  return (
    <div style={{ boxShadow: ' 0 0 5px 3px rgba(0, 0, 0, 0.2)', borderRadius: '20px', marginBottom: '10px' }}>
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
            <DivCarousel>
              <figure>
                <a href={'https://president.gov.by/ru'}>
                  <img
                    src={require('../../assets/png/portal-prezidenta.png')}
                    className="attachment-large size-large"
                    alt=""
                  />
                  <p>Портал Президента Республики Беларусь</p>
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel>
              <figure>
                <a href={'https://www.belta.by/ru'}>
                  <img src={require('../../assets/png/belta.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel>
              <a href="https://www.sb.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '44%' }}
                  src={require('../../assets/png/belarus-today.png')}
                  alt=""
                />
                <p>Беларусь сегодня</p>
              </a>
            </DivCarousel>
            <DivCarousel>
              <a href="https://minsknews.by/" target="_blank" rel="noreferrer">
                <img src={require('../../assets/png/minsk-today.jpg')} alt="" />
                <p>Минск-Сегодня</p>
              </a>
            </DivCarousel>
            <DivCarousel>
              <a
                href="http://xn----7sbgfh2alwzdhpc0c.xn--90ais/organization/33279/org-page"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://mingas.by/wp-content/uploads/2019/03/d676007c6bce67133b0ea05bc310ca0e.png"
                  alt=""
                />
                <p>
                  Портал рейтинговой оценки качества оказания услуг орагнизациями Республики
                  Беларусь
                </p>
              </a>
            </DivCarousel>
            <DivCarousel>
              <a href="https://pravo.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '90%' }}
                  src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/pravo-by.jpg"
                  alt=""
                />
                <p>
                  Национальный правовой <br />
                  интернет-портал
                </p>
              </a>
            </DivCarousel>
            <DivCarousel>
              <a href="https://minsk.gov.by/ru/" target="_blank" rel="noreferrer">
                <img src={require('../../assets/png/comitet-ispolkom.jpg')} />
                <p>
                  Минский городской <br />
                  исполнительный комитет
                </p>
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
            <DivCarousel>
              <figure>
                <a href={'https://president.gov.by/ru'}>
                  <img src={require('../../assets/png/portal-prezidenta.png')} alt="" />
                  <p>Портал Президента Республики Беларусь</p>
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel>
              <figure>
                <a href={'https://www.belta.by/ru'}>
                  <img src={require('../../assets/png/belta.png')} alt="" />
                </a>
              </figure>
            </DivCarousel>
            <DivCarousel>
              <a href="https://www.sb.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '44%' }}
                  src={require('../../assets/png/belarus-today.png')}
                  alt=""
                />
                <p>{''}</p>
                <p>Беларусь сегодня</p>
              </a>
            </DivCarousel>
            <DivCarousel>
              <a href="https://minsknews.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '40%' }}
                  src={require('../../assets/png/minsk-today.jpg')}
                  alt=""
                />
                <p>Минск-Сегодня</p>
              </a>
            </DivCarousel>
            <DivCarousel>
              <a
                href="http://xn----7sbgfh2alwzdhpc0c.xn--90ais/organization/33279/org-page"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://mingas.by/wp-content/uploads/2019/03/d676007c6bce67133b0ea05bc310ca0e.png"
                  alt=""
                />
                <p>
                  Портал рейтинговой оценки качества оказания услуг орагнизациями Республики
                  Беларусь
                </p>
              </a>
            </DivCarousel>
            <DivCarousel>
              <a href="https://pravo.by/" target="_blank" rel="noreferrer">
                <img
                  style={{ width: '90%' }}
                  src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/pravo-by.jpg"
                  alt=""
                />
                <p>
                  Национальный правовой <br />
                  интернет-портал
                </p>
              </a>
            </DivCarousel>
            <DivCarousel>
              <a href="https://minsk.gov.by/ru/" target="_blank" rel="noreferrer">
                <img src={require('../../assets/png/comitet-ispolkom.jpg')} />
                <p>
                  Минский городской <br />
                  исполнительный комитет
                </p>
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
    </div>
  );
}
