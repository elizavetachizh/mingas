import { Input } from './styles';

export default function InputName({
  error,
  inputName,
  onChange,
  type,
  value,
  placeholder,
  style,
  className,
  id,
}) {
  return (
    <div>
      <Input
        style={style}
        type={type}
        name={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        id={id}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
