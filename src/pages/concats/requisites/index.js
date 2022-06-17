import React from 'react';
import { Container } from '../../Home/styles';
import { Title } from '../../Home/useful_information/styles';
import { Abbreviated, Certificate, Codbank, NameBank, NumberScore, PageSection } from './styles';
import Header from '../../../components/header';
import HeaderConcats from '../headerContacts';
import { Row } from '../styles';
import { AdditionalDiv } from '../GeneralContactInform/styles';
import Footer from '../../../components/footer';
import TitleFun from '../../../components/title';

export default function Requisites() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun infoTitle={'Юридическая информация'} color={'blue'} />
        <Row>
          <HeaderConcats />
          <PageSection>
            <Abbreviated>
              <span>Сокращенное наименование:</span>
              <p>УП «МИНГАЗ»</p>
            </Abbreviated>
            <Certificate>
              <span>Свидетельство о государственной регистрации:</span>
              <p>
                Выдано в соответствии с решением Минского горисполкома №931 от 18 августа 2000 года.
                УНП 100308563
              </p>
            </Certificate>
            <NameBank>
              <span>Наименование банка в котором открыты расчетные счета:</span>
              <p>ЦБУ № 514 ОАО «АСБ Беларусбанк», 220040, г. Минск, ул. Сурганова, 47а.</p>
            </NameBank>
            <h4>Номер счета (формата IBAN):</h4>
            <NumberScore>
              <span>Расчетный счет в белорусских рублях</span>
              <p>BY17 AKBB 3012 1087 6001 4530 0000</p>
            </NumberScore>
            <NumberScore>
              <span>Расчетный счет в долларах США</span>
              <p>BY16 AKBB 3012 1087 6002 7530 0000</p>
            </NumberScore>
            <NumberScore>
              <span>Расчетный счет в российских рублях</span>
              <p>BY16 AKBB 3012 1087 6002 7530 0000</p>
            </NumberScore>
            <NumberScore>
              <span>Расчетный счет в евро</span>
              <p>BY16 AKBB 3012 1087 6002 7530 0000</p>
            </NumberScore>
            <Codbank>
              <span>Код банка (BIC): (BIC S.W.I.F.T.)</span>
              <p>AKBBBY2X</p>
              <span>УНП банка: 100325912</span>
            </Codbank>
          </PageSection>
        </Row>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
