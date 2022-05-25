import React, { useCallback } from 'react';
import { Container, Name } from './styles';
import { useNavigate } from 'react-router';
import ProductionTechnicalManagement from '../../../pages/company/managment/Subdivisions/ProductionTechnicalManagement';

export default function ModalSubdivision({ links }) {
  const navigate = useNavigate();
  const onMainPageBtnClick = useCallback(() => {
    {
      links.map((link) => {
        {
          navigate(`/${link}`);
          console.log('ODIC');
        }
      });
    }
  }, []);
  return (
    <div>
      <Container>
        {links.map((link) => (
          <Name onClick={onMainPageBtnClick}>{link}</Name>
        ))}
        <ProductionTechnicalManagement titleDepartment={links.titleDepartment} />
      </Container>
    </div>
  );
}
