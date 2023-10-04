import {
  BlockSearch,
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
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch, IoMdClose } from 'react-icons/io';
import useMediaQuery from '../../../Home/parallax/useMediaQuery';
import ContainerContent from '../../../../components/Container';
import DopFunctionService from '../../../services/DopFunction';
import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import DopFunctionalHeader from '../../../services/NaturalGas/DopFunctionalHeader';
import {
  useFetchQuestionAnswerByIdQuery,
  useFetchQuestionAnswerQuery,
} from '../../../../redux/services/questonAnswer';

export default function Information() {
  const isPhone = useMediaQuery('(max-width: 820px)');
  const { titleId } = useParams();
  const [key, setKey] = useState('');
  const { data: themes } = useFetchQuestionAnswerQuery({ key });
  const { data: themById } = useFetchQuestionAnswerByIdQuery(titleId);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isForm, setIsForm] = useState(false);
  const [info, setInfo] = useState([]);

  const handlerLinkClick = useCallback(
    (titleId) => {
      const current = themes?.find((element) => element._id === titleId);
      navigate(`/feedback/question-answer/${current._id}`);
      setInfo(current.questionAnswer);
    },
    [themes, navigate]
  );

  const handlerLinkClickUniqueName = useCallback(
    (questionId) => {
      navigate(`${pathname}?questionId=${questionId}`);
      const currentBlockInfo = themById?.questionAnswer?.filter(
        (questionAnswer) => questionAnswer._id === questionId
      );
      setInfo(currentBlockInfo);
    },
    [navigate, pathname, themById]
  );

  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };

  const handleSearch = useCallback((event) => {
    setKey(event.target.value);
  }, []);

  const handleInsideClick = (event) => {
    event.stopPropagation();
    setIsForm(false);
    setKey('');
  };

  const handleInsideClickPhone = (event) => {
    event.stopPropagation();
    setIsForm(false);
    setKey('');
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
                      onChange={handleSearch}
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
            </BlockSearch>
            <HeaderCompanyDiv style={{ width: '80%', margin: '0 auto' }}>
              <Name>Тема</Name>
              {themes?.map((element) => (
                <BlockBtn key={element._id}>
                  <ContainerBtnIcon>
                    <DopFunctionalHeader
                      nameCard={element.title}
                      className={titleId === element._id ? 'background' : ''}
                      onClick={() => handlerLinkClick(element._id)}
                    />
                    {titleId === element._id ? (
                      <IoIosArrowUp onClick={() => handlerLinkClick(element._id)} />
                    ) : (
                      <IoIosArrowDown onClick={() => handlerLinkClick(element._id)} />
                    )}
                  </ContainerBtnIcon>
                  <DivOpen className={titleId === element._id && `shake`}>
                    {themById?.questionAnswer?.map((link) => (
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
              {themById?.questionAnswer?.map((el) => (
                <DopFunctionService key={el._id} inform={el.answer} nameDescription={el.question} />
              ))}
            </ContainerInform>
          ) : (
            <ContainerInform>
              {titleId && <Name>{themById?.title}</Name>}
              <>
                {!!info?.length ? (
                  info?.map((el) => (
                    <DopFunctionService
                      classname={'question-answer'}
                      key={el._id}
                      inform={el.answer}
                      nameDescription={el.question}
                    />
                  ))
                ) : (
                  <p>Загрузка данных...</p>
                )}
              </>
            </ContainerInform>
          )}
        </DivBlocks>
      }
    />
  );
}
