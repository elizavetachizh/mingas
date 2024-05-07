import React, { useCallback, useEffect, useState } from 'react';
import DopFunctional from '../DopFunctional';
import {
  ContainerFormSearchForService,
  ContainerInform,
} from '../../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoMdClose } from 'react-icons/io';
import ContainerContent from '../../../../../components/Container';
import { useDispatch } from 'react-redux';
import { useFetchDepartmentsQuery } from '../../../../../redux/services/departmentsDivisions';
import { setDepartments } from '../../../../../redux/slices/departmentsSlice';
import Loader from '../../../../../components/Loader';

export default function AllSubdivisions() {
  const [key, setKey] = useState('');
  const dispatch = useDispatch();
  const { data: departments, isLoading } = useFetchDepartmentsQuery({ key });
  useEffect(() => {
    if (!isLoading) {
      dispatch(setDepartments(departments));
    }
  }, [isLoading, dispatch, departments]);

  const handleSearch = useCallback((event) => {
    setKey(event.target.value);
  }, []);

  const handleInsideClick = useCallback((event) => {
    event.stopPropagation();
    setKey('');
  }, []);

  return (
    <ContainerContent
      name={'Службы УП "МИНГАЗ"'}
      content={
        <ContainerInform>
          <ContainerFormSearchForService style={{ margin: '4% auto' }}>
            <form action={'search'}>
              <input
                placeholder="Для поиска отдела введите его название"
                onChange={handleSearch}
                type={'text'} value={key}
              />
              <IoMdClose
                style={{ width: '60px', cursor: 'pointer' }}
                color={'black'}
                onClick={handleInsideClick}
              />
            </form>
          </ContainerFormSearchForService>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {departments?.map((el) => (
                <DopFunctional
                  id={el._id}
                  key={el.name}
                  name={el.name}
                  contacts={el.contacts}
                  schedule={el.schedule}
                  photo={el.photo}
                  chief={el.chief}
                  description={el.description}
                />
              ))}
            </>
          )}
        </ContainerInform>
      }
    />
  );
}
