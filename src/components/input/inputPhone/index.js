import { InputPropsPhone } from "../../../const/consts";
import { Input } from "../styles";

const divStyle = {
  margin: '0',
  width: '100%',
  textAlign: 'center',
};
export default function InputPhone({
  error,
  inputPhone,
  onChange,
  type,
  value,
  placeholder,
}: InputPropsPhone): JSX.Element {
  return (
    <div style={divStyle}>
      <Input
        type={type}
        name={inputPhone}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
