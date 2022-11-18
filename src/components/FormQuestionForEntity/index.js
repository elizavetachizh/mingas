import React, { useCallback, useState } from 'react';
import InputName from '../input';
import {
  Form,
  Label,
  Span,
  DivInputCheckbox,
  InputCheckbox,
  Button,
  DivInput,
} from '../formQuestion/styles';
import { useFormForEnity } from '../../hooks/use-form-for-enity-hook';
import InputText from '../input/inputText';
import PopUp from '../popUp';
export default function FormQuestionForEntity() {
  const {
    handleUserInput,
    formValues,
    setFormValues,
    errors,
    handleCheckBox,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  } = useFormForEnity();

  const formImage = document.getElementById('file-input');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVarningVisible, setModalVarningVisible] = useState(false);
  const [documentq, setDocumentq] = useState([]);

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
      type: 'application/octetstream, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    return URL.createObjectURL(blob);
  };
  const changeHAnder = useCallback(
    (event) => {
      if (Object.values(event.target.files)[0].size > 8000000) {
        // alert('Файл является слишком большим, пожалуйста уменьшите размер файла');
        setModalVisible(true);
        console.log(isModalVisible);
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

      readAllFiles(Object.values(event.target.files)).then((r) =>
        setFormValues({ ...formValues, information: r })
      );
    },
    [formValues]
  );

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
            error={errors.address}
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
            error={errors.name}
          />
        </DivInput>

        <DivInput>
          <Label>
            Адрес электронной почты
            <Span>*</Span>
          </Label>
          <InputName
            inputName={'email'}
            type="email"
            name="email"
            placeholder={'E-mail'}
            onChange={handleUserInput}
            value={formValues.email}
            error={errors.email}
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
            label={'Текст сообщения'}
            inputText={''}
          />
        </DivInput>

        <input type="file" multiple onChange={changeHAnder} id="file-input" />
        <p style={{ fontSize: '12px' }}>
          Допустимые расширения для текстовых файлов: doc, docx, txt, pdf; файлов архива: zip;
          файлов изображений: jpg, jpeg, png; табличных файлов: xls, xlsx. Размер вложенного файла не может
          превышать 8 Мб.
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
            onChange={handleCheckBox}
            checked={formValues.isAgree}
            inputName="isAgree"
            error={errors.isAgree}
          />
          <Label>
            Согласен на обработку персональных данных
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
            Форма успешно заполнена, нажмите кнопку отправить и ожидайте ответа "Форма успешно
            отправлена".
          </span>
        )}
        <p>
          <b>{msg}</b>
        </p>
      </Form>
    </>
  );
}
