import React, { useState } from 'react';
import { data } from '../../assets/data_services';
import { dataLegalEntities } from '../../assets/data_service_legalEntities_general';
import { AutocompleteSuggestions, Button, Form, Input } from '../Home/Serch/styles';
import search from '../../assets/png/search.svg';
import { Div } from './styles';
import { NavLink } from 'react-router-dom';

export default function SearchPage() {
  const searchStyle = {
    backgroundImage: `url(${search})`,
  };
  const [message, setMessage] = useState('');
  const result = [];
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
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
              {<NavLink to={`/services/${element.nameCard}`}>{element.nameCard}</NavLink> || (
                <NavLink to={`/services/legal-entities/${element.nameCard}`}>
                  {element.nameCard}
                </NavLink>
              )}
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
        <Button style={searchStyle} type={'submit'} />

      {message && result.length && renderResult()}
    </>
  );
}
