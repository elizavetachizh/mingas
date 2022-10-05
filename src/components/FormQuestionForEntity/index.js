import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
            {t('form:email')}
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

        {isButtonDisabled ? (
          <span style={{ color: 'red' }}>Заполните, пожалуйста все необходимые поля</span>
        ) : (
          <span style={{ color: 'red' }}>Форма успешно заполнена</span>
        )}
        <p>
          <b>{msg}</b>
        </p>
      </Form>
    </>
  );
}
