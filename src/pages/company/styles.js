import styled from 'styled-components';

export const Container = styled.div`
  div.class-parag {
    width: 300px;
  }
  max-width: 100%;
  height: auto;
  h1 {
    color: #000;
  }
  @media (max-width: 640px) {
    width: 640px;
  }
`;
export const DialogViber = styled.div``;
export const DialogTelegram = DialogViber;

export const ContainerGraditude = styled.div`
  img {
    width: 300px;
  }
`;

export const ContainerCertificats = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 930px) {
    img {
      width: 70%;
    }
  }
`;
