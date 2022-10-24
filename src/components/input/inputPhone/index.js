import { Input } from '../styles';

export default function InputPhone({
  error,
  inputPhone,
  onChange,
  type,
  value,
  placeholder,
  maxlength,
}) {
  return (
    <div>
      <Input
        type={type}
        name={inputPhone}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxlength={maxlength}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
