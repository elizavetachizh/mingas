import React, { useCallback } from 'react';
import { DivServices } from '../styles';
import { dataLegalEntities } from '../../../assets/data/data_service_legalEntities_general';
import ServicesList from './serviceList';
import { useNavigate } from 'react-router';
import ContainerContent from '../../../components/Container';

export default function ServicesForLegalEntities() {
  const navigate = useNavigate();
  const handlerServiceClick = useCallback(
    (descriptionLegalID) => {
      const current = dataLegalEntities.find((element) => element.serviceId === descriptionLegalID);
      navigate(`/services-legal-entities/${current.serviceId}`);
    },
    [navigate]
  );
  return (
    <ContainerContent
      name={'Услуги для бизнеса'}
      content={
        <DivServices>
          {dataLegalEntities.map((element) => (
            <ServicesList
              onClick={() => {
                handlerServiceClick(element.serviceId);
              }}
              key={element.serviceId}
              serviceId={element.serviceId}
              imgCard={element.cardImg}
              nameCard={element.nameCard}
              description={element.description}
            />
          ))}
        </DivServices>
      }
    />
  );
}
