import React, { useCallback } from 'react';
import { DivServicesList, DivInformService, Image, Name } from '../../servicesList/styles';
import { useNavigate } from 'react-router';

export default function ServicesList({ imgCard, nameCard }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback((nameCard) => {
    navigate(`/services/legal-entities/${nameCard}`);
  }, []);
  return (
    <DivServicesList to={`/services/legal-entities/${nameCard}`}>
      <Image src={require(`../../../../assets/icons_services/${imgCard}.png`)} />
      <DivInformService>
        <Name>{nameCard}</Name>
      </DivInformService>
    </DivServicesList>
  );
}
