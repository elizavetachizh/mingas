import React, { useCallback, useEffect, useState } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formImage = document.getElementById('file-input');
  formImage?.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
  });

  const uploadFile = useCallback(
    (file) => {
      // if (
      //   ![
      //     'image/png',
      //     'image/jpeg',
      //     'application/msword',
      //     'application/pdf',
      //     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      //   "application/zip",
      // 'application/octet-stream'
      //   ].includes(file.type)
      // ) {
      //   alert('Не подходит формат файла');
      //   formImage.value = '';
      // }
      if (file.size > 60000) {
        alert('Файл является слишком большим');
        formImage.value = '';
      }
      let reader = new FileReader();
      const arr = [...formValues.information];
      reader.onload = function () {
        arr.push(reader.result);
        setFormValues({ ...formValues, file: reader.result });
        setFormValues({ ...formValues, document: reader.result });
        setFormValues({ ...formValues, information: arr });
      };

      reader.onerror = function (e) {
        console.log(e);
      };
      reader.readAsDataURL(file);
    },
    [formValues]
  );
  const [documentq, setDocumentq] = useState([]);
  const getFileURL = (file) => {
    const blob = new Blob([file], {
      type: 'application/octetstream, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    return URL.createObjectURL(blob);
  };
  const changeHAnder = useCallback(
    (event) => {
      setDocumentq(Object.values(event.target.files));
      const arr = Object.values(event.target.files).map((el) => el.name);
      Object.values(Object.values(event.target.files)).forEach((value) => {
        uploadFile(value);
      });
      setFormValues({ ...formValues, information: arr });
    },
    [formValues]
  );

  return (
    <Form autocomplete="on" onSubmit={handleSubmit} ref={form}>
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
          placeholder={'+375ХХХХХХХХХ'}
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

      {/*<input type="file" multiple onChange={changeHAnder} />*/}

      {/*<div>*/}
      {/*  <ol>*/}
      {/*    {' '}*/}
      {/*    {documentq.length*/}
      {/*      ? documentq.map((element) => (*/}
      {/*          <li key={getFileURL(element)}>*/}
      {/*            <a href={getFileURL(element)} download>*/}
      {/*              {element.name}*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*        ))*/}
      {/*      : null}*/}
      {/*  </ol>*/}
      {/*</div>*/}

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
