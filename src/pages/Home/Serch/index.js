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
import { Trans, useTranslation } from "react-i18next";
const searchStyle = {
  backgroundImage: `url(${search})`,
};
export default function Search() {
  const { t, i18n  } = useTranslation();
  return (
    <SearchFunction>
      <Title><Trans i18nKey="search:search"></Trans></Title>
      <PgItemsSearch>
        <Form>
          <Input type={'text'} placeholder={'Введите название услуги'} />
          <AutocompleteSuggestions />
          <Button style={searchStyle} type={'submit'} />
        </Form>
      </PgItemsSearch>
    </SearchFunction>
  );
}
