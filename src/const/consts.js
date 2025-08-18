import ApplicationForOrderingCylinders from '../pages/feedback/Requests/ApplicationForOrderingCylinders';
import React from 'react';
import ApplicationForVerificationOfGasMeters from '../pages/feedback/Requests/ApplicationForVerificationOfGasMeters';
import ApplicationForRepairOfGasUsingEquipment from '../pages/feedback/Requests/ApplicationForRepairOfGas-usingEquipment';
import ApplicationToCallRepresentativeOfGasSupplyOrganization from '../pages/feedback/Requests/ApplicationToCallRepresentativeOfGasSupplyOrganization';
import ProvidingGasMeterReadings from '../pages/feedback/Requests/ProvidingGasMeterReadings';
import ApplicationForTheIssuanceOfTechnicalSpecifications from '../pages/feedback/Requests/ApplicationForTheIssuanceofTechnicalSpecifications';
import Welding from '../pages/feedback/Requests/Welding';
import { linksForBusiness } from '../assets/data/linksForBusines';
import { links } from '../assets/data/linksToResidentsOfTheCapitalRegion';

export const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  phone: '',
  address: '',
  text: '',
  isAgree: false,
  message: '',
  male: false,
  index: '',
  organization: '',
  file: '',
  document: '',
  information: [],
};

export const INITIAL_REQUEST_STATE = {
  name: '',
  email: '',
  phone: '',
  address: '',
  date: '',
  time: '',
  work: '',
  text: '',
  isAgree: false,
  message: '',
  number: '',
  reading: '',
  marka: '',
  file: '',
  information: [],
};

export const INITIAL_REQUEST_STATE_ECOBOX = {
  name: '',
  email: '',
  phone: '',
  type: '',
};

export const INITIAL_REQUEST_STATE_WELDING = {
  name: '',
  email: '',
  personal_account: '',
  phone: '',
  address: '',
  location: '',
  gas_equipment: '',
  isAgree: false,
  flammable_materials: 'Да',
  feedback_method: '',
  file: '',
  information: [],
};

export const OPTIONS_EQUIPMENT = [
  {
    value: '',
    label: 'Выберите тип оборудования',
  },
  {
    value: 'Плита',
    label: 'Плита',
  },
  {
    value: 'Водонагреватель проточный газовый',
    label: 'Водонагреватель проточный газовый',
  },
  {
    value: 'Котёл отопительный',
    label: 'Котёл отопительный',
  },
];

export const OPTIONS_ECOBOX_TYPE = [
  {
    value: '',
    label: 'Выберите тип объекта',
  },
  {
    value: 'Дом',
    label: 'Дом',
  },
  {
    value: 'Баня',
    label: 'Баня',
  },
  {
    value: 'Кафе',
    label: 'Кафе',
  },
  {
    value: 'Магазин',
    label: 'Магазин',
  },
  {
    value: 'Другое',
    label: 'Другое',
  },
];

export const gasEquipmentOptions = [
  {
    value: '',
    label: 'Выберите планируемое газовое оборудование',
  },
  {
    value: 'Плита напольная',
    label: 'Плита напольная',
  },
  {
    value: 'Варочная панель',
    label: 'Варочная панель',
  },
  {
    value: 'Счётчик',
    label: 'Счётчик',
  },
  {
    value: 'Колонка',
    label: 'Колонка',
  },
  {
    value: 'Котёл',
    label: 'Котёл',
  },
  {
    value: 'Духовой шкаф',
    label: 'Духовой шкаф',
  },
];

export const feedbackMethod = [
  { value: '', label: 'Выберите способ обратной связи' },
  {
    value: 'Обратный телефонный звонок по указанному номеру телефона',
    label: 'Обратный телефонный звонок по указанному номеру телефона',
  },
  { value: 'Письмо на электронную почту', label: 'Письмо на электронную почту' },
];

export default function linksForMenu() {
  return [
    {
      name: 'Мингаз сегодня',
      link: '/company/history',
      arrayOfLinks: [
        { name: 'История предприятия', link: '/company/history' },
        { name: 'Руководство предприятия', link: '/company/management' },
        { name: 'Подразделения УП "МИНГАЗ"', link: '/company/all-departments' },
        { name: 'Работа в УП "Мингаз"', link: '/company/career' },
        { name: 'Вышестоящие организации', link: '/company/parent-organizations' },
        {
          name: 'Филиалы УП "Мингаз"',
          link: '/company/branches',
          arrayOfSubLinks: [
            {
              name: 'Филиал оздоровительный комплекс "Огонёк"',
              link: '/company/branches/ogonek',
            },
            {
              name: 'Филиал "Бубны"',
              link: '/company/branches/Bubni',
            },
            {
              name: ' Филиал "Торфобрикетный завод "Сергеевическое"',
              link: '/company/branches/TBZ',
            },
          ],
        },
        { name: 'Противодействие коррупции', link: '/company/corruption' },
        { name: 'Сертификаты, лицензии, свидетельства', link: '/company/documentation' },
        { name: 'Благодарности и награды', link: '/company/gratitude' },
        { name: 'Система менеджмента УП "МИНГАЗ" ', link: '/company/management-system' },
        {
          name: 'Реестр экологической информации',
          link: '/company/environmental-information-register',
        },
      ],
    },
    {
      name: 'Жителям столичного региона',
      link: '/residents-of-the-capital-region',
      arrayOfLinks: links,
    },
    {
      name: 'Для бизнеса',
      link: '/for-business',
      arrayOfLinks: linksForBusiness,
    },
    { name: 'Диагностические услуги', link: '/laboratory' },
    {
      name: 'Пресс-центр',
      link: '/press-center/1',
      arrayOfLinks: [
        { name: 'Лента новостей', link: '/press-center/1' },
        { name: 'Мингаз-ТВ', link: '/press-center/2' },
        { name: 'Корпоративная газета "Столичный газовик"', link: '/press-center/3' },
        { name: 'Жизнь в стиле "Мингаз"', link: '/press-center/4' },
        { name: 'Единый день информирования', link: '/press-center/5' },
        { name: 'Полезные ресурсы', link: '/press-center/6' },
      ],
    },
    {
      name: '"Огонек"',
      link: '/company/branches/ogonek',
    },
    {
      name: 'Контакты',
      link: '/contacts/phone-services',
      arrayOfLinks: [
        { name: 'График личного приёма граждан', link: '/contacts/work-schedule' },
        { name: 'Телефоны служб по работе с клиентами', link: '/contacts/phone-services' },
        { name: 'Реквизиты предприятия', link: '/contacts/requisites' },
      ],
    },
    {
      name: 'Профсоюз',
      link: '/company/union',
    },
  ];
}

export const APPLICATION_BUTTONS = [
  { type: <ApplicationForOrderingCylinders />, name: 'Заказать баллон СУГ 50 литров' },
  { type: <ApplicationForVerificationOfGasMeters />, name: 'Снятие счётчика в поверку' },
  { type: <ApplicationForRepairOfGasUsingEquipment />, name: 'Ремонт газового оборудования' },
  {
    type: <ApplicationToCallRepresentativeOfGasSupplyOrganization />,
    name: 'Вызов представителя газоснабжающей организации',
  },
  { type: <ProvidingGasMeterReadings />, name: 'Предоставление показаний счётчика газа' },
  {
    type: <ApplicationForTheIssuanceOfTechnicalSpecifications />,
    name: 'Техническое обслуживание',
  },
  {
    type: <Welding />,
    name: 'Выполнение работ с применением сварки',
  },
];
