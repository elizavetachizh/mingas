import React, { useCallback, useMemo, useRef, useState } from 'react';
import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import type { UseFormReturnValues } from '../../../../const/consts';
import axios from 'axios';

export const useProvidingGasMasterReadings = (): UseFormReturnValues => {
  const url = 'http://localhost:5000/users/';
  const [requestValues, setRequestValues] = useState(INITIAL_REQUEST_STATE);
  const [selectedFile, setSelectedFile] = useState();
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState('');
  const isValidateEmail = (email: string): boolean => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/.test(
      email
    );
  };
  const form = useRef();
  const isValidatePhone = (phone: string): boolean => {
    return /\+375\d{2}-\d{3}-\d{2}-\d{2}/g.test(phone);
  };
  const stringIncludesNumber = (string: string): boolean => {
    return /\d/.test(string);
  };
  const isButtonDisabled = useMemo(() => {
    return !!(
      stringIncludesNumber(requestValues.name) ||
      !isValidateEmail(requestValues.email) ||
      !requestValues.isAgree ||
      !requestValues.text ||
      !requestValues.address ||
      !requestValues.time ||
      !requestValues.reading ||
      !isValidatePhone(requestValues.phone) ||
      Object.keys(errors)?.length
    );
  }, [requestValues, errors]);

  const validate = (fieldName: string): void => {
    setErrors({});
    switch (fieldName) {
      case 'name':
        if (stringIncludesNumber(requestValues.name)) {
          setErrors({ ...errors, name: 'ФИО может содержать только буквы!' });
        }
        break;
      case 'email':
        if (!isValidateEmail(requestValues.email)) {
          setErrors({ ...errors, email: 'Введите верный адрес почты!' });
        }
        break;
      case 'phone':
        if (!isValidatePhone(requestValues.phone)) {
          setErrors({ ...errors, phone: 'Введите телефон в соответсвующем формате!' });
        }
        break;
      case 'address':
        if (!requestValues.address.length) {
          setErrors({ ...errors, address: 'Введите, пожалуйста адрес проживания!' });
        }
        break;
      case 'isAgree':
        if (!!requestValues.isAgree) {
          setErrors({ ...errors, isAgree: 'Заполните поле' });
        }
        break;
      case 'text':
        if (!requestValues.text.length) {
          setErrors({
            ...errors,
            text: 'Введите, пожалуйста, ваш лицевой счёт',
          });
        }
        break;
      case 'time':
        if (requestValues.time.trim().length) {
          setErrors({
            ...errors,
            time: 'Заполните, пожалуйста,  желаемое время выполнения работы',
          });
        }
        break;
      case 'reading':
        if (!requestValues.reading) {
          setErrors({
            ...errors,
            reading: 'Укажите ваши показания счётчика',
          });
        }
        break;
      case 'fileName':
        if (!requestValues.fileName) {
          setErrors({
            ...errors,
            fieldName: 'Отправтьте фото счётчика',
          });
        }
        break;
      default:
        break;
    }
  };

  const handleUserInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const { name, value } = event.target;
      setRequestValues(Object.assign(requestValues, { [name]: value }));
      validate(name);
    },
    [requestValues]
  );
  const handleFileInput = useCallback(
    (event: { target: { files: FileList } }) => {
      const file = event.target.files;
      setSelectedFile(file);
      console.log(file);
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = (e) => {
        console.log(e.target.result);
        alert(e.target.result);
        const formData = { file: e.target.result };
        return axios.post(url, formData).then((response) => console.log('result', response));
      };
    },
    [setRequestValues]
  );
  const handleChangeTime = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault();
      const { name, value } = event.target;
      setRequestValues({ ...requestValues, time: value });
      validate(name);
    },
    [requestValues]
  );

  const handleCheckBox = useCallback(() => {
    setRequestValues({ ...requestValues, isAgree: !requestValues.isAgree });
    validate('isAgree');
  }, [requestValues]);

  const clearForm = useCallback(() => {
    setRequestValues({
      ...INITIAL_REQUEST_STATE,
      name: '',
      date: '',
      email: '',
      phone: '',
      address: '',
      text: '',
      reading: '',
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(url, requestValues).then((response) => setMsg(response.data.respMesg));
    } catch (err) {
      console.log('error', err);
    }
    clearForm();
    alert('Форма успешно заполнена');
  };
  return {
    handleUserInput,
    requestValues,
    errors,
    handleChangeTime,
    handleFileInput,
    handleCheckBox,
    clearForm,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  };
};
