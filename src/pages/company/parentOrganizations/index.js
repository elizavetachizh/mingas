import React, { useEffect } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import HeaderCompany from '../header_company';
import { data } from '../../../assets/data/data_ParentOrganization';
import DopFunctional from './DopFunctional';
import { ContainerLinks } from './styles';
import { Container } from '../styles';
import Feedback from '../../feedback';
import minsk from '../../../assets/background/phone.jpg';
export default function ParentOrganizations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Вышестоящие организации'} />
      <HeaderCompany />
      <AdditionalDiv style={{ margin: '4% auto' }}>
        <ContainerLinks>
          {data.map((el) => (
            <DopFunctional img={el.img} link={el.link} name={el.name} />
          ))}
        </ContainerLinks>
      </AdditionalDiv>
      <Footer classname={'height'} />
    </Container>
  );
}
