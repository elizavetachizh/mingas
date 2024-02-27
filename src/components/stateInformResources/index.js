import TitleForHome from '../TitleForHome';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { DivInform } from '../../pages/Home/useful_information/styles';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import React from 'react';
import { BlockContainerRequests } from '../../pages/feedback/styles';
import { arrayData } from './arrayaData';
import Schema from './schema';
export default function StateInformResources() {
  const isPhone = useMediaQuery('(max-width: 800px)');
  return (
    <BlockContainerRequests>
      <TitleForHome
        color={'blue'}
        infoTitle={'ГОСУДАРСТВЕННЫЕ ИНФОРМАЦИОННЫЕ РЕСУРСЫ'}
      />
      <img
        alt={'ornament'}
        style={{ width: '100%', height: 'auto' }}
        src={require('../../assets/background/ornament.png')}
      />
      <DivInform>
        <Carousel
          plugins={[
            'infinite',
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: isPhone ? 2 : 3,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: isPhone ? 4000 : 3000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          {arrayData.map((el) => (
            <Schema
              href={el.href}
              alt={el.title}
              title={el.title}
              image={require(`../../assets/png/${el.image}`)}
            />
          ))}
        </Carousel>
      </DivInform>
      <img
        alt={'ornament'}
        style={{ width: '100%', marginBottom: '2%', height: 'auto' }}
        src={require('../../assets/background/ornament.png')}
      />
    </BlockContainerRequests>
  );
}
