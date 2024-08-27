import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Три колонки равной ширины */
  gap: 20px; /* Промежуток между колонками */
  //height: 100vh; /* Высота контейнера */
  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr); /* Две колонки на экранах меньше 768px */
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr; /* Одна колонка на экранах меньше 480px */
  }
`;

export const Column = styled.div`
  //background-color: lightgray; /* Цвет фона для колонок */
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование содержимого по вертикали */
  justify-content: flex-start; /* Центрирование содержимого по горизонтали */
  padding: 20px;
  box-sizing: border-box; /* Учитываем padding в ширину и высоту */
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
  img {
    width: 300px;
  }
`;
