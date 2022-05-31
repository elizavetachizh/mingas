import React, { useState } from 'react';
import { Button, DivButton, HeaderBtnFeedback } from '../../styles';
import ApplicationForVerificationOfGasMeters from '../ApplicationForVerificationOfGasMeters';
import ApplicationForOrderingCylinders from '../ApplicationForOrderingCylinders';
import ApplicationForRepairOfGasUsingEquipment from '../ApplicationForRepairOfGas-usingEquipment';
import ApplicationForTheIssuanceOfTechnicalSpecifications from '../ProvidingGasMeterReadings';
import ApplicationForGasificationOfResidentialGardenHouse from '../ApplicationForGasificationOfResidentialGarden)House';
import ApplicationToCallRepresentativeOfGasSupplyOrganization from '../ApplicationToCallRepresentativeOfGasSupplyOrganization';
import ProvidingGasMeterReadings from '../ProvidingGasMeterReadings';

export default function HeaderRequests() {
  const [active, setActive] = useState('ApplicationForVerificationOfGasMeters');
  return (
    <>
      <DivButton>
        <HeaderBtnFeedback>
          <Button
            onClick={() => {
              setActive('ApplicationForVerificationOfGasMeters');
            }}
          >
            Заявка на поверку счетчиков газа
          </Button>
          <Button
            onClick={() => {
              setActive('ApplicationForOrderingCylinders');
            }}
          >
            Заявка на заказ баллонов
          </Button>
          <Button
            onClick={() => {
              setActive('ApplicationForRepairOfGasUsingEquipment');
            }}
          >
            Заявка на ремонт газоиспользующего оборудования
          </Button>
          <Button
            onClick={() => {
              setActive('ApplicationForTheIssuanceOfTechnicalSpecifications');
            }}
          >
            Заявка на выдачу ТУ
          </Button>
          <Button
            onClick={() => {
              setActive('ApplicationForGasificationOfResidentialGardenHouse');
            }}
          >
            Заявка на газификацию жилого (садового) дома
          </Button>
          <Button
            onClick={() => {
              setActive('ApplicationToCallRepresentativeOfGasSupplyOrganization');
            }}
          >
            Заявка на вызов представителя газоснабжающей организации
          </Button>
          <Button
            onClick={() => {
              setActive('ProvidingGasMeterReadings');
            }}
          >
            Предоставление показаний счётчика газа
          </Button>
        </HeaderBtnFeedback>
        <hr />
      </DivButton>
      {active === 'ApplicationForVerificationOfGasMeters' && (
        <ApplicationForVerificationOfGasMeters />
      )}
      {active === 'ApplicationForOrderingCylinders' && <ApplicationForOrderingCylinders />}
      {active === 'ApplicationForRepairOfGasUsingEquipment' && (
        <ApplicationForRepairOfGasUsingEquipment />
      )}
      {active === 'ApplicationForTheIssuanceOfTechnicalSpecifications' && (
        <ApplicationForTheIssuanceOfTechnicalSpecifications />
      )}
      {active === 'ApplicationForGasificationOfResidentialGardenHouse' && (
        <ApplicationForGasificationOfResidentialGardenHouse />
      )}
      {active === 'ApplicationToCallRepresentativeOfGasSupplyOrganization' && (
        <ApplicationToCallRepresentativeOfGasSupplyOrganization />
      )}
      {active === 'ProvidingGasMeterReadings' && <ProvidingGasMeterReadings />}
    </>
  );
}
