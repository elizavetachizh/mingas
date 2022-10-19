import prilozhenie_1 from '../wordFile/Prilozhenie-1.docx';
import prilozhenia_B from '../wordFile/Prilozhenie-B.docx';
import form from '../wordFile/forma-zaprosa-TV.docx';
import prilozhenie from '../wordFile/Prilozhenie-A-1-2-2.docx';
import pismo from '../wordFile/pismo.doc';
import perechen_doc from '../wordFile/Perechen-dokumentov.doc';
import ispolnitelnaya_documentov from '../wordFile/Ispolnitelnaya-dokumentatsiya.doc';
import akt_vvoda from '../pdf/akt_vvoda.pdf';
import passport from '../wordFile/Passport.docx';
import haracteristica from '../wordFile/HARAKTERISTIKA-OBEKTA.doc';
import tseni_Gas from '../wordFile/price_gas.doc';
import teh_zadanie from '../wordFile/teh_zadanie.doc';
import price from '../pdf/price/one.pdf';
import price_2 from '../pdf/price/two.pdf';
import price_7 from '../pdf/price/three.pdf';
import price_9 from '../pdf/price/four.pdf';
import price_11 from '../pdf/price/seven.pdf';
export const searchDocuments = [
  {
    id: 1,
    name: 'Перечень приборов учета газа, соответствующих требованиям Правил учета природного газа, для потребителей с расходом газа до 10 м3/ч.',
    path: `${prilozhenie_1}`,
  },
  {
    id: 2,
    name: 'Перечень документов, необходимых для перезаключения договора газоснабжения с УП «МИНГАЗ»',
    path: `${prilozhenia_B}`,
  },
  {
    id: 3,
    name: 'Форма запроса в УП «МИНГАЗ» на определение ТЕХНИЧЕСКОЙ ВОЗМОЖНОСТИ присоединения к газораспределительной системе',
    path: `${form}`,
  },
  {
    id: 4,
    name: 'Письмо о заключении договора газоснабжения',
    path: `${prilozhenie}`,
  },
  {
    id: 5,
    name: 'Письмо о заключении договора на техническое обслуживание вводных и внутридомовых газопроводов жилых домов, общежитий (для многоквартирных жилых домов)',
    path: `${pismo}`,
  },
  {
    id: 6,
    name: 'Перечень документов, необходимых для заключения договора с УП «МИНГАЗ» на техническое обслуживание вводных и внутридомовых газопроводов жилых домов, общежитий (для многоквартирных жилых домов)',
    path: `${perechen_doc}`,
  },
  {
    id: 7,
    name: 'Исполнительная документация должна содержать',
    path: `${ispolnitelnaya_documentov}`,
  },
  {
    id: 8,
    name: 'Акт ввода в эксплутацию узла учёта природного газа',
    path: `${akt_vvoda}`,
  },
  {
    id: 9,
    name: 'Паспорт узла учёта природного газа',
    path: `${passport}`,
  },
  {
    id: 10,
    name: 'Характеристика объекта',
    path: `${haracteristica}`,
  },
  {
    id: 11,
    name: 'Цены на природный газ',
    path: `${tseni_Gas}`,
  },
  {
    id: 12,
    name: 'Техническое задание на  замену прибора учета газа',
    path: `${teh_zadanie}`,
  },
  {
    id: 13,
    name: 'Прейскурант №1-ИМ: Цены на газосипользующее оборудование, материалы, комплектующие',
    path: `${price}`,
  },
  {
    id: 14,
    name: 'Прейскурант №1: Тарифы на работы(услуги) оказываемые населению',
    path: `${price_2}`,
  },
  {
    id: 15,
    name: 'Прейскурант №7: Тарифы на работы по ведению технического надзора за строительством систем газоснабжения и приемке объектов в эксплуатацию',
    path: `${price_7}`,
  },
  {
    id: 16,
    name: 'Прейскурант №9: Тарифы на работы по техническому обслуживанию газопроводов и газоиспользующего оборудования',
    path: `${price_9}`,
  },
  {
    id: 17,
    name: 'Прейскурант №11: на работы по установке приборов индивидуального учета расхода газа в существующем жилом фонде (газифицированные жилые дома)',
    path: `${price_11}`,
  },
];
