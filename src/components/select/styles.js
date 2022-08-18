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
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  @media(max-width: 640px){
    width: 530px;
    margin: 1.5rem auto 0;
  }
`;
