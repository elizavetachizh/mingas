import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { DescriptionService } from '../../services/DopFunction/styles';
import { Article, ContainerArticles } from '../styles';
import gradient from '../../../assets/background/gradient.png';
import React, { useState } from 'react';

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
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Dd3zsFaCKT8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QCBY6awvF-E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
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
            <Article className={'general'}>
              <a
                target={'_blank'}
                href={
                  'https://minsknews.by/mozhno-li-samostoyatelno-podklyuchit-gazovuyu-plitu-kommentarij-mingaza/'
                }
              >
                <img
                  src={
                    'https://minsknews.by/wp-content/uploads/2022/02/Depositphotos_22540503_S-900x596.jpg'
                  }
                />
                <p>Можно ли самостоятельно подключить газовую плиту – комментарий «МИНГАЗа»</p>
              </a>
            </Article>
            <Article className={'quarter'}>
              <a
                target={'_blank'}
                href={
                  'https://minsknews.by/hozyajke-chastnogo-doma-naschitali-bolee-19-tys-rublej-za-gaz-iz-za-poddelnoj-plomby-na-schetchike/'
                }
              >
                <img
                  src={
                    'https://minsknews.by/wp-content/uploads/2022/01/Depositphotos_330503392_S-900x601.jpg'
                  }
                />

                <p>
                  Хозяйке частного дома насчитали более 19 тыс. рублей за газ из-за поддельной
                  пломбы на счетчике
                </p>
              </a>
            </Article>
            <Article className={'quarter'}>
              <a target={'_blank'} href={'https://belchas.1prof.by/news/schetchik-ne-gazuet/'}>
                <img src={'https://belchas.1prof.by/file/2022/04/19-1-490x310.jpg'} />
                <p>
                  Счетчик «не газует» - Газета Беларускi Час. <br /> Новости профсоюзов Беларуси
                </p>
              </a>
            </Article>
            <Article>
              <a
                target={'_blank'}
                href={
                  'http://www.gorka.by/o-realnom-polozhenii-del-na-tbz-sergeevichskoe/?_utl_t=tm'
                }
              >
                <img
                  src={
                    'https://minsknews.by/wp-content/uploads/2022/01/Depositphotos_330503392_S-900x601.jpg'
                  }
                />

                <p>
                  О реальном положении дел на ТБЗ «Сергеевичское» — Пухавiцкiя навiны. Пуховичские
                  новости. Марьина Горка. Новости Марьиной Горки
                </p>
              </a>
            </Article>
            <Article>
              <a
                target={'_blank'}
                href={
                  'https://minsknews.by/nyuansy-obsluzhivaniya-mnogokvartirnyh-gazificzirovannyh-domov-obsudili-na-seminare-v-minke/'
                }
              >
                <img
                  src={
                    'https://minsknews.by/wp-content/uploads/2022/04/Pavel-Rusak-15-of-31-kopiya-1.jpgv'
                  }
                />

                <p>
                  Нюансы обслуживания многоквартирных газифицированных домов обсудили на семинаре в
                  Минске
                </p>
              </a>
            </Article>
            <Article>
              <a
                target={'_blank'}
                href={
                  'https://minsknews.by/novye-pravila-polzovaniya-gazom-v-bytu-v-minske-prohodit-seminar-dlya-speczialistov-so-vsej-strany/'
                }
              >
                <img
                  src={
                    'https://minsknews.by/wp-content/uploads/2022/04/Pavel-Rusak-8-of-31-kopiya.jpg'
                  }
                />

                <p>
                  Новые правила пользования газом в быту: в Минске проходит семинар для специалистов
                </p>
              </a>
            </Article>
            <Article>
              <a
                target={'_blank'}
                href={
                  'https://minsknews.by/kommunalnyj-likbez-kak-podvesti-gaz-k-chastnomu-domu-i-skolko-eto-stoit/'
                }
              >
                <img
                  src={
                    'https://minsknews.by/wp-content/uploads/2022/01/Depositphotos_330503392_S-900x601.jpg'
                  }
                />

                <p>
                  Коммунальный ликбез: <br /> как подвести газ к частному дому, и сколько это стоит{' '}
                </p>
              </a>
            </Article>
            <Article>
              <a
                target={'_blank'}
                href={
                  'https://minsknews.by/novye-dogovory-za-polzovanie-gazom-5-populyarnyh-voprosov-i-otvety-speczialista/'
                }
              >
                <img
                  src={
                    'https://minsknews.by/wp-content/uploads/2022/01/Depositphotos_330503392_S-900x601.jpg'
                  }
                />

                <p>
                  Новые договоры за пользование газом: 5 популярных вопросов и ответы специалиста{' '}
                  <br /> {''}
                </p>
              </a>
            </Article>
            <Article>
              <a
                target={'_blank'}
                href={
                  'https://minsknews.by/v-2022-g-rabotniki-up-mingaz-provedut-tehobsluzhivanie-bolee-chem-46-tys-plit-chto-nuzhno-znat-potrebitelyam/'
                }
              >
                <img
                  src={
                    'https://minsknews.by/wp-content/uploads/2022/01/Depositphotos_330503392_S-900x601.jpg'
                  }
                />

                <p>
                  В 2022 г. работники УП «МИНГАЗ» проведут техобслуживание более чем 46 тыс. плит.
                  Что нужно знать потребителям
                </p>
              </a>
            </Article>
          </ContainerArticles>
        </Div>
      </General>
    </div>
  );
}
