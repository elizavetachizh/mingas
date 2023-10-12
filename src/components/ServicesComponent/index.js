import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ContainerContent from '../Container';
import {
  ContainerInform,
  DivBlocks,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../../pages/concats/headerContacts/styles';
import { BlockBtn, Name } from '../administrativeServices/Header/styles';
import DopFunctionalHeader from '../../pages/services/NaturalGas/DopFunctionalHeader';
import DopFunctionService from '../../pages/services/DopFunction';
import Loader from '../Loader';

export default function ServicesComponent({ router, type, titleName }) {
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
      navigate(`/${router}/${descriptionID}`);
    },
    [navigate, router, service]
  );

  return (
    <ContainerContent
      name={titleName}
      content={
        <DivBlocks>
          {inform?.length ? (
            <>
              <HeaderCompanyDiv>
                <Name>Наименование услуги</Name>
                {service.map(
                  (element) =>
                    element.type === type && (
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
                {inform.map((el) => (
                  <DopFunctionService
                    classname={'question-answer'}
                    key={el.nameDescription}
                    nameDescription={el.nameDescription}
                    inform={el.inform}
                  />
                ))}
              </ContainerInform>
            </>
          ) : (
            <Loader />
          )}
        </DivBlocks>
      }
    />
  );
}
