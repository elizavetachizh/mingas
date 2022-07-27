import React, { useCallback, useState } from 'react';
import { data } from '../../../assets/data_services';
import DopFunctionService from '../DopFunction';
import { Container } from '../../company/styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { Button, Name } from '../../../components/administrativeServices/Header/styles';
import { HeaderCompanyDiv } from '../../concats/headerContacts/styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { DivBlocks } from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import { DivBtn } from './DopFunctionalHeader/styles';

export default function NaturalGas() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState('');
  const [isBackgorund, setIsBackground] = useState(false);
  const [title, setTitle] = useState([]);
  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element.serviceId === descriptionID);
      setInform(current.description);
      setTitle(current.nameCard);
      setServiceID(currentServiceID ? '' : descriptionID);
      // if (data.find((element) => element.serviceId === descriptionID)) {
      //   setIsBackground(true);
      // }
      // if (data.find((element) => element.serviceId === descriptionID) && isBackgorund) {
      //   setIsBackground(false);
      // }
      // if (isBackgorund) {
      //   setIsBackground(false);
      // }
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
                <Button
                  className={currentServiceID ? 'background' : ''}
                  onClick={() => animate(element.serviceId)}
                  key={element.serviceId}
                >
                  {element.nameCard}
                </Button>
              </DivBtn>
            ))}
          </HeaderCompanyDiv>
          <div>
          <Name>{title}</Name>
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
