import React, { useState } from 'react';
import { Button, ButtonForms, HeaderBtnFeedback, BlockContainerRequests } from '../../styles';
import ApplicationForVerificationOfGasMeters from '../ApplicationForVerificationOfGasMeters';
import ApplicationForOrderingCylinders from '../ApplicationForOrderingCylinders';
import ApplicationForRepairOfGasUsingEquipment from '../ApplicationForRepairOfGas-usingEquipment';
import ApplicationForTheIssuanceOfTechnicalSpecifications from '../ApplicationForTheIssuanceofTechnicalSpecifications';
import ApplicationToCallRepresentativeOfGasSupplyOrganization from '../ApplicationToCallRepresentativeOfGasSupplyOrganization';
import ProvidingGasMeterReadings from '../ProvidingGasMeterReadings';
import TitleForHome from '../../../../components/TitleForHome';
import { APPLICATION_BUTTONS } from '../../../../const/consts';

export default function HeaderRequests({ style }) {
  const [active, setActive] = useState('ApplicationForOrderingCylinders');
  return (
    <BlockContainerRequests style={style}>
      <TitleForHome color={'blue'} infoTitle={'Оставить онлайн-заявку'} />{' '}
      <ButtonForms>
        <HeaderBtnFeedback>
          {APPLICATION_BUTTONS.map((el) => (
            <Button
              className={active === el.type && 'active'}
              onClick={() => {
                setActive(el.type);
              }}
            >
              {el.name}
            </Button>
          ))}
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
    </BlockContainerRequests>
  );
}
