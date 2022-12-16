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
import axios from 'axios';
import { API } from '../../../backend';
export default function NaturalGas() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const [title, setTitle] = useState([]);
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/services`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        {
          console.log(e);
        }
      });
  }, [setData]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    const current = data.find((element) => element._id === cardId);
    setInform(current?.description);
    setTitle(current?.name);
    setServiceID(cardId);
    console.log(inform);
  }, [cardId, data, inform]);
  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element._id === descriptionID);
      setInform(current?.description);
      setTitle(current?.name);
      setServiceID(descriptionID);
      navigate(`/services/${descriptionID}`);
    },
    [navigate]
  );

  return (
    <ContainerContent
      name={'Услуги для физических лиц'}
      content={
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Наименование услуги</Name>
            {data.map((element) => {
              if (element.type === '1') {
                return (
                  <BlockBtn key={element._id}>
                    <DopFunctionalHeader
                      nameCard={element.name}
                      className={currentServiceID === element._id ? 'background' : ''}
                      onClick={() => animate(element._id)}
                    />
                  </BlockBtn>
                );
              }
            })}
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
              <p>Loading...</p>
            )}
          </ContainerInform>
        </DivBlocks>
      }
    />
  );
}
