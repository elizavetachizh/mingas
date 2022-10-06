import { BlockInformOgonek } from '../styles';
import SchemaOfBranches from '../ChemaOfBranches';
import background from '../../../../assets/Ogonek/background.webp';
import { LinksNetwork } from '../../../../components/footer/styles';
import { IoIosCall } from 'react-icons/io';
import React from 'react';
export default function Ogonek() {
  return (
    <SchemaOfBranches
      name={'Оздровительный комплекс Огонек'}
      background={background}
      nameDescription={'О нас'}
      description={
        <>
          {' '}
          <BlockInformOgonek id={'1'}>
            <img alt={'картинка грузится'} src={require('../../../../assets/Ogonek/2.jpeg')} />
            <div>
              <h4> Активный отдых</h4>
              <ul>
                <li>Спортивные турниры, активные игры</li>
                <li>Прогулки на свежем воздухе</li>
                <li>Выездные мероприятия, посещения аквапарка</li>
                <li>Вечерние мероприятия, дискотеки</li>
                <li>Арт-кроссы</li>
                <li>забеги с препятствиями</li>
              </ul>
            </div>
          </BlockInformOgonek>
          <BlockInformOgonek id={'2'}>
            <div>
              <h4>Здоровое питание</h4>
              <p>
                В детском лагере организовано пятиразовое сбалансированное, с учетом физиологических
                потребностей в энергии и пищевых веществах для детей всех возрастных групп и
                рекомендуемых суточных наборов пищевых продуктов для организации питания детей.
              </p>
              <p>
                Для детей, имеющих медицинские противопоказания на определенные виды продуктов,
                разрабатывается индивидуальное меню. Режим питания отдыхающих детей пятиразовый.
                Включает в себя завтрак, обед, полдник, ужин, второй ужин. Вкусная и полезная кухня
                – важный элемент оздоровления!
              </p>
            </div>
            <img alt={'картинка грузится'} src={require('../../../../assets/Ogonek/3.jpeg')} />
          </BlockInformOgonek>
          <BlockInformOgonek id={'3'}>
            <img alt={'картинка грузится'} src={require('../../../../assets/Ogonek/4.JPG')} />
            <div>
              <h4>Занятия по интересам и тренинги</h4>
              <ul>
                <li>Экскурсии в воинские части, учебные центры МЧС</li>
                <li>Веревочный городок</li>
                <li>Танцевальные ринги</li>
                <li>Креативные фотоконкурсы</li>
                <li>Тематические ярмарки</li>
                <li>Другие отрядные мероприятия</li>
              </ul>
            </div>
          </BlockInformOgonek>
          <BlockInformOgonek id={'4'}>
            <div>
              <h4>Проживание</h4>
              <p>
                После реконструкции в 2022 году Оздоровительный комплекс представляет собой,
                трехсекционный двухэтажный корпус, включающий в себя: 22 номера комфорт класса со
                всеми удобствами и 4 номера класса люкс, конференц зал, роскошный обеденный и
                банкетный зал на 90 человек, кино-зал, игровую комнату и комнату отдыха, кафетерий,
                сауну с бассейном, тренажерный зал, постирочную и сушильную комнаты, современный
                пищеблок.
              </p>
              <p>
                На территории комплекса расположены: Стадион, футбольное поле, баскетбольная и
                волейбольная площадки, игровые площадки, теннисные столы, уличные тренажеры,
                танцевальная площадка.
              </p>
              <p>
                Одновременно оздоровительный комплекс может принять 52 человека. Взрослые и дети
                проживают в удобных и комфортабельных номерах по 2 человека. Корпус оборудован
                современной мебелью, инвентарем, мягкой мебелью, спутниковым телевидением и
                бесплатным WI-FI, холодильниками, чайниками. Игровая комната оборудована
                «Аэрохоккеем», настольным футболом, бильярдом, дартсом, настольным теннисом и
                другими настольными играми.
              </p>
            </div>
            <img alt={'картинка грузится'} src={require('../../../../assets/Ogonek/8.JPG')} />
          </BlockInformOgonek>
          <BlockInformOgonek id={'5'}>
            <img alt={'картинка грузится'} src={require('../../../../assets/Ogonek/5.JPG')} />
            <div>
              <h4>Смены</h4>
              <ul>
                <li>1-я смена: 27 мая – 13 июня</li>
                <li>2-я смена: 15 июня – 2 июля</li>
                <li>3-я смена: 5 июля – 22 июля</li>
                <li>4-я смена: 25 июля – 11 августа</li>
                <li>5-я смена: 13 августа – 30 августа</li>
              </ul>
            </div>
          </BlockInformOgonek>
          <BlockInformOgonek id={'6'}>
            <div>
              <h4>Корпоративные мероприятия</h4>
              <ul>
                <li>Праздничные торжества</li>
                <li>Юбилеи</li>
                <li>Тимбилдинг</li>
                <li>Квесты</li>
              </ul>
            </div>
            <img alt={'картинка грузится'} src={require('../../../../assets/Ogonek/9.JPG')} />
          </BlockInformOgonek>
        </>
      }
      photo={''}
      inform={
        <>
          {/*<TitleForHome*/}
          {/*  infoTitle={'Директор: Шаматульский Виталий Леонидович'}*/}
          {/*  color={'blue'}*/}
          {/*  fontSize={'name'}*/}
          {/*  className={'branches'}*/}
          {/*/>*/}
          <LinksNetwork style={{ fontSize: '18px' }}>
            <IoIosCall style={{ color: '#0e43af', width: '35px', height: '35px' }} />
            Контактный номер: <a href={'tel:+375175443171'}>+375175443171</a>
          </LinksNetwork>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a
              href="https://yandex.by/maps/org/ok_ogonek/186976543464/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
            >
              ОК Огонек
            </a>
            <a
              href="https://yandex.by/maps/29630/minsk-district/category/resort/184106404/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
            >
              Санаторий в Минской области
            </a>
            <iframe
              title={'map'}
              src="https://yandex.by/map-widget/v1/-/CCURZDF7-D"
              width="100%"
              height="400"
              allowFullScreen={true}
              style={{ position: 'relative' }}
            />
          </div>
        </>
      }
    />
  );
}
