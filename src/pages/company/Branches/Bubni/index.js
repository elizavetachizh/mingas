import {
  BtnIsOpen,
  Div,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Bubni() {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const [isClose, setIsClose] = useState(false);
  const animateClose = () => {
    setIsClose(true);
    if (isClose) {
      setIsClose(false);
    }
  };
  return (
    <div style={{ margin: '4% auto' }}>
      <img width={'100%'} src={require('../../../../assets/Bubni/backgorund.jpg')} />
      <BtnIsOpen onClick={animateClose}>
        <h3>О нас</h3>{' '}
        <div>
          {' '}
          {isClose ? (
            <IoIosArrowUp style={{ color: '#0e43af', margin: '34% 0' }} />
          ) : (
            <IoIosArrowDown style={{ color: '#0e43af', margin: '34% 0' }} />
          )}
        </div>
      </BtnIsOpen>
      <Div className={isClose && `shake`}>
        <p>
          Филиал по производству сельскохозяйственной продукции «Бубны» УП «МИНГАЗ», именуемый в
          дальнейшем Филиал, сформирован на базе частного предприятия «Бубны».{' '}
        </p>
        <p>
          По агроклиматическому районированию территория филиала «Бубны» относится к северной зоне
          республики. Землепользование характеризуется широковолнистым рельефом с плавнообразными
          повышениями и ложбинообразными положениями. Почвы, занятые под пашней, по механическому
          составу составляют: супесчаные-18,6%, дерново-подзолистые-32,7%, торфяно-болотистые-18,7%,
          содержание гумуса на уровне 1,87%. Подвижные формы Р2О5-192мг\кг, К2О-165мл\кг почвы.
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
            построена роботизированная молочно-товарная ферма на 600 голов крупного рогатого скота,
            коровник для содержания сухостойных коров с родильным отделением и раздоем на 300 голов,
            там также установлены роботы четвертого поколения Lely Astronaut A4;
          </li>
          <li>приобретена линия по производству собственных комбикормов;</li>
        </ol>
        <p>
          В целях выполнения прогнозов социально-экономического развития филиал «Бубны» УП «МИНГАЗ»
          постоянно продолжает политику по снижению материальных затрат, сокращению потребления ТЭР,
          сокращению издержек производства, увеличению доходности и наращиванию оборотных средств.
        </p>
      </Div>

      <h3>Наша продукция</h3>
      <h3>
        Руководство службой осуществляет первый заместитель директора - главный инженер –
        Белокурский Владимир Петрович
      </h3>
      <p>
        Контактный телефон<a href={'tel:8017-712-36-07'}>8017-712-36-07</a>
      </p>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
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
          src="https://yandex.by/map-widget/v1/-/CCURZLF3OD"
          width="100%"
          height="400"
          frameBorder="1"
          allowFullScreen="true"
          style={{ position: 'relative' }}
        ></iframe>
      </div>
    </div>
  );
}
