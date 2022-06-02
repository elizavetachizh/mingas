import React, { useCallback } from 'react';
import { Container, Name } from './styles';
import { useNavigate } from 'react-router';
import ProductionTechnicalManagement from '../../../pages/company/managment/Subdivisions/ProductionTechnicalManagement';
import { Route } from 'react-router-dom';
import { log } from 'util';

export default function ModalSubdivision({ links }) {
  const navigate = useNavigate();

  const onMainPageBtnClick = useCallback((e) => {
    {
      links.map((link) => {
        {
          navigate(`/company/management/production-technical-management`);
          // console.log('ODIC');
          // console.log(links);
          alert(link);
        }
      });
      // console.log(e.target);
      // console.log('ODIC');
      // console.log(links);
      // navigate(`/${links}`);
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
