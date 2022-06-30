import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import { ContainerServices, Imagecard, Textcard } from "../dataComponents/styles";

export default function LinkServicesForLegalEntities({ img, nameCard }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback((nameCard) => {
    navigate(`/services/legal-entities/${nameCard}`);

  }, []);


  return (
    <ContainerServices onClick={() => handlerLinkClick(nameCard)}>
      <Imagecard src={require(`../../../../assets/icons_services/${img}.png`)} />
      <Textcard>{nameCard}</Textcard>
    </ContainerServices>
  );
}
