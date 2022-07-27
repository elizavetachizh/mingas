import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import React from 'react';
import attesttat from '../../../../assets/pdf/certificates/Аттестат_аккредитации_поверочной_лаборатории_СГЭМОиООС/1.png';
import attesttat_1 from '../../../../assets/pdf/certificates/Аттестат_аккредитации_поверочной_лаборатории_СГЭМОиООС/2.png';
import attesttat_2 from '../../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД/1.png';
import attesttat_3 from '../../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД/2.png';
import attesttat_4 from '../../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД/3.png';
import attesttat_5 from '../../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД/4.png';
import attesttat_6 from '../../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД/5.png';
import attesttat_7 from '../../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД/6.png';
import attesttat_8 from '../../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД/7.png';
import attesttat_9 from '../../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД/8.png';
import { AttestatsBlock, ContainerAttestat } from "./styles";
export default function AttestatsFunction() {
  return (
    <AttestatsBlock>
      <ContainerAttestat>
        {' '}
        <Carousel
          plugins={[
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          <img src={attesttat} />
          <img src={attesttat_1} />
        </Carousel>
      </ContainerAttestat>
      <ContainerAttestat>
        {' '}
        <Carousel
          plugins={[
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          <img src={attesttat_2} />
          <img src={attesttat_3} />
          <img src={attesttat_4} />
          <img src={attesttat_5} />
          <img src={attesttat_6} />
          <img src={attesttat_7} />
          <img src={attesttat_8} />
          <img src={attesttat_9} />
        </Carousel>
      </ContainerAttestat>
    </AttestatsBlock>
  );
}
