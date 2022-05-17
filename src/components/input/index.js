import { Container } from "../footer/styles";
import type { InputProps } from "../../const/consts";

export default function InputName({
  error,
  inputName,
  onChange,
  type,
  value,
  placeholder,
}: InputProps): JSX.Element {
  return (
    <Container>
        <input
          type={type}
          name={inputName}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data-testid={`${inputName}-input`}
        />
      {error && <p>{error}</p>}
    </Container>
  );
}
