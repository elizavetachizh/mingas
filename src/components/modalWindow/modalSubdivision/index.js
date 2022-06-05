import React, { useCallback } from 'react';
import { Container, Name } from './styles';
import { useNavigate } from 'react-router';

export default function ModalSubdivision({ links }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback((linkId) => {
    navigate(`/company/management/${linkId}`);
  }, []);
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
