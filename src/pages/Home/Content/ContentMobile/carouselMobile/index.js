import React from 'react';
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import phone from '../../../../../assets/png/PhoneFour.webp';
import imageContent from '../../../../../assets/background/mingas_background.webp';
import newPost from '../../../../../assets/background/newPost.webp';
import post from '../../../../../assets/background/phone.webp';
import background from '../../../../../assets/background/background_new.webp';
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
          <DivImage className={'none'}>
            <img className={'newpost'} src={post} alt={'картинка загружается'} />
          </DivImage>
          <DivText className={'newpost'}>
            <Text style={{ position: 'initial', textAlign: 'center' }}>
              Уважаемые граждане! <br/>Обращаем внимание на то, что 2 января 2023 г. вступают в силу
              изменения, внесенные в статью 25 Закона Республики Беларусь «Об обращениях граждан и
              юридических лиц». В связи с этим подача электронных обращений будет возможна только с
              помощью государственной единой (интегрированной) республиканской информационной
              системы учета и обработки обращений граждан и юридических лиц - интернет-ресурса {''}
              <a target={'_blank'} href={'https://xn--80abnmycp7evc.xn--90ais./'}>
                обращения.бел.
              </a>
            </Text>
          </DivText>
        </>,

        <>
          <DivImage>
            <img src={background} alt={'картинка загружается'} />
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
              href={'/posts/1'}
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
