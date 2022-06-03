import * as emailjs from '@emailjs/browser';
import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import type { UseFormReturnValues } from '../../../../const/consts';
import { useCallback, useMemo, useRef, useState } from 'react';

export const useRequestForIssuance = (): UseFormReturnValues => {
  const [requestIssuanceValues, setRequestIssuanceValues] = useState(INITIAL_REQUEST_STATE);
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
      stringIncludesNumber(requestIssuanceValues.name) ||
      !isValidateEmail(requestIssuanceValues.email) ||
      !requestIssuanceValues.isAgree ||
      !requestIssuanceValues.time ||
      !isValidatePhone(requestIssuanceValues.phone) ||
      Object.keys(errors)?.length
    );
  }, [requestIssuanceValues, errors]);

  const validate = (fieldName: string): void => {
    setErrors({});
    switch (fieldName) {
      case 'name':
        if (stringIncludesNumber(requestIssuanceValues.name)) {
          setErrors({ ...errors, name: 'ФИО может содержать только буквы!' });
        }
        break;
      case 'email':
        if (!isValidateEmail(requestIssuanceValues.email)) {
          setErrors({ ...errors, email: 'Введите верный адрес почты!' });
        }
        break;
      case 'phone':
        if (!isValidatePhone(requestIssuanceValues.phone)) {
          setErrors({ ...errors, phone: 'Введите телефон в соответсвующем формате!' });
        }
        break;
      case 'isAgree':
        if (!!requestIssuanceValues.isAgree) {
          setErrors({ ...errors, isAgree: 'Заполните поле' });
        }
        break;
      case 'time':
        if (requestIssuanceValues.time.trim().length) {
          console.log(requestIssuanceValues.time);
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
      setRequestIssuanceValues(Object.assign(requestIssuanceValues, { [name]: value }));
      validate(name);
    },
    [requestIssuanceValues]
  );
  const handleChangeTime = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault();
      const { name, value } = event.target;
      setRequestIssuanceValues({ ...requestIssuanceValues, time: value });
      validate(name);
    },
    [requestIssuanceValues]
  );

  const handleCheckBox = useCallback(() => {
    setRequestIssuanceValues({ ...requestIssuanceValues, isAgree: !requestIssuanceValues.isAgree });
    validate('isAgree');
  }, [requestIssuanceValues]);

  const clearForm = useCallback(() => {
    setRequestIssuanceValues({
      ...INITIAL_REQUEST_STATE,
      name: '',
      email: '',
      phone: '',
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
      console.log(form.current);
      clearForm();
      alert('Форма успешно заполнена');
    },
    [requestIssuanceValues]
  );

  return {
    handleUserInput,
    requestIssuanceValues,
    errors,
    handleChangeTime,
    handleCheckBox,
    clearForm,
    isButtonDisabled,
    handleSubmit,
    form,
  };
};
