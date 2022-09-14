import { IoIosSearch, IoMdClose } from 'react-icons/io';
import React, { useState } from 'react';
import { ContainerFormSearch, Div, FormSearch } from '../../../SearchPage/styles';
import { data } from '../../../../assets/data/data_department';
import { NavLink } from 'react-router-dom';

export default function SearchForDepartments() {
  const [message, setMessage] = useState('');
  const result = [];
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const [isForm, setIsForm] = useState(false);
  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };

  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
    setIsForm(false);
  };

  {
    data.map((card) => {
      if (card.fullName.includes(message)) {
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
              {<NavLink to={`/company/management/${element.idName}`}>{element.fullName}</NavLink>}
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
