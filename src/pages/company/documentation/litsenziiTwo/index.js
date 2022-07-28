import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import React from 'react';
import litsenzia from '../../../../assets/pdf/certificates/License_Medical_activities/1.png';
import litsenzia1 from '../../../../assets/pdf/certificates/License_Medical_activities/2.png';
import litsenzia2 from '../../../../assets/pdf/certificates/License_Medical_activities/3.png';
import litsenzia3 from '../../../../assets/pdf/certificates/License_transport/1.png';
import litsenzia5 from '../../../../assets/pdf/certificates/License_transport/2.png';
import litsenzia6 from '../../../../assets/pdf/certificates/License_transport/3.png';
import litsenzia7 from '../../../../assets/pdf/certificates/License_transport/4.png';
import litsenzia8 from '../../../../assets/pdf/certificates/Permission_PE/1.png';
import litsenzia9 from '../../../../assets/pdf/certificates/Permission_PE/2.png';

import litsenzia11 from '../../../../assets/pdf/certificates/Permission_ShRP/1.png';
import litsenzia12 from '../../../../assets/pdf/certificates/Permission_ShRP/2.png';
import { ContainerCertificats } from '../../styles';

export default function LitsenziiTwoFunction() {
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
        <img src={litsenzia3} alt={''} />
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
        <img src={litsenzia11} alt={''} />
        <img src={litsenzia12} alt={''} />
      </Carousel>
    </ContainerCertificats>
  );
}
