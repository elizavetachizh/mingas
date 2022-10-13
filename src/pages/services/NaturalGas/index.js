import React, { useCallback, useEffect, useState } from 'react';
import { data } from '../../../assets/data/data_services';
import DopFunctionService from '../DopFunction';
import { BlockBtn, Name } from '../../../components/administrativeServices/Header/styles';
import { HeaderCompanyDiv } from '../../concats/headerContacts/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { useNavigate, useParams } from 'react-router';
import DopFunctionalHeader from './DopFunctionalHeader';
import ContainerContent from '../../../components/Container';

export default function NaturalGas() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const [title, setTitle] = useState([]);
  const { cardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const current = data.find((element) => element.serviceId === +cardId);
    setInform(current?.description);
    setTitle(current.nameCard);
    setServiceID(+cardId);
  }, [cardId]);
  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element.serviceId === descriptionID);
      setInform(current?.description);
      setTitle(current.nameCard);
      setServiceID(descriptionID);
      navigate(`/services/${descriptionID}`);
    },
    [navigate]
  );

  return (
    <ContainerContent
      name={'Услуги'}
      content={
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги для физических лиц</Name>
            {data.map((element) => (
              <BlockBtn key={element.serviceId}>
                <DopFunctionalHeader
                  nameCard={element.nameCard}
                  className={currentServiceID === element.serviceId ? 'background' : ''}
                  onClick={() => animate(element.serviceId)}
                />
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            <Name>{title}</Name>
            {inform.map((el) => (
              <DopFunctionService
                key={el.nameDescription}
                nameDescription={el.nameDescription}
                inform={el.inform}
              />
            ))}
          </ContainerInform>
        </DivBlocks>
      }
    />
  );
}
