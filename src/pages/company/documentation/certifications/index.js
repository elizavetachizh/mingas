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

import certificat_10 from '../../../../assets/pdf/certificates/Certificate_Briquette/1.png';
import certificat_11 from '../../../../assets/pdf/certificates/Certificate_Briquette/2.png';
import certificat_12 from '../../../../assets/pdf/certificates/Certificate_Briquette/3.png';
import certificat_13 from '../../../../assets/pdf/certificates/Certificate_Briquette/4.png';
import certificat_14 from '../../../../assets/pdf/certificates/Certificate_Briquette/5.png';

import certificat_15 from '../../../../assets/pdf/certificates/Certificate_SNKIiTD/1.png';
import certificat_16 from '../../../../assets/pdf/certificates/Certificate_SNKIiTD/2.png';
import certificat_17 from '../../../../assets/pdf/certificates/Certificate_SNKIiTD/3.png';
import certificat_18 from '../../../../assets/pdf/certificates/Certificate_SNKIiTD/4.png';
import certificat_19 from '../../../../assets/pdf/certificates/Certificate_SNKIiTD/5.png';
import certificat_20 from '../../../../assets/pdf/certificates/Certificate_SNKIiTD/6.png';
import certificat_21 from '../../../../assets/pdf/certificates/Certificate_SNKIiTD/7.png';
import certificat_22 from '../../../../assets/pdf/certificates/Certificate_SNKIiTD/8.png';
import { ContainerCertificats } from '../../styles';
export default function CertificatsFunction() {
  return (
    <ContainerCertificats>
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
      </Carousel>
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
        <img src={certificat_10} />
        <img src={certificat_11} />
        <img src={certificat_12} />
        <img src={certificat_13} />
        <img src={certificat_14} />
      </Carousel>
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
        <img src={certificat_15} />
        <img src={certificat_16} />
        <img src={certificat_17} />
        <img src={certificat_18} />
        <img src={certificat_19} />
        <img src={certificat_20} />
        <img src={certificat_21} />
        <img src={certificat_22} />
      </Carousel>
    </ContainerCertificats>
  );
}
