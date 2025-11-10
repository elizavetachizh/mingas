import ReactCarousel, { AFTER, CENTER, BEFORE } from 'react-carousel-animated';
import 'react-carousel-animated/dist/style.css';
import { photo } from '../../../assets/data/liveInStyleOfMingas';
import { Link, ImgCarousel } from '../../company/styles';
import { IoLogoInstagram, IoMdPaperPlane } from 'react-icons/io';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
import { API } from '../../../backend';
import axios from 'axios';
import Loader from '../../../components/Loader';
import { Div } from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
function LifeOfMingas() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const apiUrl = `${API}/pressCenterVideo`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

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
                src={image.img}
                alt="image"
              />
              <IoIosArrowRoundForward style={{ width: '28', height: '28' }} />
            </div>
          ))}
        </ReactCarousel>
        <div className={'video'}>
          {!!info?.length ? (
            <>
              {info?.map((el) => (
                <>
                  <p style={{marginBottom:0}}>{el.name}</p>
                  <iframe
                    src={el.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </>
              ))}
            </>
          ) : (
            <Loader />
          )}
          <video
            src="https://back.mingas.by/public/video/1.webm"
            title="YouTube video player"
            id={'video'}
            autoPlay={false}
            width={'70%'}
            style={{ margin: '0 15%' }}
            controls="true"
            playsInline
          ></video>
          <iframe
            src="https://www.youtube.com/embed/-H9ziFYtdGU"
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
