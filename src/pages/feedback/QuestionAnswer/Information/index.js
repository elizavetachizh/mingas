import {
  BlockSearch,
  BlockSearchService,
  ContainerFormSearchForService,
  ContainerInform,
  DivBlocks,
  SearchService,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { Name } from '../../../../components/administrativeServices/Header/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import useMediaQuery from '../../../Home/parallax/useMediaQuery';
import ContainerContent from '../../../../components/Container';
import axios from 'axios';
import { API } from '../../../../backend';
import Menu from '../Menu';
import DopFunctionService from '../../../services/DopFunction';

export default function Information() {
  const isPhone = useMediaQuery('(max-width: 820px)');
  const { titleId } = useParams();
  const [info, setInfo] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const questionId = searchParams.get('questionId');
  const [currentServiceID, setServiceID] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/themes`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    console.log(data);
    const current = data.find((element) => element._id === titleId);
    setInfo(current?.questionAnswer);
    console.log(current);
    console.log(questionId);
    if (questionId) {
      const currentBlockInfo = info?.filter((blockInfo) => blockInfo._id === questionId);
      console.log(currentBlockInfo);
      setInfo(currentBlockInfo);
      if (!info?.filter((el) => el._id === questionId)) {
        setServiceID(currentServiceID && currentServiceID === questionId ? '' : questionId);
        const currentBlockInfo = info?.filter((blockInfo) => blockInfo._id === currentServiceID);
        console.log(currentServiceID);
        console.log(questionId);
        console.log(currentBlockInfo);
        setInfo(currentBlockInfo);
      } else {
        console.log(currentBlockInfo)
        setInfo(currentBlockInfo);
      }
    }
  }, [data, questionId, titleId]);
  const currentTheme = useMemo(
    () => data.find((element) => element._id === titleId),
    [data, titleId]
  );
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

  const renderResult = () => {
    return (
      <BlockSearchService>
        {result.length ? (
          result.map((element) => {
            return (
              <div key={element._id}>
                <NavLink
                  style={{ margin: '20px auto' }}
                  to={`${pathname}?questionId=${element._id}`}
                >
                  {element.question}
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
    setInfo(currentTheme?.questionAnswer);
    navigate('/feedback/question-answer/1');
  };

  const handleInsideClickPhone = (event) => {
    event.stopPropagation();
    setIsForm(false);
    setMessage('');
    // setInfo(formsearch);
  };
  return (
    <ContainerContent
      name={'Часто задаваемые вопросы'}
      content={
        <DivBlocks>
          <div style={{ width: '80%' }}>
            <BlockSearch className={'question-answer'}>
              {isForm ? (
                <IoIosSearch style={{ display: 'none' }} />
              ) : (
                <SearchService style={{ width: '80%' }} onClick={() => handleForm()}>
                  <p>Поиск по часто задаваемым вопросам</p>
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
                      placeholder="Введите интересующий вас вопрос"
                      onChange={handleChange}
                      type={'text'}
                    />
                    <IoMdClose
                      style={{ width: '60px' }}
                      color={'black'}
                      onClick={isPhone ? handleInsideClickPhone : handleInsideClick}
                    />
                  </form>
                </ContainerFormSearchForService>
              )}
              {message && renderResult()}
            </BlockSearch>
            <Menu dataAnswer={data} />
          </div>
          <ContainerInform>
            {titleId && <Name>{currentTheme?.title}</Name>}
            <>
              {!!info?.length &&
                info.map((el) => (
                  <DopFunctionService
                    key={el._id}
                    inform={el.answer}
                    nameDescription={el.question}
                  />
                ))}
            </>
          </ContainerInform>
        </DivBlocks>
      }
    />
  );
}
