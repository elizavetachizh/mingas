import React, { useState } from 'react';
import { data } from '../../assets/data_services';
import { dataLegalEntities } from '../../assets/data_service_legalEntities_general';
import { Button, Input } from '../Home/Serch/styles';
import search from '../../assets/png/search.svg';
import { Div } from './styles';
import { NavLink } from 'react-router-dom';

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
    console.log(event.target.value);
  };
  console.log(message);
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
  console.log(result);
  const renderResult = () => {
    return (
      <Div>
        {result.map((element) => {
          return (
            <div>
              {(
                <NavLink to={`/services-legal-entities/${element.nameCard}`}>
                  {element.nameCard}
                </NavLink>
              ) && <NavLink to={`/services/${element.nameCard}`}>{element.nameCard}</NavLink>}
            </div>
          );
        })}
      </Div>
    );
  };

  return (
    <>
      {/*<Input*/}
      {/*  type="text"*/}
      {/*  id="message"*/}
      {/*  name="message"*/}
      {/*  onChange={handleChange}*/}
      {/*  value={message}*/}
      {/*  placeholder={'Поиск по сайту'}*/}
      {/*/>*/}
      {/*<AutocompleteSuggestions />*/}
      <Button onClick={() => handleForm()} style={searchStyle} type={'submit'} />
      {isForm && (
        <form action={'search'}>
          <input onChange={handleChange} type={'text'} />
        </form>
      )}
      {message && result.length && renderResult()}
    </>
  );
}
