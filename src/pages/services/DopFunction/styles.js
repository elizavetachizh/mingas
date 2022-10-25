import styled from 'styled-components';
export const DescriptionService = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  font-size: 18px;
  p {
    text-align: justify;
    text-indent: 1.5em;
  }
  a {
    color: #0170b9;
    text-decoration: none;
  }
  @media (max-width: 1100px) {
    max-width: 800px;
  }
  @media (max-width: 800px) {
    max-width: 600px;
    font-size: 14px;
  }
  table {
    p {
      text-indent: 0;
    }
  }
`;

export const ContainerFunctionService = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4% auto;
  @media (max-width: 900px) {
    margin: 4% 2% 12%;
  }
  img {
    width: 40%;
    margin: 4% auto;
    @media (max-width: 600px) {
      width: 50%;
    }
    @media (max-width: 420px) {
      width: 60%;
    }
  }
`;

export const BlockClockAndPin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
`;
