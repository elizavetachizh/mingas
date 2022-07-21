import React, { useEffect } from 'react';
import { Container } from '../styles';
import Header from '../../../components/header';
import HeaderCompany from '../header_company';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import Footer from '../../../components/footer';
import Aos from 'aos';
import history_2 from '../../../assets/history/7.png';
import history_3 from '../../../assets/history/4.png';
import history_4 from '../../../assets/history/5.png';
import history_6 from '../../../assets/history/6.png';
import history_7 from '../../../assets/history/8.png';
import history_9 from '../../../assets/history/9.png';
import history_10 from '../../../assets/history/11.png';
import { DivParagraphHistory, PWithImg, ImgBackground } from './styles';
import TitleForHome from '../../../components/TitleForHome';

export default function History() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany />
      <AdditionalDiv>
        <TitleForHome
          color={'blue'}
          infoTitle={'Из истории газификации г. Минска и Минского района'}
        />
        <DivParagraphHistory>
          <div data-aos={'fade-up'}>
            <PWithImg>
              <img src={history_2} alt={''} />
              <div data-aos={'fade-up'}>
                <p>
                  При решении задачи по преимущественному развитию наиболее экономически выгодных
                  видов топлива важнейшая роль принадлежала газовой промышленности. Использование
                  газа в качестве бытового топлива освободило десятки миллионов граждан от
                  непроизводительного труда в быту и дало большие материальные выгоды. 30 мая 1957
                  года было подписано решение Мингорисполкома об организации управления газификации
                  г.Минска «Мингаз», управляющим которого назначен Манцветов Михаил Всеволодович.
                </p>
                <p>
                  На управление была возложена организация мероприятий по строительству и
                  эксплуатации газовых сетей города с большой сетью коммунальных предприятий,
                  развитой промышленностью и полумиллионным населением. В городе начали
                  устанавливать первые баллоны со сжиженным газом для приготовления пищи.
                  Газификация природным газом г.Минска начинается с 1958 года, т. е. с начала
                  строительства газопровода Дашава-Минск-Вильнюс-Рига. Более двух лет минчане ждали
                  природного газа, и наконец, 30 октября 1960 года на Центральной площади был зажжен
                  факел голубого топлива, пришедшего из Дашавы.
                </p>
              </div>
            </PWithImg>
          </div>
          <div data-aos={'fade-up'}>
            <PWithImg>
              <div data-aos={'fade-up'}>
                В феврале 1960 г. в соответствии с Постановлением Совета Министров БССР был
                организован Минский трест по газификации природным газом «Мингаз». На организацию
                было возложено выполнение следующих основных задач:
                <ul data-aos={'fade-up'}>
                  <li>
                    обеспечение профилактического обслуживания, текущего ремонта и эксплуатации
                    газопроводов, газорегуляторных станций, внутридомового газового оборудования
                    жилых домов;
                  </li>
                  <li>производство врезок и присоединение к эксплуатируемой газовой сети;</li>
                  <li>ликвидация аварий на действующих газопроводах;</li>
                  <li>
                    осуществление функций генерального заказчика при строительстве газовых сетей и
                    т. п.
                  </li>
                </ul>
                <div data-aos={'fade-up'}>
                  Развитие газоснабжения г. Минска решалось последовательно в три этапа от трех
                  газораспределительных станций (ГРС) и обеспечивалось многократно закольцованной
                  системой газопроводов — 180 газораспределительными пунктами. У истоков газификации
                  стояли глубоко преданные своему делу специалисты: первый управляющий «Мингаз» —
                  Манцветов Михаил Всеволодович, главный инженер — Шитохин Игорь Николаевич,
                  начальник ПТО — Шапиро Анна Марковна, инженеры супруги Адамович Е. И. и Адамович
                  И. М., Вешняков Н. Н. и Вешнякова Т. С., Осипкова А. Н., Сычева Л. Л., а также
                  первые выпускники отделения «Городское газовое хозяйство» Минского
                  энерготехникума: Товпенец Э. Ф., Попов М. В., Мазурова Р. Ф., Грекович М. И.,
                  Савостеенко Г. Н., Шиманович И. И., Вещевалов Н. И., Рабеко И. И., Швархалев С. И.
                  и выпускники ПТУ Лысенко И. В., Клюйков В. Д., Юрьев А. И., Штанюк А. А., Шутак К.
                  Ю., Каленик Г. К., Синявский В. В., Криушенко Н. Н. и др.
                </div>
              </div>
              <img alt={''} data-aos={'fade-up'} src={history_4} />
            </PWithImg>
          </div>
          <div data-aos={'fade-up'}>
            <PWithImg>
              <img alt={''} data-aos={'fade-up'} src={history_3} />
              <div data-aos={'fade-up'}>
                <p>
                  Первыми получили природный газ для цели пищеприготовления жители жилых домов №109,
                  111, 113 по Могилевскому шоссе(Партизанский проспект).Пуск газа был осуществлен 14
                  ноября 1960 года.В декабре 1960 года были подключены кузнечный и литейный цеха
                  МТЗ, Минская теплоэлектроцентраль ¹3.
                </p>
                <p>
                  Газификация г.Минска шла быстрыми темпами. Уже в 1971 г. природный газ на
                  технологические нужды потребляли 173 промышленных предприятия, 137 отопительных
                  котельных, 20 предприятий общественного питания, 33 лечебных учреждения, 20
                  учебных заведений, 57 детских учреждений, 16 бань и прачечных, 40 прочих
                  коммунально-бытовых потребителей и 185788 газифицированных квартир. Протяженность
                  газопроводов, принятых и введенных в эксплуатацию, на конец 1971года составляла
                  913,2 км, в том числе — высокого давления 16,6 км, среднего давления — 240,5
                  км,низкого давления — 656,1 км, ГРП — 183 шт, ШРП — 8 шт. С 1 сентября 1975 г.
                  Минский трест по газификации реорганизован в Минское производственное объединение
                  газового хозяйства «Мингаз» с подчинением Государственному комитету Белорусской
                  ССР по газификации, в это же время были приняты на обслуживание потребители
                  Минского района.
                </p>
                <p>
                  С 18 августа 2000 года Минское производственное объединение газового хозяйства
                  «Мингаз» реорганизовано в Производственное Республиканское унитарное предприятие
                  «Мингаз». На 01.04.2013 в эксплуатации предприятия «Мингаз» находится: 4411,337 км
                  газопроводов природного газа, в том числе высокого давления — 778,268 км; среднего
                  давления — 1191,626 км; низкого давления —2441,443 км. ГРП — 440 шт; ШРП — 238 шт.
                  За пройденные десятилетия наше предприятие обеспечило практически полную
                  газификацию г. Минска и Минского района.
                </p>
              </div>
            </PWithImg>
          </div>
        </DivParagraphHistory>

        {/*<TitleFun color={'blue'} infoTitle={'История предприятия'} data-aos={'fade-up'}></TitleFun>*/}
        <DivParagraphHistory>
          <PWithImg>
            <div data-aos={'fade-up'}>
              <p>
                16 апреля 1957 года Постановлением Совета Министров БССР и ЦК КПБ за №206 «О
                проектных и подготовительных работах по газификации г.Минска» и решением Минского
                городского Совета депутатов трудящихся №493 от 30 мая 1957 года при Мингорисполкоме
                было создано Управление по газификации г.Минска «МИНГАЗ».
              </p>
              <p>
                На Управление была возложена организация мероприятий по строительству и эксплуатации
                газовых сетей города с большой сетью коммунальных предприятий, развитой
                промышленностью и полумиллионным населением.
              </p>
              <p>
                Минск активно строился, появлялись новые кварталы и микрорайоны, активно началась
                газификация квартир. Развитие послевоенной экономики и глобальные задачи по развитию
                народного хозяйства столицы, а с ней и освоение новых технологий в газовой
                промышленности предопределило будущее Управления по газификации г.Минска «МИНГАЗ».
              </p>
            </div>
            <img data-aos={'fade-up'} alt={''} src={history_10} />
          </PWithImg>
          <PWithImg>
            <img data-aos={'fade-up'} src={history_7} alt={''} />
            <div data-aos={'fade-up'}>
              <p>
                23 февраля 1960 года Постановлением Совета Министров БССР и решением Мингорисполкома
                за №208 от 21 апреля 1960 года был образован Минский трест по газификации, который и
                взял на себя задачу по газоснабжению столицы, её предприятий, жилых домов и
                учреждений социально-культурного назначения.
              </p>
              <p>
                С 1 сентября 1975 года Минский трест по газификации реорганизован в Минское
                производственное объединение газового хозяйства «МИНГАЗ» и в это же время были
                приняты на обслуживание потребители Минского района. С 18 августа 2000 году Минское
                производственное объединение газового хозяйства «МИНГАЗ» реорганизовано в
                Производственное республиканское унитарное предприятие «МИНГАЗ» (УП «МИНГАЗ»).
              </p>
              <p>
                Согласно приказу Белорусского концерна по топливу и газификации «Белтопгаз» №37 от
                22.02.2002 года, предприятие реорганизовано в форме присоединения к нему УП
                «Трубопроводстрой». В 2004 году УП «МИНГАЗ» реорганизовано в форме присоединения к
                нему частного сельскохозяйственного унитарного предприятия «Бубны», а в 2007 году
                реорганизовано в форме присоединения к нему производственного республиканского
                унитарного торфопредприятия «Сергеевичское» в качестве филиалов.
              </p>
            </div>
          </PWithImg>
          <PWithImg>
            <div data-aos={'fade-up'}>
              <p>
                C 1 апреляля 2011 года филиал «Сергеевичское» ликвидирован и на его основе создана
                служба производства торфяной продукции. УП «МИНГАЗ» — современное, развивающееся
                предприятие, монополист по реализации природного и сжиженного газа населению,
                коммунально-бытовым и промышленным потребителям г.Минска и Минского района.
              </p>
              <p>
                Сегодня УП «МИНГАЗ» представляет собой сложное, разветвленное и технически
                оснащенное газовое хозяйство с большим коллективом, располагающее развитой
                материально-технической и инженерной инфраструктурой, высококвалифицированным
                персоналом. Более четверти века на предприятии трудятся Василега Л. Л., Петрик И.
                Л., Чуприс С. В., Кравчук В. С. и др. и передают свой опыт молодому поколению.
              </p>
              <p>
                Уверенно и достойно продолжают добрые традиции коллектива: Левошеня Н. А., Полянкова
                Н. В., Воронкова Т. М. , Сазанчук А. Л. , Вирочкин А. А. и др. пришедшие более 15
                лет назад молодыми специалистами
              </p>
              <p>
                В настоящее время предприятие «МИНГАЗ» возглавляет генеральный директор Шолоник
                Вадим Евгеньевич.
              </p>
            </div>
            <img data-aos={'fade-up'} alt={''} src={history_9} />
          </PWithImg>
        </DivParagraphHistory>
      </AdditionalDiv>
      <ImgBackground alt={''} src={history_6} />
      <Footer />
    </Container>
  );
}
