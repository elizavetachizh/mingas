import {
  ContainerFormSearchForService,
  ContainerInform,
  DivBlocks,
  SearchService,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../../pages/concats/headerContacts/styles';
import { BlockBtn, ContainerBtnIcon, Name } from '../administrativeServices/Header/styles';
import { data } from '../../assets/data/regularyDocumentsForEntities';
import DopFunctionalHeader from '../../pages/services/NaturalGas/DopFunctionalHeader';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import { useNavigate } from 'react-router';
import ContainerContent from '../Container';
import { API } from '../../backend';
import axios from 'axios';
import { IoIosSearch, IoMdClose } from 'react-icons/io';

export default function RegulatoryDocumentsForLegal() {
  const { documentId } = useParams();
  const [currentDocumentId, setDocumentId] = useState(null);
  const [inform, setInform] = useState([]);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const isPhone = useMediaQuery('(max-width: 820px)');
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const apiUrl = `${API}/documents_separation`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        {
          console.log(e);
        }
      });
  }, [setInfo]);

  const infoForSearch = data[0].inform
    .concat(data[1].inform)
    .concat(data[2].inform)
    .concat(data[3].inform)
    .concat(data[4].inform);

  useEffect(() => {
    console.log(info);
    const current = info && info.find((element) => element.separation === documentId);
    setInform(current?.documents);
    console.log(current);
    console.log(inform);

    setDocumentId(documentId);
    setName(current?.separation);
  }, [currentDocumentId, documentId, info]);

  const changeDocument = useCallback(
    (documentId) => {
      const current = info && info.find((element) => element.separation === documentId);
      setDocumentId(currentDocumentId && currentDocumentId === documentId ? '' : documentId);
      console.log(current);
      navigate(`/regulatory-documents-for-business/${current.separation}`);
      setName(current?.separation);
    },
    [currentDocumentId, inform, name]
  );
  return (
    <ContainerContent
      name={'Регламинтирующие документы'}
      content={
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Регламинтирующие документы</Name>
            {info &&
              info.map((element) => (
                <BlockBtn key={element._id}>
                  <ContainerBtnIcon>
                    <DopFunctionalHeader
                      nameCard={element.separation}
                      className={currentDocumentId === element.separation ? 'background' : ''}
                      onClick={() => changeDocument(element.separation)}
                    />
                  </ContainerBtnIcon>
                </BlockBtn>
              ))}
          </HeaderCompanyDiv>
          {isPhone ? (
            <ContainerInform>
              <Name>Регламентирующие документы</Name>
              {inform &&
                inform.map((el) => {
                  if (el.type === '2') {
                    return (
                      <BlockBtn key={el._id}>
                        <a href={el.link} target={'_blank'} rel="noreferrer">
                          {el.name}
                        </a>
                      </BlockBtn>
                    );
                  }
                })}
            </ContainerInform>
          ) : (
            <ContainerInform>
              <Name>{name}</Name>
              {inform ? (
                inform.map((el) => {
                  if (el.type === '2') {
                    return (
                      <BlockBtn key={el._id}>
                        <a href={el.link} target={'_blank'} rel="noreferrer">
                          {el.name}
                        </a>
                      </BlockBtn>
                    );
                  }
                })
              ) : (
                <p>Loading</p>
              )}
            </ContainerInform>
          )}
        </DivBlocks>
      }
    />
  );
}
