import React, { useCallback } from "react";
import { ContainerServices, Imagecard, Textcard } from './styles';
import { useNavigate } from "react-router";

export default function LinkServices({ img, nameCard }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback((nameCard) => {
    navigate(`/services/${nameCard}`);

  }, []);


  return (
    <ContainerServices onClick={() => handlerLinkClick(nameCard)}>
      <Imagecard src={require(`../../../../assets/icons_services/${img}.png`)} />
      <Textcard>{nameCard}</Textcard>
    </ContainerServices>
  );
}
