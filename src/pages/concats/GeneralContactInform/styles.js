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

export const Tr = styled.tr`
  font-size: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

