import { ContainerGraditude } from '../../styles';
import React, { useCallback, useState } from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import {litsenzii} from "../../../../assets/data/litsenzii";

export default function LitsenziiFunction() {
  const [visible, setVisible] = useState(false);
  const [currentServiceID, setServiceID] = useState(null);
  const openImage = useCallback(
    (id) => {
      if (currentServiceID === id) {
        setServiceID(null);
        setVisible(false);
      } else {
        setServiceID(id);
        setVisible(true);
      }
    },
    [visible, currentServiceID]
  );
  return (
    <Carousel
      plugins={[
        'arrows',
        {
          resolve: autoplayPlugin,
          options: {
            interval: 2000,
          },
        },
      ]}
      animationSpeed={1000}
    >
      {litsenzii.map((element) => (
        <ContainerGraditude onClick={() => openImage(element.id)}>
          <img
            className={currentServiceID === element.id && visible && 'visibleOpen'}
            src={require(`../../../../assets/pdf/certificates/License_fire_safety/${element.img}.png`)}
            alt={''}
          />
        </ContainerGraditude>
      ))}
    </Carousel>
  );
}
