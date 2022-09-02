import { InputPropsPhone } from '../../../const/consts';
import { Input } from '../styles';

export default function InputPhone({
  error,
  inputPhone,
  onChange,
  type,
  value,
  placeholder,
}: InputPropsPhone): JSX.Element {
  return (
    <div>
      <Input
        type={type}
        name={inputPhone}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
