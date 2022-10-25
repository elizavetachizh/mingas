
import { Input } from '../styles';

export default function InputAddress({
  error,
  inputAddress,
  onChange,
  type,
  value,
  placeholder,
}) {
  return (
    <div>
      <Input
        type={type}
        name={inputAddress}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
