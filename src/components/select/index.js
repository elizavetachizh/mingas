import { Container } from '../footer/styles';
import type { SelectProps } from '../../const/consts';
import { Label } from '../formQuestion/styles';
const styleDiv = {
  padding:'1rem'
}
export default function Select({
  label,
  span,
  error,
  inputName,
  onChange,
  value,
  options,
}: SelectProps): JSX.Element {
  return (
    <div style={styleDiv}>
      <Label>
        {label}
        <span>{span}</span>
      </Label>
      <select
        name={inputName}
        onChange={onChange}
        value={value}
        data-testid={`${inputName}-select`}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p>{error}</p>}
    </div>
  );
}
