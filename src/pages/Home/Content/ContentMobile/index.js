import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../../../backend';
import Arrows from '../../../../components/Content/Arrows';
import './carouselMobile/styles.css';
import Dots from './carouselMobile/dots';
import SliderContent from './carouselMobile/sliderContent';
export default function ContentMobile() {
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
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === info.length - 1 ? 0 : activeIndex + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, setInfo, info.length]);

  return (
    <div className="slider-container-mobile">
      <SliderContent activeIndex={activeIndex} sliderImage={info} />
      <Arrows
        prevSlide={() => setActiveIndex(activeIndex < 1 ? info.length - 1 : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex === info.length - 1 ? 0 : activeIndex + 1)}
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={info}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}
