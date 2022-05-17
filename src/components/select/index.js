import { Container } from '../footer/styles';
import type { SelectProps } from "../../const/consts";

export default function Select({
  error,
  inputName,
  onChange,
  value,
  options,
}: SelectProps): JSX.Element {
  return (
    <Container>
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
    </Container>
  );
}
