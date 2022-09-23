import React from 'react';
import SchemaOfBranches from '../ChemaOfBranches';
import imageContent from '../../../../assets/Bubni/background1.jpg';
import TitleForHome from '../../../../components/TitleForHome';
import { LinksNetwork } from '../../../../components/footer/styles';
import { IoIosCall } from 'react-icons/io';

export default function TBZ() {
  return (
    <SchemaOfBranches
      height={'500px'}
      name={'Филиал «Торфобрикетный завод «Сергеевичское»'}
      background={imageContent}
      nameDescription={'О нас'}
      description={
        <>
          <p>
            <strong>Торфобрикетный завод «Сергеевичское»</strong> – это структурное подразделение УП
            «МИНГАЗ», к которому ТБЗ был присоединен в конце 2007 года. В 2015 году образован филиал
            «Торфобрикетный завод „Сергеевичское”», расположенный в поселке Правдинский Пуховичского
            района Минской области.
          </p>
          <ul>
            Основными видами работ филиала «ТБЗ «Сергеевичское» являются:
            <li>добыча торфа, производство и реализация топливных брикетов – 77,2 % доходов;</li>
            <li>производство и реализация тепловой энергии – 21,4 % доходов;</li>
            <li>производство и реализация прочей продукции (торфа) – 1,4 % доходов.</li>
          </ul>
          <h3>Добыча торфа, производство и реализация топливных брикетов.</h3>
          <p>
            Ископаемое добывают на торфяных месторождениях Гала-Ковалевское. Потенциальные
            компенсаторы сырьевой базы филиала торфяные месторождения Кобыличи, Рабцево,
            Клетишинское, Мурашево, Поречский Мох, Зеленица. Эксплуатационный запас торфа по всем
            участкам составляет 12 млн т. Месторождения, отведенные для ТБЗ «Сергеевичское»,
            являются одними из крупнейших в Беларуси, следовательно, сырьевая база весьма
            перспективна с точки зрения развития предприятия.
          </p>
          <p>
            Изготовленная продукция отгружается на белорусские цементные заводы, топливоснабжающим
            организациям и физическим лицам.
          </p>
          <p>
            Автоматизация процесса производства позволила сократить человеческий труд, а главное –
            повысила уровень качества изготавливаемой продукции, что связано с улучшение
            качественных показателей топливных брикетов. Это позволило продукции стать
            конкурентоспособной на внутреннем рынке, что привлекло внимание двух новых крупных
            потребителей, а именно ОАО «Кричевцементошифер» и ОАО «Белорусский цементный завод».
          </p>
          <h3>Производство и реализация тепловой энергии.</h3>
          <p>
            Добытый филиалом торф используется не только как сырье для производства брикетов, а еще
            как топливо для получения тепловой энергии за счет сжигания в котельной предприятия,
            которая на данное время оснащена наиболее современным оборудованием в Беларуси.
          </p>
          <p>
            Полученная в котельной тепловая энергия подается в виде гигакалорий и используется для
            обогрева поселка Правдинский и объектов на его территории, для горячего водоснабжения.
            Заводом предоставляется теплоноситель в виде горячей воды на границу раздела, где
            происходит съем тепла и расчет с предприятием как с поставщиком.
          </p>
          <h3>Реализация торфяного грунта.</h3>
          <p>
            Торфом для приготовления компостов, добытым на заводе, пользуются организации сельского
            хозяйства и физические лица. Проект по созданию питательного и растительного грунта на
            базе торфа только начинает развиваться. Планируется организовать линию по производству
            данного вида продукции. При низкой себестоимости она довольно востребована на рынке.
          </p>
        </>
      }
      nameProducts={'Наша продукция'}
      products={
        <>
          <h3>Топливные брикеты марки БТ-1 </h3>
          <img
            style={{ width: '40%', margin: '0 25%' }}
            src={require('../../../../assets/TBZ/1.jpg')}
          />
          <ul>
            Характеристики<li>влажность (не более) – 16 % </li>
            <li>зольность (не более) – 15 % </li>
            <li>механическая прочность (не менее) – 95 % </li>
            <li>расчетная низшая рабочая теплота сгорания (не менее) – 3700 Ккал/кг </li>
            <li>удельная активность радионуклидов Цезия-137 (не более) – 1220 Бк/кг </li>
          </ul>
          <h3>Торф для приготовления компостов</h3>
          <img
            style={{ width: '50%', margin: '0 25%' }}
            src={require('../../../../assets/TBZ/3.jpg')}
          />
          <ul>
            Характеристики<li>влажность (не более) – 60%</li>
            <li>зольность (не более) – 25%</li>
            <li>засоренность: пни; очёс; щепа свыше 60 мм. (не более) – 10%</li>
            <li>удельная активность радионуклидов Цезия-137 (не более) – 1950 Бк/кг </li>
          </ul>
        </>
      }
      photo={require('../../../../assets/management/departaments/Молочко.jpg')}
      inform={
        <>
          <TitleForHome
            infoTitle={'Директор – Молочко Алексей Александрович'}
            color={'blue'}
            fontSize={'name'}
            className={'branches'}
          />
          <p>
            <LinksNetwork style={{ fontSize: '18px' }}>
              <IoIosCall style={{ color: '#0e43af', width: '35px', height: '35px' }} />
              Контактный номер: <a href={'tel:8017-13-20-151'}> 8017-13-20-151</a>
            </LinksNetwork>
          </p>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a
              href="https://yandex.by/maps/org/sergeyevichskoye_filial_up_mingaz/124704103181/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
            >
              Сергеевичское, филиал УП Мингаз
            </a>
            <a
              href="https://yandex.by/maps/29630/minsk-district/category/gas_supply_services/184108297/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
            >
              Служба газового хозяйства в Минской области
            </a>
            <iframe
              src="https://yandex.by/map-widget/v1/-/CCURZ-WzpC"
              width="100%"
              height="400"
              allowFullScreen="true"
              style={{ position: 'relative' }}
            />
          </div>
        </>
      }
    />
  );
}
