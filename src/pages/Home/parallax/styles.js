import styled from 'styled-components';

export const ParallaxD = styled.div`
  border-radius: 20px;
  background-color: transparent;
  img {
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    object-fit: cover;
    height: 360px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    @media (max-width: 630px) {
      height: 270px;
    }
    @media (min-width: 1500px) {
      height: 500px;
    }
  }
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
    background-color:rgba(14,78,129,0.1);
    margin: 0 auto 0;
    img {
      box-shadow: none;
      border-radius: 0;
      margin: 0 auto 0;
    }
  }
`;
