import React, { useState } from 'react';
import { Button, ButtonForms, HeaderBtnFeedback, BlockContainerRequests } from '../../styles';
import ApplicationForVerificationOfGasMeters from '../ApplicationForVerificationOfGasMeters';
import ApplicationForOrderingCylinders from '../ApplicationForOrderingCylinders';
import ApplicationForRepairOfGasUsingEquipment from '../ApplicationForRepairOfGas-usingEquipment';
import ApplicationForTheIssuanceOfTechnicalSpecifications from '../ApplicationForTheIssuanceofTechnicalSpecifications';
import ApplicationToCallRepresentativeOfGasSupplyOrganization from '../ApplicationToCallRepresentativeOfGasSupplyOrganization';
import ProvidingGasMeterReadings from '../ProvidingGasMeterReadings';
import TitleForHome from '../../../../components/TitleForHome';
import { useTranslation } from 'react-i18next';

export default function HeaderRequests({ style }) {
  const [active, setActive] = useState('ApplicationForOrderingCylinders');
  const { t } = useTranslation();
  return (
    <BlockContainerRequests style={style}>
      <TitleForHome
        style={{ margin: '0 auto' }}
        color={'blue'}
        infoTitle={`${t('request:request')}`}
      />{' '}
      <ButtonForms className={'without-margin'}>
        <HeaderBtnFeedback>
          <Button
            className={active === 'ApplicationForOrderingCylinders' && 'active'}
            onClick={() => {
              setActive('ApplicationForOrderingCylinders');
            }}
          >
            {t('request:cylinder')}
          </Button>
          <Button
            className={active === 'ApplicationForVerificationOfGasMeters' && 'active'}
            onClick={() => {
              setActive('ApplicationForVerificationOfGasMeters');
            }}
          >
            {t('request:verification')}
          </Button>
          <Button
            className={active === 'ApplicationForRepairOfGasUsingEquipment' && 'active'}
            onClick={() => {
              setActive('ApplicationForRepairOfGasUsingEquipment');
            }}
          >
            {t('request:Repair')}
          </Button>
          <Button
            className={
              active === 'ApplicationToCallRepresentativeOfGasSupplyOrganization' && 'active'
            }
            onClick={() => {
              setActive('ApplicationToCallRepresentativeOfGasSupplyOrganization');
            }}
          >
            {t('request:Calling')}
          </Button>
          <Button
            className={active === 'ProvidingGasMeterReadings' && 'active'}
            onClick={() => {
              setActive('ProvidingGasMeterReadings');
            }}
          >
            {t('request:Providing')}
          </Button>
          <Button
            className={active === 'ApplicationForTheIssuanceOfTechnicalSpecifications' && 'active'}
            onClick={() => {
              setActive('ApplicationForTheIssuanceOfTechnicalSpecifications');
            }}
          >
            {t('request:Maintenance')}
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
    </BlockContainerRequests>
  );
}
