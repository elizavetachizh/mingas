import React from 'react';
import { AdministrativeServicesForBusines } from '../../assets/data/AdministrativeServicesForBusines';
import { ContainerInform } from '../administrativeServices/InformaationAdministrativeService/styles';
import DopFunctional from '../administrativeServices/InformaationAdministrativeService/DopFunctional';
import ContainerContent from '../Container';

export default function AdministartiveServicesForLegal() {
  return (
    <ContainerContent
      name={'Административные процедуры для юридических лиц'}
      content={
        <ContainerInform>
          {AdministrativeServicesForBusines.map((el) => (
            <DopFunctional
              key={el.uniqueName}
              uniqueName={el.uniqueName}
              maximumImplementationPeriod={el.maximumImplementationPeriod}
              certificateValidityPeriod={el.certificateValidityPeriod}
              boardSize={el.boardSize}
              documents={el.documents}
              contactInform={el.contactInform}
            />
          ))}
        </ContainerInform>
      }
    />
  );
}
