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
import Menu from '../Menu';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { dataAnswer } from '../../../../assets/data/question-answer';
import DopFunctionService from '../../../services/DopFunction';
import { useLocation, useNavigate } from 'react-router';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import useMediaQuery from '../../../Home/parallax/useMediaQuery';
import ContainerContent from '../../../../components/Container';

export default function Information() {
  const isPhone = useMediaQuery('(max-width: 820px)');
  const { titleId } = useParams();
  const [searchParams] = useSearchParams();
  const questionId = searchParams.get('questionId');
  const [info, setInfo] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentTheme = useMemo(
    () => dataAnswer.find((element) => element.titleId === +titleId),
    [titleId]
  );

  const infoForSearch = dataAnswer[0].blockInform
    .concat(dataAnswer[1].blockInform)
    .concat(dataAnswer[2].blockInform)
    .concat(dataAnswer[3].blockInform)
    .concat(dataAnswer[4].blockInform);

  useEffect(() => {
    if (questionId) {
      const currentBlockInfo = infoForSearch.filter(
        (blockInfo) => blockInfo.questionId === +questionId
      );
      setInfo(currentBlockInfo);
    } else {
      setInfo(infoForSearch);
    }
    //not add infoForSearch!!
  }, [questionId]);
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

  infoForSearch.map((card) => {
    if (card.question.includes(message)) {
      result.push(card);
    }
    return null;
  });

  const renderResult = () => {
    return (
      <BlockSearchService>
        {result.length ? (
          result.map((element) => {
            return (
              <div key={element.questionId}>
                <NavLink
                  style={{ margin: '20px auto' }}
                  to={`${pathname}?questionId=${element.questionId}`}
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
    setInfo(currentTheme?.blockInform);
    navigate('/feedback/question-answer/1');
  };

  const handleInsideClickPhone = (event) => {
    event.stopPropagation();
    setIsForm(false);
    setMessage('');
    setInfo(infoForSearch);
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
            <Menu />
          </div>
          {isPhone ? (
            <ContainerInform>
              {info.length
                ? info.map((el) => (
                    <DopFunctionService
                      classname={'question-answer'}
                      key={el.questionId}
                      inform={el.answer}
                      nameDescription={el.question}
                    />
                  ))
                : infoForSearch.map((el) => (
                    <DopFunctionService
                      classname={'question-answer'}
                      key={el.questionId}
                      inform={el.answer}
                      nameDescription={el.question}
                    />
                  ))}
            </ContainerInform>
          ) : (
            <ContainerInform>
              {titleId && <Name>{currentTheme?.title}</Name>}
              <>
                {info.length &&
                  info.map((el) => (
                    <DopFunctionService
                      key={el.questionId}
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
