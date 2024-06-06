import React from 'react';
import { DivServices } from '../../services/styles';
import { links } from '../../../assets/data/linksBranches';
import ServicesList from '../../services/servicesList';
import { useNavigate } from 'react-router';

export default function Branches() {
  const navigate = useNavigate();
  return (
      <DivServices style={{ margin: '0 auto', flexDirection:'column' }}>
        {links.map((element) => (
          <ServicesList className={"branches"}
            onClick={() => navigate(element.link)}
            key={element.id}
            serviceId={element.id}
            imgCard={element.cardImg}
            nameCard={element.name}
          />
        ))}
      </DivServices>
  );
}
