import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import { useCallback, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import {isValidateEmail, isValidatePhone, stringIncludesNumber} from "../../../../components/functionFalidateForm";

export const useRequestForIssuance = () => {
  //for me
  // const url = 'http://localhost:3000/maintenance';

  //for site
  const url = 'https://back.mingas.by/maintenance';
  const [msg, setMsg] = useState('');
  const [requestIssuanceValues, setRequestIssuanceValues] = useState(INITIAL_REQUEST_STATE);
  const [errors, setErrors] = useState({});
  const form = useRef();

  const isButtonDisabled = useMemo(() => {
    return !!(
      stringIncludesNumber(requestIssuanceValues.name) ||
      !isValidateEmail(requestIssuanceValues.email) ||
      !requestIssuanceValues.isAgree ||
      !requestIssuanceValues.time ||
      !requestIssuanceValues.text ||
      !requestIssuanceValues.address ||
      !requestIssuanceValues.date ||
      !isValidatePhone(requestIssuanceValues.phone) ||
      Object.keys(errors)?.length
    );
  }, [requestIssuanceValues, errors]);

  const validate = (fieldName) => {
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
          setErrors({ ...errors, phone: 'Введите телефон в формате +375XXXXXXXXX!' });
        }
        break;
      case 'isAgree':
        if (!!requestIssuanceValues.isAgree) {
          setErrors({ ...errors, isAgree: 'Заполните все поля со *' });
        }
        break;
      case 'time':
        if (requestIssuanceValues.time.trim().length) {
          setErrors({
            ...errors,
            time: 'Выберете тип оборудования',
          });
        }
        break;
      case 'text':
        if (!requestIssuanceValues.text.length) {
          setErrors({
            ...errors,
            text: 'Введите, пожалуйста, ваш лицевой счёт',
          });
        }
        break;
      case 'address':
        if (!requestIssuanceValues.address.length) {
          setErrors({ ...errors, address: 'Введите, пожалуйста адрес проживания!' });
        }
        break;
      case 'date':
        if (!requestIssuanceValues.date) {
          setErrors({ ...errors, date: 'Заполните, пожалуйста,  желаемую дату выполнения работы' });
        }
        break;
      default:
        break;
    }
  };

  const handleUserInput = useCallback(
    (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      setRequestIssuanceValues(Object.assign(requestIssuanceValues, { [name]: value }));
      validate(name);
    },
    [requestIssuanceValues, validate]
  );
  const handleChangeTime = useCallback(
    (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      setRequestIssuanceValues({ ...requestIssuanceValues, time: value });
      validate(name);
    },
    [requestIssuanceValues, validate]
  );

  const handleCheckBox = useCallback(() => {
    setRequestIssuanceValues({ ...requestIssuanceValues, isAgree: !requestIssuanceValues.isAgree });
    validate('isAgree');
  }, [requestIssuanceValues, validate]);

  const clearForm = useCallback(() => {
    setRequestIssuanceValues({
      ...INITIAL_REQUEST_STATE,
      name: '',
      email: '',
      phone: '',
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post(url, requestIssuanceValues)
        .then((response) => setMsg(response.data.respMesg));
    } catch (err) {
      console.log('error', err);
    }
    clearForm();
  };
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
    msg,
  };
};
