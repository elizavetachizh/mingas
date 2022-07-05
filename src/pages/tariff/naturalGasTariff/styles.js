import styled from 'styled-components';

export const BlockNaturalGas = styled.div`
  p {
    text-indent: 25px;
  }
  table,
  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  table {
    width: 50%;
    margin: 4% auto;
    text-align: center;
    
    p {
      text-indent: 0;
    }
  }
  td,
  th {
    padding: 8px;
    border-width: 0 1px 1px 0;
  }
  li {
    list-style: none;
  }
`;
