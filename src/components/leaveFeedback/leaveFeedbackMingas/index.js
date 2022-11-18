import { DivApplication, Form } from '../../../pages/feedback/Requests/styles';
import {
  Button,
  DivInput,
  DivInputCheckbox,
  InputCheckbox,
  Label,
  Span,
} from '../../formQuestion/styles';
import InputName from '../../input';
import InputAddress from '../../input/inputAddress';
import InputPhone from '../../input/inputPhone';
import React, { useCallback, useEffect, useState } from 'react';
import { useFeedback } from '../leaveFeedback-hook';
import PopUp from '../../popUp';
import InputText from '../../input/inputText';

export default function LeaveFeedbackMingas() {
  const {
    handleUserInput,
    formValues,
    errors,
    handleCheckBox,
    isButtonDisabled,
    setFormValues,
    handleSubmit,
    form,
    msg,
  } = useFeedback();
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
      type: 'application/octetstream, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, application/vnd.ms-excel, text/plain',
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
    <DivApplication>
      <Form style={{ border: 'none', borderRadius: 'none' }} onSubmit={handleSubmit} ref={form}>
        <DivInput>
          <Label>
            ФИО полностью: <Span>*</Span>
          </Label>
          <InputName
            type={'text'}
            placeholder={'Введите ФИО полностью'}
            inputName={'name'}
            onChange={handleUserInput}
            value={formValues.name}
            error={errors.name}
          />
        </DivInput>

        <DivInput>
          <Label>
            Адрес электронной почты
            <Span>*</Span>
          </Label>
          <InputAddress
            type="email"
            inputAddress={'email'}
            placeholder={'Введите ваш e-mail'}
            onChange={handleUserInput}
            value={formValues.email}
            error={errors.email}
          />
        </DivInput>

        <DivInput>
          <Label>
            Контактный телефон
            <Span>*</Span>
          </Label>
          <InputPhone
            type="tel"
            inputPhone={'phone'}
            placeholder={'+375ХХХХХХХХХ'}
            onChange={handleUserInput}
            value={formValues.phone}
            error={errors.phone}
          />
        </DivInput>

        <DivInput>
          <Label>Тема:</Label>
          <InputName
            inputName={'text'}
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
          Допустимые расширения для текстовых файлов: doc, docx, txt, pdf; файлов архива: zip;
          файлов изображений: jpg, jpeg, png; табличных файлов: xls, xlsx. Размер вложенного файла
          не может превышать 8 Мб. Для отправки нескольких документов, необходимо их поместить в
          архив формата .zip
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
            inputName="isAgree"
            onChange={handleCheckBox}
            checked={formValues.isAgree}
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
    </DivApplication>
  );
}
