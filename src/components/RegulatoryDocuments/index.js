import React, { useCallback, useEffect, useState } from 'react';
import {
  BlockSearchService,
  ContainerFormSearchForService,
  ContainerInform,
  DivBlocks,
  SearchService,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../../pages/concats/headerContacts/styles';
import { BlockBtn, ContainerBtnIcon, Name } from '../administrativeServices/Header/styles';
import DopFunctionalHeader from '../../pages/services/NaturalGas/DopFunctionalHeader';
import { data } from '../../assets/data/regularyDocuments';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import ContainerContent from '../Container';
import { API } from '../../backend';
import axios from 'axios';
import { go } from 'connected-react-router';

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
  const [title, setTitle] = useState([]);
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
    .concat(data[4].inform)
    .concat(data[5].inform)
    .concat(data[6].inform)
    .concat(data[7].inform);

  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  {
    infoForSearch.map((cardInform) => {
      if (cardInform.name.includes(message)) {
        result.push(cardInform);
      }
      return null;
    });
  }
  useEffect(() => {
    console.log(info);
    const current = info && info.find((element) => element.separation === documentId);
    setInform(current?.documents);
    console.log(current);
    console.log(inform);

    setDocumentId(documentId);
    setName(current?.separation);
  }, [currentDocumentId, documentId, info]);

  const renderResult = () => {
    return (
      <BlockSearchService>
        {result.length ? (
          result.map((element) => {
            return (
              <div key={element.id}>
                <a
                  rel="noopener"
                  style={{ margin: '20px auto' }}
                  href={`${element.link}`}
                  target={'_blank'}
                >
                  {element.name}
                </a>
              </div>
            );
          })
        ) : (
          <p>К сожалению, такой процедуры найти не удалось</p>
        )}
      </BlockSearchService>
    );
  };
  const handleInsideClick = (event) => {
    event.stopPropagation();
    setIsForm(false);
    setMessage('');
    navigate('/regulatory-documents/1');
  };

  const changeDocument = useCallback(
    (documentId) => {
      const current = info.find((element) => element.separation === documentId);
      setDocumentId(currentDocumentId && currentDocumentId === documentId ? '' : documentId);
      // setInform(current.inform);
      navigate(`/regulatory-documents/${current.separation}`);
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
            {isForm ? (
              <IoIosSearch style={{ display: 'none' }} />
            ) : (
              <SearchService style={{ width: '80%' }} onClick={() => handleForm()}>
                <p>Поиск по регламинтирующим документам</p>
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
            {message && renderResult()}
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
              {isForm ? (
                <IoIosSearch style={{ display: 'none' }} />
              ) : (
                <SearchService style={{ width: '80%' }} onClick={() => handleForm()}>
                  <p>Поиск по регламинтирующим документам</p>
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
              {message && renderResult()}
              {inform &&
                  inform.map((el) => (
                  <BlockBtn key={el._id}>
                    <a href={el.link} target={'_blank'}>
                      {el.name}
                    </a>
                  </BlockBtn>
                ))}
            </ContainerInform>
          ) : (
            <ContainerInform>
              <Name>{name}</Name>
              {inform &&
                inform.map((el) => (
                  <BlockBtn key={el._id}>
                    <a href={el.link} target={'_blank'} rel="noopener">
                      {el.name}
                    </a>
                  </BlockBtn>
                ))}
            </ContainerInform>
          )}
        </DivBlocks>
      }
    />
  );
}
