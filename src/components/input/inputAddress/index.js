import type { InputPropsAddress } from '../../../const/consts';
import { Input } from '../styles';

export default function InputAddress({
  error,
  inputAddress,
  onChange,
  type,
  value,
  placeholder,
}: InputPropsAddress): JSX.Element {
  return (
    <div>
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
