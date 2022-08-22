import React, { useCallback, useState } from 'react';
import { Container, ContainerGraditude } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TitleForHome from '../../../components/TitleForHome';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { gratitude } from '../../../assets/data/gratitude';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';

export default function Gratitude() {
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
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'gratitude'} />
      <TitleForHome infoTitle={'Благодарности и награды'} color={'blue'} />
      <AdditionalDiv>
        <div style={{ width: '80%', margin: '0 auto' }}>
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
            {gratitude.map((element) => (
              <ContainerGraditude onClick={() => openImage(element.id)}>
                <img
                  className={currentServiceID === element.id && visible && 'visibleOpen'}
                  src={require(`../../../assets/pdf/gratitude/${element.img}.png`)}
                  alt={''}
                />
              </ContainerGraditude>
            ))}
          </Carousel>
        </div>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
