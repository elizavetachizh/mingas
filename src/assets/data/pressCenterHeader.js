import { photo } from './liveInStyleOfMingas';
import { Article, ContainerArticles } from '../../pages/PressCenter/styles';
import gradient from '../../assets/background/gradient.png';
import {
  BtnIsOpen,
  Div,
  General
} from "../../components/administrativeServices/InformaationAdministrativeService/styles";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {DescriptionService} from "../../pages/services/DopFunction/styles";
import React from "react";
import SMI from "../../pages/PressCenter/SMI";

export const pressCenter = [
  {
    id: 1,
    name: 'СМИ о нас',
    description: (
     <SMI/>
    ),
  },
  // {
  //   id: 2,
  //   name: 'Новости',
  //   description: <div></div>,
  // },
  {
    id: 3,
    name: 'Жизнь в стиле "Мингаз"',
    description: (
      <div style={{ margin: '4% auto' }}>
        {photo.map((el) => (
          <img style={{ width: '50%' }} src={require(`../lifeinstyleOFMingas/${el.img}.jpg`)} />
        ))}
      </div>
    ),
  },
];
