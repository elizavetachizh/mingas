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
import LinkAsButtonFun from '../../../../../components/LinkButton';
import axios from 'axios';
import DopFunctional from '../../DopFunctional';
export default class CarouselMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <>
          <DivImage className={'none'}>
            <img className={'newpost'} src={post} alt={'картинка загружается'} />
          </DivImage>
          <DivText className={'newpost'}>
            <Text style={{ position: 'initial', textAlign: 'center' }}>
              Уважаемые граждане! Обращаем внимание на то, что 2 января 2023 г. вступают в силу
              изменения, внесенные в статью 25 Закона Республики Беларусь «Об обращениях граждан и
              юридических лиц». В связи с этим подача электронных обращений будет возможна только с
              помощью государственной единой (интегрированной) республиканской информационной
              системы учета и обработки обращений граждан и юридических лиц - интернет-ресурса {''}
              <a target={'_blank'} href={'https://xn--80abnmycp7evc.xn--90ais./'} rel="noreferrer">
                обращения.бел.
              </a>
            </Text>
          </DivText>
        </>,
      ],
    };
    this.onchange = this.onchange.bind(this);
  }

  componentDidMount() {
    this.setState({ ...this.state, isFetching: true });
    axios
      .get('http://localhost/admin/articles')
      .then((response) => {
        this.setState({
          isFetching: false,
          slides: response.data.map((el) => (
            <DopFunctional
              onclick={() => console.log(el.content)}
              content={el.content}
              button={el.button}
              image={el.image}
              link={el.link}
              href={el.href}
            />
          )),
        });

        console.log(this.state);
      })
      .catch((e) => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
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
