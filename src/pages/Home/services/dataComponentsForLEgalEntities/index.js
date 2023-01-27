import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ContainerServices, Imagecard, Textcard } from '../dataComponents/styles';

export default function LinkServicesForLegalEntities({nameCard, cardId }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback(() => {
    navigate(`/services-legal-entities/${cardId}`);
  }, [cardId, navigate]);

  return (
    <ContainerServices onClick={() => handlerLinkClick(nameCard)}>
      <Imagecard alt={''} src={require('../../../../assets/icons_services/62.png')} />
      <Textcard>{nameCard}</Textcard>
    </ContainerServices>
  );
}
