import React, { useCallback, useMemo, useState } from 'react';

// import { Card } from '../../components/CardForm';
import { INITIAL_FORM_STATE } from '../const/consts';

export const useForm = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
  const isValidateEmail = (email: string): boolean => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/.test(
      email
    );
  };

  const isValidatePhone = (phone: string): boolean => {
    return /\+375\(\d{2}\)-\d{3}-\d{2}-\d{2}/g.test(phone);
  };

  const stringIncludesNumber = (string: string): boolean => {
    return /\d/.test(string);
  };

  const [errors, setErrors] = useState({});
  // const [cards, setCards] = useState<Card[]>([]);
  const isButtonDisabled = useMemo(() => {
    return !!(
      stringIncludesNumber(formValues.name) ||
      !isValidateEmail(formValues.email) ||
      !formValues.address ||
      !formValues.isAgree ||
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
          setErrors({ ...errors, name: 'ФИО может модержать только буквы!' });
        }
        break;
      case 'email':
        if (!isValidateEmail(formValues.email)) {
          setErrors({ ...errors, email: 'Введите верный адрес почты!' });
        }
        break;
      case 'phone':
        if (!isValidatePhone(formValues.phone)) {
          setErrors({ ...errors, phone: 'Введите телефон в соответсвующем формате!' });
        }
        break;
      case 'address':
        if (!formValues.address.length) {
          setErrors({ ...errors, address: 'Введите, пожалуйста адрес проживания!' });
        }
        break;
      case 'text':
        if (!formValues.text.length) {
          setErrors({ ...errors, text: 'Заполните, пожалуйста, обращение' });
        }
      case 'isAgree':
        if (!!formValues.isAgree) {
          setErrors({ ...errors, isAgree: 'Заполните поле' });
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

  const handleChangeCountry = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault();
      const { name, value } = event.target;
      setFormValues({ ...formValues, country: value });
      validate(name);
    },
    [formValues]
  );

  const handleCheckBox = useCallback(() => {
    setFormValues({ ...formValues, isAgree: !formValues.isAgree });
    validate('isAgree');
  }, [formValues]);

  const handleSwitcher = useCallback(() => {
    setFormValues({ ...formValues, male: !formValues.male });
  }, [formValues]);

  const handleFileInput = useCallback(
    (event: { target: { files: FileList } }) => {
      const file = event.target.files[0];
      setFormValues({ ...formValues, fileName: file.name });
    },
    [formValues]
  );

  const clearForm = useCallback(() => {
    document.getElementById('file-input').value = '';
    setFormValues({ ...INITIAL_FORM_STATE, name: '', date: '', email: '' });
  }, []);

  const handleSubmit = useCallback(() => {
    // setCards([
    //   ...cards,
    //   {
    //     name: formValues.name,
    //     birthday: formValues.birthday,
    //     date: formValues.date,
    //     country: formValues.country,
    //     isAgree: formValues.isAgree,
    //     fileName: formValues.fileName,
    //     male: formValues.male,
    //   },
    // ]);
    clearForm();
    alert('Форма успешно заполнена');
    console.log('handle');
  }, [formValues]);

  return {
    handleUserInput,
    formValues,
    errors,
    handleChangeCountry,
    handleFileInput,
    handleCheckBox,
    handleSwitcher,
    isButtonDisabled,
    handleSubmit,
  };
};
