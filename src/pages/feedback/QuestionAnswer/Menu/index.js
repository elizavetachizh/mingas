import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import {
  BlockBtn,
  ContainerBtnIcon,
  DivOpen,
  Name,
} from '../../../../components/administrativeServices/Header/styles';
import DopFunctionalHeader from '../../../services/NaturalGas/DopFunctionalHeader';
import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Menu({ dataAnswer }) {
  const navigate = useNavigate();
  const [currentServiceID, setServiceID] = useState();
  const [links, setLinks] = useState([]);
  const { pathname } = useLocation();

  const handlerLinkClick = useCallback(
    (titleId) => {
      const current = dataAnswer.find((element) => element._id === titleId);
      console.log(current.questionAnswer);
      navigate(`/feedback/question-answer/${current._id}`);
      setServiceID(currentServiceID && currentServiceID === titleId ? '' : titleId);
      setLinks(current.questionAnswer);
    },
    [currentServiceID, dataAnswer, navigate]
  );

  const handlerLinkClickUniqueName = useCallback(
    (questionId) => {
      navigate(`${pathname}?questionId=${questionId}`);
    },
    [pathname, navigate]
  );

  return (
    <HeaderCompanyDiv style={{ width: '80%', margin: '0 auto' }}>
      <Name>Тема</Name>
      {dataAnswer.map((element, index) => (
        <BlockBtn key={index}>
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
            {links.map((link, index) => (
              <button onClick={() => handlerLinkClickUniqueName(link._id)} key={index}>
                {link.question}
              </button>
            ))}
          </DivOpen>
        </BlockBtn>
      ))}
    </HeaderCompanyDiv>
  );
}
