import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import React from 'react';
import certificat from '../../../../assets/pdf/certificates/ISO9001-2015/1.png';
import certificat_1 from '../../../../assets/pdf/certificates/ISO9001-2015/2.png';
import certificat_2 from '../../../../assets/pdf/certificates/ISO9001-2015/3.png';
import certificat_3 from '../../../../assets/pdf/certificates/ISO9001-2015/4.png';
import certificat_4 from '../../../../assets/pdf/certificates/ISO9001-2015/5.png';
import certificat_5 from '../../../../assets/pdf/certificates/ISO14001-2015/1.png';
import certificat_6 from '../../../../assets/pdf/certificates/ISO14001-2015/2.png';
import certificat_7 from '../../../../assets/pdf/certificates/ISO14001-2015/3.png';
import certificat_8 from '../../../../assets/pdf/certificates/ISO14001-2015/4.png';
import certificat_9 from '../../../../assets/pdf/certificates/ISO14001-2015/5.png';

import { AttestatsBlock, ContainerAttestat } from '../attestats/styles';
export default function CertificatsFunction() {
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
          <img src={certificat} />
          <img src={certificat_1} />
          <img src={certificat_2} />
          <img src={certificat_3} />
          <img src={certificat_4} />
          {/*<img src={certificat_1} />*/}
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
          <img src={certificat_5} />
          <img src={certificat_6} />
          <img src={certificat_7} />
          <img src={certificat_8} />
          <img src={certificat_9} />
        </Carousel>
      </ContainerAttestat>
    </AttestatsBlock>
  );
}
