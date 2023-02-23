import React, { useEffect, useState } from 'react';
import '../../../components/Content/slider.css';
import Dots from '../../../components/Content/dots';
import SliderContent from '../../../components/Content/SliderContent';
import axios from 'axios';
import { API } from '../../../backend';
import { BlockContent, ContainerContent, ContainerImage, ContainerText } from './styles';
import useMediaQuery from '../parallax/useMediaQuery';
import ContentMobile from './ContentMobile';
import { Button } from '../../../components/button/styles';

export default function ContentHome() {
  const isPhone = useMediaQuery('(max-width: 900px)');
  const [activeIndex, setActiveIndex] = useState(0);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/articles`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  return (
    <>
      {isPhone ? (
        <ContentMobile />
      ) : (
        <ContainerContent>
          <BlockContent>
            <ContainerImage>
              <SliderContent activeIndex={activeIndex} sliderImage={info} />
            </ContainerImage>
            <ContainerText>
              <Dots
                activeIndex={activeIndex}
                sliderImage={info}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
              />
              <Button className={'for-article'} to={'/posts/63f72a399d09ade74ccd65aa'}>
                Другие статьи
              </Button>
            </ContainerText>
          </BlockContent>
        </ContainerContent>
      )}
    </>
  );
}
