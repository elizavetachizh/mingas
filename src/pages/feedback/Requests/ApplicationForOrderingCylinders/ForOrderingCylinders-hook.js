import React, { useCallback, useMemo, useRef, useState } from 'react';
import * as emailjs from '@emailjs/browser';
import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import type { UseFormReturnValues } from '../../../../const/consts';

export const useForOrderingCylinders = (): UseFormReturnValues => {
  //КУДА БУДЕТ ОТПРАВЛЯТЬСЯ: kc@mingas.by
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
      !requestValues.isAgree ||
      !requestValues.text ||
      !requestValues.address ||
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
      case 'phone':
        if (!isValidatePhone(requestValues.phone)) {
          setErrors({ ...errors, phone: 'Введите телефон в соответсвующем формате!' });
        }
        break;
      case 'isAgree':
        if (!!requestValues.isAgree) {
          setErrors({ ...errors, isAgree: 'Заполните все поля со *' });
        }
        break;
      case 'address':
        if (!requestValues.address.length) {
          setErrors({ ...errors, address: 'Введите, пожалуйста адрес проживания!' });
        }
        break;
      case 'text':
        if (!requestValues.text.length) {
          setErrors({
            ...errors,
            text: 'Введите, пожалуйста, ваш абонентский номер',
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
      address: '',
    });
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      clearForm();
      emailjs
        .sendForm('service_arrn6nn', 'template_t6lcwkw', form.current, 'H62p0yKXfn6OGm_oM')
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
    handleCheckBox,
    clearForm,
    isButtonDisabled,
    handleSubmit,
    form,
  };
};
