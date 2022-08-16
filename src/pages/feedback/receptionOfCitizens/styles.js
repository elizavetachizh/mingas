import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  text-align: left;
  border-collapse: collapse;
  td, th {
    border: 1px solid grey;
  }
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 610px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 4%;
  }
  @media (max-width: 550px) {
    width: 100%;
    margin: 0 8%;
  }
`;

export const Thead = styled.thead`
  tr {
    color: white;
    background-color: #0d4475;
    text-align: center;
  }
`;

export const Tbody = styled.tbody`
  color: #314d5c;
`;
export const SectionTable = styled.section`
  margin-bottom: 6%;
`;
