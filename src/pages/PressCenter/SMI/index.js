import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import React, { useState } from 'react';
import ComponentContainerArticles from './ComponentContainerArticles';

export default function SMI() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [isOpenTV, setIsOpenTV] = useState(false);

  return (
    <div>
      <p>
        УП «МИНГАЗ» проводит честную и открытую политику сотрудничества со СМИ. Мы открыты для
        предложений, совместного взаимодействия, предоставление актуальной и достоверной информации
        является для нас приоритетом. Контактный телефон: 8017-299-29-47
      </p>
      <General>
        <BtnIsOpen onClick={() => setIsOpen(!isOpen)}>
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
        </Div>
      </General>
      <General>
        <BtnIsOpen onClick={() => setIsClose(!isClose)}>
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
          <ComponentContainerArticles />
        </Div>
      </General>
      <General>
        <BtnIsOpen onClick={() => setIsOpenTV(!isOpenTV)}>
          <p>Мингаз-ТВ</p>
          <div>
            {isOpenTV ? (
              <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
            ) : (
              <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
            )}
          </div>
        </BtnIsOpen>
        <Div className={isOpenTV && `shake`}>
          <p>
            1. Первый выпуск МИНГАЗ-ТВ с генеральным директором УП «МИНГАЗ» Вадимом Евгеньевичем
            Шолоником
          </p>
          <video
            src="https://back.mingas.by/public/video/2.webm"
            title="YouTube video player"
            id={'video'}
            autoPlay={false}
            width={'70%'}
            style={{ margin: '0 15%' }}
            controls="true"
            playsInline
          ></video>
          <p>
            2. Об индивидуальных приборах учета газа с начальником службы учета потребленного газа
            населением Александром Владимировичем Пятницей
          </p>
          <video
            src="https://back.mingas.by/public/video/3.webm"
            title="YouTube video player"
            id={'video'}
            autoPlay={false}
            width={'70%'}
            style={{ margin: '0 15%' }}
            controls="true"
            playsInline
          ></video>
        </Div>
      </General>
    </div>
  );
}
