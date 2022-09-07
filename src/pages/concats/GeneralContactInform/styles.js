import styled from 'styled-components';

export const AdditionalDiv = styled.div`
  margin: 16% auto 4%;
  max-width: 1440px;
  text-align: left;
  a {
    text-decoration: none;
  }
  @media (max-width: 900px) {
    margin-top: 104px;
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
    padding: 1rem 0.5rem;
  }
`;

export const Tbody = styled.tbody`
  border-top: 0.1rem solid #e0e0e0;
  text-align: left;
`;

export const Tr = styled.tr`
  font-size: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const Td = styled.td`
  vertical-align: top;
  color: #000;
  padding: 0.6rem 0.6rem 1.6rem 1.6rem;
  border: 0.1rem solid #e0e0e0;
`;
