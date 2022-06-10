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
import { Trans, useTranslation } from 'react-i18next';
import TitleFun from '../../../components/title';
const searchStyle = {
  backgroundImage: `url(${search})`,
};
export default function Search() {
  const { t, i18n } = useTranslation();
  return (
    <SearchFunction>
      <TitleFun color={'blue'} infoTitle={<Trans i18nKey="search:search"></Trans>}></TitleFun>
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
