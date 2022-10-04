import React from 'react';
import { useTranslation } from 'react-i18next';
import InputName from '../input';
import {
  Form,
  Label,
  Span,
  DivInputFile,
  DivInputCheckbox,
  InputCheckbox,
  InputFile,
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
    if (file.size > 60000) {
      alert('Файл является слишком большим');
      formImage.value = '';
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      formPreview.innerHTML = `<a id={'image'} href="${e.target.result}">Документ</a>`;
      // if (['image/png', 'image/jpeg'].includes(file.type)) {
      //   setFormValues({
      //     ...formValues,
      //     file: reader.result,
      //   });
      // }
      // if (
      //   [
      //     'application/msword',
      //     'application/pdf',
      //     'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      //   ].includes(file.type)
      // ) {
      //   setFormValues({
      //     ...formValues,
      //     document: reader.result,
      //   });
      // }

      setFormValues({ ...formValues, file: reader.result });
      setFormValues({ ...formValues, document: reader.result });
    };

    reader.onerror = function (e) {
      console.log(e);
    };
    reader.readAsDataURL(file);
  }

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

        <DivInputFile>
          <InputFile type="file" id="file-input" name="file" />
          <label>
            <span>Прикрепите файл</span>
          </label>
        </DivInputFile>

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
