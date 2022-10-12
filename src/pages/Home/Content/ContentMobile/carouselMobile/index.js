import React from 'react';
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import phone from '../../../../../assets/png/PhoneFour.png';
import imageContent from '../../../../../assets/background/mingas_background(2).jpg';
import newPost from '../../../../../assets/background/newPost.jpg';
import post from '../../../../../assets/background/phone.webp';
import { Trans } from 'react-i18next';
import { Main, WindowDiv } from '../../../slider/styles';
import { DivText, Text } from '../../styles';
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
            <img src={imageContent} alt={'картинка загружается'} />
          </DivImage>
          <DivText className={'phone'}>
            <Text className={'phone'} style={{ position: 'initial' }}>
              <Trans i18nKey="description:part1" />
            </Text>
            <a className={'phone'} href={'tel:162'}>
              <img src={phone} alt={'картинка загружается'} />
            </a>
          </DivText>
        </>,
        <>
          <DivImage>
            <img src={imageContent} alt={'картинка загружается'} />
          </DivImage>
          <DivText style={{ justifyContent: 'center', alignItems: 'center' }} className={'phone'}>
            <Text>
              УП «МИНГАЗ» информирует! <br />
              По адресу г. Минск, ул. Ботаническая 11 (подъезд 2) с 01.10.2022 приём граждан будет
              осуществляться ежедневно, время приема 8.00-20.00.
            </Text>
          </DivText>
        </>,

        <>
          <DivImage className={'none'}>
            <img className={'post'} src={newPost} alt={'картинка загружается'} />
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
