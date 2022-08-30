import styled from 'styled-components';

export const DivMap = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  iframe{
    width: 900px;
    height: 500px;
  }
 @media(max-width: 900px) {
   iframe{
     width: 700px;
     height: 600px;
   }
 }
  @media(max-width: 700px) {
    iframe{
      width: 500px;
      height: 500px;
    }
  }
  @media(max-width: 645px) {
    width: 600px;
    iframe{
      width: 400px;
      height: 300px;
    }
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
  flex-direction: row;
  justify-content: space-around;
  margin: 6rem auto;
  color: #0D4475;
`;
