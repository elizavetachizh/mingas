import React, { useCallback, useEffect, useState } from 'react';
import DopFunctional from '../DopFunctional';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  DivBlocks,
  ContainerInform,
  SearchService,
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
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch, IoMdClose } from 'react-icons/io';
import useMediaQuery from '../../../../Home/parallax/useMediaQuery';
import ButtonFun from '../../../../../components/button';
import ContainerContent from '../../../../../components/Container';
import axios from 'axios';
import { API } from '../../../../../backend';
import { useFetchDepartmentsQuery } from '../../../../../redux/services/departmentsDivisions';

export default function DepartmentInformation() {
  const isPhone = useMediaQuery('(max-width: 800px)');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [key, setKey] = useState('');
  const [infoDep, setInfoDep] = useState([]);
  const [nameMen, setNameMen] = useState('');
  const [name, setName] = useState('');
  const { data: departments } = useFetchDepartmentsQuery({ key, nameMen, name });
  const { linkId } = useParams();

  useEffect(() => {
    setName(id);
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API}/management`)
      .then((res) => {
        setInfoDep(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfoDep]);

  const changeDepartment = useCallback(
    (departamentId) => {
      navigate(`/company/management/${departamentId}`);
      setNameMen(departamentId);
      setName('');
    },
    [navigate]
  );

  const handlerLinkClickUniqueName = useCallback(
    (id) => {
      setNameMen('');
      setName(id);
      navigate(`${pathname}?id=${id}`);
    },
    [pathname, navigate]
  );

  const [isForm, setIsForm] = useState(false);
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
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Наименования подразделений</Name>
            {isForm ? (
              <IoIosSearch style={{ display: 'none' }} />
            ) : (
              <SearchService style={{ width: '100%' }} onClick={() => handleForm()}>
                <p>Поиск по отделам</p>
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
                  <IoMdClose
                    style={{ width: '60px' }}
                    color={'black'}
                    onClick={handleInsideClick}
                  />
                </form>
              </ContainerFormSearchForService>
            )}
            {infoDep.map((element) => (
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
              {departments?.length ? (
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
              ) : (
                <p>Данные загружаются...</p>
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
