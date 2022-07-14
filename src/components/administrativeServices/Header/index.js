import { DivButton, HeaderCompanyDiv } from '../../../pages/concats/headerContacts/styles';
import React, { useCallback, useState } from 'react';
import { data } from '../../../assets/dataNavLinkAdministrativeServices';
import { useLocation, useNavigate } from 'react-router';
import { Button, DivOpen, ContainerBtnIcon, BlockBtn, Name } from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function HeaderAdministrativeServices() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [links, setLinks] = useState([]);
  const [currentServiceID, setServiceID] = useState('');

  const handlerLinkClick = useCallback((serviceID) => {
    navigate(`/services/administrative-services/${serviceID}`);
  }, []);
  const handlerLinkClickUniqueName = useCallback(
    (linkId) => {
      navigate(`${pathname}?linkId=${linkId}`);
    },
    [pathname]
  );

  const animate = useCallback(
    (serviceID) => {
      const current = data.find((element) => element.serviceID === serviceID);
      setLinks(current.links);
      setServiceID(currentServiceID ? '' : serviceID);
    },
    [currentServiceID]
  );

  return (
    <HeaderCompanyDiv>
      <DivButton>
        <Name>Административные услуги</Name>
        {data.map((el) => (
          <BlockBtn>
            <ContainerBtnIcon>
              <Button onClick={() => handlerLinkClick(el.serviceID)} key={el.serviceID}>
                {el.serviceName}
              </Button>
              {currentServiceID === el.serviceID ? (
                <IoIosArrowUp onClick={() => animate(el.serviceID)} />
              ) : (
                <IoIosArrowDown onClick={() => animate(el.serviceID)} />
              )}
            </ContainerBtnIcon>
            <DivOpen className={currentServiceID === el.serviceID && `shake`}>
              {links.map((link) => (
                <button
                  onClick={() => handlerLinkClickUniqueName(link.linkId)}
                  key={link.serviceID}
                >
                  {link.linkName}
                </button>
              ))}
            </DivOpen>
          </BlockBtn>
        ))}
      </DivButton>
    </HeaderCompanyDiv>
  );
}
