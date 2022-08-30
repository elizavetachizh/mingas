import styled from 'styled-components';

export const DivLeadersPhotoPosition = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  @media (max-width: 578px) {
    display: flex;
    flex-direction: column;
  }
`;
