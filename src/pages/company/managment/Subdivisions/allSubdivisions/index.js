import React, { useCallback, useEffect, useState } from 'react';
import DopFunctional from '../DopFunctional';
import {
  ContainerFormSearchForService,
  ContainerInform,
  SearchService,
} from '../../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import ContainerContent from '../../../../../components/Container';
import { useDispatch } from 'react-redux';
import { useFetchDepartmentsQuery } from '../../../../../redux/services/departmentsDivisions';
import { setDepartments } from '../../../../../redux/slices/departmentsSlice';
import Loader from '../../../../../components/Loader';

export default function AllSubdivisions() {
  const [isForm, setIsForm] = useState(false);
  const [key, setKey] = useState('');
  const dispatch = useDispatch();
  const { data: departments, isLoading } = useFetchDepartmentsQuery({ key });
  useEffect(() => {
    if (!isLoading) {
      dispatch(setDepartments(departments));
    }
  }, [isLoading, dispatch, departments]);

  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };

  const handleSearch = useCallback((event) => {
    setKey(event.target.value);
  }, []);

  const handleInsideClick = (event) => {
    event.stopPropagation();
    setIsForm(false);
    setKey('');
  };

  return (
    <ContainerContent
      name={'Службы УП "МИНГАЗ"'}
      content={
        <ContainerInform>
          {isForm ? (
            <IoIosSearch style={{ display: 'none' }} />
          ) : (
            <SearchService style={{ width: '100%' }} onClick={() => handleForm()}>
              <p>Для поиска отдела введите его название</p>
              <IoIosSearch
                style={{ height: '30px', width: '30px' }}
                color={'#0d4475'}
                type={'submit'}
              />
            </SearchService>
          )}
          {isForm && (
            <ContainerFormSearchForService style={{ margin: '4% auto' }}>
              <form action={'search'}>
                <input
                  placeholder="Введите название отдела"
                  onChange={handleSearch}
                  type={'text'}
                />
                <IoMdClose style={{ width: '60px' }} color={'black'} onClick={handleInsideClick} />
              </form>
            </ContainerFormSearchForService>
          )}
          {departments?.length ? (
            <>
              {departments.map((el) => (
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
          ) : (
            <Loader />
          )}
        </ContainerInform>
      }
    />
  );
}
