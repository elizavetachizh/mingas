import ReactCarousel, { AFTER, CENTER, BEFORE } from 'react-carousel-animated';
import 'react-carousel-animated/dist/style.css';
import { photo } from '../../../assets/data/liveInStyleOfMingas';
import { Link } from '../../company/styles';

function LifeOfMingas() {
  return (
    <>
      {' '}
      <Link className={'social-networks'}>
        Мы в социальных сетях:
        <div>
          <a href={'https://instagram.com/mingas.by?igshid=YmMyMTA2M2Y='} target={'_blank'}>
            <img style={{ width: '54px' }} src={require('../../../assets/png/instagram.png')} />
          </a>
          <a href={'https://t.me/+UBzXdk0X5NoyZjJi'} target={'_blank'}>
            <img style={{ width: '54px' }} src={require('../../../assets/png/telegram.png')} />
          </a>
        </div>
      </Link>
      <div className="container">
        <ReactCarousel
          carouselConfig={{
            transform: {
              rotateY: {
                [BEFORE]: () => 'rotateY(25deg)',
                [CENTER]: () => 'rotateY(0deg)',
                [AFTER]: () => 'rotateY(-25deg)',
              },
            },
          }}
          itemBackgroundStyle={{
            borderRadius: '3px',
          }}
          itemMaxWidth={50}
          carouselHeight="350px"
        >
          {photo.map((image, index) => (
            <img
              key={index}
              src={require(`../../../assets/lifeinstyleOFMingas/${image.img}.jpg`)}
              alt="test"
              style={{
                maxHeight: '300px',
                maxWidth: '600px',
                borderRadius: '20px',
                margin: '.5rem',
              }}
            />
          ))}
        </ReactCarousel>
      </div>
    </>
  );
}

export default LifeOfMingas;
