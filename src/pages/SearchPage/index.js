import React, { useState } from 'react';
import { data } from '../../assets/data_services';
import { dataLegalEntities } from '../../assets/data_service_legalEntities_general';
import { Button, FormSearch, ContainerFormSearch } from '../Home/Serch/styles';
import search from '../../assets/png/search.svg';
import { Div } from './styles';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
export default function SearchPage() {
  const [isForm, setIsForm] = useState(false);
  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };
  const searchStyle = {
    backgroundImage: `url(${search})`,
  };
  const [message, setMessage] = useState('');
  const result = [];
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
      <Button onClick={() => handleForm()} style={searchStyle} type={'submit'} />
      {isForm && (
        <ContainerFormSearch>
          <FormSearch action={'search'}>
            <input placeholder="Введите поисковый запрос" onChange={handleChange} type={'text'} />
            <IoMdClose color={'black'} />
          </FormSearch>
        </ContainerFormSearch>
      )}
      {message && result.length && renderResult()}
    </>
  );
}
