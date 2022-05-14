import React, { useCallback, useMemo, useState } from 'react';
import { FormState, FormValues, UseFormReturnValues } from '../../shared/consts/interfaces';
import { Card } from '../../components/CardForm';
import {INITIAL_FORM_STATE} from '../const/consts';

export const useForm = () => {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Record>({});
  const [cards, setCards] = useState<Card[]>([]);
  const isButtonDisabled = useMemo<boolean>(() => {
    return !!(
      formValues.name?.length ||
      !formValues.birthday ||
      !formValues.date ||
      !formValues.country ||
      !formValues.isAgree ||
      Object.keys(errors)?.length
    );
  }, [formValues, errors]);

  const validate = (fieldName: string): void => {
    setErrors({});
    switch (fieldName) {
      case 'name':
        if (formValues.name.length) {
          setErrors({ ...errors, name: 'Username must be 5 characters long!' });
        }
        break;
      case 'birthday':
        if (!formValues.birthday) {
          setErrors({ ...errors, birthday: 'Date is not valid!' });
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
      setFormValues(
        Object.assign(formValues, { [name]: value } as unknown as Pick<FormState, keyof FormState>)
    );
      validate(name);
    },
    [formValues]
  );

  const handleChangeCountry = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault();
      const { name, value } = event.target;
      setFormValues({ ...formValues, country: value } as unknown as Pick<
      FormState,
        keyof FormState
      >);
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
    (document.getElementById('file-input') as HTMLInputElement).value = '';
    setFormValues({ ...INITIAL_FORM_STATE, name: '', date: '', birthday: '' });
  }, []);

  const handleSubmit = useCallback(() => {
    setCards([
      ...cards,
      {
        name: formValues.name,
        birthday: formValues.birthday,
        date: formValues.date,
        country: formValues.country,
        isAgree: formValues.isAgree,
        fileName: formValues.fileName,
        male: formValues.male,
      },
    ]);
    clearForm();
    alert('Форма успешно заполнена');
  }, [cards, formValues]);

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
    cards,
  };
};
