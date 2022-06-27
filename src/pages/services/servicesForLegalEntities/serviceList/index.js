import React, { useCallback } from 'react';
import { DivServicesList, DivInformService, Image, Name } from '../../servicesList/styles';
import { useNavigate } from 'react-router';

export default function ServicesList({ imgCard, nameCard, serviceId, description }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback((nameCard) => {
    navigate(`/services/legal-entities/${nameCard}`);
  }, []);
  return (
    <DivServicesList onClick={() => handlerLinkClick(nameCard)}>
      <Image src={require(`../../../../assets/icons_services/${imgCard}.png`)} />
      <DivInformService>
        <Name>{nameCard}</Name>
      </DivInformService>
    </DivServicesList>
  );
}
