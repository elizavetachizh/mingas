import React, { useCallback, useMemo, useRef, useState } from 'react';
import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import type { UseFormReturnValues } from '../../../../const/consts';
import axios from 'axios';

export const useProvidingGasMasterReadings = (): UseFormReturnValues => {
  //for site
  // const url = 'https://back.mingas.by/users';

  //for me
  const url = 'https://mingas.by:9000/users';

  const [requestValues, setRequestValues] = useState(INITIAL_REQUEST_STATE);
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
      case 'text':
        if (!requestValues.text.length) {
          setErrors({
            ...errors,
            text: 'Введите, пожалуйста, ваш лицевой счёт',
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
      email: '',
      phone: '',
      address: '',
      text: '',
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(requestValues);
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
    setRequestValues,
    handleSubmit,
    form,
    msg,
  };
};
