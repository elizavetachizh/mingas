import { DivImage } from '../../../../../feedback/styles';
import post from '../../../../../../assets/background/phone.webp';
import { DivText, Text } from '../../../styles';
import React from 'react';

export default function Dopfunctional({ image, content, button, link, href }) {
  return (
    <>
      <DivImage className={'none'}>
        <img src={image} alt={'картинка загружается'} />
      </DivImage>
      <DivText className={'newpost'}>
        <Text style={{ position: 'initial', textAlign: 'center' }}>
          Уважаемые граждане! Обращаем внимание на то, что 2 января 2023 г. вступают в силу
          изменения, внесенные в статью 25 Закона Республики Беларусь «Об обращениях граждан и
          юридических лиц». В связи с этим подача электронных обращений будет возможна только с
          помощью государственной единой (интегрированной) республиканской информационной системы
          учета и обработки обращений граждан и юридических лиц - интернет-ресурса {''}
          <a target={'_blank'} href={'https://xn--80abnmycp7evc.xn--90ais./'}>
            обращения.бел.
          </a>
        </Text>
      </DivText>
    </>
  );
}
