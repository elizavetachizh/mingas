import { photo } from '../../../assets/data/liveInStyleOfMingas';
import React, { useEffect, useMemo } from 'react';
import gsap from 'gsap';
import useMediaQuery from '../../Home/parallax/useMediaQuery';
export default function LifeOfMingas() {
  const medium = useMediaQuery('(max-width: 1200px)');
  useEffect(() => {
    const divs = document.querySelectorAll('.testimonials');
    gsap.set(divs[1], { x: 100, opacity: 1 });
    gsap
      .timeline({ repeat: 8, defaults: { duration: 3 } })

      .add('one')
      .to(divs[0], { y: 200, x: 100, opacity: 1 }, 'one')
      .to(divs[1], { y: 200, x: 0, opacity: 0.05 }, 'one')
      .to(divs[2], { y: -300, x: 0, opacity: 0 }, 'one')
      .to(divs[3], { y: -200, x: 0, opacity: 0.05 }, 'one')

      .add('two')
      .to(divs[0], { y: -80, x: 0, opacity: 0.05 }, 'two')
      .to(divs[1], { y: -300, x: 100, opacity: 1 }, 'two')
      .to(divs[2], { y: -130, x: 0, opacity: 0.05 }, 'two')
      .to(divs[3], { y: -110, x: 0, opacity: 0.05 }, 'two')
      .to(divs[4], { y: 0, x: 0, opacity: 0 }, 'two')

      .add('three')
      .to(divs[0], { y: 400, x: 0, opacity: 0 }, 'three')
      .to(divs[1], { y: -400, x: 0, opacity: 0.05 }, 'three')
      .to(divs[2], { y: -600, x: 100, opacity: 1 }, 'three')
      .to(divs[3], { y: -500, x: 0, opacity: 0.05 }, 'three')
      .to(divs[4], { y: -200, x: 0, opacity: 0.05 }, 'three')
      //
      .add('four')
      .to(divs[1], { y: 0, x: 0, opacity: 0 }, 'four')
      .to(divs[2], { y: -860, x: 0, opacity: 0.05 }, 'four')
      .to(divs[3], { y: -1000, x: 100, opacity: 1 }, 'four')
      .to(divs[4], { y: -1100, x: 0, opacity: 0.05 }, 'four')
      .to(divs[5], { y: -900, x: 0, opacity: 0.05 }, 'four')
      //
      .add('five')
      .to(divs[2], { y: 0, x: 0, opacity: 0 }, 'five')
      .to(divs[3], { y: -1400, x: 0, opacity: 0.05 }, 'five')
      .to(divs[4], { y: -1450, x: 100, opacity: 1 }, 'five')
      .to(divs[5], { y: -1500, x: 0, opacity: 0.05 }, 'five')
      .to(divs[6], { y: -1200, x: 0, opacity: 0.05 }, 'five')
      //
      .add('six')
      .to(divs[3], { y: 0, x: 0, opacity: 0 }, 'six')
      .to(divs[4], { y: -1700, x: 0, opacity: 0.05 }, 'six')
      .to(divs[5], { y: -2000, x: 100, opacity: 1 }, 'six')
      .to(divs[6], { y: -1800, x: 0, opacity: 0.05 }, 'six')
      .to(divs[7], { y: -1600, x: 0, opacity: 0.05 }, 'six')

      .add('seven')
      .to(divs[4], { y: 0, x: 0, opacity: 0 }, 'seven')
      .to(divs[5], { y: -2200, x: 0, opacity: 0.05 }, 'seven')
      .to(divs[6], { y: -2400, x: 100, opacity: 1 }, 'seven')
      .to(divs[7], { y: -2200, x: 0, opacity: 0.05 }, 'seven')
      .to(divs[8], { y: -2000, x: 0, opacity: 0.05 }, 'seven')

      .add('eight')
      .to(divs[5], { y: 0, x: 0, opacity: 0 }, 'eight')
      .to(divs[6], { y: -2500, x: 0, opacity: 0.05 }, 'eight')
      .to(divs[7], { y: -2800, x: 100, opacity: 1 }, 'eight')
      .to(divs[8], { y: -2600, x: 0, opacity: 0.05 }, 'eight')
      .to(divs[9], { y: -2400, x: 0, opacity: 0.05 }, 'eight')

      .add('nine')
      .to(divs[6], { y: 0, x: 0, opacity: 0 }, 'nine')
      .to(divs[7], { y: -2900, x: 0, opacity: 0.05 }, 'nine')
      .to(divs[8], { y: -3100, x: 100, opacity: 1 }, 'nine')
      .to(divs[9], { y: -3000, x: 0, opacity: 0.05 }, 'nine')
      .to(divs[10], { y: -2800, x: 0, opacity: 0.05 }, 'nine')

      .add('ten')
      .to(divs[7], { y: 0, x: 0, opacity: 0 }, 'ten')
      .to(divs[8], { y: -3400, x: 0, opacity: 0.05 }, 'ten')
      .to(divs[9], { y: -3600, x: 100, opacity: 1 }, 'ten')
      .to(divs[10], { y: -3400, x: 0, opacity: 0.05 }, 'ten')
      .to(divs[11], { y: -3200, x: 0, opacity: 0.05 }, 'ten')

      .add('eleven')
      .to(divs[8], { y: 0, x: 0, opacity: 0 }, 'eleven')
      .to(divs[9], { y: -3900, x: 0, opacity: 0.05 }, 'eleven')
      .to(divs[10], { y: -4100, x: 100, opacity: 1 }, 'eleven')
      .to(divs[11], { y: -4000, x: 0, opacity: 0.05 }, 'eleven')
      .to(divs[12], { y: -4200, x: 0, opacity: 0.05 }, 'eleven')

      .add('twelve')
      .to(divs[9], { y: 0, x: 0, opacity: 0 }, 'twelve')
      .to(divs[10], { y: -4300, x: 0, opacity: 0.05 }, 'twelve')
      .to(divs[11], { y: -4400, x: 100, opacity: 1 }, 'twelve')
      .to(divs[12], { y: -4400, x: 0, opacity: 0.05 }, 'twelve')
      .to(divs[13], { y: -4200, x: 0, opacity: 0.05 }, 'twelve')

      .add('thirteen')
      .to(divs[10], { y: 0, x: 0, opacity: 0 }, 'thirteen')
      .to(divs[11], { y: -4800, x: 0, opacity: 0.05 }, 'thirteen')
      .to(divs[12], { y: -5000, x: 100, opacity: 1 }, 'thirteen')
      .to(divs[13], { y: -4800, x: 0, opacity: 0.05 }, 'thirteen')
      .to(divs[14], { y: -4600, x: 0, opacity: 0.05 }, 'thirteen')

      .add('fourteen')
      .to(divs[11], { y: 0, x: 0, opacity: 0 }, 'fourteen')
      .to(divs[12], { y: -5200, x: 0, opacity: 0.05 }, 'fourteen')
      .to(divs[13], { y: -5400, x: 100, opacity: 1 }, 'fourteen')
      .to(divs[14], { y: -5200, x: 0, opacity: 0.05 }, 'fourteen')
      .to(divs[15], { y: -5000, x: 0, opacity: 0.05 }, 'fourteen')

      .add('fifteen')
      .to(divs[12], { y: 0, x: 0, opacity: 0 }, 'fifteen')
      .to(divs[13], { y: -5600, x: 0, opacity: 0.05 }, 'fifteen')
      .to(divs[14], { y: -5800, x: 100, opacity: 1 }, 'fifteen')
      .to(divs[15], { y: -5600, x: 0, opacity: 0.05 }, 'fifteen')
      .to(divs[16], { y: -5400, x: 0, opacity: 0.05 }, 'fifteen')

      .add('sixteen')
      .to(divs[13], { y: 0, x: 0, opacity: 0 }, 'sixteen')
      .to(divs[14], { y: -6000, x: 0, opacity: 0.05 }, 'sixteen')
      .to(divs[15], { y: -6200, x: 100, opacity: 1 }, 'sixteen')
      .to(divs[16], { y: -6000, x: 0, opacity: 0.05 }, 'sixteen')

      .add('seventeen')
      .to(divs[14], { y: 0, x: 0, opacity: 0 }, 'seventeen')
      .to(divs[15], { y: -6400, x: 0, opacity: 0.05 }, 'seventeen')
      .to(divs[16], { y: -6600, x: 100, opacity: 1 }, 'seventeen');
  }, []);

  return (
    <>
      <div className={'general'} style={{ margin: '0 auto' }}>
        {photo.map((el) => (
          // <div className={'testimonials'}>
          <img
            className={'testimonials'}
            style={{ width: '76%', margin: '0 10%' }}
            src={require(`../../../assets/lifeinstyleOFMingas/${el.img}.jpg`)}
          />
          // </div>
        ))}
      </div>
    </>
  );
}
