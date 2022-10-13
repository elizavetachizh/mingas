import { HeaderCompanyDiv } from '../../../pages/concats/headerContacts/styles';
import React, { useCallback, useState } from 'react';
import { data } from '../../../assets/data/dataNavLinkAdministrativeServices';
import { useLocation, useNavigate } from 'react-router';
import { Button, DivOpen, ContainerBtnIcon, BlockBtn, Name } from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import SearchForDepartments from '../../../pages/company/managment/SearchForDepartments';

export default function HeaderAdministrativeServices() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [links, setLinks] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const handlerLinkClick = useCallback(
    (serviceID) => {
      const current = data.find((element) => element.serviceID === serviceID);
      navigate(`/services/administrative-services/${current.serviceID}`);
      setServiceID(currentServiceID && currentServiceID === serviceID ? '' : serviceID);
      setLinks(current.links);
    },
    [currentServiceID]
  );
  const handlerLinkClickUniqueName = useCallback(
    (linkId) => {
      navigate(`${pathname}?linkId=${linkId}`);
      window.scrollTo(0, 0);
    },

    [pathname]
  );

  return (
    <HeaderCompanyDiv>
      <Name>Административные процедуры</Name>
      <SearchForDepartments />
      {data.map((el) => (
        <BlockBtn key={el.serviceID}>
          <ContainerBtnIcon>
            <Button
              className={currentServiceID === el.serviceID ? 'background' : ''}
              onClick={() => handlerLinkClick(el.serviceID)}
            >
              {el.serviceName}
            </Button>
            {currentServiceID === el.serviceID ? (
              <IoIosArrowUp onClick={() => handlerLinkClick(el.serviceID)} />
            ) : (
              <IoIosArrowDown onClick={() => handlerLinkClick(el.serviceID)} />
            )}
          </ContainerBtnIcon>
          <DivOpen className={currentServiceID === el.serviceID && `shake`}>
            {links.map((link) => (
              <button onClick={() => handlerLinkClickUniqueName(link.linkId)} key={link.serviceID}>
                {link.linkName}
              </button>
            ))}
          </DivOpen>
        </BlockBtn>
      ))}
    </HeaderCompanyDiv>
  );
}
