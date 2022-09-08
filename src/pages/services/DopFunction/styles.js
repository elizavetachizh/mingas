import styled from 'styled-components';
export const DescriptionService = styled.div`
  text-align: justify;
  max-width: 1100px;
  margin: 0 auto;
  font-size: 18px;
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
  @media (max-width: 600px) {
    max-width: 400px;
  }
  table {
    width: 100%;
    margin: 0;
    text-align: center;
    border-collapse: collapse;
    font-size: 1em;
    border: 1px solid #ccc;
    table-layout: auto;
    p {
      text-indent: 0;
    }
    td {
      padding: 0.5em 1em;
      border: 1px solid #ccc;
      background: #fff;
    }
  }
`;

export const ContainerFunctionService = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4% auto;
  @media (max-width: 900px) {
    margin: 4% 2%;
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
