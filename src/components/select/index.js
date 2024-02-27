import { Label } from '../formQuestion/styles';
import { DivSelect, SelectDiv } from './styles';

export default function Select({ label, span, error, inputName, onChange, value, options }) {
  return (
    <DivSelect>
      <Label>
        {label}
        <span>{span}</span>
      </Label>
      <SelectDiv
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
      </SelectDiv>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </DivSelect>
  );
}
