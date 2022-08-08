import React, { useEffect } from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { Helmet } from 'react-helmet';
import { DivForm, ContainerForLinkToWork } from './styles';
import up from '../../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import anketa from '../../../assets/wordFile/ANKETA.doc';
import TitleForHome from '../../../components/TitleForHome';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
const url =
  'https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2&host=rabota.by';
const div = document.createElement('div');
document.body.appendChild(div);

export default function Career() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    div.appendChild(script);
    return () => {
      div.removeChild(script);
    };
  }, []);
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany />
      <TitleForHome color={'blue'} infoTitle={'Работа в РУП “Мингаз”'}></TitleForHome>
      <AdditionalDiv>
        <ContainerForLinkToWork></ContainerForLinkToWork>
        <DivForm className="form-div">
          <p>
            При приеме на работу предлагаем заполнить{' '}
            <a download href={anketa}>
              анкету
            </a>
            .
          </p>
          <p>Телефон отдела кадров УП «МИНГАЗ»: 80172992830, 80172992936</p>
          <p>e-mail: ok@mingas.by</p>
          <p>
            По вопросам трудоустройства обращаться по адресу: г. Минск, ул. Ботаническая, д. 11/1
            каб. 103.
          </p>
          <div style={{ width: '500px' }}>
            {' '}
            <script
              className="hh-script"
              src="https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2"
            ></script>
            <Helmet>
              <script
                className="hh-script"
                src="https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2"
              ></script>
            </Helmet>
          </div>
        </DivForm>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
