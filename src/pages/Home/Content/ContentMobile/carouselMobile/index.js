import React from 'react';
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import phone from '../../../../../assets/png/PhoneFour.png';
import imageContent from '../../../../../assets/background/mingas_background(2).jpg';
import newPost from '../../../../../assets/background/newPost.jpg';
import { Trans } from 'react-i18next';
import { BackgroundContainer, Main, WindowDiv } from '../../../slider/styles';
import { DivInformAbout, DivText, Text } from '../../styles';
import ButtonFun from '../../../../../components/button';
import { DivImage } from '../../../../feedback/styles';

export default class CarouselMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <>
          <DivImage>
            <img src={imageContent} />
          </DivImage>
          <DivText className={'phone'}>
            <Text className={'phone'} style={{ position: 'initial' }}>
              <Trans i18nKey="description:part1" />
            </Text>
            <a className={'phone'} href={'tel:162'}>
              <img src={phone} alt={''} />
            </a>
          </DivText>
        </>,
        <>
          <DivImage className={'none'}>
            <img className={'post'} src={newPost} />
          </DivImage>
          <DivText className={'post'}>
            <Text style={{ position: 'initial', textAlign: 'end' }}>
              УП «МИНГАЗ» просит своих абонентов быть бдительными
            </Text>
            <ButtonFun
              classname={'post'}
              href={'/posts'}
              infoButton={'Подробнее'}
              backgrounder={'border'}
            />
          </DivText>
        </>,
      ],
    };
    this.onchange = this.onchange.bind(this);
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <Main>
        <WindowDiv>
          <Carousel
            plugins={[
              'centered',
              'infinite',
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 6000,
                },
              },
            ]}
            animationSpeed={2000}
            value={this.state.value}
            slides={this.state.slides}
            onChange={this.onchange}
          ></Carousel>
          <Dots
            value={this.state.value}
            onChange={this.onchange}
            number={this.state.slides.length}
          />
        </WindowDiv>
      </Main>
    );
  }
}
