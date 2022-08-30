import React from 'react';
import { Main, WindowDiv } from './styles';
import Carousel, { autoplayPlugin, Dots } from '@brainhubeu/react-carousel';
import './styles.css';
import { DivInformAbout, DivText, Text } from '../Content/styles';
import ButtonFun from '../../../components/button';
import phone from '../../../assets/png/PhoneFour.png';
import worker from '../../../assets/png/master.png';
import { Trans, useTranslation } from 'react-i18next';
import dayOfGas from '../../../assets/png/dayOfGas.jpg'
// export default function CarouselFun() {
//   const { t, i18n } = useTranslation();
//   return (
//     <Main>
//       <WindowDiv>
//         <Carousel
//           plugins={[
//             'infinite',
//             {
//               resolve: autoplayPlugin,
//               options: {
//                 interval: 4000,
//               },
//             },
//           ]}
//           animationSpeed={2000}
//         >
//           <DivText>
//             <DivInformAbout>
//               <Text>
//                 <Trans i18nKey="description:part1"></Trans>
//               </Text>
//             </DivInformAbout>
//             <a href={'tel:162'}>
//               <img src={phone} alt={''} />
//             </a>
//           </DivText>
//
//           <DivText>
//             <DivInformAbout>
//               <Text>{t('description:part2')}</Text>
//               <ButtonFun
//                 href={'/Press-Center'}
//                 backgroundColor={'blue'}
//                 infoButton={t('infoButton:more')}
//               />
//             </DivInformAbout>
//             <a href={''}>
//               {' '}
//               <img src={worker} alt={''} />
//             </a>
//           </DivText>
//         </Carousel>
//       </WindowDiv>
//     </Main>
//   );
// }

export default class CarouselFun extends React.Component {
  // const { t, i18n } = useTranslation();
  constructor() {
    super();

    this.state = {
      value: 0,
      slides: [
        <DivText>
          <DivInformAbout>
            {/*<Text>*/}
            {/*  <Trans i18nKey="description:part1"></Trans>*/}
            {/*</Text>*/}
          </DivInformAbout>
          <a href={'tel:162'}>
            <img src={phone} alt={''} />
          </a>
        </DivText>,
        <DivText>
          <DivInformAbout>
            {/*<Text>{t('description:part2')}</Text>*/}
            {/*<ButtonFun*/}
            {/*  href={'/Press-Center'}*/}
            {/*  backgroundColor={'blue'}*/}
            {/*  infoButton={t('infoButton:more')}*/}
            {/*/>*/}
          </DivInformAbout>
          <a href={''}>
            <img src={dayOfGas} alt={''} />
          </a>
        </DivText>,
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
              value={this.state.value}
              slides={this.state.slides}
              onChange={this.onchange}
            // plugins={[
            //   'infinite',
            //   {
            //     resolve: autoplayPlugin,
            //     options: {
            //       interval: 4000,
            //     },
            //   },
            // ]}
            // animationSpeed={2000}
          ></Carousel>
            <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
        </WindowDiv>

      </Main>
    );
  }
}
