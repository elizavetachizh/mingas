import styled from 'styled-components';
export const ParallaxDivInter = styled.div`
  width: 100%;
  height: 400px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  @media (max-width: 800px) {
    height: 500px;
  }
  @media (max-width: 640px) {
    height: 600px;
  }
`;

export const ParallaxD = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  //@media (max-width: 640px) {
  //  width: 650px;
  //}
`
