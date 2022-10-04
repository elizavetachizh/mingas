import styled from 'styled-components';

export const ParallaxD = styled.div`
  border-radius: 20px;
  background-color: transparent;
  img {
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    object-fit: cover;
    height: 330px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    @media (min-width: 1500px) {
      height: 500px;
    }
  }
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
    background-color: #0d4475;
    margin: 0 auto 0;
    img {
      box-shadow: none;
      border-radius: 0;
      margin: 0 auto 0;
    }
  }
`;
