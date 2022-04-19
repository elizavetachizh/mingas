import styled from 'styled-components';

export const PageSection = styled.div``;

export const Abbreviated = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin: 1rem auto;
  max-width: 66%;
  span {
    font-weight: bold;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

export const Certificate = Abbreviated;

export const NameBank = Abbreviated;

export const NumberScore = Abbreviated;

export const Codbank = Abbreviated;
