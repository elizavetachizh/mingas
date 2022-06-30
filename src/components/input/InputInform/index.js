import { Input } from '../styles';
import type {  InputPropsInform } from "../../../const/consts";

const divStyle = {
  margin: '0',
  width: '100%',
  textAlign: 'center',
};
export default function InputInform({
  error,
  inputInform,
  onChange,
  type,
  value,

}: InputPropsInform): JSX.Element {
  return (
    <div style={divStyle}>
      <Input
        type={type}
        name={inputInform}
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
