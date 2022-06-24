import React, { useState } from 'react';
import { Button, ButtonForms, HeaderBtnFeedback } from '../../styles';
import ApplicationForVerificationOfGasMeters from '../ApplicationForVerificationOfGasMeters';
import ApplicationForOrderingCylinders from '../ApplicationForOrderingCylinders';
import ApplicationForRepairOfGasUsingEquipment from '../ApplicationForRepairOfGas-usingEquipment';
import ApplicationForTheIssuanceOfTechnicalSpecifications from '../ApplicationForTheIssuanceofTechnicalSpecifications';
import ApplicationForGasificationOfResidentialGardenHouse from '../ApplicationForGasificationOfResidentialGardenHouse';
import ApplicationToCallRepresentativeOfGasSupplyOrganization from '../ApplicationToCallRepresentativeOfGasSupplyOrganization';
import ProvidingGasMeterReadings from '../ProvidingGasMeterReadings';
import { Container } from '../../../Home/News/styles';
import TitleFun from '../../../../components/title';
import TitleForHome from '../../../../components/TitleForHome';
const styledTitle = {
  margin: '0',
};
export default function HeaderRequests() {
  const [active, setActive] = useState('ApplicationForTheIssuanceOfTechnicalSpecifications');
  return (
    <Container backgroundColor={'gray'}>
      <TitleForHome style={styledTitle} color={'blue'} infoTitle={'Оставить онлайн-заявку'} />
      <ButtonForms>
        <HeaderBtnFeedback>
          <Button
            onClick={() => {
              setActive('ApplicationForTheIssuanceOfTechnicalSpecifications');
            }}
          >
            Заявка на выдачу ТУ
          </Button>
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
        {active === 'ApplicationForVerificationOfGasMeters' && (
          <ApplicationForVerificationOfGasMeters />
        )}
        {active === 'ApplicationForOrderingCylinders' && <ApplicationForOrderingCylinders />}
        {active === 'ApplicationForRepairOfGasUsingEquipment' && (
          <ApplicationForRepairOfGasUsingEquipment />
        )}
        {active === 'ProvidingGasMeterReadings' && <ProvidingGasMeterReadings />}
        {active === 'ApplicationForGasificationOfResidentialGardenHouse' && (
          <ApplicationForGasificationOfResidentialGardenHouse />
        )}
        {active === 'ApplicationToCallRepresentativeOfGasSupplyOrganization' && (
          <ApplicationToCallRepresentativeOfGasSupplyOrganization />
        )}
        {active === 'ApplicationForTheIssuanceOfTechnicalSpecifications' && (
          <ApplicationForTheIssuanceOfTechnicalSpecifications />
        )}
      </ButtonForms>
    </Container>
  );
}
