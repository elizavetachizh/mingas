import React, { useCallback, useEffect, useState } from 'react';
import DopFunctional from '../DopFunctional';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import {
  DivBlocks,
  ContainerInform,
  SearchService,
  ContainerFormSearchForService,
  BlockSearchService,
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

export default function DepartmentInformation() {
  const { linkId } = useParams();
  const isPhone = useMediaQuery('(max-width: 800px)');
  const [currentServiceID, setDepartamentId] = useState(null);
  const [inform, setInform] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [infoDep, setInfoDep] = useState([]);
  const [content, setContent] = useState([]);

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

  useEffect(() => {
    axios
      .get(`${API}/departament`)
      .then((res) => {
        setContent(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setContent]);

  useEffect(() => {
    if (id) {
      const currentBlockInfo = content.filter((information) => information.name === id);
      setInform(currentBlockInfo);
    }
  }, [linkId, id, content]);

  const changeDepartment = useCallback(
    (departamentId) => {
      const current = content.filter((element) => element.nameMen === departamentId);
      navigate(`/company/management/${departamentId}`);
      setDepartamentId(departamentId);
      setInform(current);
    },
    [navigate]
  );

  const handlerLinkClickUniqueName = useCallback(
    (id) => {
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
  const [message, setMessage] = useState('');
  const result = [];

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  content.map((card) => {
    if (typeof card.name === 'string') {
      if (card.name.includes(message)) {
        result.push(card);
      }
    }
    return null;
  });
  const renderResult = () => {
    return (
      <BlockSearchService>
        {result.length ? (
          result.map((element) => {
            return (
              <div key={element.key}>
                <NavLink style={{ margin: '20px auto' }} to={`${pathname}?id=${element.name}`}>
                  {element.name}
                </NavLink>
              </div>
            );
          })
        ) : (
          <p>К сожалению, такого отдела найти не удалось</p>
        )}
      </BlockSearchService>
    );
  };
  const handleInsideClick = (event) => {
    event.stopPropagation();
    setIsForm(false);
    setMessage('');
    navigate('/company/management/1');
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
                    onChange={handleChange}
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
            {message && renderResult()}
            {infoDep.map((element) => (
              <BlockBtn key={element._id}>
                <ContainerBtnIcon>
                  <DopFunctionalHeader
                    nameCard={element.fullName}
                    className={currentServiceID === element._id ? 'background' : ''}
                    onClick={() => changeDepartment(element._id)}
                  />
                  {currentServiceID === element._id ? (
                    <IoIosArrowUp onClick={() => changeDepartment(element._id)} />
                  ) : (
                    <IoIosArrowDown onClick={() => changeDepartment(element._id)} />
                  )}
                </ContainerBtnIcon>

                <DivOpen className={currentServiceID === element._id && `shake`}>
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
              {inform.length ? (
                inform.map((el) => (
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
