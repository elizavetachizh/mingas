import React, { useCallback, useEffect, useState } from 'react';
import { BlockBtn, Name } from '../../../components/administrativeServices/Header/styles';
import { HeaderCompanyDiv } from '../../concats/headerContacts/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { useNavigate, useParams } from 'react-router';
import DopFunctionalHeader from './DopFunctionalHeader';
import ContainerContent from '../../../components/Container';
import DopFunctionService from '../DopFunction';
import { useSelector } from 'react-redux';

export default function NaturalGas() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const [title, setTitle] = useState([]);
  const { cardId } = useParams();
  const navigate = useNavigate();
  const service = useSelector((state) => state.services.data);

  useEffect(() => {
    const current = service.find((element) => element._id === cardId);
    setInform(current?.description);
    setTitle(current?.name);
    setServiceID(cardId);
  }, [cardId, service]);

  const animate = useCallback(
    (descriptionID) => {
      const current = service.find((element) => element._id === descriptionID);
      setInform(current?.description);
      setTitle(current?.name);
      setServiceID(descriptionID);
      navigate(`/services/${descriptionID}`);
    },
    [navigate, service]
  );

  return (
    <ContainerContent
      name={'Услуги для физических лиц'}
      content={
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Наименование услуги</Name>
            {service.map(
              (element) =>
                element.type === '1' && (
                  <BlockBtn key={element._id}>
                    <DopFunctionalHeader
                      nameCard={element.name}
                      className={currentServiceID === element._id ? 'background' : ''}
                      onClick={() => animate(element._id)}
                    />
                  </BlockBtn>
                )
            )}
          </HeaderCompanyDiv>
          <ContainerInform>
            <Name>{title}</Name>
            {inform ? (
              inform.map((el) => (
                <DopFunctionService
                  classname={'question-answer'}
                  key={el.nameDescription}
                  nameDescription={el.nameDescription}
                  inform={el.inform}
                />
              ))
            ) : (
              <p>Загрузка данных...</p>
            )}
          </ContainerInform>
        </DivBlocks>
      }
    />
  );
}
