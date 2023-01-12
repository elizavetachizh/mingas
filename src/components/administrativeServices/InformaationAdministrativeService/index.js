import { NavLink, useSearchParams } from 'react-router-dom';
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

export default function InformationAdministrativeService() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const linkId = searchParams.get('linkId');
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const [fullData, setFullData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost/admin/administration`)
      .then((res) => {
        setInfo(res.data);
        setFullData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);
  useEffect(() => {
    console.log(info);
  }, [info]);
  useEffect(() => {
    if (linkId) {
      const currentBlockInfo = info?.filter((blockInfo) => blockInfo._id === linkId);
      setInfo(currentBlockInfo);
    } else {
      setInfo(fullData);
    }
  }, [linkId]);
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
              {info.map((el) => {
                if (el.type === '1') {
                  return (
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
                  );
                }
              })}
            </ContainerInform>
          </DivBlocks>
        </>
      }
    />
  );
}
