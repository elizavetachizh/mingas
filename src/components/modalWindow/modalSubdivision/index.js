import React, { useCallback } from 'react';
import { Container, Name } from './styles';
import { push } from 'connected-react-router';

import { useDispatch } from 'react-redux';
import { useLocation, useMatch } from 'react-router';

export default function ModalSubdivision({ links }) {
  // const { url } = useMatch('/');
  // console.log(`url ${url}`);
  // const dispatch = useDispatch();
  // console.log(`dispatch ${dispatch}`);
  // const { search } = useLocation();
  // console.log(`search ${search}`);
  // const onLinkClick = useCallback(() => {
  //   console.log(url);
  //   // dispatch(push(`${url}/services/${search}`));
  // }, [dispatch, url, search]);
  return (
    <Container>
      {links.map((link) => (
        <Name href={link}>{link}</Name>
      ))}
    </Container>
  );
}
