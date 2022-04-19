import styled from 'styled-components';

export const DivImage = styled.div`
  display: flex;
  align-items: end;
  max-height: 850px;
  @media (max-width: 1406px) {
    max-height: 600px;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media (max-width: 1300px) {
    margin: 0 auto;
  }
`;

export const DivContent = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-around;

  &:before {
    position: absolute;
    content: '';
    background: inherit;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
    filter: blur(10px);
    border-radius: 15px;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DivInformAbout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-family: Bilbo;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #ffff;
  text-transform: uppercase;
`;
