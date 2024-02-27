import { useCallback, useMemo, useRef, useState } from 'react';
import { INITIAL_REQUEST_STATE } from '../../../../const/consts';
import axios from 'axios';
import {
  isValidateEmail,
  isValidatePhone,
  stringIncludesNumber,
} from '../../../../components/functionFalidateForm';

export const useProvidingGasMasterReadings = () => {
  //for site
  const url = 'https://back.mingas.by/users';

  //for me
  // const url = 'http://localhost:3000/users';

  const [requestValues, setRequestValues] = useState(INITIAL_REQUEST_STATE);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState('');
  const form = useRef();
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

  const validate = (fieldName) => {
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
          setErrors({ ...errors, phone: 'Введите телефон в формате +375XXXXXXXXX!' });
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
    (event) => {
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
      email: '',
      phone: '',
      address: '',
      text: '',
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(url, requestValues).then((res) => setMsg(res.data.respMesg));
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
    setRequestValues,
    handleSubmit,
    form,
    msg,
  };
};
