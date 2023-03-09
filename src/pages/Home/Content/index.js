import React, { useCallback, useEffect, useState } from 'react';
import '../../../components/Content/slider.css';
import Dots from '../../../components/Content/dots';
import SliderContent from '../../../components/Content/SliderContent';
import axios from 'axios';
import { API } from '../../../backend';
import { BlockContent, ContainerContent, ContainerImage, ContainerText } from './styles';
import useMediaQuery from '../parallax/useMediaQuery';
import ContentMobile from './ContentMobile';
import { Button } from '../../feedback/styles';

export default function ContentHome() {
  const isPhone = useMediaQuery('(max-width: 900px)');
  const [activeIndex, setActiveIndex] = useState(0);
  const [info, setInfo] = useState([]);
  const [sliceInfo, setSliceInfo] = useState([]);
  const [infoNExt, setInfoNext] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/articles`)
      .then((res) => {
        setInfoNext(res.data);
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    setSliceInfo(info.slice(0, 4).reverse());
  }, [info]);
  const handleSliceInfo = useCallback(() => {
    console.log(infoNExt);
    // infoNExt.reverse()
    //  if (infoNExt.length > 3) {
    setSliceInfo(info.slice(3,6));
    // }
  }, [info, infoNExt]);
  useEffect(() => {
    console.log(sliceInfo);
    console.log(info);
    console.log(infoNExt);
  }, [info, infoNExt, sliceInfo]);
  return (
    <>
      {isPhone ? (
        <ContentMobile />
      ) : (
        <ContainerContent>
          <BlockContent>
            <ContainerImage>
              <SliderContent activeIndex={activeIndex} sliderImage={sliceInfo} />
            </ContainerImage>
            <ContainerText>
              <Dots
                activeIndex={activeIndex}
                sliderImage={sliceInfo}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
              />
              <Button className={'for-article'} onClick={handleSliceInfo}>
                Другие статьи
              </Button>
            </ContainerText>
          </BlockContent>
        </ContainerContent>
      )}
    </>
  );
}
