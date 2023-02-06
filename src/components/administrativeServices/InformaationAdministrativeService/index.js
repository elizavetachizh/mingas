import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DopFunctional from './DopFunctional';
import {
  DivBlocks,
  ContainerInform,
  BlockSearch,
  SearchService,
  ContainerFormSearchForService,
  BlockSearchService,
} from './styles';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router';
import ContainerContent from '../../Container';
import axios from 'axios';
import { API } from '../../../backend';

export default function InformationAdministrativeService() {
  const { pathname } = useLocation();
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/administration`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  const [isForm, setIsForm] = useState(false);
  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };
  const [message, setMessage] = useState('');
  const result = [];

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  {
    info.map((card) => {
      if (card.uniqueName.includes(message)) {
        result.push(card);
      }
      return null;
    });
  }

  const renderResult = () => {
    return (
      <BlockSearchService>
        {result.length ? (
          result.map((element) => {
            return (
              <div key={element._id}>
                <NavLink style={{ margin: '20px auto' }} to={`${pathname}?linkId=${element._id}`}>
                  {element.uniqueName}
                </NavLink>
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
    setInfo(info);
    navigate('/services/administrative-services');
  };
  return (
    <ContainerContent
      name={'Административные услуги'}
      content={
        <>
          {' '}
          <BlockSearch>
            {isForm ? (
              <IoIosSearch style={{ display: 'none' }} />
            ) : (
              <SearchService onClick={() => handleForm()}>
                <p>Поиск по административным услугам</p>
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
                    placeholder="Введите название административной процедуры"
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
          </BlockSearch>
          <DivBlocks>
            <ContainerInform>
              <h3>
                УП «МИНГАЗ» осуществляет административные процедуры в соответствии с{' '}
                <a href={'https://etalonline.by/document/?regnum=h10800433&q_id=5918245'}>
                  Законом Республики Беларусь от 28 октября 2008 г. № 433-З
                </a>{' '}
                «Об основах административных процедур».
              </h3>
              <h2>Жилищные правоотношения</h2>
              {info.map((el) => {
                if (el.type === '1') {
                  if (el.typeAdministrativeService === 'Жилищные правоотношения') {
                    return (
                      <>
                        <DopFunctional
                          id={el._id}
                          key={el._id}
                          uniqueName={el.uniqueName}
                          maximumImplementationPeriod={el.maximumImplementationPeriod}
                          certificateValidityPeriod={el.certificateValidityPeriod}
                          boardSize={el.boardSize}
                          documents={el.documents}
                          contactInform={el.contactInform}
                        />
                      </>
                    );
                  }
                }
              })}
              <>
                <h2>Газоснабжение</h2>
                {info.map((el) => {
                  if (el.type === '1') {
                    if (el.typeAdministrativeService === 'Газоснабжение') {
                      return (
                        <>
                          <DopFunctional
                            id={el._id}
                            key={el._id}
                            uniqueName={el.uniqueName}
                            maximumImplementationPeriod={el.maximumImplementationPeriod}
                            certificateValidityPeriod={el.certificateValidityPeriod}
                            boardSize={el.boardSize}
                            documents={el.documents}
                            contactInform={el.contactInform}
                          />
                        </>
                      );
                    }
                  }
                })}
              </>
              <>
                <h2>Другое</h2>
                {info.map((el) => {
                  if (el.type === '1') {
                    if (el.typeAdministrativeService === 'Другое') {
                      return (
                        <>
                          <DopFunctional
                            id={el._id}
                            key={el._id}
                            uniqueName={el.uniqueName}
                            maximumImplementationPeriod={el.maximumImplementationPeriod}
                            certificateValidityPeriod={el.certificateValidityPeriod}
                            boardSize={el.boardSize}
                            documents={el.documents}
                            contactInform={el.contactInform}
                          />
                        </>
                      );
                    }
                  }
                })}
              </>
              <div>
                <p>
                  [1] Нумерация административных процедур соответствует нумерации таких
                  административных процедур в перечне административных процедур, осуществляемых
                  государственными органами и иными организациями по заявлениям граждан,
                  утвержденном
                  <a href={'https://etalonline.by/document/?regnum=p31000200&q_id=5917741'}>
                    Указом Президента Республики Беларусь от 26 апреля 2010 г. № 200
                  </a>
                  .
                </p>
                <p>
                  [2] Заявление подается в произвольной форме на белорусском и (или) русском языках
                  и должно содержать:{' '}
                </p>
                <ul>
                  <li>наименование уполномоченного органа, в который подается заявление;</li>
                  <li>
                    сведения о заинтересованном лице: фамилия, собственное имя, отчество (если
                    таковое имеется), место жительства (место пребывания);
                  </li>
                  <li>
                    наименование административной процедуры, за осуществлением которой обращается
                    заинтересованное лицо;
                  </li>
                  <li>
                    перечень документов и (или) сведений (при их наличии), представляемых вместе с
                    заявлением заинтересованного лица;
                  </li>
                  <li>подпись гражданина либо подпись представителя заинтересованного лица.</li>
                </ul>
              </div>
            </ContainerInform>
          </DivBlocks>
        </>
      }
    />
  );
}
