import React, { useState } from 'react';
import { data } from '../../assets/data_services';
import { Div } from './styles';
import { log } from 'util';
export default function SearchPage() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
    data.forEach((element) => {
      if (event.target.value === element.nameCard) {
        console.log(element);
      }
      if (element.nameCard.search(event.target.value) === -1) {
        console.log(element.nameCard);
        console.log(event.target.value);
      }
    });

    console.log('value is:', event.target.value);
  };

  return (
    <div>
      <input type="text" id="message" name="message" onChange={handleChange} value={message} />
      <h2>Message: {message}</h2>
      {message === data.nameCard && <div>{data.map((element) => element.nameCard)}</div>}
    </div>
  );
}
