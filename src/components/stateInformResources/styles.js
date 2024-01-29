import styled from 'styled-components';

export const DivCarousel = styled.div`
  text-align: center;
  img {
    width: 110px;
    @media (max-width: 800px) {
      width: 100px;
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
