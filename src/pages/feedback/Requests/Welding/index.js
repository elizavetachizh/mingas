//выполнение работ с применением сварки

import { DivApplication, Form } from '../styles';
import FormInput from '../../../../components/input/inputPhone';
import PopUp from '../../../../components/popUp';
import AgreeWithRules from '../../../../components/AgreeWithRules';
import { Button, DivInput, Label } from '../../../../components/formQuestion/styles';
import React, { useCallback, useState } from 'react';
import { useWelding } from './useWelding';
import Select from '../../../../components/select';
import { feedbackMethod, gasEquipmentOptions } from '../../../../const/consts';

export default function Welding() {
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
  } = useWelding();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVarningVisible, setModalVarningVisible] = useState(false);
  const [file, setFile] = useState([]);
  const formImage = document.getElementById('file-input');

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleVarningCloseCLick = useCallback(() => {
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
  const changeHandler = useCallback(
    (event) => {
      if (Object.values(event.target.files)[0].size > 8000000) {
        // alert('Файл является слишком большим, пожалуйста уменьшите размер файла');
        setModalVisible(true);
        formImage.value = '';
        setFile([]);
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
        setFile([]);
      } else {
        setFile(Object.values(event.target.files));
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
          name={'personal_account'}
          type={'text'}
          placeholder={'Введите абонентский номер'}
          onChange={handleUserInput}
          value={requestValues.personal_account}
          error={errors.personal_account}
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
          name={'location'}
          span={true}
          label={'Расположение переносимого участка газопровода:'}
          type="text"
          placeholder={'Введите расположение переносимого участка газопровода'}
          onChange={handleUserInput}
          value={requestValues.location}
          error={errors.location}
        />
        <Select
          label={'Планируемое газовое оборудование:'}
          span={'*'}
          onChange={handleUserInput}
          value={requestValues.gas_equipment}
          inputName={'gas_equipment'}
          error={errors.gas_equipment}
          options={gasEquipmentOptions}
        />
        <DivInput>
          <Label>Выполнен ли потолок (стена) из горючих материалов:</Label>
          <div>
            <input
              type={'radio'}
              id={'yes'}
              name={'flammable_materials'}
              value={'Да'}
              checked
              onChange={handleUserInput}
            />
            <label>Да</label>
          </div>
          <div>
            <input
              type={'radio'}
              id={'no'}
              name={'flammable_materials'}
              value={'Нет'}
              onChange={handleUserInput}
            />
            <label>Нет</label>
          </div>
        </DivInput>
        <Select
          label={'Способ обратной связи:'}
          span={'*'}
          onChange={handleUserInput}
          value={requestValues.feedback_method}
          inputName={'feedback_method'}
          error={errors.feedback_method}
          options={feedbackMethod}
        />
        <Label>Возможность прикрепить фото</Label>
        <input type="file" multiple onChange={changeHandler} id="file-input" />
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
          <PopUp text={'Не подходит формат файла'} handleCloseCLick={handleVarningCloseCLick} />
        )}
        <div>
          <ol>
            {file.length
              ? file.map((element) => (
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
          onClick={async () => {
            await handleSubmit;
            setFile([]);
          }}
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
