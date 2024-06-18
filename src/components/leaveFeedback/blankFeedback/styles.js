import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  thead {
    tr {
      th {
        border: 1px solid black;
        text-align: center;
        padding: 0 0.5rem;
      }
    }
  }
  tbody {
    tr {
      td {
        border: 1px solid black;
      }
    }
  }
`;
