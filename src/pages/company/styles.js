import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  @media(max-width: 550px) {
    width: 600px;
  }
  @media(max-width: 450px) {
    width: 450px;
  }
`;
export const DialogViber = styled.div``;
export const DialogTelegram=DialogViber;
