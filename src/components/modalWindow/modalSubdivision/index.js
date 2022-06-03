import React, { useCallback, useState } from 'react';
import { Container, Name } from './styles';
import { useNavigate } from 'react-router';
import ProductionTechnicalManagement from '../../../pages/company/managment/Subdivisions/ProductionTechnicalManagement';
import { Route } from 'react-router-dom';
import { log } from 'util';

export default function ModalSubdivision({ links }) {
  const navigate = useNavigate();
  const [currentLink, setCurrentLink] = useState({});
  const handlerLinkClick = useCallback((link) => {
    setCurrentLink(link);
  }, []);
  const onMainPageBtnClick = useCallback((e) => {
    {
      links.map((link) => {
        {
          navigate(`/company/management/${link}`);
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
        <ProductionTechnicalManagement currentLink={links.currentLink} />
      </Container>
    </div>
  );
}
