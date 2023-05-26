import prilozhenie_1 from '../wordFile/Prilozhenie-1.docx';
import prilozhenia_B from '../wordFile/Prilozhenie-B.docx';
import form from '../wordFile/forma-zaprosa-TV.docx';
import prilozhenie from '../wordFile/Prilozhenie-A-1-2-2.docx';
import pismo from '../wordFile/pismo.doc';
import perechen_doc from '../wordFile/Perechen-dokumentov.doc';
import ispolnitelnaya_documentov from '../wordFile/Ispolnitelnaya-dokumentatsiya.doc';
import teh_zadanie from '../wordFile/teh_zadanie.doc';
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
    path: 'back.mingas.by/public/documents/backend-mingas/public/documents/akt_vvoda.pdf',
  },
  {
    id: 9,
    name: 'Паспорт узла учёта природного газа',
    path: 'mingas.by/static/media/Passport.61548aa9af1bc392c08e.docx',
  },
  {
    id: 10,
    name: 'Характеристика объекта',
    path: 'mingas.by/static/media/HARAKTERISTIKA-OBEKTA.7b4c9e2dfd648ad1ff49.doc',
  },
  {
    id: 11,
    name: 'Цены на природный газ',
    path: 'https://pravo.by/document/?guid=12551&p0=W22237575&p1=1',
  },
  {
    id: 12,
    name: 'Техническое задание на  замену прибора учета газа',
    path: `${teh_zadanie}`,
  },
];
