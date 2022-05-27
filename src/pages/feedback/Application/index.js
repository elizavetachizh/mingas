import React from 'react';
import { Container } from '../../styles';
import { Title } from '../../../components/header/styles';
import { Button, Label, Span } from "../../../components/formQuestion/styles";
import { t } from 'i18next';
import { Form } from "./styles";

export default function Application() {
  return (
    <Container>
      <Title>Заявка на ремонт газоиспользующего оборудования</Title>
      <Form>
        <Label>
          ФИО заявителя полностью: <Span>*</Span>
          <input type={'text'} />
        </Label>
        <Label>
          {t('form:email')}
          <Span>*</Span>
          <input type={'email'} />
        </Label>
        <Label>
          {t('form:phone')}
          <Span>*</Span>
          <input type={'tel'} />
        </Label>
        <Label>
          {t('form:address')}
          <Span>*</Span>
          <input type={'text'} />
        </Label>
        <Label>
          Желаемая дата выполнения работы <Span>*</Span>
          <input type={'date'} />
        </Label>
        <Label>
          Желаемое время выполнения работы // <Span>*</Span>
          <input type={'text'} />
        </Label>
        <Label>
          выбрать вид работы:
          <Span>*</Span>
          <select>
            <option value={''}>ремонт газового оборудования </option>
            <option value={''}>подключение газового оборудования </option>
            <option value={''}>отключение газового оборудования </option>
            <option value={''}>монтаж, перенос газового оборудования </option>
            <option value={''}>установка прибора учета расхода газа </option>
            <option value={''}>монтаж, ремонт индвидуальных оборудования </option>
            <option value={''}>тех обслуживание газового оборудования </option>
          </select>
        </Label>
        <Label>
          <input type={'checkbox'} />
        </Label>
        <Button>Отправить</Button>
      </Form>
    </Container>
  );
}
