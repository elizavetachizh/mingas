import React from 'react';
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import phone from '../../../../../assets/png/PhoneFour.png';
import imageContent from '../../../../../assets/background/mingas_background.webp';
import newPost from '../../../../../assets/background/newPost.jpg';
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
          <DivText style={{ justifyContent: 'center', alignItems: 'center' }} className={'phone'}>
            <Text>
              28.10.2022 с 11.00 до 12.00 в УП «МИНГАЗ» будет проводиться прямая телефонная линия!
              Ответим на все интересующие вас вопросы входящие в компетенцию предприятия.
              <br /> Тел. для связи 299 28 80
            </Text>
          </DivText>
        </>,
        <>
          <DivImage>
            <img src={imageContent} alt={'картинка загружается'} />
          </DivImage>
          <DivText className={'phone'}>
            <Text className={'phone'} style={{ position: 'initial' }}>
              Добро пожаловать на сайт <br />
              производственного республиканского <br />
              унитарного предприятия “МИНГАЗ”
            </Text>
            <a rel={'preconnect'} className={'phone'} href={'tel:162'}>
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
