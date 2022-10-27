import { Input } from '../styles';
import { DivSelect } from '../../select/styles';
import { Label } from '../../formQuestion/styles';

export default function InputDate({
  label,
  span,
  error,
  inputDate,
  onChange,
  type,
  value,
  placeholder,
}) {
  return (
    <DivSelect style={{ margin: '0 auto', width: '90%' }}>
      <Label>
        {label}
        <span>{span}</span>
      </Label>
      <div>
        <Input
          type={type}
          name={inputDate}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </DivSelect>
  );
}
