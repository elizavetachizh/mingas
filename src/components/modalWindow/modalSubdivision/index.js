import React from 'react';
import { Container, Name } from './styles';
import { Route, Routes } from 'react-router';
import ProductionTechnicalManagement from '../../../pages/company/managment/Subdivisions/ProductionTechnicalManagement';

export default function ModalSubdivision({ links }) {
  return (
    <div>
      <Routes>
        <Route path="production-technical-management" element={<ProductionTechnicalManagement />} />
      </Routes>
      <Container>
        {links.map((link) => (
          <Name to="production-technical-management">{link}</Name>
        ))}
      </Container>
    </div>
  );
}
