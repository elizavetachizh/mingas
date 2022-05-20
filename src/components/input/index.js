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
    <div style={divStyle}>
      <Input
        type={type}
        name={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-testid={`${inputName}-input`}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
