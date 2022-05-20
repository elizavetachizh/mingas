import styled from 'styled-components';

export const DivMap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 500px) {
    width: 600px;
  }
  @media(max-width: 400px) {
    width: 500px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  width: 30%;
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    margin-left: 20%;
    width: 100%;
  }
  @media (max-width: 400px) {
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
  justify-content: center;
  margin: 6rem auto;
  color: #383838;
  @media (max-width: 600px) {
    width: 600px;
  }
`;
