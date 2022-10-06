import { Link } from '../../pages/company/styles';
import React from 'react';
import ContainerContent from '../Container';

export default function Tenders() {
  return (
    <ContainerContent
      name={'Тендеры и закупки'}
      content={
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
      }
    />
  );
}
