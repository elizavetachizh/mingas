import styled from 'styled-components';

export const PageSection = styled.div`
  color: #383838;
  background: #fff;
  box-shadow: 0 6px 30px rgb(0 0 0 / 10%);
  padding: 2rem 0;
  h4 {
    font-size: 1.5rem;
    margin: 3rem auto;
    text-align: center;
  }
`;

export const Abbreviated = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #383838;
  margin: 1rem auto;
  max-width: 66%;
  span {
    font-weight: bold;
  }
  p {
    margin: 0;
    padding: 0;
    font-weight: lighter;
  }
`;

export const Certificate = Abbreviated;

export const NameBank = Abbreviated;

export const NumberScore = Abbreviated;

export const Codbank = Abbreviated;
