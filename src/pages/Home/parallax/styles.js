import styled from 'styled-components';
export const ParallaxDivInter = styled.div`
  width: 100%;
  height: 400px;
  img {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    @media (max-width: 1600px) {
      box-shadow: none;
      border-radius: 0;
      margin: 0 auto 0;
    }
  }

  @media (max-width: 800px) {
    height: 500px;
  }
  @media (max-width: 640px) {
    height: 600px;
  }
`;

export const ParallaxD = styled.div`
  border-radius: 20px;
  background-color: transparent;
  img{
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
    background-color: #0d4475;
    margin: 0 auto 0;
    img{
      box-shadow: none;
      border-radius: 0;
      margin: 0 auto 0;
    }
  }
`;
