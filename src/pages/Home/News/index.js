import React from 'react';
import ButtonFun from '../../../components/button';
import { DivInform } from './styles';
import TitleForHome from '../../../components/TitleForHome';
import {ArticleForHome} from '../../PressCenter/styles';
import { BlockContainerRequests } from '../../feedback/styles';

export default function News() {
  return (
    <BlockContainerRequests>
      <TitleForHome color={'blue'} infoTitle={'СМИ о нас'} />
      <DivInform>
        <ArticleForHome className={'general'}>
          <a
              rel="noopener"
              target={'_blank'}
              href={
                'https://minsknews.by/v-srednem-za-sutki-v-mingaz-postupaet-okolo-80-izveshhenij-o-nepoladkah-kak-rabotaet-avarijka/'
              }
          >
            <img
                alt={''}
                src={'https://minsknews.by/wp-content/uploads/2022/10/MK4_0282-kopiya.jpg'}
            />
            <p>
              В среднем за сутки в «МИНГАЗ» поступает около 80 извещений о неполадках. Как
              работает «аварийка»
            </p>
            {/*<p>{''}</p>*/}
          </a>
        </ArticleForHome>
        <ArticleForHome className={'general'}>
          <a
              rel="noopener"
              target={'_blank'}
              href={
                'https://minsknews.by/kak-podvesti-gaz-v-chastnyj-dom-razyasnyaet-speczialist/'
              }
          >
            <img
                alt={''}
                src={'https://minsknews.by/wp-content/uploads/2022/03/Pavel-Rusak-52-of-53.jpg'}
            />
            <p>
              Как подвести газ в частный дом, разъясняет специалист <br /> {''}{' '}
              <span style={{ color: 'transparent' }}>1</span>
            </p>
            {/*<p>{''}</p>*/}
          </a>
        </ArticleForHome>
        <ArticleForHome className={'general'}>
          <a
              rel="noopener"
              target={'_blank'}
              href={
                'https://minsknews.by/videonablyudenie-obespechivaet-bezopasnost-gorozhan-v-kuharev-vstretilsya-s-trudovym-kollektivom-mingaza/'
              }
          >
            <img
                alt={''}
                src={'https://minsknews.by/wp-content/uploads/2022/10/1DX_0068-kopiya.jpg'}
            />
            <p>
              «Видеонаблюдение обеспечивает безопасность горожан». В. Кухарев встретился с
              трудовым коллективом «МИНГАЗа»
            </p>
          </a>
        </ArticleForHome>
        <ArticleForHome>
          <a
            rel="noopener"
            target={'_blank'}
            href={'http://www.gorka.by/o-realnom-polozhenii-del-na-tbz-sergeevichskoe/?_utl_t=tm'}
          >
            <img
              alt={'новости'}
              src={'https://minsknews.by/wp-content/uploads/2022/04/Pavel-Rusak-8-of-31-kopiya.jpg'}
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
        infoButton={'Показать ещё'}
        backgrounder={'blue'}
        style={{ margin: '0 auto 1%' }}
      />
    </BlockContainerRequests>
  );
}
