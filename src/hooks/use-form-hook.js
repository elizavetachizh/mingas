import React, { useCallback, useMemo, useState } from 'react';

// import { Card } from '../../components/CardForm';
import { INITIAL_FORM_STATE } from '../const/consts';
import type { FormValuesConst } from '../const/consts';

export const useForm = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const [errors, setErrors] = useState({});
  // const [cards, setCards] = useState<Card[]>([]);
  const isButtonDisabled = useMemo(() => {
    return !!(
      !formValues.name?.length ||
      !re.test(formValues.email) ||
       !formValues.date ||
       !formValues.work ||
      !formValues.isAgree ||
      Object.keys(errors)?.length
    );
  }, [formValues, errors]);

  const validate = (fieldName: string): void => {
    setErrors({});
    switch (fieldName) {
      case 'name':
        if (!formValues.name.length) {
          setErrors({ ...errors, name: 'Username must be!' });
        }
        break;
      case 'email':
        if ( !re.test(formValues.email)) {
          setErrors({ ...errors, email: 'Email is not valid!' });
        }
        break;
      case 'date':
        if (!formValues.date) {
          setErrors({ ...errors, date: 'Date is not valid!' });
        }
        break;
      case 'country':
        if (formValues.country.trim().length) {
          setErrors({ ...errors, country: 'Country should be selected!' });
        }
        break;
      case 'isAgree':
        if (!!formValues.isAgree) {
          setErrors({ ...errors, isAgree: 'You need to apply!' });
        }
        break;
      default:
        break;
    }
  };

  const handleUserInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log(1);
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
    console.log({
      name: formValues.name,
      email: formValues.email,
      date: formValues.date,
      // country: formValues.country,
      isAgree: formValues.isAgree,
      fileName: formValues.fileName,
      // male: formValues.male,
    });
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
    // cards,
  };
};
