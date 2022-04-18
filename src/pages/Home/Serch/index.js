import React from 'react';
import { Title } from '../useful_information/styles';
import {
  Form,
  PgItemsSearch,
  SearchFunction,
  AutocompleteSuggestions,
  Input,
  Button,
} from './styles';

import search from '../../../assets/png/search.svg';
const searchStyle = {
  backgroundImage: `url(${search})`,
};
export default function Search() {
  return (
    <SearchFunction>
      <Title>Поиск по услугам</Title>
      <PgItemsSearch>
        <Form>
          <Input type={'text'} placeholder={'Введите название услуги'}></Input>
          <AutocompleteSuggestions></AutocompleteSuggestions>
          <Button style={searchStyle} type={'submit'}></Button>
        </Form>
      </PgItemsSearch>
    </SearchFunction>
  );
}
