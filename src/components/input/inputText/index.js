import { InputPropsText } from '../../../const/consts';
import { Input } from '../styles';

const divStyle = {
  margin: '0',
  width: '100%',
};
export default function InputText({
  error,
  inputText,
  onChange,
  type,
  value,
  placeholder,
}: InputPropsText): JSX.Element {
  return (
    <div style={divStyle}>
      <Input
        type={type}
        name={inputText}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
