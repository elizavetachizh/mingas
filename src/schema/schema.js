const graphql = require('graphql');
// const data = require('../assets/data_management')
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID } = graphql;

const data = [
  {
    id: '1',
    cardImg: 1,
    fullName: 'Вирочкин Андрей Анатольевич',
    position: 'Первый заместитель генерального директора -главный инженер\n' + 'УП «МИНГАЗ»',
    linkId: 1,
  },
  {
    id: '2',
    cardImg: 1,
    fullName: 'Сазанчук Александр Леонидович',
    position: 'Заместитель главного инженера УП «МИНГАЗ»',
  },
  {
    id: '3',
    cardImg: 1,
    fullName: 'Кассиров Денис Александрович',
    position: 'Заместитель генерального директора',
  },
  {
    id: '4',
    cardImg: 1,
    fullName: 'Денисик Андрей Викторович',
    position: 'Заместитель генерального директора',
  },
  {
    id: '5',
    cardImg: 1,
    fullName: 'Ткачук Сергей Анатольевич',
    position: 'Заместитель генерального директора',
  },
  {
    id: '6',
    cardImg: 1,
    fullName: 'Шебеко Андрей Александрович',
    position: 'Заместитель генерального директора',
  },
  {
    id: '7',
    cardImg: 1,
    fullName: 'Манкевич Екатерина Васильевна',
    position: 'Главный бухгалтер',
  },
];

const linksdata = [
  {
    id: '1',
    name: 'Производственно-техническое управление (ПТУ)',
    idMan: 1,
  },
  {
    id: 2,
    name: 'Техническая инспекция (ТИ)',
    idMan: 1,
  },
  {
    id: 3,
    name: 'Отдел режимов газоснабжения и учета газа (ОРГиУГ)',
    idMan: 1,
  },
  {
    id: 4,
    name: 'Транспортная служба (ТС)',
    idMan: 1,
  },
  {
    id: 5,
    name: 'Служба эксплуатации объектов газораспределительной системы (СЭОГС)',
    idMan: 1,
  },
  {
    id: 6,
    name: 'Служба реализации сжиженного газа и нефтепродуктов (СРСГиНП)',
    idMan: 1,
  },
  {
    id: 7,
    name: 'Ремонтно-механический цех (РМЦ)',
    idMan: 1,
  },
  {
    id: 8,
    name: 'Служба неразрушающего контроля измерений и технической диагностики (СНКИиТД)',
    idMan: 1,
  },
  {
    id: 9,
    name: 'Служба аварийно-восстановительных работ (САВР)',
    idMan: 1,
  },
  {
    id: 10,
    name: 'Служба эксплуатации внутридомовых объектов газопотребления (СЭВОГ)',
    idMan: 2,
  },
  {
    id: 11,
    name: 'Служба главного энергетика, метрологического обеспечения и охраны окружающей среды (СГЭМОиООС)',
    idMan: 2,
  },
  {
    id: 12,
    name: 'Отдел телеметрии и связи (ОТиС)',
    idMan: 2,
  },
  {
    id: 13,
    name: 'Служба учёта потреблённого газа населением (СУПГН)',
    idMan: 2,
  },
  {
    id: 14,
    name: 'Финансовый отдел (ФО)',
    idMan: 3,
  },
  {
    id: 15,
    name: 'Планово-экономический отдел (ПЭО)',
    idMan: 3,
  },
  {
    id: 16,
    name: 'Отдел автоматизированных систем управления (ОАСУ)',
    idMan: 3,
  },
  {
    id: 17,
    name: 'Филиал “Оздоровительный комплекс “Огонек”',
    idMan: 3,
  },
  {
    id: 18,
    name: 'Управление капитального строительства (УКС)',
    idMan: 4,
  },
  {
    id: 19,
    name: 'Служба строительно-ремонтных работ (ССРР)',
    idMan: 4,
  },
  {
    id: 20,
    name: 'Служба заказчика',
    idMan: 4,
  },
  {
    id: 21,
    name: 'Отдел развития промышленного и сельскохозяйственного производства (ОРПСП)',
    idMan: 5,
  },
  {
    id: 22,
    name: 'Филиал “ТБЗ “Сергеевичское”',
    idMan: 5,
  },
  {
    id: 23,
    name: 'Филиал по производству сельскохозяйственной продукции “Бубны”',
    idMan: 5,
  },
  {
    id: 24,
    name: 'Отдел материально-технического обеспечения, маркетинга и внешних связей (ОМТОМиВС)',
    idMan: 6,
  },
  {
    id: 25,
    name: 'Ведомственная охрана (ВО)',
    idMan: 6,
  },
  {
    id: 26,
    name: 'Служба обеспечения деятельности предприятия и эксплуатации зданий (СОДПиЭЗ)',
    idMan: 6,
  },
  {
    id: 27,
    name: 'Инструктор-методист по физкультурно-оздоровительной,спортивно-массовой работе',
    idMan: 6,
  },
  {
    id: 28,
    name: 'Филиал кафедры УО “БНТУ” “Теплогазоснабжение и вентиляция”',
    idMan: 6,
  },
  {
    id: 29,
    name: 'Культуролог',
    idMan: 6,
  },
  {
    id: 30,
    name: 'Здравпункт',
    idMan: 6,
  },
  {
    id: 31,
    name: 'Центральная бухгалтерия (ЦБ)',
    idMan: 7,
  },
];
const ManagementType = new GraphQLObjectType({
  name: 'Management',
  fields: () => ({
    id: { type: GraphQLID },
    fullName: { type: GraphQLString },
    cardImg: { type: GraphQLString },
    position: { type: GraphQLString },
  }),
});

const LinksType = new GraphQLObjectType({
  name: 'Links',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    idMan: {
      type: ManagementType,
      resolve(parent, args) {
        return data.find((management) => management.id == parent.id);
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    management: {
      type: ManagementType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return data.find((management) => management.id == args.id);
      },
    },
    link: {
      type: LinksType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return linksdata.find((link) => link.id == args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
