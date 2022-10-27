import React, { useState } from 'react';
import { Button, ButtonForms, HeaderBtnFeedback, BlockContainerRequests } from '../../styles';
import ApplicationForVerificationOfGasMeters from '../ApplicationForVerificationOfGasMeters';
import ApplicationForOrderingCylinders from '../ApplicationForOrderingCylinders';
import ApplicationForRepairOfGasUsingEquipment from '../ApplicationForRepairOfGas-usingEquipment';
import ApplicationForTheIssuanceOfTechnicalSpecifications from '../ApplicationForTheIssuanceofTechnicalSpecifications';
import ApplicationToCallRepresentativeOfGasSupplyOrganization from '../ApplicationToCallRepresentativeOfGasSupplyOrganization';
import ProvidingGasMeterReadings from '../ProvidingGasMeterReadings';
import TitleForHome from '../../../../components/TitleForHome';

export default function HeaderRequests({ style }) {
  const [active, setActive] = useState('ApplicationForOrderingCylinders');
  return (
    <BlockContainerRequests style={style}>
      <TitleForHome
        style={{ margin: '0 auto' }}
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
            Снятие счётчика в проверку
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
    </BlockContainerRequests>
  );
}
