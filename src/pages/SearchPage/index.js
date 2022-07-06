import React, { useState } from 'react';
import { data } from '../../assets/data_services';

export default function SearchPage() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
    // data.forEach((element) => {
    //   if (event.target.value === element.nameCard) {
    //     console.log(element);
    //   }
    //   if (element.nameCard.search(event.target.value) === -1) {
    //     console.log(element.nameCard);
    //     console.log(event.target.value);
    //   }
    // });
  //   let results = data.filter(function (entry) {
  //
  //     console.log(`results: ${entry.nameCard === event.target.value}`);
  //     return <h2>{entry.nameCard}</h2>;
  //   });
  //   console.log(`results ${results}`);
    let result;
    Object.(data).forEach(key => {
      if (key.includes(event.target.value)) {
        result = data[key]
      }
    });
    console.log(result)
   };



  return (
    <div>
      <input type="text" id="message" name="message" onChange={handleChange} value={message} />

      {message === data.nameCard &&   <h2>Message: {message}</h2>}
    </div>
  );
}
