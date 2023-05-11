import React, {  useEffect, useState } from 'react';
import '../../../components/Content/slider.css';
import Dots from '../../../components/Content/dots';
import SliderContent from '../../../components/Content/SliderContent';
import axios from 'axios';
import { API } from '../../../backend';
import { BlockContent, ContainerContent, ContainerImage, ContainerText } from './styles';
import useMediaQuery from '../parallax/useMediaQuery';
import ContentMobile from './ContentMobile';

export default function ContentHome() {
  const isPhone = useMediaQuery('(max-width: 900px)');
  const [activeIndex, setActiveIndex] = useState(0);
  const [info, setInfo] = useState([]);
  const [sliceInfo, setSliceInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/articles`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    setSliceInfo(info);
  }, [info]);
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
            </ContainerText>
          </BlockContent>
        </ContainerContent>
      )}
    </>
  );
}
