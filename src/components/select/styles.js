import styled from 'styled-components';

export const SelectDiv = styled.select`
  padding: 1rem;
  border-radius: 30px;
  border: 1px solid #0d4475;
  option {
    color: rgb(118, 118, 118);
  }
`;

export const DivSelect = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 2% auto;
  @media (max-width: 640px) {
    //width: 530px;
  }
  @media (max-width: 350px) {
    width: 280px;
  }
`;
