import React, { useCallback, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { INITIAL_FORM_STATE } from '../../const/consts';

export const useFeedback = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
  //for site
  const url = 'https://back.mingas.by/feedback';

  //for me
  // const url = 'https://localhost:3000/feedback';

  const [msg, setMsg] = useState('');
  const isValidateEmail = (email: string): boolean => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/.test(
      email
    );
  };
  const form = useRef();
  const stringIncludesNumber = (string: string): boolean => {
    return /\d/.test(string);
  };
  const isValidatePhone = (phone: string): boolean => {
    return /\+375\d{2}-\d{3}-\d{2}-\d{2}/g.test(phone);
  };
  const [errors, setErrors] = useState({});
  const isButtonDisabled = useMemo(() => {
    return !!(
      stringIncludesNumber(formValues.name) ||
      !isValidateEmail(formValues.email) ||
      !formValues.isAgree ||
      !formValues.message ||
      !formValues.text ||
      !isValidatePhone(formValues.phone) ||
      Object.keys(errors)?.length
    );
  }, [formValues, errors]);

  const validate = (fieldName: string): void => {
    setErrors({});
    switch (fieldName) {
      case 'name':
        if (stringIncludesNumber(formValues.name)) {
          setErrors({ ...errors, name: 'ФИО может содержать только буквы!' });
        }
        break;
      case 'email':
        if (!isValidateEmail(formValues.email)) {
          setErrors({ ...errors, email: 'Введите верный адрес почты!' });
        }
        break;
      case 'isAgree':
        if (!!formValues.isAgree) {
          setErrors({ ...errors, isAgree: 'Заполните поле' });
        }
        break;
      case 'message':
        if (!formValues.message.length) {
          setErrors({ ...errors, message: 'Заполните, пожалуйста, обращение' });
        }
        break;
      case 'text':
        if (!formValues.text.length) {
          setErrors({ ...errors, text: 'Заполните, пожалуйста, почтовый адрес' });
        }
        break;
      case 'address':
        if (!formValues.address.length) {
          setErrors({ ...errors, address: 'Введите, пожалуйста юридический адрес предприятия!' });
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
      setFormValues(Object.assign(formValues, { [name]: value }));
      validate(name);
    },
    [formValues]
  );

  const handleCheckBox = useCallback(() => {
    setFormValues({ ...formValues, isAgree: !formValues.isAgree });
    validate('isAgree');
  }, [formValues]);

  const clearForm = useCallback(() => {
    setFormValues({
      ...INITIAL_FORM_STATE,
      name: '',
      email: '',
      address: '',
      phone: '',
      text: '',
      index: '',
      organization: '',
      file: '',
      document: '',
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(url, formValues).then((response) => setMsg(response.data.respMesg));
    } catch (err) {
      console.log('error', err);
    }
    clearForm();
  };

  return {
    handleUserInput,
    formValues,
    errors,
    handleCheckBox,
    setFormValues,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  };
};
