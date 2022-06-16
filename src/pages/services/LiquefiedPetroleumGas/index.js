import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../../assets/data_services';
import DopFunctionService from '../DopFunction';

export default function liquefiedPetroleumGas() {
  const { nameCard } = useParams();
  const currentDepartment = useMemo(
    () => data.find((service) => service.nameCard === nameCard),
    [data]
  );
  console.log(currentDepartment);
  return (
    <div>
      <DopFunctionService name={currentDepartment.nameCard} />

    </div>
  );
}
