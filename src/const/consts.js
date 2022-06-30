export const INITIAL_FORM_STATE = {
  name: '',
  date: '',
  email: '',
  work: '',
  phone: '',
  address: '',
  text: '',
  isAgree: false,
  message: '',
  fileName: '',
  male: false,
};

export interface FormValuesConst {
  name: string;
  date: string;
  email: string;
  work: string;
  phone: string;
  address: string;
  message: string;
  isAgree: boolean;
  text: string;
  fileName: string;
  male: boolean;
}
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
export interface InputPropsDate {
  type: 'date' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputDate: string;
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
  fileName: '',
  number: '',
  reading: '',
  marka: '',
};

export interface requestValues {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  date?: string;
  time?: string;
  work?: string;
  isAgree?: boolean;
  text?: string;
  fileName?: string;
  message: string;
  number: string,
  reading: string,
  marka: string,
}

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

export const OPTIONS_TIME = [
  {
    value: '',
    label: 'Выберете желаемое время для связи',
  },
  {
    value: '08:00-11:00',
    label: '08:00-11:00',
  },
  {
    value: '11:00-14:00',
    label: '11:00-14:00',
  },
  {
    value: '14:00-17:00',
    label: '14:00-17:00',
  },
  {
    value: '17:00-20:00',
    label: '17:00-20:00',
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
