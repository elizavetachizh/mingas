import React, { useCallback, useState } from 'react';
import { data } from '../../assets/data/data_services';
import { dataLegalEntities } from '../../assets/data/data_service_legalEntities_general';
import { routers } from '../../assets/data/routers';
import search from '../../assets/png/search.svg';
import { ContainerFormSearch, Div, FormSearch } from './styles';
import { NavLink } from 'react-router-dom';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { IoIosSearchs } from '../../components/header/styles';
import { ModalWindow } from '../../components/modalWindow/styles';
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
  const resultEntities = [];
  const resultRouters = [];
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
    setIsForm(false);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
    message.toLowerCase();
  };
  {
    data.map((card) => {
      if (card?.nameCard.includes(message)) {
        result.push(card);
      }
    }) &&
      dataLegalEntities.map((card) => {
        if (card?.nameCard.includes(message)) {
          resultEntities.push(card);
        }
      }) &&
      routers.map((router) => {
        if (router.name.includes(message)) {
          resultRouters.push(router);
        }
      });
  }
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  const renderResult = () => {
    return (
      <>
        {isModalVisible && (
          <ModalWindow className={classname} onClick={handleCloseCLick}>
            <Div onClick={handleInsideClick}>
              <IoMdClose style={{ width: '70px' }} color={'black'} onClick={handleCloseCLick} />
              {result.map((element) => {
                return (
                  <div>
                    {
                      <NavLink style={{ color: 'black' }} to={`/services/${element.serviceId}`}>
                        {element.nameCard.toLowerCase()}
                      </NavLink>
                    }
                  </div>
                );
              })}
              {resultEntities.map((element) => {
                return (
                  <div>
                    {
                      <NavLink
                        style={{ color: 'black' }}
                        to={`/services-legal-entities/${element.serviceId}`}
                      >
                        {element.nameCard.toLowerCase()}
                      </NavLink>
                    }
                  </div>
                );
              })}
              {resultRouters.map((element) => {
                return (
                  <div>
                    {
                      <NavLink style={{ color: 'black' }} to={`/${element.router}`}>
                        {element.name.toLowerCase()}
                      </NavLink>
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
      {message && result.length && renderResult()}
    </>
  );
}
