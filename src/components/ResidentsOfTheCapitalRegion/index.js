import React from 'react';
import { useNavigate } from 'react-router';
import { DivServices } from '../../pages/services/styles';
import { links } from '../../assets/data/linksToResidentsOfTheCapitalRegion';
import ServicesList from '../../pages/services/servicesList';
import ContainerContent from '../Container';

export default function ResidentsOfTheCapitalRegion() {
  const navigate = useNavigate();
  return (
    <ContainerContent
      name={'Жителям столичного региона'}
      content={
        <DivServices>
          {links.map((element) => (
            <ServicesList
              onClick={() => navigate(element.link)}
              key={element.id}
              serviceId={element.id}
              imgCard={element.cardImg}
              nameCard={element.name}
            />
          ))}
        </DivServices>
      }
    />
  );
}
