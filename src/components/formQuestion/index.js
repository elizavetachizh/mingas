import React, { useCallback, useEffect, useState } from 'react';
import { Button, DivInput, DivInputCheckbox, Form, InputCheckbox, Label, Span } from './styles';
import { useTranslation } from 'react-i18next';
import { useForm } from '../../hooks/use-form-hook';
import InputName from '../input';
import InputText from '../input/inputText';

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
  const handleFileChosen = async (file) => {
    if (
      ![
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
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = reject;
      fileReader.readAsDataURL(file);
    });
  };

  const readAllFiles = async (AllFiles) => {
    return await Promise.all(
      AllFiles.map(async (file) => {
        return await handleFileChosen(file);
      })
    );
  };

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
      readAllFiles(Object.values(event.target.files)).then((result) =>
        setFormValues({ ...formValues, information: result })
      );
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
        <InputText
          wrap={'soft'}
          text={'message'}
          className={'message'}
          type="message"
          name="message"
          placeholder={'Текст сообщения'}
          onChange={handleUserInput}
          value={formValues.message}
          error={errors.message}
          label={t('form:text')}
          inputText={''}
        />
      </DivInput>

      <input type="file" multiple onChange={changeHAnder} id="file-input" />

      <div>
        <ol>
          {documentq.length
            ? documentq.map((element) => (
                <li key={getFileURL(element)}>
                  <a href={getFileURL(element)} download>
                    {element.name}
                  </a>
                </li>
              ))
            : null}
        </ol>
      </div>

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
