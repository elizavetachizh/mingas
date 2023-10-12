import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ContainerArticles } from '../styles';
import React, { useEffect, useState } from 'react';
import SchemaSMI from './schema';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchPostsQuery } from '../../../redux/services/posts';
import { setPosts } from '../../../redux/slices/postsSlice';

export default function SMI() {
  const dispatch = useDispatch();
  const { data: fetchPosts, isLoading } = useFetchPostsQuery();
  useEffect(() => {
    if (!isLoading) {
      dispatch(setPosts(fetchPosts));
    }
  }, [isLoading, dispatch, fetchPosts]);
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [isOpenTV, setIsOpenTV] = useState(false);
  //
  const posts = useSelector((state) => state.posts.data);

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
          <ContainerArticles>
            {posts?.length ? (
              posts.map((el) => (
                <SchemaSMI href={el.link} src={el.image} content={el.content} date={el.date} />
              ))
            ) : (
              <p>Загрузка данных...</p>
            )}
          </ContainerArticles>
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
