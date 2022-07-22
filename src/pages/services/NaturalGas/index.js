import React, { useCallback, useState } from 'react';
import { data } from '../../../assets/data_services';
import { useParams } from 'react-router-dom';
import DopFunctionService from '../DopFunction';
import { Container } from '../../company/styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { useNavigate } from 'react-router';
import { Button, Name } from '../../../components/administrativeServices/Header/styles';
import { HeaderCompanyDiv } from '../../concats/headerContacts/styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { DivBlocks } from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import { DivBtn } from './DopFunctionalHeader/styles';
import TitleFun from '../../../components/title';

export default function NaturalGas() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState('');
  const [title, setTitle] = useState([]);
  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element.serviceId === descriptionID);
      setInform(current.description);
      setTitle(current.nameCard);
      // console.log(current);
      // console.log(inform);
      console.log(data[0].nameCard);
      setServiceID(currentServiceID ? '' : descriptionID);
    },
    [currentServiceID]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги для физических лиц</Name>
            {data.map((element) => (
              <DivBtn>
                <Button onClick={() => animate(element.serviceId)} key={element.serviceId}>
                  {element.nameCard}
                </Button>
              </DivBtn>
            ))}
          </HeaderCompanyDiv>
          <div>
            {/*{title.map((element) => (*/}
            {/*  <TitleFun infoTitle={element} color={'blue'} />*/}
            {/*))}*/}
            {inform.map((el) => (
              <DopFunctionService nameDescription={el.nameDescription} inform={el.inform} />
            ))}
          </div>
        </DivBlocks>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
