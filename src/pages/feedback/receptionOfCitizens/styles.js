import styled from 'styled-components';

export const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  border: 1px solid #ddd;
  font-family: Play, serif;
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media(max-width: 610px) {
    width: 100%;
    margin: 0 auto;
  }
  @media(max-width: 600px) {
    width: 100%;
    margin: 0 4%;
  }
  @media(max-width: 550px) {
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
  tr:nth-child(2n) {
    background-color: rgba(200, 220, 231, 80%);
  }
`;
export const SectionTable = styled.section`
  margin-bottom: 6%;
 
`;
