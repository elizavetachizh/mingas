import ReactCarousel, { AFTER, CENTER, BEFORE } from 'react-carousel-animated';
import 'react-carousel-animated/dist/style.css';
import { photo } from '../../../assets/data/liveInStyleOfMingas';
import { Link, ImgCarousel } from '../../company/styles';
import { IoLogoInstagram, IoMdPaperPlane } from 'react-icons/io';
function LifeOfMingas() {
  return (
    <>
      <Link className={'social-networks'}>
        Мы в социальных сетях:
        <div>
          <a
            title={'Наш инстаграм'}
            href={'https://instagram.com/mingas.by?igshid=YmMyMTA2M2Y='}
            target={'_blank'}
          >
            <IoLogoInstagram
              style={{ width: '54px', height: '54px' }}
              src={require('../../../assets/png/instagram.png')}
            />
          </a>
          <a title={'Наш телеграм'} href={'https://t.me/+UBzXdk0X5NoyZjJi'} target={'_blank'}>
            <IoMdPaperPlane
              style={{ width: '54px', height: '54px' }}
              src={require('../../../assets/png/telegram.png')}
            />
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
            <ImgCarousel
              key={index}
              src={require(`../../../assets/lifeinstyleOFMingas/${image.img}.jpg`)}
              alt="test"
              style={{
                borderRadius: '20px',
                margin: '.5rem',
              }}
            />
          ))}
        </ReactCarousel>
        <div className={'video'}>
          <video
            poster={require('../../../assets/png/logo_video.png')}
            controls
            src={require('../../../assets/video/фильм.mp4')}
          />
        </div>
      </div>
    </>
  );
}

export default LifeOfMingas;
