import React, { useState } from 'react';
import { data } from '../../assets/data_services';
import { AutocompleteSuggestions, Button, Form, Input } from '../Home/Serch/styles';
import search from '../../assets/png/search.svg';

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
  data.map((card) => {
    if (card.nameCard.includes(message)) {
      result.push(card);
    }
  });
  const renderResult = () => {
    return (
      <>
        {result.map((element) => {
          return <div>{element.nameCard}</div>;
        })}
      </>
    );
  };

  return (
    <>
      {/*<input type="text" id="message" name="message" onChange={handleChange} value={message} />*/}
      <Form>
        <Input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
          placeholder={'Поиск по сайту'}
        />
        <AutocompleteSuggestions />
        <Button style={searchStyle} type={'submit'} />
      </Form>
      {result.length ? renderResult() : null}
    </>
  );
}
