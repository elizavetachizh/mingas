import React, { useCallback, useMemo, useRef, useState } from 'react';
import * as emailjs from '@emailjs/browser';
import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import type { UseFormReturnValues } from '../../../../const/consts';
import axios from 'axios';

export const useProvidingGasMasterReadings = (): UseFormReturnValues => {
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
      let reader = new FileReader();
      const file = event.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
      setRequestValues({ ...setRequestValues, fileName: file.name });
      alert(reader);
    },
    [setRequestValues]
  );
  const handleChangeWork = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault();
      const { name, value } = event.target;
      setRequestValues({ ...requestValues, work: value });
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
      reading: '',
    });
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await axios({
          url: process.env.EMAIL,
          headers: {
            'Content-type': 'application/json',
          },
          params: {
            requestValues,
          },
          method: 'GET',
          data: null,
        }).then(({ data }) => {
          return data;
        });
      } catch (err) {
        console.log('error', err);
      }

      // emailjs
      //   .sendForm('service_9ojlulb', 'template_twbp1hs', form.current,'Cr7j1nqgFLXsPcHIL')
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );

      clearForm();
      alert('Форма успешно заполнена');
    },
    [requestValues]
  );
  return {
    handleUserInput,
    requestValues,
    errors,
    handleChangeWork,
    handleChangeTime,
    handleFileInput,
    handleCheckBox,
    clearForm,
    isButtonDisabled,
    handleSubmit,
    form,
  };
};
