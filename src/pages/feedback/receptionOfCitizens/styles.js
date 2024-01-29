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
`;
export const Tbody = styled.tbody`
  tr {
    height: 193px;
    @media (max-width: 1010px) {
      height: 265px;
    }
    @media (max-width: 900px) {
      height: 197px;
    }
    @media (max-width: 800px) {
      height: 160px;
    }
    @media (max-width: 530px) {
      height: 197px;
    }
    @media (max-width: 491px) {
      height: 230px;
    }
    td {
      div,
      p,
      a {
        margin: 0 4px;
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
  color: #0d4475;
  flex-direction: row;
  align-items: inherit;
  margin: 0 2%;
  @media (max-width: 400px) {
    margin: 0 1%;
  }
  a {
    color: #0d4475;
    font-weight: bold;
    text-decoration: underline;
  }
  table {
    tbody {
      td {
        padding: 0 0.5rem;
        @media (max-width: 538px) {
          font-size: 14px;
        }
        @media (max-width: 478px) {
          font-size: 12px;
        }
        @media (max-width: 416px) {
          padding: 0;
        }
        @media (max-width: 365px) {
          font-size: 10px;
        }
      }
    }
    thead {
      text-align: center;
      th {
        padding: 0.5rem 0;
        @media (max-width: 538px) {
          font-size: 14px;
        }
        @media (max-width: 478px) {
          font-size: 12px;
        }
        @media (max-width: 365px) {
          font-size: 10px;
        }
      }
    }
  }
`;
