import ReactCarousel, { AFTER, CENTER, BEFORE } from 'react-carousel-animated';
import 'react-carousel-animated/dist/style.css';
import { photo } from '../../../assets/data/liveInStyleOfMingas';
import { Link, ImgCarousel } from '../../company/styles';
import { IoLogoInstagram, IoMdPaperPlane } from 'react-icons/io';
import { IoMdRadioButtonOn } from 'react-icons/io';
function LifeOfMingas() {
  return (
    <>
      <Link className={'social-networks'}>
        Мы в социальных сетях:
        <div>
          <a
            title={'Инстаграм'}
            href={'https://instagram.com/mingas.by?igshid=YmMyMTA2M2Y='}
            target={'_blank'}
          >
            <IoLogoInstagram style={{ width: '54px', height: '54px' }} />
          </a>
          <a title={'Телеграм'} href={'https://t.me/+UBzXdk0X5NoyZjJi'} target={'_blank'}>
            <IoMdPaperPlane style={{ width: '54px', height: '54px' }} />
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
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <IoMdRadioButtonOn style={{ width: '24', height: '24' }} />
              <ImgCarousel
                key={index}
                src={require(`../../../assets/lifeinstyleOFMingas/${image.img}.jpg`)}
                alt="test"
                style={{
                  borderRadius: '20px',
                  margin: '.5rem',
                }}
              />
            </div>
          ))}
        </ReactCarousel>
        <div className={'video'}>
          <video
            poster={require('../../../assets/png/logo_video.png')}
            controls
            src={'https://back.mingas.by/public/videos/%D1%84%D0%B8%D0%BB%D1%8C%D0%BC.mp4'}
          />
        </div>
      </div>
    </>
  );
}

export default LifeOfMingas;
