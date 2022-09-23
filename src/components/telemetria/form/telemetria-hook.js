import React, { useCallback, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { INITIAL_FORM_STATE } from '../../../const/consts';
export const useFormTelemetria = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
  //for site
  const url = 'https://back.mingas.by/telemetria';

  //for me
  // const url = 'https://localhost:3000/telemetria';

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

  const [errors, setErrors] = useState({});
  const isButtonDisabled = useMemo(() => {
    return !!(
      stringIncludesNumber(formValues.name) ||
      !isValidateEmail(formValues.email) ||
      !formValues.organization ||
      !formValues.address ||
      !formValues.phone ||
      !formValues.text ||
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
      case 'organization':
        if (!formValues.organization.length) {
          setErrors({ ...errors, organization: 'Заполните, пожалуйста название организации!' });
        }
        break;
      case 'email':
        if (!isValidateEmail(formValues.email)) {
          setErrors({ ...errors, email: 'Введите верный адрес почты!' });
        }
        break;
      case 'phone':
        if (!formValues.phone.length) {
          setErrors({ ...errors, phone: 'Введите телефон!' });
        }
        break;
      case 'text':
        if (!formValues.text.length) {
          setErrors({ ...errors, text: 'Заполните, пожалуйста, поле!' });
        }
        break;
      case 'address':
        if (!formValues.address.length) {
          setErrors({ ...errors, address: 'Введите, пожалуйста адрес проживания!' });
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
    setFormValues,
    isButtonDisabled,
    handleSubmit,
    form,
    msg,
  };
};
