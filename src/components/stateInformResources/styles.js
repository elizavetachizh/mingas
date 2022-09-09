import styled from 'styled-components';

export const DivCarousel = styled.div`
  text-align: center;
  img {
    width: 64%;
    height: 64%;
    @media (max-width: 1200px) {
      width: 74%;
      height: 74%;
    }
    @media (max-width: 1100px) {
      width: 94%;
      height: 94%;
    }
  }
  &.isPhone {
    img {
      width: 64%;
      height: 64%;
      @media (max-width: 600px) {
        width: 74%;
        height: 74%;
      }
      @media (max-width: 500px) {
        width: 96%;
        height: 96%;
      }
    }
  }
  figure {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      margin: 0;
    }
  }
  a {
    text-decoration: none;
    color: #0d4475;
    font-size: 18px;

    @media (max-width: 568px) {
      font-size: 16px;
    }
  }
  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
