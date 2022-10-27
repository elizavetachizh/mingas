import FormTelemetria from './form';
import React from 'react';
import ContainerContent from '../Container';
import LinkAsButtonFun from '../LinkButton';
import {ContainerInform} from "../../pages/feedback/electronicCirculationForEntity/styles";

export default function Telemetria() {
  return (
    <ContainerContent
      name={'Телеметрия'}
      content={
        <ContainerInform >
          <LinkAsButtonFun
            href={'http://178.124.164.50:82/'}
            name={'Доступ к информации о параметрах расхода газа'}
          />
          <p>
            Для просмотра информации о параметрах расхода газа, выведенных по системе телеметрии с
            узла учета газа, вы можете подать заявку на предоставление персонального логина и
            пароля:
          </p>
          <FormTelemetria />
        </ContainerInform>
      }
    />
  );
}
