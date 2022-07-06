import React, { useCallback } from "react";
import { Name } from '../../servicesList/styles';
import { BtnLink } from './styles';
import { useNavigate } from "react-router";

export default function DopFunctionalHeader({ nameCard }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback((nameCard) => {
    navigate(`/services/${nameCard}`);
    console.log(nameCard);
  }, []);

  return (
    <BtnLink onClick={handlerLinkClick(nameCard)}>
      {nameCard}
    </BtnLink>
  );
}
