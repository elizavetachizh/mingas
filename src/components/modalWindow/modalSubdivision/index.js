import React, { useCallback } from 'react';
import { Container, Name } from './styles';
import { useNavigate } from 'react-router';
export default function ModalSubdivision({ links, linksId }) {
  const navigate = useNavigate();
  const handlerLinkClick = useCallback(
    (linkId) => {
      if (linksId) {
        const current = links.find((element) => element === linkId);
        navigate(`/company/management/${linksId}?id=${current}`);
        console.log(current);
        links.map((el) => console.log(el.index));
        console.log(links.index);
        window.scrollTo(0, 0);
      }
    },
    [links, linksId, navigate]
  );
  return (
    <Container>
      {links.map((link) => (
        <Name key={link.index} onClick={() => handlerLinkClick(link)}>
          {link}
        </Name>
      ))}
    </Container>
  );
}
