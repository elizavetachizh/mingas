import { Link } from '../../pages/company/styles';
import React from 'react';
import ContainerContent from '../Container';
import SubTitleFun from '../SubTitle';
import {
  ContainerInform,
  TextForInformation,
} from '../../pages/feedback/electronicCirculationForEntity/styles';

export default function Tenders() {
  return (
    <ContainerContent
      name={'Тендеры и закупки'}
      content={
        <>
          <ContainerInform
            className={'electronic-appeal-for-entity'}
            style={{ marginBottom: '50px' }}
          >
            {' '}
            <TextForInformation>
              <SubTitleFun
                color={'blue'}
                infoSubTitle={'Приглашение на участие в процедуре переговоров'}
              />
              <p>
                УП «МИНГАЗ» приглашает принять участие в переговорах по выбору генпроектировщика для
                выполнения строительно-монтажных работ по объекту:
              </p>
              <p>
                «Реконструкция помещений в здании неустановленного назначения по ул. Ботаническая,
                11/4 (1-й, 5-й пусковой комплекс)».
              </p>
              <p>
                Без предварительного квалификационного отбора, с проведением процедуры улучшения
                предложения для переговоров.
              </p>
              <p>
                Документацию для переговоров можно получить безвозмездно: с понедельника по четверг
                с 08-00 до 17-00 и в пятницу с 8-00 до 15-45, по адресу: 220037, г.Минск,
                ул.Ботаническая, 11, к.408, тел: (017) 299-29-04, обеденный перерыв с 12.00 до
                12.45, в электронной форме не позднее двух рабочих дней со дня письменного обращения
                участника.
              </p>
              <p>
                Заседание конкурсной комиссии по вскрытию конвертов с предложениями участников по
                всем переговорам состоится{' '}
                <strong style={{ color: 'red' }}>10.11.2022 г. в 13.00</strong> по адресу: г.Минск,
                ул.Ботаническая, 11/1, конференц-зал.
              </p>
              <p>
                Организатор переговоров УП «МИНГАЗ». Р/с BY17AKBB30121087600145300000 в ЦБУ №514 ОАО
                «АСБ «Беларусбанк», БИК AKBBBY2Х, УНП 100308563, ОКПО 03000992. Е-mail:
                ogm@mingas.by Ответственный исполнитель (контактное лицо): заместитель начальника
                службы главного энергетика, метрологического обеспечения и охраны окружающей среды
                (СГЭМОиООС) – Михнюк Виталий Анатольевич. Тел: (017)299-29-04, факс: (017)299-29-31.
              </p>
            </TextForInformation>
          </ContainerInform>
          <Link>
            <a
              rel={'noreferrer'}
              target={'_blank'}
              href={
                'https://icetrade.by/search/aucArchive?search_text=%D0%9C%D0%B8%D0%BD%D0%B3%D0%B0%D0%B7&search=%D0%9D%D0%B0%D0%B9%D1%82%D0%B8&zakup_type%5B1%5D=1&zakup_type%5B2%5D=1&auc_num=&okrb=&company_title=&participant=&establishment=0&industries=&period=&created_from=&created_to=&request_end_from=&request_end_to=&t%5BTrade%5D=1&t%5BeTrade%5D=1&t%5BsocialOrder%5D=1&t%5BsingleSource%5D=1&t%5BAuction%5D=1&t%5BRequest%5D=1&t%5BcontractingTrades%5D=1&t%5Bnegotiations%5D=1&t%5BOther%5D=1&r%5B1%5D=1&r%5B2%5D=2&r%5B7%5D=7&r%5B3%5D=3&r%5B4%5D=4&r%5B6%5D=6&r%5B5%5D=5&sort=num%3Adesc&sbm=1&onPage=20'
              }
            >
              <p>
                УП «МИНГАЗ» осуществляет проведение процедур закупок товаров (работ, услуг) по
                принципу открытости и прозрачности посредством ресурса www.icetrade.by
              </p>
              <img alt={'картинка грузится'} src={require('../../assets/png/icetrade.png')} />{' '}
            </a>
          </Link>
        </>
      }
    />
  );
}
