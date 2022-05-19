export const INITIAL_FORM_STATE = {
  name: '',
  date: '',
  email: '',
  work: '',
  phone: '',
  address: '',
  text: '',
  isAgree: false,
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
  isAgree: boolean;
  text: string;
  fileName: string;
  male: boolean;
}
export interface InputProps {
  label: string;
  span: string;
  type: 'date' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputName: string;
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
  options: Option[];
}
