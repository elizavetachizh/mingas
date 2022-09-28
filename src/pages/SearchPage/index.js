import React, { useCallback, useState } from 'react';
import { data } from '../../assets/data/data_services';
import { data as dataDepartment } from '../../assets/data/data_department';
import { dataLegalEntities } from '../../assets/data/data_service_legalEntities_general';
import { routers } from '../../assets/data/routers';
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
  const resultDepartments = [];
  const infoForSearch = dataDepartment[0].information
    .concat(dataDepartment[1].information)
    .concat(dataDepartment[2].information)
    .concat(dataDepartment[3].information)
    .concat(dataDepartment[4].information)
    .concat(dataDepartment[5].information)
    .concat(dataDepartment[6].information)
    .concat(dataDepartment[7].information);
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
    setIsForm(false);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

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
    }) &&
    infoForSearch.map((element) => {
      if (typeof element.name === 'string') {
        if (element.name.includes(message)) {
          resultDepartments.push(element);
        }
      }
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
              <IoMdClose style={{ width: '70px' }} color={'black'} onClick={handleCloseCLick} />
              {result.map((element) => {
                return (
                  <div>
                    {
                      <NavLink style={{ color: 'black' }} to={`/services/${element.serviceId}`}>
                        {element.nameCard}
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
                        {element.nameCard}
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
                        {element.name}
                      </NavLink>
                    }
                  </div>
                );
              })}
              {resultDepartments.map((element) => {
                return (
                  <div>
                    {
                      <NavLink
                        style={{ color: 'black' }}
                        to={`/company/management/${element.idNameInform}?id=${element.id}`}
                      >
                        {element.name}
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
