import React, { useState } from 'react';
import { Button, ButtonForms, HeaderBtnFeedback } from '../../styles';
import ApplicationForOrderingCylinders from '../ApplicationForOrderingCylinders';
import TitleForHome from '../../../../components/TitleForHome';
import { APPLICATION_BUTTONS } from '../../../../const/consts';
import { DivApplication } from '../styles';

export default function HeaderRequests({ style }) {
  const [active, setActive] = useState(<ApplicationForOrderingCylinders />);
  return (
    <div>
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
        <DivApplication> {active} </DivApplication>
      </ButtonForms>
    </div>
  );
}
