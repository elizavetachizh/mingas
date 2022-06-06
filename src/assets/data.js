import { useTranslation } from 'react-i18next';

export default function () {
  const { t, i18n } = useTranslation();
}
export const data = [
  { cardImg: 1, cardDesc: 'Оплата за газ' },
  { cardImg: 2, cardDesc: 'Газоиспользующее оборудование' },
  { cardImg: 3, cardDesc: 'Подключение оборудования купленное за пределами РБ' },
  { cardImg: 4, cardDesc: 'Как связаться с нами' },
];
