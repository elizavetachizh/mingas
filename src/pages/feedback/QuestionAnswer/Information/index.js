import {
  BlockSearch,
  BlockSearchService,
  ContainerFormSearchForService,
  ContainerInform,
  DivBlocks,
  SearchService,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import {
  BlockBtn,
  ContainerBtnIcon,
  DivOpen,
  Name,
} from '../../../../components/administrativeServices/Header/styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch, IoMdClose } from 'react-icons/io';
import useMediaQuery from '../../../Home/parallax/useMediaQuery';
import ContainerContent from '../../../../components/Container';
import axios from 'axios';
import { API } from '../../../../backend';
import DopFunctionService from '../../../services/DopFunction';
import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import DopFunctionalHeader from '../../../services/NaturalGas/DopFunctionalHeader';

export default function Information() {
  const isPhone = useMediaQuery('(max-width: 820px)');
  const { titleId } = useParams();
  const [info, setInfo] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentServiceID, setServiceID] = useState(null);
  const [links, setLinks] = useState([]);
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
  }, [setData]);

  const currentTheme = useMemo(() => data.find((element) => element._id === titleId), [titleId]);

  const handlerLinkClick = useCallback(
    (titleId) => {
      const current = data.find((element) => element._id === titleId);
      navigate(`/feedback/question-answer/${current._id}`);
      setServiceID(currentServiceID && currentServiceID === titleId ? '' : titleId);
      setLinks(current.questionAnswer);
      setInfo(current.questionAnswer);
    },
    [currentServiceID, data, navigate]
  );

  const handlerLinkClickUniqueName = useCallback(
    (questionId) => {
      navigate(`${pathname}?questionId=${questionId}`);
      const currentBlockInfo = links.filter((questionAnswer) => questionAnswer._id === questionId);
      setInfo(currentBlockInfo);
    },
    [navigate, pathname, data]
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
  data.map((el) => {
    el.questionAnswer.map((card) => {
      if (card.question.includes(message)) {
        result.push(card);
      }
      return null;
    });
  });

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
    navigate('/feedback/question-answer/63930a954fe167e2981cc2e1');
  };

  const handleInsideClickPhone = (event) => {
    event.stopPropagation();
    setIsForm(false);
    setMessage('');
    setInfo(data);
  };
  return (
    <ContainerContent
      name={'Часто задаваемые вопросы'}
      content={
        <DivBlocks>
          <div style={{ width: '80%' }}>
            {' '}
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
            <HeaderCompanyDiv style={{ width: '80%', margin: '0 auto' }}>
              <Name>Тема</Name>
              {data.map((element) => (
                <BlockBtn key={element._id}>
                  <ContainerBtnIcon>
                    <DopFunctionalHeader
                      nameCard={element.title}
                      className={currentServiceID === element._id ? 'background' : ''}
                      onClick={() => handlerLinkClick(element._id)}
                    />
                    {currentServiceID === element._id ? (
                      <IoIosArrowUp onClick={() => handlerLinkClick(element._id)} />
                    ) : (
                      <IoIosArrowDown onClick={() => handlerLinkClick(element._id)} />
                    )}
                  </ContainerBtnIcon>
                  <DivOpen className={currentServiceID === element._id && `shake`}>
                    {links.map((link) => (
                      <button onClick={() => handlerLinkClickUniqueName(link._id)} key={link._id}>
                        {link.question}
                      </button>
                    ))}
                  </DivOpen>
                </BlockBtn>
              ))}
            </HeaderCompanyDiv>
          </div>
          {isPhone ? (
            <ContainerInform>
              {data.map((el) =>
                el.questionAnswer.map((card) => (
                  <DopFunctionService
                    key={card._id}
                    inform={card.answer}
                    nameDescription={card.question}
                  />
                ))
              )}
            </ContainerInform>
          ) : (
            <ContainerInform>
              {titleId && <Name>{currentTheme?.title}</Name>}
              <>
                {info.length &&
                  info.map((el) => (
                    <DopFunctionService
                      key={el._id}
                      inform={el.answer}
                      nameDescription={el.question}
                    />
                  ))}
              </>
            </ContainerInform>
          )}
        </DivBlocks>
      }
    />
  );
}
