import React, { useCallback, useMemo, useRef, useState } from 'react';
import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import type { UseFormReturnValues } from '../../../../const/consts';
import axios from 'axios';

export const useForOrderingCylinders = (): UseFormReturnValues => {
  //КУДА БУДЕТ ОТПРАВЛЯТЬСЯ: kc@mingas.by
  //for me
  // const url = 'http://localhost:3000/cylinders';

  //for site
  const url = 'https://back.mingas.by/cylinders';

  const [requestValues, setRequestValues] = useState(INITIAL_REQUEST_STATE);
  const [msg, setMsg] = useState('');
  const [errors, setErrors] = useState({});
  const form = useRef();
  const isValidatePhone = (phone: string): boolean => {
    return /\+375\d{2}\d{3}\d{2}\d{2}/g.test(phone);
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
          setErrors({ ...errors, phone: 'Введите телефон в формате +375XXXXXXXXX!' });
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
    [requestValues, validate]
  );

  const handleCheckBox = useCallback(() => {
    setRequestValues({ ...requestValues, isAgree: !requestValues.isAgree });
    validate('isAgree');
  }, [requestValues, validate]);

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
    handleCheckBox,
    clearForm,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
    setRequestValues,
  };
};
