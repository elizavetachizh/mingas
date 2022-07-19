import React from 'react';
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
  Background,
} from '../formQuestion/styles';
import sttyleBackground from '../../assets/background/подложка_1.png';
import { useForm } from '../../hooks/use-form-hook';
const styled = {
  backgroundImage: `url(${sttyleBackground})`,
};
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
  } = useForm();
  const { t } = useTranslation();
  return (
    <>
    <Background src={sttyleBackground}  />
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
            value={formValues.name}
            error={name && errors.name}
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
            inputName={'address'}
            type="tel"
            name="address"
            placeholder={'Введите почтовый адрес'}
            onChange={handleUserInput}
            value={formValues.address}
            error={address && errors.address}
          />
        </DivInput>

        <DivInput>
          <Label>
            Индекс
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'name'}
            name={'name'}
            type={'text'}
            placeholder={'Введите индекс'}
            onChange={handleUserInput}
            value={formValues.text}
            error={errors.text}
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
          <span>Прекрипите файл</span>
          <InputFile name="file" type="file" id="file-input" onChange={handleFileInput} />
        </DivInputFile>
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
        <Button
          disabled={isButtonDisabled}
          type="submit"
          onClick={handleSubmit}
          data-testid="submit-button"
        >
          Отправить
        </Button>
        {isButtonDisabled && (
          <span style={{ color: 'red' }}>Заполните, пожалуйста все необходимые поля</span>
        )}
      </Form>
    </>
  );
}
