import React, { useCallback, useEffect, useState } from 'react';
import name from '../../assets/formPng/name.png';
import email from '../../assets/formPng/email.png';
import address from '../../assets/formPng/map.png';
import { useTranslation } from 'react-i18next';
import InputName from '../input';
import {
  Form,
  Label,
  Span,
  DivInputFile,
  DivInputCheckbox,
  InputCheckbox,
  InputFile,
  Button,
  DivInput,
} from '../formQuestion/styles';
import { useFormForEnity } from '../../hooks/use-form-for-enity-hook';
export default function FormQuestionForEntity() {
  const {
    handleUserInput,
    formValues,
    errors,
    handleFileInput,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
  } = useFormForEnity();
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch(
      'http://www.portal.nalog.gov.by/grp/getData?unp=100582333&charset=UTF-8&type=json',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }
    );

    return await response.json();
  }, []);
  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);
  return (
    <>
      <Form onSubmit={handleSubmit} ref={form}>
        <DivInput>
          <Label>
            Наименование юридического лица
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'organization'}
            name={'organization'}
            type={'text'}
            placeholder={'Введите наименование юридического лица'}
            onChange={handleUserInput}
            value={formValues.organization}
            error={errors.organization}
          />
        </DivInput>

        <DivInput>
          <Label>
            Юридический адрес
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'address'}
            type="text"
            name={'address'}
            placeholder={'Введите юридический адрес'}
            onChange={handleUserInput}
            value={formValues.address}
            error={address && errors.address}
          />
        </DivInput>

        <DivInput>
          <Label>
            Фамилия, собственное имя, отчество (если таковое имеется) руководителя или лица,
            уполномоченного подписывать обращения
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'name'}
            name={'name'}
            type={'text'}
            placeholder={
              'Фамилия, собственное имя, отчество (если таковое имеется) руководителя или лица, уполномоченного подписывать обращения'
            }
            onChange={handleUserInput}
            value={formValues.name}
            error={name && errors.name}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:email')}
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'email'}
            type="email"
            name="email"
            placeholder={'E-mail'}
            onChange={handleUserInput}
            value={formValues.email}
            error={email && errors.email}
          />
        </DivInput>

        <DivInput>
          <Label>
            Почтовый адрес
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'text'}
            type="text"
            name="text"
            placeholder={'Введите почтовый адрес'}
            onChange={handleUserInput}
            value={formValues.text}
            error={errors.text}
          />
        </DivInput>

        <DivInput>
          <Label>
            Индекс
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'index'}
            name={'index'}
            type={'text'}
            placeholder={'Введите индекс'}
            onChange={handleUserInput}
            value={formValues.index}
            error={errors.index}
          />
        </DivInput>
        <DivInput>
          <Label>
            Сообщение
            <Span>*</Span>
          </Label>

          <InputName
            inputName={'message'}
            type="message"
            name="message"
            placeholder={'Текст сообщения'}
            onChange={handleUserInput}
            value={formValues.message}
            error={errors.message}
          />
        </DivInput>
        <DivInputFile>
          <InputFile name="file" type="file" id="file-input" onChange={handleFileInput} />
        </DivInputFile>
        <span>Прекрипите файл</span>
        <DivInputCheckbox>
          <InputCheckbox
            type="checkbox"
            span={'*'}
            onChange={handleCheckBox}
            checked={formValues.isAgree}
            inputName="isAgree"
            error={errors.isAgree}
          />
          <Label>
            Согласен на обработку персональных данных в соответствии с Политикой оператора
            <Span>*</Span>
          </Label>
        </DivInputCheckbox>
        {isButtonDisabled && (
          <Span>
            <strong>Заполните, пожалуйста все необходимые поля!</strong>
          </Span>
        )}
        <Button
          disabled={isButtonDisabled}
          type="submit"
          onClick={handleSubmit}
          data-testid="submit-button"
        >
          Отправить
        </Button>
      </Form>
    </>
  );
}
