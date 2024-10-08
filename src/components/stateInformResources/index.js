import TitleForHome from '../TitleForHome';
import React from 'react';
import { BlockContainerRequests } from '../../pages/feedback/styles';
import { arrayData } from './arrayaData';
import Schema from './schema';
import { SliderContainer, SliderWrapper } from './styles';

export default function StateInformResources() {
  return (
    <BlockContainerRequests>
      <TitleForHome color={'blue'} infoTitle={'ГОСУДАРСТВЕННЫЕ ИНФОРМАЦИОННЫЕ РЕСУРСЫ'} />
      <img
        alt={'ornament'}
        style={{ width: '100%', height: 'auto' }}
        src={require('../../assets/background/ornament.png')}
      />
      <SliderContainer>
        <SliderWrapper>
          {arrayData.concat(arrayData).map((src, index) => (
            <Schema
              key={index}
              href={src.href}
              alt={src.title}
              title={src.title}
              styleImage={{ width: `${src?.width}`, height: 'auto' }}
              image={require(`../../assets/png/${src.image}`)}
            />
          ))}
        </SliderWrapper>
      </SliderContainer>

      <img
        alt={'ornament'}
        style={{ width: '100%', marginBottom: '2%', height: 'auto' }}
        src={require('../../assets/background/ornament.png')}
      />
    </BlockContainerRequests>
  );
}
