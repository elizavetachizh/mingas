import styled from 'styled-components';

export const DivMap = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  iframe{
    width: 1000px;
    height: 500px;
  }
  @media(max-width: 500px) {
    width: 600px;
  }
  @media(max-width: 400px) {
    width: 500px;
  }
`;

export const ContactsInform = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

export const Row = styled.div`
  display: flex;
  max-width: 1190px;
  flex-direction: row;
  justify-content: space-around;
  margin: 6rem auto;
  color: #0D4475;
  @media (max-width: 600px) {
    width: 600px;
  }
`;
