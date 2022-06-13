import React, { useCallback, useMemo, useRef, useState } from 'react';
import * as emailjs from '@emailjs/browser';
import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import type { UseFormReturnValues } from '../../../../const/consts';

export const useForOrderingCylinders = (): UseFormReturnValues => {
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
      !requestValues.text ||
      !requestValues.time ||
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
      case 'isAgree':
        if (!!requestValues.isAgree) {
          setErrors({ ...errors, isAgree: 'Заполните поле' });
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
      text: '',
    });
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      emailjs
        .sendForm('service_xcj1sfw', 'template_ve579bg', form.current, 'vZiB8zRYvfVKnIOk7')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      clearForm();
      alert('Форма успешно заполнена');
    },
    [requestValues]
  );

  return {
    handleUserInput,
    requestValues,
    errors,
    handleChangeTime,
    handleCheckBox,
    clearForm,
    isButtonDisabled,
    handleSubmit,
    form,
  };
};
