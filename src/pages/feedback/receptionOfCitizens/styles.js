import styled from 'styled-components';
export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid grey;
  }
  @media (max-width: 900px) {
    font-size: 14px;
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 440px) {
    width: 100%;
    margin: 0 auto;
    font-size: 12px;
  }
  &.firstColumn {
    width: 40%;
    tr {
      td {
        a {
          color: #0d4475;
        }
      }
    }
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
  tr {
    height: 150px;
    @media (max-width: 1010px) {
      height: 200px;
    }
    @media (max-width: 900px) {
      height: 150px;
    }
    @media (max-width: 491px) {
      height: 200px;
    }
    td {
      div,
      p {
        margin: 0;
      }
    }
    //td {
    //  @media (max-width: 1390px) {
    //    height: 225px;
    //  }
    //}
  }
  &.regulatory-docs-for-legal {
    tr {
      height: fit-content;

      td {
        height: fit-content;
        padding: 10px 0;
      }
    }
  }
  &.general {
    tr {
      height: fit-content;
      td {
        height: fit-content;
      }
    }
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: inherit;
`;
