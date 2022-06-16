
import type { InputPropsAddress } from '../../../const/consts';
import { Input } from "../styles";

const divStyle = {
  margin: '0',
  width: '100%',
  textAlign: 'center',
};
export default function InputAddress({
  error,
  inputAddress,
  onChange,
  type,
  value,
  placeholder,
}: InputPropsAddress): JSX.Element {
  return (
    <div style={divStyle}>
      <Input
        type={type}
        name={inputAddress}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
