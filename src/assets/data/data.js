import { Trans } from 'react-i18next';

// const { t } = useTranslation();
export const data = [
  {
    id: 1,
    cardImg: 1,
    cardDesc: <Trans i18nKey="services:Payment" />,
    link: 'services/method-payment',
  },
  {
    id: 2,
    cardImg: 2,
    cardDesc: <Trans i18nKey="services:Maintenance" />,
    link: 'services/3',
  },
  { id: 3, cardImg: 3, cardDesc: <Trans i18nKey="services:Jobs" />, link: 'company/career' },
  {
    id: 4,
    cardImg: 7,
    cardDesc: <Trans i18nKey="services:CylinderExchange" />,
    link: 'services/2',
  },
  { id: 5, cardImg: 5, cardDesc: <Trans i18nKey="services:PriceList" />, link: 'residents/price' },
  {
    id: 6,
    cardImg: 6,
    cardDesc: <Trans i18nKey="services:Frequently" />,
    link: 'feedback/question-answer/1',
  },
];
