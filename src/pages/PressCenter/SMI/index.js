import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ContainerArticles } from '../styles';
import React, { useEffect, useState } from 'react';
import { API } from '../../../backend';
import axios from 'axios';
import SchemaSMI from './schema';
export default function SMI() {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const [isClose, setIsClose] = useState(false);
  const animateClose = () => {
    setIsClose(true);
    if (isClose) {
      setIsClose(false);
    }
  };
  //
  const [info, setInfo] = useState(null);
  useEffect(() => {
    const apiUrl = `${API}/posts`;
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
    <div>
      <p>
        УП «МИНГАЗ» проводит честную и открытую политику сотрудничества со СМИ. Мы открыты для
        предложений, совместного взаимодействия, предоставление актуальной и достоверной информации
        является для нас приоритетом. Контактный телефон: 8017-299-29-47
      </p>
      <General>
        <BtnIsOpen onClick={animate}>
          <p>Видеотека</p>
          <div>
            {isOpen ? (
              <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
            ) : (
              <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
            )}
          </div>
        </BtnIsOpen>
        <Div className={isOpen && `shake`}>
          <iframe
            src="https://www.youtube.com/embed/Dd3zsFaCKT8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/QCBY6awvF-E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/cBJcdXWlgV4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Div>
      </General>
      <General>
        <BtnIsOpen onClick={animateClose}>
          <p>Статьи</p>
          <div>
            {isClose ? (
              <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
            ) : (
              <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
            )}
          </div>
        </BtnIsOpen>
        <Div className={isClose && `shake`}>
          <ContainerArticles>
            {info &&
              info.map((el) => <SchemaSMI href={el.link} src={el.image} content={el.content} date={el.date} />)}
          </ContainerArticles>
        </Div>
      </General>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2ZdJV1isCWo"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/skA0lmHdR7I"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
