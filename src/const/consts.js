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
};

export const OPTIONS_EQUIPMENT = [
  {
    value: '',
    label: 'Выберете тип оборудования',
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

export default function linksForMenu() {
  return [
    {
      name: 'Мингаз сегодня',
      link: '/company/history',
      arrayOfLinks: [
        { name: 'История предприятия', link: '/company/history' },
        { name: 'Руководство предприятия', link: '/company/management' },
        { name: 'Подразделения УП "МИНГАЗ"', link: '/company/management/all-departments' },
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
      ],
    },
    {
      name: 'Жителям столичного региона',
      link: '/residents-of-the-capital-region',
      arrayOfLinks: [
        { name: 'Услуги', link: '/services' },
        { name: 'Административные процедуры', link: '/services/administrative-services' },
        { name: 'Онлайн заявки', link: '/feedback/online-application' },
        { name: 'Регламентирующие документы', link: '/regulatory-documents/Законы' },
        {
          name: 'Часто задаваемые вопросы',
          link: '/feedback/question-answer/63930a954fe167e2981cc2e1',
        },
        { name: 'Обращение граждан', link: '/feedback/electronic-appeal' },
        {
          name: 'Оставить отзыв',
          link: '/feedback/leave-feedback',
        },
        { name: 'Важно знать, безопасность', link: '/posts' },
      ],
    },
    {
      name: 'Для бизнеса',
      link: '/for-business',
      arrayOfLinks: [
        { name: 'Услуги', link: '/services-legal-entities' },
        { name: 'Обращение юридических лиц', link: '/feedback/electronic-appeal' },
        { name: 'Тендеры', link: '/tenders' },
        {
          name: 'Часто задаваемые вопросы',
          link: '/feedback/question-answer/63930a954fe167e2981cc2e1',
        },
        {
          name: 'Административные процедуры',
          link: '/services-legal-entities/administrative-services-legal/',
        },
        { name: 'Регламентирующие документы', link: '/regulatory-documents/Законы' },
      ],
    },
    {
      name: 'Пресс-центр',
      link: '/press-center/1',
      arrayOfLinks: [
        { name: 'Лента новостей', link: '/press-center/1' },
        { name: 'Корпоротивная газета "Столичный газовик"', link: '/press-center/2' },
        { name: 'Жизнь в стиле "Мингаз"', link: '/press-center/3' },
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
  { type: 'ApplicationForOrderingCylinders', name: 'Заказать баллон СУГ 50 литров' },
  { type: 'ApplicationForVerificationOfGasMeters', name: 'Снятие счётчика в проверку' },
  { type: 'ApplicationForRepairOfGasUsingEquipment', name: 'Ремонт газового оборудования' },
  {
    type: 'ApplicationToCallRepresentativeOfGasSupplyOrganization',
    name: 'Вызов представителя газоснабжающей организации',
  },
  { type: 'ProvidingGasMeterReadings', name: 'Предоставление показаний счётчика газа' },
  { type: 'ApplicationForTheIssuanceOfTechnicalSpecifications', name: 'Техническое обслуживание' },
];

export const linksHeaderCompany = [
  { name: 'История предприятия', link: 'history' },
  { name: 'Руководство', link: 'management' },
  { name: 'Подразделения', link: 'management/all-departments' },
  { name: 'Работа в УП "МИНГАЗ"', link: 'career' },
  { name: 'Вышестоящие организации', link: 'parent-organizations' },
  { name: 'Филиалы УП "Мингаз"', link: 'branches' },
  { name: 'Противодействие коррупции', link: 'corruption' },
  { name: 'Сертификаты, лицензии, свидетельства', link: 'documentation' },
  { name: 'Благодарности и награды', link: 'gratitude' },
];
