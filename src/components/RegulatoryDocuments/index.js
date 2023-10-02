import React, { useCallback, useEffect, useState } from 'react';
import {
  ContainerFormSearchForService,
  ContainerInform,
  DivBlocks,
  SearchService,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../../pages/concats/headerContacts/styles';
import { BlockBtn, ContainerBtnIcon, Name } from '../administrativeServices/Header/styles';
import DopFunctionalHeader from '../../pages/services/NaturalGas/DopFunctionalHeader';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import ContainerContent from '../Container';
import { API } from '../../backend';
import axios from 'axios';
import BlockSerach from '../BlockSerach';

export default function DepartmentInformation() {
  const { documentId } = useParams();
  const [currentDocumentId, setDocumentId] = useState(null);
  const [inform, setInform] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [isForm, setIsForm] = useState(false);
  const [message, setMessage] = useState('');
  const result = [];
  const isPhone = useMediaQuery('(max-width: 820px)');
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const apiUrl = `${API}/documents_separation`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };

  const handleChange = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  useEffect(() => {
    const current = info && info.find((element) => element.separation === documentId);
    setInform(current?.documents);
    setDocumentId(documentId);
    setName(current?.separation);
  }, [currentDocumentId, documentId, info]);

  info?.map((el) =>
    el.documents.map((cardInform) => cardInform.name.includes(message) && result.push(cardInform))
  );

  const handleInsideClick = (event) => {
    event.stopPropagation();
    setIsForm(false);
    setMessage('');
    navigate('/regulatory-documents/Законы');
  };

  const changeDocument = useCallback(
    (documentId) => {
      const current = info && info.find((element) => element.separation === documentId);
      setDocumentId(currentDocumentId && currentDocumentId === documentId ? '' : documentId);
      navigate(`/regulatory-documents/${current.separation}`);
      setName(current?.separation);
    },
    [currentDocumentId, info, navigate]
  );

  return (
    <ContainerContent
      name={'Регламентирующие документы'}
      content={
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Регламентирующие документы</Name>
            {isForm ? (
              <IoIosSearch style={{ display: 'none' }} />
            ) : (
              <SearchService style={{ width: '80%' }} onClick={() => handleForm()}>
                <p>Поиск по регламентирующим документам</p>
                <IoIosSearch
                  style={{ height: '30px', width: '30px' }}
                  color={'#0d4475'}
                  type={'submit'}
                />
              </SearchService>
            )}
            {isForm && (
              <ContainerFormSearchForService>
                <form action={'search'}>
                  <input
                    placeholder="Введите название документа"
                    onChange={handleChange}
                    type={'text'}
                  />
                  <IoMdClose
                    style={{ width: '60px' }}
                    color={'black'}
                    onClick={handleInsideClick}
                  />
                </form>
              </ContainerFormSearchForService>
            )}
            {message && <BlockSerach result={result} />}
            {!!info.length ? (
              <>
                {info.map((element) => (
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
              </>
            ) : (
              <p>Загрузка данных...</p>
            )}
          </HeaderCompanyDiv>
          {isPhone ? (
            <ContainerInform>
              <Name>Регламентирующие документы</Name>
              {isForm ? (
                <IoIosSearch style={{ display: 'none' }} />
              ) : (
                <SearchService style={{ width: '80%' }} onClick={() => handleForm()}>
                  <p>Поиск по регламентирующим документам</p>
                  <IoIosSearch
                    style={{ height: '30px', width: '30px' }}
                    color={'#0d4475'}
                    type={'submit'}
                  />
                </SearchService>
              )}
              {isForm && (
                <ContainerFormSearchForService>
                  <form action={'search'}>
                    <input
                      placeholder="Введите название документа"
                      onChange={handleChange}
                      type={'text'}
                    />
                    <IoMdClose
                      style={{ width: '60px' }}
                      color={'black'}
                      onClick={handleInsideClick}
                    />
                  </form>
                </ContainerFormSearchForService>
              )}
              {message && <BlockSerach result={result} />}
              {info ? (
                info.map((el) =>
                  el.documents.map(
                    (el) =>
                      el.type === '1' && (
                        <BlockBtn key={el._id}>
                          <a href={el.link} target={'_blank'} rel="noreferrer">
                            {el.name}
                          </a>
                        </BlockBtn>
                      )
                  )
                )
              ) : (
                <p>Загрузка данных...</p>
              )}
            </ContainerInform>
          ) : (
            <ContainerInform>
              <Name>{name}</Name>
              {inform ? (
                inform.map(
                  (el) =>
                    el.type === '1' && (
                      <BlockBtn key={el._id}>
                        <a href={el.link} target={'_blank'} rel="noreferrer">
                          {el.name}
                        </a>
                      </BlockBtn>
                    )
                )
              ) : (
                <p>Загрузка данных...</p>
              )}
            </ContainerInform>
          )}
        </DivBlocks>
      }
    />
  );
}
