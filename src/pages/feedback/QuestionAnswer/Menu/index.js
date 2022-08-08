import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import {
  BlockBtn,
  ContainerBtnIcon,
  DivOpen,
  Name,
} from '../../../../components/administrativeServices/Header/styles';
import { dataAnswer } from '../../../../assets/data/question-answer';
import DopFunctionalHeader from '../../../services/NaturalGas/DopFunctionalHeader';
import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Menu() {
  const navigate = useNavigate();
  const [currentServiceID, setServiceID] = useState(null);
  const [links, setLinks] = useState([]);
  const { pathname } = useLocation();
  const handlerLinkClick = useCallback(
    (titleId) => {
      const current = dataAnswer.find((element) => element.titleId === titleId);
      navigate(`/feedback/question-answer/${current.titleId}`);
    },
    [currentServiceID]
  );

  const animate = useCallback(
    (blockInformID) => {
      const currentAnswer = dataAnswer.find((el) => el.titleId === blockInformID);
      setLinks(currentAnswer.blockInform);
      setServiceID(currentServiceID ? '' : blockInformID);
    },
    [currentServiceID]
  );

  const handlerLinkClickUniqueName = useCallback(
    (questionId) => {
      navigate(`${pathname}?questionId=${questionId}`);
    },
    [pathname]
  );

  return (
    <HeaderCompanyDiv>
      <Name>Тема</Name>
      {dataAnswer.map((element) => (
        <BlockBtn>
          <ContainerBtnIcon>
            <DopFunctionalHeader
              nameCard={element.title}
              className={currentServiceID === element.titleId ? 'background' : ''}
              onClick={() => handlerLinkClick(element.titleId)}
              key={element.titleId}
            />
            {currentServiceID === element.titleId ? (
              <IoIosArrowUp onClick={() => animate(element.titleId)} />
            ) : (
              <IoIosArrowDown onClick={() => animate(element.titleId)} />
            )}
          </ContainerBtnIcon>
          <DivOpen className={currentServiceID === element.titleId && `shake`}>
            {links.map((link) => (
              <button
                onClick={() => handlerLinkClickUniqueName(link.questionId)}
                key={link.questionId}
              >
                {link.question}
              </button>
            ))}
          </DivOpen>
        </BlockBtn>
      ))}
    </HeaderCompanyDiv>
  );
}
