import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import { ContainerServices, Imagecard, Textcard } from "../dataComponents/styles";

export default function LinkServicesForLegalEntities({ img, nameCard,cardId }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback(() => {
    navigate(`/services-legal-entities/${cardId}`);

  }, []);


  return (
    <ContainerServices onClick={() => handlerLinkClick(nameCard)}>
      <Imagecard src={require(`../../../../assets/icons_services/${img}.png`)} />
      <Textcard>{nameCard}</Textcard>
    </ContainerServices>
  );
}
