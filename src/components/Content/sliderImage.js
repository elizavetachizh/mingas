import post from '../../assets/background/phone.webp';
import background from '../../assets/background/Frame.png';
import newYear from '../../assets/background/12512.jpg';
import newPost from '../../assets/background/newPost.webp';
import React from 'react';
import eleven from '../../assets/background/twelve.png';
import ButtonFun from '../button';
export default [
  {
    title: '',
    description: '',
    urls: newYear,
  },
  {
    title: '',
    description: '',
    urls: eleven,
  },
  {
    title: (
      <>
        Уважаемые граждане! <br /> Обращаем внимание на то, что 2 января 2023 г. вступают в силу
        изменения, внесенные в статью 25 Закона Республики Беларусь «Об обращениях граждан и
        юридических лиц». В связи с этим подача электронных обращений будет возможна только с
        помощью государственной единой (интегрированной) республиканской информационной системы
        учета и обработки обращений граждан и юридических лиц - интернет-ресурса {''}
        <a target={'_blank'} href={'https://xn--80abnmycp7evc.xn--90ais./'}>
          обращения.бел.{' '}
        </a>
      </>
    ),
    description: '',
    urls: post,
  },
  {
    title: (
      <>
        {' '}
        УП «МИНГАЗ» информирует! <br />
        По адресу г. Минск, ул. Ботаническая 11 (подъезд 2) с 01.10.2022 приём граждан будет
        осуществляться ежедневно, время приема 8.00-20.00.
      </>
    ),
    description: '',
    urls: background,
  },
  {
    title: 'УП «МИНГАЗ» просит своих абонентов быть бдительными',
    description: (
      <>
        {' '}
        <ButtonFun
          classname={'post'}
          href={'/posts/1'}
          infoButton={'Подробнее'}
          backgrounder={'border'}
        />
      </>
    ),
    urls: newPost,
  },
];
