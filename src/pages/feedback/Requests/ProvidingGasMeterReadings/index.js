import React from 'react';
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
import { useProvidingGasMasterReadings } from './ProvidingGasMasterReadings-hook';
import FormInput from '../../../../components/input/inputPhone';
import AgreeWithRules from '../../../../components/AgreeWithRules';

export default function ProvidingGasMeterReadings() {
  const {
    handleUserInput,
    requestValues,
    errors,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    setRequestValues,
    form,
    msg,
  } = useProvidingGasMasterReadings();

  const formImage = document.getElementById('file-input');
  formImage?.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
  });

  function uploadFile(file) {
    if (!['image/png', 'image/jpeg', 'application/pdf'].includes(file.type)) {
      alert('Не подходит формат файла, вставьте, пожалуйста картинку/фотографию');
      formImage.value = '';
    }
    if (file.size > 60000) {
      alert('Файл является слишком большим');
      formImage.value = '';
    }
    let reader = new FileReader();
    reader.onload = function () {
      setRequestValues({
        ...requestValues,
        file: reader.result,
      });
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
          <FormInput
            type={'text'}
            placeholder={'Введите ФИО полностью'}
            onChange={handleUserInput}
            value={requestValues.name}
            error={errors.name}
            name={'name'}
          />
        </DivInput>
        <DivInput>
          <Label>
            Введите ваш e-mail:
            <Span>*</Span>
          </Label>
          <FormInput
            type="email"
            name={'email'}
            placeholder={'ваш e-mail'}
            onChange={handleUserInput}
            value={requestValues.email}
            error={errors.email}
          />
        </DivInput>
        <DivInput>
          <Label>
            Номер договора (лицевой счёт): <Span>*</Span>
          </Label>
          <FormInput
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
            Контактный телефон:
            <Span>*</Span>
          </Label>
          <FormInput
            type="tel"
            name={'phone'}
            placeholder={'+375ХХХХХХХХХ'}
            onChange={handleUserInput}
            value={requestValues.phone}
            error={errors.phone}
          />
        </DivInput>
        <DivInput>
          <Label>
            Адрес объекта:
            <Span>*</Span>
          </Label>
          <FormInput
            name={'address'}
            type="text"
            placeholder={'Введите адрес проживания'}
            onChange={handleUserInput}
            value={requestValues.address}
            error={errors.address}
          />
        </DivInput>
        <DivInputFile>
          <InputFile type="file" id="file-input" />
          <label>Прикрепить фото прибора учёта</label>
        </DivInputFile>
        <AgreeWithRules
          errors={errors}
          handleCheckBox={handleCheckBox}
          requestValues={requestValues}
        />
        <Button
          disabled={isButtonDisabled}
          type="submit"
          onClick={handleSubmit}
          data-testid="submit-button"
        >
          Отправить
        </Button>
        {isButtonDisabled && (
          <span style={{ color: 'red' }}>Заполните, пожалуйста, все необходимые поля</span>
        )}
        {!isButtonDisabled && !msg && (
          <span style={{ color: 'red' }}>
            Форма успешно заполнена, нажмите кнопку отправить и ожидайте ответа "Форма успешно
            отправлена".
          </span>
        )}
        <p>
          <b>{msg}</b>
        </p>
      </Form>
    </DivApplication>
  );
}
