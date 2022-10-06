import {
  ContainerInform,
  DivBlocks,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { subdivisions } from '../../assets/data/subdivisions';
import DopFunctional from '../../pages/company/managment/Subdivisions/DopFunctional';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ContainerContent from '../Container';

export default function Subdivisions() {
  const subdivisionId = useParams();
  const [info, setInfo] = useState([]);
  const object = Object.values(subdivisionId);
  useEffect(() => {
    if (+object[0]) {
      const current = subdivisions.filter((element) => element.id === +object[0]);
      setInfo(current);
    } else {
      setInfo(subdivisions);
    }
  }, [subdivisionId, object]);
  return (
    <ContainerContent
      name={'Подразделения'}
      content={
        <DivBlocks>
          <ContainerInform>
            {info.map((el) => (
              <DopFunctional
                name={el.name}
                contacts={el.contacts}
                schedule={el.schedule}
                photo={el.photo}
                chief={el.chief}
                description={el.description}
              />
            ))}
          </ContainerInform>
        </DivBlocks>
      }
    />
  );
}
