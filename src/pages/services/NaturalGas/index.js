import React, { useMemo } from 'react';
import { data } from '../../../assets/data_services';
import { useParams } from 'react-router-dom';
import DopFunctionService from '../DopFunction';
export default function NaturalGas() {
  const { nameCard } = useParams();
  const currentDepartment = useMemo(
    () => data.find((service) => service.nameCard === nameCard),
    [data]
  );
  console.log(currentDepartment);
  return (
    <div>
      {/*<p>{currentDepartment.nameCard}</p>*/}
      <DopFunctionService name={currentDepartment.nameCard}  description={currentDepartment.description}/>

    </div>
  );
}
