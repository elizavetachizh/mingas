import React, { useState } from 'react';
import { data } from '../../assets/data/data_services';
import { dataLegalEntities } from '../../assets/data/data_service_legalEntities_general';
import search from '../../assets/png/search.svg';
import { ContainerFormSearch, Div, FormSearch } from './styles';
import { NavLink } from 'react-router-dom';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
export default function SearchPage() {
  const [isForm, setIsForm] = useState(false);
  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };
  const [message, setMessage] = useState('');
  const result = [];
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
    setIsForm(false);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  {
    data.map((card) => {
      if (card.nameCard.includes(message)) {
        result.push(card);
      }
    }) &&
      dataLegalEntities.map((card) => {
        if (card.nameCard.includes(message)) {
          result.push(card);
        }
      });
  }

  const renderResult = () => {
    return (
      <Div>
        {result.map((element) => {
          return (
            <div>
              {(
                <NavLink to={`/services-legal-entities/${element.serviceId}`}>
                  {element.nameCard}
                </NavLink>
              ) && <NavLink to={`/services/${element.serviceId}`}>{element.nameCard}</NavLink>}
            </div>
          );
        })}
      </Div>
    );
  };

  return (
    <>
      {isForm ? (
        <IoIosSearch style={{ display: 'none' }} />
      ) : (
        <IoIosSearch
          style={{ height: '36px', width: '36px' }}
          color={'#0d4475'}
          onClick={() => handleForm()}
          type={'submit'}
        />
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
