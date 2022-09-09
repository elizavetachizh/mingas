import React, { useEffect } from 'react';
import { DivApplication, Form } from '../styles';
import {
  Button,
  DivInput,
  DivInputCheckbox,
  DivInputFile,
  InputCheckbox,
  InputFile,
  Label,
  Span,
} from '../../../../components/formQuestion/styles';
import InputName from '../../../../components/input';
import name from '../../../../assets/formPng/name.png';
import { t } from 'i18next';
import email from '../../../../assets/formPng/email.png';
import phone from '../../../../assets/formPng/tel.png';
import address from '../../../../assets/formPng/map.png';
import { useProvidingGasMasterReadings } from './ProvidingGasMasterReadings-hook';
import InputAddress from '../../../../components/input/inputAddress';
import InputPhone from '../../../../components/input/inputPhone';

export default function ProvidingGasMeterReadings() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleFileInput,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
  } = useProvidingGasMasterReadings();

  const formImage = document.getElementById('file-input');
  const formPreview = document.getElementById('formPreview');
  formImage?.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
  });

  function uploadFile(file) {
    if (!['image/png', 'application/msword'].includes(file.type)) {
      alert('NOOO');
      formImage.value = '';
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      formPreview.innerHTML = `<a download href="${e.target.result}" style={{width: '300px', height: '300px'}}>{e.target.result}</a>`;
      console.log(e.target.result);
    };
    reader.onerror = function (e) {
      console.log(e);
    };
    reader.readAsDataURL(file);
  }
  return (
    <DivApplication>
      <Form ref={form} onSubmit={handleSubmit} id={'form'}>
        <DivInput>
          <Label>
            ФИО заявителя полностью: <Span>*</Span>
          </Label>
          <InputName
            name={'name'}
            type={'text'}
            placeholder={'Введите ФИО полностью'}
            onChange={handleUserInput}
            value={requestValues.name}
            error={errors.name}
            inputName={'name'}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:email')}
            <Span>*</Span>
          </Label>
          <InputAddress
            type="email"
            inputAddress={'email'}
            name="email"
            placeholder={'Введите ваш e-mail'}
            onChange={handleUserInput}
            value={requestValues.email}
            error={errors.email}
          />
        </DivInput>
        <DivInput>
          <Label>
            Номер договора (лицевой счёт): <Span>*</Span>
          </Label>
          <InputName
            inputName={'text'}
            name={'text'}
            type={'text'}
            placeholder={'Введите абонентский номер'}
            onChange={handleUserInput}
            value={requestValues.text}
            error={errors.text}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:phone')}
            <Span>*</Span>
          </Label>
          <InputPhone
            type="tel"
            inputPhone={'phone'}
            name="phone"
            placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
            onChange={handleUserInput}
            value={requestValues.phone}
            error={errors.phone}
          />
        </DivInput>
        <DivInput>
          <Label>
            {t('form:address')}
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'address'}
            type="text"
            name={'address'}
            placeholder={'Введите адрес проживания'}
            onChange={handleUserInput}
            value={requestValues.address}
            error={errors.address}
            label={t('form:address')}
          />
        </DivInput>
        {/*<DivInput>*/}
        {/*  <Label>*/}
        {/*    Показания счётчика<Span>*</Span>*/}
        {/*  </Label>*/}
        {/*  <InputName*/}
        {/*    inputName={'reading'}*/}
        {/*    name={'reading'}*/}
        {/*    type={'text'}*/}
        {/*    placeholder={'Введите ваши показания счётчика'}*/}
        {/*    onChange={handleUserInput}*/}
        {/*    value={requestValues.reading}*/}
        {/*    error={errors.reading}*/}
        {/*    span={'*'}*/}
        {/*  />*/}
        {/*</DivInput>*/}
        <DivInputFile>
          <Label>Прикрепить фото прибора учёта</Label>
          <InputFile type="file" id="file-input" />
        </DivInputFile>
        <div id="formPreview" value={requestValues.file} name="file" />
        <DivInputCheckbox>
          <InputCheckbox
            type="checkbox"
            span={'*'}
            onChange={handleCheckBox}
            checked={requestValues.isAgree}
            inputName="isAgree"
            error={errors.isAgree}
          />
          <Label>
            Согласен на обработку данных
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
    </DivApplication>
  );
}
