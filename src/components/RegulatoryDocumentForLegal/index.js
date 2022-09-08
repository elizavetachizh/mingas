import Header from '../header';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import { Container } from '../../pages/company/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../../pages/concats/headerContacts/styles';
import { BlockBtn, ContainerBtnIcon, Name } from '../administrativeServices/Header/styles';
import { data } from '../../assets/data/regularyDocumentsForEntities';
import DopFunctionalHeader from '../../pages/services/NaturalGas/DopFunctionalHeader';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import { useNavigate } from 'react-router';

export default function RegulatoryDocumentsForLegal() {
  const { documentId } = useParams();
  const [currentDocumentId, setDocumentId] = useState(null);
  const [inform, setInform] = useState([]);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const isPhone = useMediaQuery('(max-width: 820px)');

  const infoForSearch = data[0].inform
    .concat(data[1].inform)
    .concat(data[2].inform)
    .concat(data[3].inform)
    .concat(data[4].inform);

  useEffect(() => {
    if (!currentDocumentId && !inform.length) {
      const current = data.find((element) => element.idName === +documentId);
      setInform(current.inform);
      setDocumentId(+documentId);
      setName(current?.separation);
    }
  }, [currentDocumentId, documentId, inform]);

  const changeDocument = useCallback(
    (documentId) => {
      const current = data.find((element) => element.idName === documentId);
      setDocumentId(currentDocumentId && currentDocumentId === documentId ? '' : documentId);
      setInform(current.inform);
      window.scrollTo(0, 0);
      navigate(`/regulatory-documents-for-business/${current.idName}`);
      setName(current?.separation);
    },
    [currentDocumentId, inform, name]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Регламинтирующие документы</Name>
            {data.map((element) => (
              <BlockBtn>
                <ContainerBtnIcon>
                  <DopFunctionalHeader
                    nameCard={element.separation}
                    className={currentDocumentId === element.idName ? 'background' : ''}
                    onClick={() => changeDocument(element.idName)}
                    key={element.idName}
                  />
                </ContainerBtnIcon>
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          {isPhone ? (
            <ContainerInform>
              <Name>{name}</Name>
              {infoForSearch.map((el) => (
                <BlockBtn>
                  <a href={el.link} target={'_blank'}>
                    {el.name}
                  </a>
                </BlockBtn>
              ))}
            </ContainerInform>
          ) : (
            <ContainerInform>
              <Name>{name}</Name>
              {inform.map((el) => (
                <BlockBtn>
                  <a href={el.link} target={'_blank'}>
                    {el.name}
                  </a>
                </BlockBtn>
              ))}
            </ContainerInform>
          )}
        </DivBlocks>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
