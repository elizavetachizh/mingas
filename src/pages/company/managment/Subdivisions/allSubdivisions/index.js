import React, { useEffect, useState } from 'react';
import DopFunctional from '../DopFunctional';
import {
  BlockSearchService,
  ContainerFormSearchForService,
  ContainerInform,
  SearchService,
} from '../../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import ContainerContent from '../../../../../components/Container';
import axios from 'axios';
import { API } from '../../../../../backend';

export default function AllSubdivisions() {
  const [isForm, setIsForm] = useState(false);
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [message, setMessage] = useState('');
  const result = [];
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [fullDate, setFullDate] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/departament`)
      .then((res) => {
        setFullDate(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setFullDate]);

  useEffect(() => {
    if (id) {
      const currentBlockInfo = fullDate.filter((blockInfo) => blockInfo.name === id);
      setInfo(currentBlockInfo);
    } else {
      setInfo(fullDate);
    }
  }, [fullDate, id]);

  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  fullDate.map((card) => {
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
              <div key={element.id}>
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
    navigate('/company/management/all-departments');
  };

  return (
    <ContainerContent
      name={'Службы УП "МИНГАЗ"'}
      content={
        <ContainerInform>
          <>
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
            {info.length
              ? info.map((el) => (
                  <DopFunctional
                    id={el._id}
                    key={el.id}
                    name={el.name}
                    contacts={el.contacts}
                    schedule={el.schedule}
                    photo={el.photo}
                    chief={el.chief}
                    description={el.description}
                  />
                ))
              : fullDate.map((el) => (
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
        </ContainerInform>
      }
    />
  );
}
