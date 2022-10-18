import React from 'react';
import { Main, WindowDiv, BackgroundContainer } from './styles';
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import './styles.css';
import { DivInformAbout, DivText, Text } from '../Content/styles';
import phone from '../../../assets/png/PhoneFour.png';
import imageContent from '../../../assets/background/mingas_background.webp';
import newPost from '../../../assets/background/newPost.jpg';
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
            <a rel={'preconnect'} className={'phone'} href={'tel:162'}>
              <img src={phone} alt={'картинка'} />
            </a>
          </DivText>
        </div>,
        <div style={{ padding: 0, margin: 0, width: '100%' }}>
          <div>
            <BackgroundContainer src={imageContent} />
          </div>
          <DivText className={'post'}>
            <DivInformAbout>
              <Text>
                УП «МИНГАЗ» информирует! <br />
                По адресу г. Минск, ул. Ботаническая 11 (подъезд 2) с 01.10.2022 приём граждан будет
                осуществляться ежедневно, время приема 8.00-20.00.
              </Text>
            </DivInformAbout>
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
