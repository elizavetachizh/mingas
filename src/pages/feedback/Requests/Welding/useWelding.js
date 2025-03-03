import { useCallback, useMemo, useRef, useState } from 'react';
import { INITIAL_REQUEST_STATE_WELDING } from '../../../../const/consts';
import axios from 'axios';
import {
  isValidateEmail,
  isValidatePhone,
  stringIncludesNumber,
} from '../../../../components/functionFalidateForm';

export const useWelding = () => {
  //for site
   const url = 'https://back.mingas.by/welding';

  //for me
  // const url = 'http://localhost:3000/welding';

  const [requestValues, setRequestValues] = useState(INITIAL_REQUEST_STATE_WELDING);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState('');
  const form = useRef();
  const isButtonDisabled = useMemo(() => {
    return !!(
      stringIncludesNumber(requestValues.name) ||
      !isValidateEmail(requestValues.email) ||
      !requestValues.personal_account ||
      !isValidatePhone(requestValues.phone) ||
      !requestValues.address ||
      !requestValues.location ||
      !requestValues.gas_equipment ||
      !requestValues.isAgree ||
      !requestValues.flammable_materials ||
      !requestValues.feedback_method ||
      Object.keys(errors)?.length
    );
  }, [requestValues, errors]);
  console.log(isButtonDisabled);
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
          setErrors({ ...errors, email: 'Введите верный адрес электронной почты!' });
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
          setErrors({ ...errors, isAgree: 'Заполните все поля с *' });
        }
        break;
      case 'personal_account':
        if (!requestValues.personal_account.length) {
          setErrors({
            ...errors,
            text: 'Введите, пожалуйста, ваш лицевой счёт',
          });
        }
        break;
      case 'location':
        if (!requestValues.location) {
          setErrors({
            ...errors,
            reading: 'Выберите расположение переносимого участка газопровода',
          });
        }
        break;
      case 'feedback_method':
        if (!requestValues.feedback_method) {
          setErrors({
            ...errors,
            reading: 'Выберите способ обратной связи',
          });
        }
        break;
      default:
        break;
    }
  };
  console.log(requestValues);
  // const handleChangeGasEquipment = useCallback(
  //   (event) => {
  //     event.preventDefault();
  //     const { name, value } = event.target;
  //     setRequestValues({ ...requestValues, time: value });
  //     validate(name);
  //   },
  //   [requestValues, validate]
  // );

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
      ...INITIAL_REQUEST_STATE_WELDING,
      name: '',
      email: '',
      personal_account: '',
      phone: '',
      address: '',
      location: '',
      gas_equipment: '',
      flammable_materials: '',
      feedback_method: '',
      information: [],
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
