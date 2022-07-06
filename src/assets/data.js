import { useTranslation } from 'react-i18next';

export default function () {
  const { t, i18n } = useTranslation();
}
export const data = [
  { cardImg: 1, cardDesc: 'Оплата за газ', link: 'services/method-payment' },
  { cardImg: 2, cardDesc: 'Техническое обслуживание', link: 'services/Техническое%20обслуживание,%20ремонт,%20комплекс%20работ%20по%20определению%20технического%20состояния%20газоиспользующего%20оборудования,%20установка%20и%20замена%20приборов%20учёта%20расхода%20газа' },
  { cardImg: 3, cardDesc: 'Вакансии', link: 'company/career' },
  { cardImg: 7, cardDesc: 'Перечень обменных пунктов' },
  { cardImg: 5, cardDesc: 'Прейскурант', link: 'residents/price' },
  { cardImg: 6, cardDesc: 'Как связаться с нами', link: 'contacts/phone-services' },
];
