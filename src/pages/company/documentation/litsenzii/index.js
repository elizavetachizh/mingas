import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import React from 'react';
import litsenzia from '../../../../assets/pdf/certificates/ISO45001/1.png';
import litsenzia1 from '../../../../assets/pdf/certificates/ISO45001/2.png';
import litsenzia2 from '../../../../assets/pdf/certificates/ISO45001/3.png';
import litsenzia3 from '../../../../assets/pdf/certificates/ISO45001/4.png';
import litsenzi4 from '../../../../assets/pdf/certificates/License_fire_safety/1.png';
import litsenzia5 from '../../../../assets/pdf/certificates/License_fire_safety/2.png';
import litsenzia6 from '../../../../assets/pdf/certificates/License_fire_safety/3.png';
import litsenzia7 from '../../../../assets/pdf/certificates/License_fire_safety/4.png';
import litsenzia8 from '../../../../assets/pdf/certificates/License_ionizing_radiation/1.png';
import litsenzia9 from '../../../../assets/pdf/certificates/License_ionizing_radiation/2.png';
import litsenzia10 from '../../../../assets/pdf/certificates/License_ionizing_radiation/3.png';

import litsenzia11 from '../../../../assets/pdf/certificates/License_ionizing_radiation1/1.png';
import litsenzia12 from '../../../../assets/pdf/certificates/License_ionizing_radiation1/2.png';
import litsenzia13 from '../../../../assets/pdf/certificates/License_ionizing_radiation1/3.png';
import litsenzia14 from '../../../../assets/pdf/certificates/License_ionizing_radiation1/4.png';
import litsenzia15 from '../../../../assets/pdf/certificates/License_ionizing_radiation1/5.png';
import litsenzia16 from '../../../../assets/pdf/certificates/License_ionizing_radiation1/6.png';
import litsenzia17 from '../../../../assets/pdf/certificates/License_ionizing_radiation1/7.png';
import { ContainerCertificats } from '../../styles';

export default function LitsenziiFunction() {
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
        <img src={litsenzia} alt={''} />
        <img src={litsenzia1} alt={''} />
        <img src={litsenzia2} />
        <img src={litsenzia3} />
      </Carousel>
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
        <img src={litsenzi4} alt={''} />
        <img src={litsenzia5} alt={''} />
        <img src={litsenzia6} />
        <img src={litsenzia7} />
      </Carousel>
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
        <img src={litsenzia8} alt={''} />
        <img src={litsenzia9} alt={''} />
        <img src={litsenzia10} />
        <img src={litsenzia11} />
      </Carousel>
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
        <img src={litsenzia12} alt={''} />
        <img src={litsenzia13} alt={''} />
        <img src={litsenzia14} />
        <img src={litsenzia15} />
        <img src={litsenzia16} alt={''} />
        <img src={litsenzia17} />
      </Carousel>
    </ContainerCertificats>
  );
}
