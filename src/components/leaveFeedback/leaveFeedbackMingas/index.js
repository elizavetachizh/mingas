import { DivApplication, Form } from '../../../pages/feedback/Requests/styles';
import {
  Button,
  DivInput,
  DivInputCheckbox,
  DivInputFile,
  InputCheckbox,
  InputFile,
  Label,
  Span,
} from '../../formQuestion/styles';
import InputName from '../../input';
import { t } from 'i18next';
import InputAddress from '../../input/inputAddress';
import InputPhone from '../../input/inputPhone';
import React from 'react';
import { useFeedback } from '../leaveFeedback-hook';

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

  const formImage = document.getElementById('file-input');
  const formPreview = document.getElementById('formPreview');
  formImage?.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
  });

  function uploadFile(file) {
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
    let reader = new FileReader();
    reader.onload = function (e) {
      formPreview.innerHTML = `<a id={'image'} href="${e.target.result}">Документ</a>`;
      setFormValues({
        ...formValues,
        file: reader.result,
      });
    };

    reader.onerror = function (e) {
      console.log(e);
    };

    reader.readAsDataURL(file);
    setFormValues({
      ...formValues,
      file: file,
    });
  }

  return (
    <DivApplication>
      <Form onSubmit={handleSubmit} ref={form}>
        <p>
          <b>{msg}</b>
        </p>
        <DivInput>
          <Label>
            ФИО полностью: <Span>*</Span>
          </Label>
          <InputName
            name={'name'}
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
            {t('form:email')}
            <Span>*</Span>
          </Label>
          <InputAddress
            type="email"
            inputAddress={'email'}
            name="email"
            placeholder={'Введите ваш e-mail'}
            onChange={handleUserInput}
            value={formValues.email}
            error={errors.email}
          />
        </DivInput>

        <DivInput>
          <Label>
            {t('form:phone')}
            <Span>*</Span>
          </Label>
          <InputPhone
            type="tel"
            inputPhone={'phone'}
            name="phone"
            placeholder={'+375ХХ-ХХХ-ХХ-ХХ'}
            onChange={handleUserInput}
            value={formValues.phone}
            error={errors.phone}
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
            Сообщение<Span>*</Span>
          </Label>
          <InputName
            className={'message'}
            inputName={'message'}
            name={'message'}
            type={'text'}
            placeholder={'Введите ваше сообщение'}
            onChange={handleUserInput}
            value={formValues.message}
            error={errors.message}
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
        {isButtonDisabled ? (
          <span style={{ color: 'red' }}>Заполните, пожалуйста все необходимые поля</span>
        ) : (
          <span style={{ color: 'red' }}>Форма успешно заполнена</span>
        )}
      </Form>
    </DivApplication>
  );
}
