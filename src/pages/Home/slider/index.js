import React from 'react';
import { Main, WindowDiv, BackgroundContainer } from './styles';
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import './styles.css';
import { DivInformAbout, DivText, Text } from '../Content/styles';
import phone from '../../../assets/png/PhoneFour.png';
import imageContent from '../../../assets/background/mingas_background(2).jpg';
import newPost from '../../../assets/background/newPost.jpg';
import preim from '../../../assets/background/priem-grajdan.jpg';
import { Trans } from 'react-i18next';
import ButtonFun from '../../../components/button';

export default class CarouselFun extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <div style={{ padding: 0, margin: 0, width: '100%' }}>
          <BackgroundContainer src={imageContent} />
          <DivText className={'phone'}>
            <DivInformAbout>
              <Text>
                <Trans i18nKey="description:part1" />
              </Text>
            </DivInformAbout>
            <a className={'phone'} href={'tel:162'}>
              <img src={phone} alt={''} />
            </a>
          </DivText>
        </div>,
        <div style={{ padding: 0, margin: 0, width: '100%' }}>
          <div>
            {' '}
            <BackgroundContainer className={'post'} src={newPost} />
          </div>
          <DivText className={'post'}>
            <DivInformAbout>
              <Text>УП «МИНГАЗ» просит своих абонентов быть бдительными</Text>
            </DivInformAbout>
            <ButtonFun
              classname={'post'}
              href={'/posts'}
              infoButton={'Подробнее'}
              backgrounder={'border'}
            />
          </DivText>
        </div>,
        <div style={{ padding: 0, margin: 0, width: '100%' }}>
          <div>
            {' '}
            <BackgroundContainer className={'priem'} src={preim} />
          </div>
          <DivText className={'priem'}>
            <DivInformAbout>
              <Text className={'priem'}>
                29 сентября генеральный директор УП "МИНГАЗ" Вадим Шолоник проведёт выездной приём
                граждан <br /> Адрес: участок №1 службы эксплуатации внутридомовых объектов
                газопотребления, <br /> ул. Плеханова, 3<br /> Время: с 08.00 до 09.00
                <br /> Запись по телефону: +375 (017) 299-28-80
              </Text>
            </DivInformAbout>
          </DivText>
        </div>,
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
        <WindowDiv style={{ backgroundColor: 'rgba(14,78,129,0.2)' }}>
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
