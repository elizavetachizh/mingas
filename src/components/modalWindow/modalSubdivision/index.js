import React, { useCallback } from 'react';
import { Container, Name } from './styles';
import { useNavigate } from 'react-router';
export default function ModalSubdivision({ links }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback((linkId) => {
    const current = links.find((element) => element.id === linkId);
    navigate(`/company/management/${current.id}`);
    console.log(current);
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
