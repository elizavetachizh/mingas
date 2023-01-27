import React, { useCallback } from 'react';
import { ContainerServices, Imagecard, Textcard } from './styles';
import { useNavigate } from 'react-router';

export default function LinkServices({nameCard, cardId }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback(() => {
    navigate(`/services/${cardId}`);
  }, [cardId, navigate]);

  return (
    <ContainerServices onClick={() => handlerLinkClick(nameCard)}>
      <Imagecard alt={''} src={require('../../../../assets/icons_services/62.png')} />
      <Textcard>{nameCard}</Textcard>
    </ContainerServices>
  );
}
