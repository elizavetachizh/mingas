import React from 'react';
import SMI from '../../pages/PressCenter/SMI';
import ChangeLifeOfMingas from '../../pages/PressCenter/changeLifeOfMingas';
import Newspaper from '../../pages/PressCenter/newspaper';

export const pressCenter = [
  {
    id: 1,
    name: 'СМИ о нас',
    description: (
      <>
        <SMI />
        {/*<Newspaper />*/}
      </>
    ),
  },
  {
    id: 2,
    name: 'Корпоротивная газета "Столичный газовик"',
    description: (
      <>
        <Newspaper />
      </>
    ),
  },
  {
    id: 3,
    name: 'Жизнь в стиле "Мингаз"',
    description: (
      <>
        <ChangeLifeOfMingas />
      </>
    ),
  },
];
