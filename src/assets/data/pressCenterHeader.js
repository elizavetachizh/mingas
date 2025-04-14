import React from 'react';
import SMI from '../../pages/PressCenter/SMI';
import Newspaper from '../../pages/PressCenter/newspaper';
import LifeOfMingas from '../../pages/PressCenter/lifeOfMingas';
import EDI from '../../pages/PressCenter/EDI';
import TV from '../../pages/PressCenter/SMI/TV';
import History from '../../pages/company/history';
import Management from '../../pages/company/managment';
import AllSubdivisions from '../../pages/company/managment/Subdivisions/allSubdivisions';
import Career from '../../pages/company/career';
import ParentOrganizations from '../../pages/company/parentOrganizations';
import Branches from '../../pages/company/Branches';
import Corruption from '../../components/Сorruption';
import Documentation from '../../pages/company/documentation';
import Gratitude from '../../pages/company/Gratitude';
import ManagmentSystem from '../../pages/company/ManagmentSystem';
import EnvironmentalInformationRegister from '../../pages/company/environmentalInformationRegister';
import UsefulResources from '../../pages/PressCenter/usefulResources';

export const pressCenter = [
  {
    id: 1,
    router: 'smi',
    name: 'Лента новостей',
    description: <SMI />,
  },
  {
    id: 2,
    router: 'mingas-tv',
    name: 'Мингаз-ТВ',
    description: <TV />,
  },
  {
    id: 3,
    router: 'newspaper',
    name: 'Корпоративная газета "Столичный газовик"',
    description: <Newspaper />,
  },
  {
    id: 4,
    router: 'life-of-mingas',
    name: 'Жизнь в стиле "Мингаз"',
    description: <LifeOfMingas />,
  },
  {
    id: 5,
    router: 'edi',
    name: 'Единый день информирования',
    description: <EDI />,
  },
  {
    id: 6,
    router: 'useful-resources',
    name: 'Полезные ресурсы',
    description: <UsefulResources />,
  },
];

export const company = [
  {
    id: 1,
    router: 'history',
    name: 'История предприятия',
    description: <History />,
  },
  {
    id: 2,
    router: 'management',
    name: 'Руководство',
    description: <Management />,
  },
  {
    id: 3,
    router: 'all-departments',
    name: 'Подразделения',
    description: <AllSubdivisions />,
  },
  {
    id: 4,
    router: 'career',
    name: 'Работа в УП "МИНГАЗ"',
    description: <Career />,
  },
  {
    id: 5,
    router: 'parent-organizations',
    name: 'Вышестоящие организации',
    description: <ParentOrganizations />,
  },
  {
    id: 6,
    router: 'branches',
    name: 'Филиалы УП "Мингаз"',
    description: <Branches />,
  },
  {
    id: 7,
    router: 'corruption',
    name: 'Противодействие коррупции',
    description: <Corruption />,
  },
  {
    id: 8,
    router: 'documentation',
    name: 'Сертификаты, лицензии, свидетельства',
    description: <Documentation />,
  },
  {
    id: 9,
    router: 'gratitude',
    name: 'Благодарности и награды',
    description: <Gratitude />,
  },
  {
    id: 10,
    router: 'management-system',
    name: 'Система менеджмента УП "МИНГАЗ"',
    description: <ManagmentSystem />,
  },
  {
    id: 11,
    router: 'environmental-information-register',
    name: 'Реестр экологической информации',
    description: <EnvironmentalInformationRegister />,
  },
];
