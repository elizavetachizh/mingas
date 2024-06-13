import React, { useEffect, useState } from 'react';
import '../../../components/Content/slider.css';
import Dots from '../../../components/Content/dots';
import SliderContent from '../../../components/Content/SliderContent';
import axios from 'axios';
import { API } from '../../../backend';
import { ContainerContent } from './styles';
import useMediaQuery from '../parallax/useMediaQuery';
import ContentMobile from './ContentMobile';

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
  }, []);

  return (
    <>
      {isPhone ? (
        <ContentMobile info={info} />
      ) : (
        <ContainerContent>
          <SliderContent activeIndex={activeIndex} sliderImage={info} />
          <Dots
            activeIndex={activeIndex}
            sliderImage={info}
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        </ContainerContent>
      )}
    </>
  );
}
