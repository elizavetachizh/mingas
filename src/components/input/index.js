import type { InputProps } from '../../const/consts';
import { Input } from './styles';

const divStyle = {
  margin: '0',
  width: '100%',
};
export default function InputName({
  error,
  inputName,
  onChange,
  type,
  value,
  placeholder,
}: InputProps): JSX.Element {
  return (
    <div>
      <Input
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
