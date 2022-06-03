import { InputPropsDate } from "../../../const/consts";
import { Input } from "../styles";


const divStyle = {
  margin: '0',
  width: '100%',
};
export default function InputDate({
  error,
  inputDate,
  onChange,
  type,
  value,
  placeholder,
}: InputPropsDate): JSX.Element {
  return (
    <div style={divStyle}>
      <Input
        type={type}
        name={inputDate}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
