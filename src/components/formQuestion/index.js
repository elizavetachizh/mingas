import React from 'react';
import {
  DivInput,
  DivInputCheckbox,
  DivInputFile,
  Form,
  Label,
  Span,
  InputCheckbox,
  InputFile,
  Button,
} from './styles';
import { useTranslation } from 'react-i18next';
import { useForm } from '../../hooks/use-form-hook';
import InputName from '../input';

export default function FormQuestion() {
  const {
    handleUserInput,
    formValues,
    errors,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    setFormValues,
    msg,
  } = useForm();
  const { t } = useTranslation();

  const formImage = document.getElementById('file-input');
  const formPreview = document.getElementById('formPreview');
  formImage?.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
  });

  function uploadFile(file) {
    if (
      ![
        'image/png',
        'image/jpeg',
        'application/msword',
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ].includes(file.type)
    ) {
      alert('Не подходит формат файла');
      formImage.value = '';
    }
    if (file.size > 60000) {
      alert('Файл является слишком большим');
      formImage.value = '';
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      formPreview.innerHTML = `<a id={'image'} href="${e.target.result}">Документ</a>`;
      setFormValues({ ...formValues, file: reader.result });
      setFormValues({ ...formValues, document: reader.result });
    };

    reader.onerror = function (e) {
      console.log(e);
    };

    reader.readAsDataURL(file);
  }

  return (
    <Form onSubmit={handleSubmit} ref={form}>
      <DivInput>
        <Label>
          {t('form:name')}
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'name'}
          name={'name'}
          type={'text'}
          placeholder={'Введите ФИО полностью'}
          onChange={handleUserInput}
          value={formValues.name}
          error={errors.name}
          label={t('form:name')}
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
          placeholder={'Введите ваш e-mail'}
          onChange={handleUserInput}
          value={formValues.email}
          error={errors.email}
          label={t('form:email')}
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
          value={formValues.address}
          error={errors.address}
          label={t('form:address')}
        />
      </DivInput>

      <DivInput>
        <Label>
          {t('form:phone')}
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'phone'}
          type="tel"
          name="phone"
          placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
          onChange={handleUserInput}
          value={formValues.phone}
          error={errors.phone}
          label={t('form:phone')}
        />
      </DivInput>

      <DivInput>
        <Label>Тема:</Label>
        <InputName
          inputName={'text'}
          name={'text'}
          type={'text'}
          placeholder={'Напишите тему'}
          onChange={handleUserInput}
          value={formValues.text}
          error={errors.text}
        />
      </DivInput>

      <DivInput>
        <Label>
          {t('form:text')}
          <Span>*</Span>
        </Label>
        <InputName
          inputName={'message'}
          className={'message'}
          type="message"
          name="message"
          placeholder={'Текст сообщения'}
          onChange={handleUserInput}
          value={formValues.message}
          error={errors.message}
          label={t('form:text')}
        />
      </DivInput>

      <DivInputFile>
        <div>
          <InputFile type="file" id="file-input" name="file" />
          <span>Прекрипите файл</span>
        </div>
        <div id={'formPreview'}></div>
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
          Согласен на обработку данных
          <Span>*</Span>
        </Label>
      </DivInputCheckbox>

      <Button disabled={isButtonDisabled} type="submit" onClick={handleSubmit}>
        Отправить
      </Button>
      {isButtonDisabled ? (
        <span style={{ color: 'red' }}>Заполните, пожалуйста все необходимые поля</span>
      ) : (
        <span style={{ color: 'red' }}>Форма успешно заполнена</span>
      )}
      <p>
        <b>{msg}</b>
      </p>
    </Form>
  );
}
