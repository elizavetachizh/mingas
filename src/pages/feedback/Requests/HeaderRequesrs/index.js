import React, { useState } from 'react';
import { Button, DivButton, HeaderBtnFeedback } from '../../styles';
import ReceptionOfCitizens from '../../receptionOfCitizens';
import UsefulInformation from '../../uaefulIndormation';
import QuestionAnswer from '../../QuestionAnswer';
import ElectronicAppeal from '../../electronicСirculation';
import Application from '../index';
import ApplicationForVerificationOfGasMeters from '../ApplicationForVerificationOfGasMeters';
import ApplicationForOrderingCylinders from '../ApplicationForOrderingCylinders';
import ApplicationForRepairOfGasUsingEquipment from '../ApplicationForRepairOfGas-usingEquipment';

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
          {/*<Button*/}
          {/*  onClick={() => {*/}
          {/*    setActive('ElectronicAppeal');*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Электронное обращение*/}
          {/*</Button>*/}
          {/*<Button*/}
          {/*  onClick={() => {*/}
          {/*    setActive('Application');*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Заявка*/}
          {/*</Button>*/}
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
      {/*{active === 'ElectronicAppeal' && <ElectronicAppeal />}*/}
      {/*{active === 'Application' && <Application />}*/}
    </>
  );
}
