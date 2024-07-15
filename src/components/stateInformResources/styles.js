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
  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
