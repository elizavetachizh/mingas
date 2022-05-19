import styled from 'styled-components';

export const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  border: 1px solid #ddd;
  @media(max-width: 900px) {
    font-size: 14px;
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
