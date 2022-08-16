import styled from 'styled-components';

export const DivLeadersPhotoPosition = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  grid-gap: 20px;
  @media (max-width: 400px) {
    margin: 0;
  }
`;
