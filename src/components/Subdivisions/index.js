import {
  ContainerInform,
  DivBlocks,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import DopFunctional from '../../pages/company/managment/Subdivisions/DopFunctional';
import React from 'react';
import { useParams } from 'react-router';
import ContainerContent from '../Container';
import { useFetchDivisionsByIdQuery } from '../../redux/services/departmentsDivisions';

export default function Subdivisions() {
  const subdivisionId = useParams();
  const { data: divisionsById } = useFetchDivisionsByIdQuery(subdivisionId.subdivisionId);
  return (
    <ContainerContent
      name={'Подразделения'}
      content={
        <DivBlocks>
          <ContainerInform>
            {divisionsById ? (
              <DopFunctional
                name={divisionsById?.name}
                contacts={divisionsById?.contacts}
                schedule={divisionsById?.schedule}
                photo={divisionsById?.photo}
                chief={divisionsById?.chief}
                description={divisionsById?.description}
              />
            ) : (
              <p>Загрузка данных...</p>
            )}
          </ContainerInform>
        </DivBlocks>
      }
    />
  );
}
