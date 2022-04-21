import styled from "styled-components";

const ContainerBackgroundColor = {
    gray: `
    background-color: #C8DCE7;
    color: #3A5868`,
    blue: `
    background-color: #314D5C;
    color: #FFF`,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #E9F1F5;
  margin: 0;
  align-items: center;
  padding: 50px 0;
  ${({backgroundColor})=> ContainerBackgroundColor[backgroundColor]}
`;