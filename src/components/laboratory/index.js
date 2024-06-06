import ContainerContent from '../Container';
import React from 'react';
import { Links } from '../Price/styles';

export default function Laboratory() {
  return (
    <ContainerContent
      name={'Диагностические услуги'}
      content={
        <Links>
          <a href={require('./Буклет.docx')} download>
            Лаборатория СНКИиТД
          </a>
        </Links>
      }
    />
  );
}
