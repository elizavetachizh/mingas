import styled from 'styled-components';

export const DivMap = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  iframe {
    width: 900px;
    height: 500px;
  }
  @media (max-width: 900px) {
    iframe {
      width: 700px;
      height: 600px;
    }
  }
  @media (max-width: 700px) {
    iframe {
      width: 500px;
      height: 500px;
    }
  }
  @media (max-width: 645px) {
    width: 100%;
    iframe {
      width: 450px;
      height: 500px;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 0 2%;
  }
  @media (max-width: 465px) {
    width: 100%;
    iframe {
      width: 350px;
      height: 500px;
    }
  }
  @media (max-width: 370px) {
    width: 100%;
    margin: 0;
    iframe {
      width: 300px;
      height: 500px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 3rem auto;
  color: #0d4475;
`;
