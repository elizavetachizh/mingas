import React from 'react';
import SMI from '../../pages/PressCenter/SMI';
import Newspaper from '../../pages/PressCenter/newspaper';
import LifeOfMingas from '../../pages/PressCenter/lifeOfMingas';

export const pressCenter = [
  {
    id: 1,
    router: 'smi',
    name: 'Лента новостей',
    description: <SMI />,
  },
  {
    id: 2,
    router: 'newspaper',
    name: 'Корпоративная газета "Столичный газовик"',
    description: <Newspaper />,
  },
  {
    id: 3,
    router: 'life-of-mingas',
    name: 'Жизнь в стиле "Мингаз"',
    description: <LifeOfMingas />,
  },
];
