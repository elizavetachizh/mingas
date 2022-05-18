import styled from "styled-components";

export const DivAutoComplete = styled.div`
display: flex;
justify-content: center;
align-items: center`;

export const InputAutoComplete = styled.input`
  width: 570px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 10px;
  margin: 20px;
  @media(max-width: 600px) {
    width: 400px;
    margin-left: 20%;
  }
  @media(max-width: 400px) {
    width: 300px;
    margin-left: 30%;
  }
`;