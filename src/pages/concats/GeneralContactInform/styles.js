import styled from 'styled-components';

export const AdditionalDiv = styled.div`
  margin: 6% auto;
  max-width: 1440px;
  text-align: center;
  @media (max-width: 1500px) {
    margin: 10% auto;
  } ;
  @media (max-width: 500px) {
    max-width:100%;
    width: 100%;
    margin: 10%;
  } ;
  @media (max-width: 400px) {
    max-width:100%;
    width: 100%;
    margin: 26%;
  } ;
  @media (max-width: 350px) {
    max-width:100%;
    width: 100%;
    margin: 32%;
  } ;
`;

export const PageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  margin: 0 2%;
  color: #383838;
`;

export const Table = styled.table`
  max-width: 100%;
  width: 100%;
  background-color: transparent;
  margin-bottom: 30px;
`;

export const Tbody = styled.tbody`
  border-top: 0.1rem solid #e0e0e0;
`;

export const Tr = styled.tr`
  font-size: 1rem;
  border-bottom: 1px solid #e0e0e0;
  letter-spacing: 0.1em;
`;

export const Td = styled.td`
  vertical-align: top;
  color: #000;
  padding: 1rem 0.6rem 1rem 1rem;
  border-top: 0.1rem solid #e0e0e0;
`;
