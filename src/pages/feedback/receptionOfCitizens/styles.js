import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
  color: #0d4475;
  a:hover,
  a:active {
    color: #0d4475 !important;
  }
  tr {
    height: 300px;
    td {
      a:hover,
      a:active {
        color: #0d4475 !important;
      }
      &:hover {
        text-decoration-line: underline;
      }
      @media (max-width: 1390px) {
        height: 225px;
      }
    }
  }
  &.firstColumn {
    tr {
      td {
        a:hover,
        a:active {
          color: #0d4475 !important;
        }
      }
    }
  }
  &.general {
    tr {
      height: fit-content;
      td {
        height: fit-content;
        color: #0d4475;
      }
    }
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: inherit;
`;
