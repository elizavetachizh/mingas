import React from 'react';
import SchemaOfBranches from '../ChemaOfBranches';
import background from '../../../../assets/Bubni/background2.webp';
import { DivInform } from '../../../Home/News/styles';
import TitleForHome from '../../../../components/TitleForHome';
import { LinksNetwork } from '../../../../components/footer/styles';
import { IoIosCall, IoLogoInstagram } from 'react-icons/io';
export default function Bubni() {
  return (
    <SchemaOfBranches
      background={background}
      name={'Филиал Бубны'}
      height={'500px'}
      nameDescription={'О нас'}
      description={
        <>
          <p>
            Филиал по производству сельскохозяйственной продукции «Бубны» УП «МИНГАЗ», именуемый в
            дальнейшем Филиал, сформирован на базе частного предприятия «Бубны».{' '}
          </p>
          <p>
            По агроклиматическому районированию территория филиала «Бубны» относится к северной зоне
            республики. Землепользование характеризуется широковолнистым рельефом с плавнообразными
            повышениями и ложбинообразными положениями. Почвы, занятые под пашней, по механическому
            составу составляют: супесчаные-18,6%, дерново-подзолистые-32,7%,
            торфяно-болотистые-18,7%, содержание гумуса на уровне 1,87%. Подвижные формы
            Р2О5-192мг\кг, К2О-165мл\кг почвы.
          </p>
          <p>
            В пользовании Филиала находится 4537 га сельхозугодий, 2718 га пашни. Средний балл
            сельхозугодий – 26,3, пашни – 26,5.{' '}
          </p>
          <p>
            Производственная база предприятия включает 2 молочно-товарные фермы, 3 фермы для
            выращивания молодняка КРС. Имеются ремонтная мастерская, МАЗС, зерносушильный комплекс,
            комбикормовый цех, 2 склада для хранения зерна, 2 склада для хранения минеральных
            удобрений, склад для хранения кормов. Из социально-бытовой инфраструктуры – клуб,
            фельдшерско-акушерский пункт, столовая.
          </p>
          <p>
            Основные виды деятельности: производство и реализация мяса КРС и молока, выращивание
            зерновых, зернобобовых культур для обеспечения потребностей отрасли животноводства,
            товарное производство зерна, рапса.
          </p>
          <ol>
            Применяемые технологии:
            <li>
              построена роботизированная молочно-товарная ферма на 600 голов крупного рогатого
              скота, коровник для содержания сухостойных коров с родильным отделением и раздоем на
              300 голов, там также установлены роботы четвертого поколения Lely Astronaut A4;
            </li>
            <li>приобретена линия по производству собственных комбикормов;</li>
          </ol>
          <p>
            В целях выполнения прогнозов социально-экономического развития филиал «Бубны» УП
            «МИНГАЗ» постоянно продолжает политику по снижению материальных затрат, сокращению
            потребления ТЭР, сокращению издержек производства, увеличению доходности и наращиванию
            оборотных средств.
          </p>
        </>
      }
      nameProducts={'Наша продукция'}
      products={
        <DivInform style={{ textAlign: 'center', color: '#0d4475' }}>
          <div>
            <img alt={''} src={require('../../../../assets/Bubni/zerno.png')} />
            <p>Зерновые и зернобобовые</p>
          </div>
          <div>
            <img alt={''} src={require('../../../../assets/Bubni/flowers.png')} />
            <p>Рапс</p>
          </div>
          <div>
            <img alt={''} src={require('../../../../assets/Bubni/milk.png')} />
            <p>Молоко</p>
          </div>
          <div>
            <img alt={''} src={require('../../../../assets/Bubni/meet.png')} />
            <p>Мясо КРС</p>
          </div>
        </DivInform>
      }
      photo={""}
      inform={
        <>
          <TitleForHome
            infoTitle={'Директор : Романюк Алексей Николавеич'}
            color={'blue'}
            fontSize={'name'}
            className={'branches'}
          />
          <LinksNetwork style={{ fontSize: '18px' }}>
            <IoIosCall style={{ color: '#0e43af', width: '35px', height: '35px' }} />
            Контактный телефон: <a href={'tel:8017-712-36-07'}> 8017-712-36-07</a>
          </LinksNetwork>
          <LinksNetwork style={{ fontSize: '18px' }}>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              target={'_blank'}
              href={'https://instagram.com/filial.bubny?igshid=YTY2NzY3YTc='}
            >
              <IoLogoInstagram style={{ width: '46px', height: '46px' }} /> Мы в инстаграме
            </a>
          </LinksNetwork>
          <div style={{ width: '80%', height: '500px', margin: '0 auto' }}>
            <a
              href="https://yandex.by/maps/org/proizvodstvennoye_respublikanskoye_predpriyatiye_mingaz_filial_bubny_po_proizvodstvu_selskokhozyaystvennoy_produktsii/1038334797/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
            >
              Производственное республиканское предприятие Мингаз филиал Бубны по производству
              сельскохозяйственной продукции
            </a>
            <a
              href="https://yandex.by/maps/29630/minsk-district/category/agricultural_enterprise/184106458/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
            >
              Сельскохозяйственное предприятие в Минской области
            </a>
            <iframe
              title={'file'}
              src="https://yandex.by/map-widget/v1/-/CCURZLF3OD"
              width="100%"
              height="400"
              allowFullScreen={true}
              style={{ position: 'relative' }}
            />
          </div>
        </>
      }
    />
  );
}
