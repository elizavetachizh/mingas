import FormTelemetria from './form';
import React from 'react';
import ContainerContent from '../Container';

export default function Telemetria() {
  return (
    <ContainerContent
      name={'Телеметрия'}
      content={
        <div style={{ width: '90%', margin: '0 5%' }}>
          <a target="_blank" rel="noopener noreferrer" href={'http://178.124.164.50:82/'}>
            Доступ к информации о параметрах расхода газа
          </a>
          <p>
            Для просмотра информации о параметрах расхода газа, выведенных по системе телеметрии с
            узла учета газа, вы можете подать заявку на предоставление персонального логина и
            пароля:
          </p>
          <FormTelemetria />
        </div>
      }
    />
  );
}
