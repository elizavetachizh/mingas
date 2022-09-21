export const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  phone: '',
  address: '',
  text: '',
  isAgree: false,
  message: '',
  male: false,
  index: '',
  organization: '',
  file: '',
  document: '',
};

export interface InputProps {
  type: 'date' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputName: string;
  error: string;
  placeholder?: string;
}
export interface InputPropsAddress {
  type: 'date' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputAddress: string;
  error: string;
  placeholder?: string;
}
export interface InputPropsPhone {
  type: 'date' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputPhone: string;
  error: string;
  placeholder?: string;
}
export interface InputPropsText {
  type: 'date' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputText: string;
  error: string;
  placeholder?: string;
}

export interface InputPropsInform {
  type: 'date' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputInform: string;
  error: string;
  placeholder?: string;
}
export interface SelectProps {
  label: string;
  span: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  inputName: string;
  error: string;
  number: string;
  options: Option;
  reading: string;
}
export const INITIAL_REQUEST_STATE = {
  name: '',
  email: '',
  phone: '',
  address: '',
  date: '',
  time: '',
  work: '',
  text: '',
  isAgree: false,
  message: '',
  number: '',
  reading: '',
  marka: '',
  file: '',
};

export const OPTIONS = [
  {
    value: '',
    label: 'Выберете вид работы',
  },
  {
    value: 'Ремонт газового оборудования',
    label: 'Ремонт газового оборудования',
  },
  {
    value: 'Подключение газового оборудования',
    label: 'Подключение газового оборудования',
  },
  {
    value: 'Отключение газового оборудования',
    label: 'Отключение газового оборудования',
  },
  {
    value: 'Монтаж, перенос газового оборудования',
    label: 'Монтаж, перенос газового оборудования',
  },
  {
    value: 'Установка прибора учета расхода газа',
    label: 'Установка прибора учета расхода газа',
  },
  {
    value: 'Монтаж, ремонт индвидуальных оборудования',
    label: 'Монтаж, ремонт индвидуальных оборудования',
  },
  {
    value: 'Тех. обслуживание газового оборудования',
    label: 'Тех. обслуживание газового оборудования',
  },
];

export const OPTIONS_EQUIPMENT = [
  {
    value: '',
    label: 'Выберете тип оборудования',
  },
  {
    value: 'Плита',
    label: 'Плита',
  },
  {
    value: 'Водонагреватель проточный газовый',
    label: 'Водонагреватель проточный газовый',
  },
  {
    value: 'Котёл отопительный',
    label: 'Котёл отопительный',
  },
];

export interface UseFormReturnValues {
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formValues: RequestValuesConst;
  errors: Record<string, string>;
  handleChangeCountry: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFileInput: (event: { target: { files: FileList } }) => void;
  handleCheckBox: VoidFunction;
  handleSwitcher: VoidFunction;
  isButtonDisabled: boolean;
  handleSubmit: VoidFunction;
}
