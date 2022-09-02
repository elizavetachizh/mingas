import type { InputProps } from '../../const/consts';
import { Input } from './styles';

export default function InputName({
  error,
  inputName,
  onChange,
  type,
  value,
  placeholder,
  style,
}: InputProps): JSX.Element {
  return (
    <div>
      <Input style={style}
        type={type}
        name={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
