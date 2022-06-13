import React, { useMemo } from 'react';
import { Container } from '../../styles';
import Header from '../../../../../components/header';
import { data } from '../../../../../assets/data_department';
import DopFunctional from '../DopFunctional';
import { useParams } from 'react-router-dom';

export default function DepartmentInformation({ currentLink }) {
  const { linkId } = useParams();
  const currentDepartment = useMemo(
    () => data.find((department) => department.id === +linkId),
    [data]
  );

  return (
    <Container titleDepartment={currentLink}>
      <Header backgroundHeader={'blue'} />
      <DopFunctional
        id={currentDepartment.id}
        description={currentDepartment.description}
        name={currentDepartment.name}
        contacts={currentDepartment.contacts}
      />
    </Container>
  );
}
