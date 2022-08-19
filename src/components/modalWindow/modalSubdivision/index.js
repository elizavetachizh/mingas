import React, { useCallback } from 'react';
import { Container, Name } from './styles';
import { useNavigate } from 'react-router';
export default function ModalSubdivision({ links, linksId }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback(
    (linkId) => {
      if (linksId) {
        const current = links.find((element) => element.id === +linkId);
        navigate(`/company/management/${linksId}?id=${current.id}`);
      }
    },
    [links, linksId]
  );
  return (
    <div>
      <Container>
        {links.map((link) => (
          <Name onClick={() => handlerLinkClick(link.id)}>{link.name}</Name>
        ))}
      </Container>
    </div>
  );
}
