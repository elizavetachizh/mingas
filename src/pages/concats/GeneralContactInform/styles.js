import styled from 'styled-components';

export const AdditionalDiv = styled.div`
  margin: 6% auto;
  max-width: 1440px;
  text-align: left;
  @media (max-width: 1500px) {
    margin: 14% auto 4% auto;
  } ;
  @media (max-width: 670px) {
    margin: 20% auto 4% auto;
  } ;
  @media (max-width: 570px) {
    width: 570px;
    margin: 24% 60px;
  } ;
  @media (max-width: 500px) {
    width: 500px;
    margin: 24% 60px;
  } ;
  @media (max-width: 410px) {
    width: 500px;
    margin: 30% 65px;
  } ;
  @media (max-width: 335px) {
    width: 500px;
    margin: 36% 65px;
  } ;
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
