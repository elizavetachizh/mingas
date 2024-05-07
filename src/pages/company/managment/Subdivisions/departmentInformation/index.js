import React, { useCallback, useState } from 'react';
import DopFunctional from '../DopFunctional';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  DivBlocks,
  ContainerInform,
  ContainerFormSearchForService,
} from '../../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../../../../concats/headerContacts/styles';
import DopFunctionalHeader from '../../../../services/NaturalGas/DopFunctionalHeader';
import {
  BlockBtn,
  ContainerBtnIcon,
  DivOpen,
  Name,
} from '../../../../../components/administrativeServices/Header/styles';
import { useLocation, useNavigate } from 'react-router';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import useMediaQuery from '../../../../Home/parallax/useMediaQuery';
import ButtonFun from '../../../../../components/button';
import ContainerContent from '../../../../../components/Container';
import { useFetchDepartmentsQuery } from '../../../../../redux/services/departmentsDivisions';
import { useFetchManagementQuery } from '../../../../../redux/services/management';
import Loader from '../../../../../components/Loader';

export default function DepartmentInformation() {
  const isPhone = useMediaQuery('(max-width: 800px)');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [key, setKey] = useState('');
  const [nameMen, setNameMen] = useState('');
  const { data: departments, isLoading } = useFetchDepartmentsQuery({
    key,
    nameMen,
    name: id ? id : '',
  });
  const { data: management } = useFetchManagementQuery();
  const { linkId } = useParams();

  const changeDepartment = useCallback(
    (departamentId) => {
      navigate(`/company/management/${departamentId}`);
      setNameMen(departamentId);
    },
    [navigate]
  );

  const handlerLinkClickUniqueName = useCallback(
    (id) => {
      setNameMen('');
      navigate(`${pathname}?id=${id}`);
    },
    [pathname, navigate]
  );

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
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Наименования подразделений</Name>
            <ContainerFormSearchForService style={{ margin: '4% auto' }}>
              <form action={'search'}>
                <input
                  placeholder="Введите название отдела"
                  onChange={handleSearch}
                  type={'text'}
                  value={key}
                />
                <IoMdClose style={{ width: '60px' }} color={'black'} onClick={handleInsideClick} />
              </form>
            </ContainerFormSearchForService>
            {management?.map((element) => (
              <BlockBtn key={element._id}>
                <ContainerBtnIcon>
                  <DopFunctionalHeader
                    nameCard={element.fullName}
                    className={nameMen === element._id ? 'background' : ''}
                    onClick={() => changeDepartment(element._id)}
                  />
                  {nameMen === element._id ? (
                    <IoIosArrowUp onClick={() => changeDepartment(element._id)} />
                  ) : (
                    <IoIosArrowDown onClick={() => changeDepartment(element._id)} />
                  )}
                </ContainerBtnIcon>

                <DivOpen className={linkId === element._id && `shake`}>
                  {element.department.map((link) => (
                    <button
                      onClick={() => handlerLinkClickUniqueName(link)}
                      key={link}
                      className={id === link ? 'shake' : ''}
                    >
                      {link}
                    </button>
                  ))}
                </DivOpen>
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            <>
              {isLoading ? (
                <Loader />
              ) : (
                departments.map((el) => (
                  <DopFunctional
                    id={el._id}
                    key={el.name}
                    name={el.name}
                    contacts={el.contacts}
                    schedule={el.schedule}
                    // photo={el.photo}
                    chief={el.chief}
                    description={el.description}
                  />
                ))
              )}
            </>
            {isPhone && (
              <ButtonFun
                href={'/company/management/all-departments'}
                infoButton={'Просмотреть все отделы'}
                backgrounder={'blue'}
              />
            )}
          </ContainerInform>
        </DivBlocks>
      }
    />
  );
}
