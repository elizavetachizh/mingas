import styled from 'styled-components';

export const AdditionalDiv = styled.div`
  margin: 12% auto 4%;
  max-width: 1440px;
  text-align: left;
  a {
    text-decoration: none;
  }
  @media (max-width: 1340px) {
    margin-top: 16%;
  }
  @media (max-width: 950px) {
    margin-top: 18%;
  }
  @media (min-width: 2000px) {
    margin: 10% auto 4%;
  }
`;

export const PageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  margin: 0 2%;
`;

export const Table = styled.table`
  max-width: 100%;
  width: 100%;
  background-color: transparent;
  margin-bottom: 30px;
  border-collapse: collapse;
  th {
    border: 1px solid black;
    padding: 1rem 0.5rem;
  }
`;

export const Tbody = styled.tbody`
  border-top: 0.1rem solid #e0e0e0;
  text-align: left;
  a {
    color: #0d4475;
  }
`;

export const Tr = styled.tr`
  font-size: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const Td = styled.td`
  vertical-align: top;
  padding: 0.2rem 0.2rem 0.6rem 0.6rem;
  border: 0.1rem solid #e0e0e0;
`;

export const TableServices = styled.table`
  width: 94%;
  margin: 0 auto 30px;
  background-color: transparent;
  border-collapse: collapse;
  overflow-x: auto;
  td {
    border: 1px solid #ccc;
    background: #fff;
    text-align: center;
    padding: 0.2rem 0.5rem;
    font-size: 14px;
    @media (max-width: 1152px) {
      font-size: 11px;
    }
    @media (max-width: 880px) {
      font-size: 9px;
    }
    @media (max-width: 500px) {
      padding: 0;
    }
    @media (max-width: 380px) {
      font-size: 6px;
    }
  }
  tr {
    border: 1px solid black;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
