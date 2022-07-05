import styled from 'styled-components';

export const AdditionalDiv = styled.div`
  margin: 8% auto;
  max-width: 1440px;
  text-align: justify;
  @media (max-width: 1500px) {
    margin: 14% auto 4% auto;
  } ;
  @media (max-width: 670px) {
    margin: 20% auto 4% auto;
  } ;
  @media (max-width: 500px) {
    width: 500px;
    margin: 0 65px;
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
  padding: 1rem 0.6rem 2rem 2rem;
  border-top: 0.1rem solid #e0e0e0;
`;
