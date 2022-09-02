import React, { useState } from 'react';
import { Button, ButtonForms, HeaderBtnFeedback } from '../../styles';
import ApplicationForVerificationOfGasMeters from '../ApplicationForVerificationOfGasMeters';
import ApplicationForOrderingCylinders from '../ApplicationForOrderingCylinders';
import ApplicationForRepairOfGasUsingEquipment from '../ApplicationForRepairOfGas-usingEquipment';
import ApplicationForTheIssuanceOfTechnicalSpecifications from '../ApplicationForTheIssuanceofTechnicalSpecifications';
import ApplicationForGasificationOfResidentialGardenHouse from '../ApplicationForGasificationOfResidentialGardenHouse';
import ApplicationToCallRepresentativeOfGasSupplyOrganization from '../ApplicationToCallRepresentativeOfGasSupplyOrganization';
import ProvidingGasMeterReadings from '../ProvidingGasMeterReadings';
import TitleForHome from '../../../../components/TitleForHome';
const styledTitle = {
  margin: '0',
};
export default function HeaderRequests() {
  const [active, setActive] = useState('ApplicationForOrderingCylinders');
  return (
    <div
      style={{ boxShadow: ' 0 0 5px 3px rgba(0, 0, 0, 0.2)', borderRadius: '20px', marginTop: '0' }}
    >
      <TitleForHome
        fontSize={'m'}
        margin={'s'}
        style={styledTitle}
        color={'blue'}
        infoTitle={'Оставить онлайн-заявку'}
      />{' '}
      <ButtonForms className={'without-margin'}>
        <HeaderBtnFeedback>
          <Button
            className={active === 'ApplicationForOrderingCylinders' && 'active'}
            onClick={() => {
              setActive('ApplicationForOrderingCylinders');
            }}
          >
            Заказать баллон СУГ 50 литров
          </Button>
          <Button
            className={active === 'ApplicationForVerificationOfGasMeters' && 'active'}
            onClick={() => {
              setActive('ApplicationForVerificationOfGasMeters');
            }}
          >
            Снятие счётчика в поверку
          </Button>
          <Button
            className={active === 'ApplicationForRepairOfGasUsingEquipment' && 'active'}
            onClick={() => {
              setActive('ApplicationForRepairOfGasUsingEquipment');
            }}
          >
            Ремонт газового оборудования
          </Button>
          <Button
            className={
              active === 'ApplicationToCallRepresentativeOfGasSupplyOrganization' && 'active'
            }
            onClick={() => {
              setActive('ApplicationToCallRepresentativeOfGasSupplyOrganization');
            }}
          >
            Вызов представителя газоснабжающей организации
          </Button>
          <Button
            className={active === 'ProvidingGasMeterReadings' && 'active'}
            onClick={() => {
              setActive('ProvidingGasMeterReadings');
            }}
          >
            Предоставление показаний счётчика газа
          </Button>
          <Button
            className={active === 'ApplicationForTheIssuanceOfTechnicalSpecifications' && 'active'}
            onClick={() => {
              setActive('ApplicationForTheIssuanceOfTechnicalSpecifications');
            }}
          >
            Техническое обслуживание
          </Button>
        </HeaderBtnFeedback>
        {active === 'ApplicationForOrderingCylinders' && <ApplicationForOrderingCylinders />}
        {active === 'ApplicationForVerificationOfGasMeters' && (
          <ApplicationForVerificationOfGasMeters />
        )}
        {active === 'ApplicationForRepairOfGasUsingEquipment' && (
          <ApplicationForRepairOfGasUsingEquipment />
        )}
        {active === 'ApplicationToCallRepresentativeOfGasSupplyOrganization' && (
          <ApplicationToCallRepresentativeOfGasSupplyOrganization />
        )}
        {active === 'ProvidingGasMeterReadings' && <ProvidingGasMeterReadings />}
        {active === 'ApplicationForTheIssuanceOfTechnicalSpecifications' && (
          <ApplicationForTheIssuanceOfTechnicalSpecifications />
        )}
      </ButtonForms>
    </div>
  );
}
