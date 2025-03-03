import styled from 'styled-components';

export const Form = styled.form`
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
  z-index: 3;
`;

export const DivInput = styled.div`
  display: flex;
  width: 90%;
  margin: 1% auto;
  flex-direction: column;
  @media (max-width: 640px) {
    text-align: center;
  }
`;

export const DivInputCheckbox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  color: #2d4c6b;
  font-size: 14px;
  margin-bottom: 4px;
  span {
    color: red;
  }
`;

export const Button = styled.button`
  color: #fff; /* Цвет текста */
  background-color: ${(props) => (props.disabled ? '#F0F0F0' : 'rgb(15, 89, 141)')};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  width: fit-content;
  padding: 0.7rem 2rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% auto;
  cursor: pointer;
  transition: 0.8s linear;
  ${(props) =>
    !props.disabled &&
    ` &:hover {
    background-image: linear-gradient(
      -55deg,
      rgb(1, 95, 156) 0%,
      rgb(16, 69, 141) 0%,
      rgb(15, 89, 141) 19%,
      rgb(15, 78, 140) 60%,
      rgb(14, 78, 129) 79%,
      rgb(13, 68, 117) 100%
    );
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Тень при наведении */
  }`}

  &:active {
    transform: scale(0.95); /* Эффект нажатия */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Уменьшенная тень при нажатии */
  }

  &:focus {
    outline: none; /* Убираем стандартный контур фокуса */
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.5); /* Тень при фокусе */
  }
`;
