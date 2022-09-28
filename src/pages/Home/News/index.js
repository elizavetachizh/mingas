import React from 'react';
import ButtonFun from '../../../components/button';
import { DivInform } from './styles';
import TitleForHome from '../../../components/TitleForHome';
import { ArticleForHome } from '../../PressCenter/styles';
import { BlockContainerRequests } from '../../feedback/styles';
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();
  return (
    <BlockContainerRequests>
      <TitleForHome margin={'s'} color={'blue'} infoTitle={`${t('smi:title')}`} />
      <DivInform>
        <ArticleForHome className={'general'}>
          <a
            target={'_blank'}
            href={
              'https://minsknews.by/mozhno-li-samostoyatelno-podklyuchit-gazovuyu-plitu-kommentarij-mingaza/'
            }
          >
            <img
              alt={''}
              src={
                'https://minsknews.by/wp-content/uploads/2022/02/Depositphotos_22540503_S-900x596.jpg'
              }
            />
            <p>Можно ли самостоятельно подключить газовую плиту – комментарий «МИНГАЗа»</p>
          </a>
        </ArticleForHome>
        <ArticleForHome className={'quarter'}>
          <a
            target={'_blank'}
            href={
              'https://minsknews.by/hozyajke-chastnogo-doma-naschitali-bolee-19-tys-rublej-za-gaz-iz-za-poddelnoj-plomby-na-schetchike/'
            }
          >
            <img
              alt={''}
              src={
                'https://minsknews.by/wp-content/uploads/2022/01/Depositphotos_330503392_S-900x601.jpg'
              }
            />

            <p>
              Хозяйке частного дома насчитали более 19 тыс. рублей за газ из-за поддельной пломбы на
              счетчике
            </p>
          </a>
        </ArticleForHome>
        <ArticleForHome className={'quarter'}>
          <a target={'_blank'} href={'https://belchas.1prof.by/news/schetchik-ne-gazuet/'}>
            <img
              src={'https://belchas.1prof.by/file/2022/04/19-1-490x310.jpg'}
              alt={' Счетчик «не газует» - Газета Беларускi Час'}
            />
            <p>
              Счетчик «не газует» - Газета Беларускi Час. <br /> Новости профсоюзов Беларуси
            </p>
          </a>
        </ArticleForHome>
        <ArticleForHome>
          <a
            target={'_blank'}
            href={'http://www.gorka.by/o-realnom-polozhenii-del-na-tbz-sergeevichskoe/?_utl_t=tm'}
          >
            <img
              alt={''}
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
      <ButtonFun
        href={'/press-center/1'}
        infoButton={`${t('smi:Show')}`}
        backgrounder={'blue'}
        style={{ margin: '0 auto 2%' }}
      />
    </BlockContainerRequests>
  );
}
