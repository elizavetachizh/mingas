import React, { useCallback, useMemo, useRef, useState } from 'react';
import * as emailjs from '@emailjs/browser';
import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import type { UseFormReturnValues } from '../../../../const/consts';
import axios from 'axios';

export const UseForRepairOfGasUsingEquipment = (): UseFormReturnValues => {
  //for me
  // const url = 'https://localhost:3000/repair';

  //for site
  const url = 'https://back.mingas.by/repair';
  const [msg, setMsg] = useState('');
  const [requestValues, setRequestValues] = useState(INITIAL_REQUEST_STATE);
  const [errors, setErrors] = useState({});
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
      !requestValues.address ||
      !requestValues.date ||
      !requestValues.time ||
      !requestValues.text ||
      !requestValues.message ||
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
          setErrors({ ...errors, isAgree: 'Заполните все поля со *' });
        }
        break;
      case 'date':
        if (!requestValues.date) {
          setErrors({ ...errors, date: 'Заполните, пожалуйста,  желаемую дату выполнения работы' });
        }
        break;
      case 'time':
        if (requestValues.time.trim()) {
          setErrors({
            ...errors,
            time: 'Выбере тип оборудования',
          });
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
      case 'message':
        if (!requestValues.message.length) {
          setErrors({
            ...errors,
            text: 'Опишите неисправность либо поставьте -',
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
      message: '',
    });
  }, []);

  // const handleSubmit = useCallback(
  //   (event) => {
  //     event.preventDefault();
  //
  //     emailjs
  //       .sendForm('service_arrn6nn', 'template_r58vk64', form.current, 'H62p0yKXfn6OGm_oM')
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //     clearForm();
  //     alert('Форма успешно заполнена');
  //   },
  //   [requestValues]
  // );
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(url, requestValues).then((response) => setMsg(response.data.respMesg));
    } catch (err) {
      console.log('error', err);
    }
    clearForm();
  };
  return {
    handleUserInput,
    requestValues,
    errors,
    handleChangeTime,
    handleCheckBox,
    clearForm,
    isButtonDisabled,
    handleSubmit,
    setRequestValues,
    form,
    msg,
  };
};
