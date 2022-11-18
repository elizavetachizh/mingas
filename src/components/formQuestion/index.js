import React, { useCallback, useEffect, useState } from 'react';
import { Button, DivInput, DivInputCheckbox, Form, InputCheckbox, Label, Span } from './styles';
import { useForm } from '../../hooks/use-form-hook';
import InputName from '../input';
import InputText from '../input/inputText';
import PopUp from '../popUp';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVarningVisible, setModalVarningVisible] = useState(false);
  const [documentq, setDocumentq] = useState([]);
  const formImage = document.getElementById('file-input');

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handlewoCloseCLick = useCallback(() => {
    setModalVarningVisible(false);
  }, []);

  const handleFileChosen = async (file) => {
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

  const getFileURL = (file) => {
    const blob = new Blob([file], {
      type: 'application/octet-stream',
    });

    return URL.createObjectURL(blob);
  };
  const changeHAnder = useCallback(
    (event) => {
      if (Object.values(event.target.files)[0].size > 8000000) {
        // alert('Файл является слишком большим, пожалуйста уменьшите размер файла');
        setModalVisible(true);
        formImage.value = '';
        setDocumentq([]);
      } else if (
        ![
          'application/msword',
          'application/pdf',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'application/zip',
          'application/octet-stream',
          'application/x-zip-compressed',
          'multipart/x-zip',
          'text/plain',
          'image/jpeg',
          'image/png',
        ].includes(Object.values(event.target.files)[0].type)
      ) {
        // alert('Не подходит формат файла');
        setModalVarningVisible(true);
        formImage.value = '';
        setDocumentq([]);
      } else {
        setDocumentq(Object.values(event.target.files));
      }

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
          ФИО заявителя полностью
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
          label={' ФИО заявителя полностью'}
        />
      </DivInput>
      <DivInput>
        <Label>
          Введите ваш e-mail
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
          label={'Введите ваш e-mail'}
        />
      </DivInput>
      <DivInput>
        <Label>
          Введите адрес проживания
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
          label={'Введите адрес проживания'}
        />
      </DivInput>
      <DivInput>
        <Label>
          Контактный телефон
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
          label={'Контактный телефон'}
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
          Текст сообщения
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
        />
      </DivInput>
      <input type="file" multiple onChange={changeHAnder} id="file-input" />
      <p style={{ fontSize: '12px' }}>
        Допустимые расширения для текстовых файлов: doc, docx, txt, pdf; файлов архива: zip; файлов
        изображений: jpg, jpeg, png; табличных файлов: xls, xlsx. Размер вложенного файла не может
        превышать 8 Мб. Для отправки нескольких документов, необходимо их поместить в архив формата .zip
      </p>
      {isModalVisible && (
        <PopUp
          text={' Файл является слишком большим, пожалуйста уменьшите размер файла'}
          handleCloseCLick={handleCloseCLick}
        />
      )}
      {isModalVarningVisible && (
        <PopUp text={'Не подходит формат файла'} handleCloseCLick={handlewoCloseCLick} />
      )}
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
      {isButtonDisabled && (
        <span style={{ color: 'red' }}>Заполните, пожалуйста, все необходимые поля</span>
      )}
      {!isButtonDisabled && !msg && (
        <span style={{ color: 'red' }}>
          Форма успешно заполнена, нажмите кнопку отправить и ожидайте, когда форма очистится.
        </span>
      )}
      <p>
        <b>{msg}</b>
      </p>
    </Form>
  );
}
