import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import {
  BlockBtn,
  ContainerBtnIcon,
  DivOpen,
  Name,
} from '../../../../components/administrativeServices/Header/styles';
import { dataAnswer } from '../../../../assets/data/question-answer';
import DopFunctionalHeader from '../../../services/NaturalGas/DopFunctionalHeader';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import axios from 'axios';

export default function Menu() {
  const navigate = useNavigate();
  const [currentServiceID, setServiceID] = useState(null);
  const [links, setLinks] = useState([]);
  const { pathname } = useLocation();

  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = 'http://localhost/admin/themes';
    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        {
          console.log(e);
        }
      });
  }, [setData]);

  const handlerLinkClick = useCallback(
    (titleId) => {
      const current = data.find((element) => element._id === titleId);
      navigate(`/feedback/question-answer/${current._id}`);
      setServiceID(currentServiceID && currentServiceID === titleId ? '' : titleId);
      setLinks(current.questionAnswer);
    },
    [currentServiceID, data, navigate]
  );
  // useEffect(() => {
  //   data.map((el) => {
  //     console.log(el.questionAnswer);
  //   });
  // }, [data]);
  const handlerLinkClickUniqueName = useCallback(
    (questionId) => {
      navigate(`${pathname}?questionId=${questionId}`);
    },
    [pathname, navigate]
  );

  return (
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
  );
}
