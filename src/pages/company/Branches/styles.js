import styled from 'styled-components';

export const ContainerParallax = styled.div`
  margin-top: 150px;
  height: fit-content;
  @media (max-width: 1400px) {
    height: 500px;
  }
  @media (max-width: 900px) {
    margin-top: 80px;
  }
  @media (max-width: 424px) {
    margin-top: 66px;
    height: 430px;
  }
`;
