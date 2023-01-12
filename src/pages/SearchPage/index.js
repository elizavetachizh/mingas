import React, { useCallback, useEffect, useState } from 'react';
import { routers } from '../../assets/data/routers';
import { ContainerFormSearch, Div, FormSearch } from './styles';
import { NavLink } from 'react-router-dom';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { IoIosSearchs } from '../../components/header/styles';
import { ModalWindow } from '../../components/modalWindow/styles';
import { searchDocuments } from '../../assets/data/searchDocuments';
import axios from 'axios';
import { API } from '../../backend';
export default function SearchPage({ classname }) {
  const [isForm, setIsForm] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleForm = () => {
    setIsForm(true);
    setModalVisible(true);
    if (isForm) {
      setIsForm(false);
    }
  };
  const [message, setMessage] = useState('');
  const result = [];
  const resultRouters = [];
  const resultDepartments = [];
  const resultDocuments = [];
  const [departament, setDepartament] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/departament`)
      .then((res) => {
        setDepartament(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setDepartament]);

  useEffect(() => {
    axios
      .get(`${API}/services`)
      .then((res) => {
        setServices(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setServices]);

  const handleInsideClick = (event) => {
    event.stopPropagation();
    setIsForm(false);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  services.map((card) => {
    if (card?.name.includes(message)) {
      result.push(card);
    }
    return <p>К сожалению, ничего не было найдено</p>;
  }) &&
    routers.map((router) => {
      if (router.name.includes(message)) {
        resultRouters.push(router);
      }
      return null;
    }) &&
    departament.map((element) => {
      if (typeof element.name === 'string') {
        if (element.name.includes(message)) {
          resultDepartments.push(element);
        }
      }
      return <p>К сожалению, ничего не было найдено</p>;
    }) &&
    searchDocuments.map((doc) => {
      if (doc.name.includes(message)) {
        resultDocuments.push(doc);
      }
      return <p>К сожалению, ничего не было найдено</p>;
    });

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  const renderResult = () => {
    return (
      <>
        {isModalVisible && (
          <ModalWindow className={classname} onClick={handleCloseCLick}>
            <Div onClick={handleInsideClick}>
              <IoMdClose
                style={{ width: '90%', margin: '0 50%' }}
                color={'black'}
                onClick={handleCloseCLick}
              />
              {result.map((element) => {
                if (element.type === '1') {
                  return (
                    <div key={element._id}>
                      <NavLink style={{ color: 'black' }} to={`/services/${element._id}`}>
                        {element.name}
                      </NavLink>
                    </div>
                  );
                }
                if (element.type === '2') {
                  return (
                    <div key={element._id}>
                      <NavLink
                        style={{ color: 'black' }}
                        to={`/services-legal-entities/${element._id}`}
                      >
                        {element.name}
                      </NavLink>
                    </div>
                  );
                }
              })}
              {resultRouters.map((element) => {
                return (
                  <div key={element.id}>
                    {
                      <NavLink style={{ color: 'black' }} to={`/${element.router}`}>
                        {element.name}
                      </NavLink>
                    }
                  </div>
                );
              })}
              {resultDepartments.map((element) => {
                return (
                  <div key={element._id}>
                    {
                      <NavLink
                        style={{ color: 'black' }}
                        to={`/company/management/${element._id}?id=${element.name}`}
                      >
                        {element.name}
                      </NavLink>
                    }
                  </div>
                );
              })}
              {resultDocuments.map((doc) => {
                return (
                  <div key={doc.id}>
                    {
                      <a download style={{ color: 'black' }} href={doc.path}>
                        {doc.name}
                      </a>
                    }
                  </div>
                );
              })}
            </Div>
          </ModalWindow>
        )}
      </>
    );
  };

  return (
    <>
      {isForm && isModalVisible ? (
        <IoIosSearch style={{ display: 'none' }} />
      ) : (
        <IoIosSearchs title={'Поиск'} onClick={() => handleForm()} type={'submit'} />
      )}
      {isForm && (
        <ContainerFormSearch>
          <FormSearch action={'search'}>
            <input placeholder="Введите поисковый запрос" onChange={handleChange} type={'text'} />
            <IoMdClose style={{ width: '50px' }} color={'black'} onClick={handleInsideClick} />
          </FormSearch>
        </ContainerFormSearch>
      )}
      {message && renderResult()}
    </>
  );
}
