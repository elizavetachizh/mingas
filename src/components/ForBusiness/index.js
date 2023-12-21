import React from 'react';
import { useNavigate } from 'react-router';
import { DivServices } from '../../pages/services/styles';
import { linksForBusiness } from '../../assets/data/linksForBusines';
import ServicesList from '../../pages/services/servicesList';
import ContainerContent from '../Container';

export default function ForBusiness() {
  const navigate = useNavigate();
  return (
    <ContainerContent
      name={'Для бизнеса'}
      content={
        <DivServices>
          {linksForBusiness.map((element) => (
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
