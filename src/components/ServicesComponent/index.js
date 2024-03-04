import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
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
import { useFetchServicesByIdQuery, useFetchServicesQuery } from '../../redux/services/services';

export default function ServicesComponent({ router, type, titleName }) {
  const [title, setTitle] = useState('');
  const [description, setDscription] = useState([]);
  const { cardId } = useParams();
  const navigate = useNavigate();
  const { data: servicesById, isFetching } = useFetchServicesByIdQuery(cardId);
  const { data: servicesName } = useFetchServicesQuery();

  useEffect(() => {
    setTitle(servicesById?.name);
    setDscription(servicesById?.description);
  }, [servicesById?.description, servicesById?.name]);

  const animate = useCallback(
    (descriptionID) => {
      setTitle(servicesById?.name);
      setDscription(servicesById?.description);
      navigate(`/${router}/${descriptionID}`);
    },
    [navigate, router, servicesById?.description, servicesById?.name]
  );

  return (
    <ContainerContent
      name={titleName}
      content={
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Наименование услуги</Name>
            {servicesName?.map(
              (element) =>
                element.type === type && (
                  <BlockBtn key={element._id}>
                    <DopFunctionalHeader
                      nameCard={element.name}
                      className={cardId === element._id ? 'background' : ''}
                      onClick={() => animate(element._id)}
                    />
                  </BlockBtn>
                )
            )}
          </HeaderCompanyDiv>

          <ContainerInform>
            <Name>{title}</Name>
            {isFetching ? (
              <Loader />
            ) : (
              <>
                {description?.map((el) => (
                  <DopFunctionService
                    classname={'question-answer'}
                    key={el.nameDescription}
                    nameDescription={el.nameDescription}
                    inform={el.inform}
                  />
                ))}
              </>
            )}
          </ContainerInform>
        </DivBlocks>
      }
    />
  );
}
