import { DivButton, HeaderCompanyDiv } from '../../../pages/concats/headerContacts/styles';
import React, { useCallback, useState } from "react";
import { data } from '../../../assets/dataNavLinkAdministrativeServices';
import { useNavigate } from "react-router";
import { Button } from "./styles";

console.log(data.map((el)=>(el.links)));
export default function HeaderAdministrativeServices() {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback((serviceID) => {
    navigate(`/services/administrative-services/${serviceID}`);
  }, []);
  const handlerLinkClickUniqueName = useCallback((uniqueName) => {
    navigate(`/services/administrative-services/${uniqueName}`);
  }, []);
  return (
    <HeaderCompanyDiv>
      <DivButton>
        {data.map((el) => (
        <div>  <Button onClick={() => handlerLinkClick(el.serviceID)} key={el}>
          {el.serviceName}
        </Button>
          {el.links.map((link)=>(
            <button onClick={() => handlerLinkClickUniqueName(link.uniqueName)} key={link} >{link.uniqueName}</button>
          ))}
        </div>
        ))}
      </DivButton>
    </HeaderCompanyDiv>
  );
}
