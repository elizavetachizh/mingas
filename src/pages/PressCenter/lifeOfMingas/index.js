import ReactCarousel, { AFTER, CENTER, BEFORE } from 'react-carousel-animated';
import 'react-carousel-animated/dist/style.css';
import { photo } from '../../../assets/data/liveInStyleOfMingas';
import { Link, ImgCarousel } from '../../company/styles';
import { IoLogoInstagram, IoMdPaperPlane } from 'react-icons/io';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
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
            rel="noreferrer"
          >
            <IoLogoInstagram style={{ width: '54px', height: '54px' }} />
          </a>
          <a
            title={'Телеграм'}
            href={'https://t.me/+UBzXdk0X5NoyZjJi'}
            target={'_blank'}
            rel="noreferrer"
          >
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
          {photo.map((image) => (
            <div
              key={image.id}
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            >
              <IoIosArrowRoundBack style={{ width: '28', height: '28' }} />
              <ImgCarousel
                src={require(`../../../assets/lifeinstyleOFMingas/${image.img}.webp`)}
                alt="image"
                style={{
                  borderRadius: '20px',
                  margin: '.5rem',
                }}
              />
              <IoIosArrowRoundForward style={{ width: '28', height: '28' }} />
            </div>
          ))}
        </ReactCarousel>
        <div className={'video'}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/K0XX5F8COro"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default LifeOfMingas;
