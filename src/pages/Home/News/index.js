import React from 'react';
import ButtonFun from '../../../components/button';
import { DivInform } from './styles';
import TitleForHome from '../../../components/TitleForHome';
import { pressCenter } from '../../../assets/data/pressCenterHeader';
import DopFunctionalPressCenter from '../../PressCenter/DopFunctional';
import { Article, ArticleForHome, ContainerArticles } from '../../PressCenter/styles';
import gradient from '../../../assets/background/gradient.png';
const styledTitle = {
  margin: '0',
};
export default function News() {
  return (
    <>
      <div
        style={{
          boxShadow: ' 0 0 5px 3px rgba(0, 0, 0, 0.2)',
          borderRadius: '20px',
          paddingBottom: '1%',
        }}
      >
        <TitleForHome
          style={styledTitle}
          margin={'s'}
          fontSize={'m'}
          color={'blue'}
          infoTitle={'СМИ о нас'}
        />

        <DivInform>
          <ArticleForHome style={{ backgroundImage: `url('${gradient}')` }} className={'general'}>
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
          </ArticleForHome>
          <ArticleForHome
            className={'quarter'}
            style={{
              backgroundImage: `url('${gradient}')`,
            }}
          >
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
                Хозяйке частного дома насчитали более 19 тыс. рублей за газ из-за поддельной пломбы
                на счетчике
              </p>
            </a>
          </ArticleForHome>
          <ArticleForHome
            className={'quarter'}
            style={{
              backgroundImage: `url('${gradient}')`,
            }}
          >
            <a target={'_blank'} href={'https://belchas.1prof.by/news/schetchik-ne-gazuet/'}>
              <img src={'https://belchas.1prof.by/file/2022/04/19-1-490x310.jpg'} />
              <p>
                Счетчик «не газует» - Газета Беларускi Час. <br /> Новости профсоюзов Беларуси
              </p>
            </a>
          </ArticleForHome>
          <ArticleForHome
            style={{
              backgroundImage: `url('${gradient}')`,
            }}
          >
            <a
              target={'_blank'}
              href={'http://www.gorka.by/o-realnom-polozhenii-del-na-tbz-sergeevichskoe/?_utl_t=tm'}
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
          </ArticleForHome>
        </DivInform>
        <ButtonFun href={'/Press-Center'} infoButton={'Показать ещё'} backgroundColor={'blue'} />
      </div>
    </>
  );
}
