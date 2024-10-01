import React, { useCallback, useState } from 'react';
import { DivApplication, Form } from '../styles';
import { Button } from '../../../../components/formQuestion/styles';
import { useProvidingGasMasterReadings } from './ProvidingGasMasterReadings-hook';
import FormInput from '../../../../components/input/inputPhone';
import AgreeWithRules from '../../../../components/AgreeWithRules';
import PopUp from '../../../../components/popUp';

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
        setRequestValues({ ...requestValues, information: result })
      );
    },
    [formImage, readAllFiles, requestValues, setRequestValues]
  );

  return (
    <DivApplication>
      <Form ref={form} onSubmit={handleSubmit} id={'form'}>
        <FormInput
          type={'text'}
          span={true}
          label={'ФИО заявителя полностью:'}
          placeholder={'Введите ФИО полностью'}
          onChange={handleUserInput}
          value={requestValues.name}
          error={errors.name}
          name={'name'}
        />

        <FormInput
          span={true}
          label={'Введите ваш e-mail:'}
          type="email"
          name={'email'}
          placeholder={'ваш e-mail'}
          onChange={handleUserInput}
          value={requestValues.email}
          error={errors.email}
        />

        <FormInput
          span={true}
          label={'Номер договора (лицевой счёт):'}
          name={'text'}
          type={'text'}
          placeholder={'Введите абонентский номер'}
          onChange={handleUserInput}
          value={requestValues.text}
          error={errors.text}
        />

        <FormInput
          span={true}
          label={'Контактный телефон:'}
          type="tel"
          name={'phone'}
          placeholder={'+375ХХХХХХХХХ'}
          onChange={handleUserInput}
          value={requestValues.phone}
          error={errors.phone}
        />

        <FormInput
          name={'address'}
          span={true}
          label={'Адрес объекта:'}
          type="text"
          placeholder={'Введите адрес проживания'}
          onChange={handleUserInput}
          value={requestValues.address}
          error={errors.address}
        />
        <FormInput
          name={'reading'}
          span={true}
          label={'Показания счётчика:'}
          type="text"
          placeholder={'Введите показания счётчика'}
          onChange={handleUserInput}
          value={requestValues.reading}
          error={errors.reading}
        />

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

        <AgreeWithRules handleCheckBox={handleCheckBox} requestValues={requestValues} />
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
