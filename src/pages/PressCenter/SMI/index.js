import {
  Div,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import React from 'react';
import ComponentContainerArticles from './ComponentContainerArticles';

export default function SMI() {
  return (
    <div>
      <p>
        УП «МИНГАЗ» проводит честную и открытую политику сотрудничества со СМИ. Мы открыты для
        предложений, совместного взаимодействия, предоставление актуальной и достоверной информации
        является для нас приоритетом. Контактный телефон: 8017-299-29-47
      </p>

      <Div className={`shake`}>
        <ComponentContainerArticles />
      </Div>
    </div>
  );
}
