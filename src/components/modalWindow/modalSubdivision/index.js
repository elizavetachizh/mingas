import React, { useCallback } from 'react';
import { Container, Name } from './styles';
import { push } from 'connected-react-router';

import { useDispatch } from 'react-redux';
import { useLocation, useMatch } from 'react-router';
import { Route, Router, Routes } from 'react-router-dom';
import ProductionTechnicalManagement from '../../../pages/company/managment/Subdivisions/ProductionTechnicalManagement';
import ServicesForLegalEntities from '../../../pages/services/servicesForLegalEntities';

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
    <div>
      <Routes>
        <Route
          path="/ProductionTechnicalManagement"
          component={<ProductionTechnicalManagement></ProductionTechnicalManagement>}
        ></Route>
      </Routes>
      <Container>
        {links.map((link) => (
          <Name to={'/company/management/ProductionTechnicalManagement'}>{link}</Name>
        ))}
      </Container>
    </div>
  );
}
