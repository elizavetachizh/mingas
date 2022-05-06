import styled from 'styled-components';

export const ContainerContent = styled.div`
  @media (max-width: 1200px) {
    height: 600px;
  }
`;

// export const DivImage = styled.div`
//   display: flex;
//   align-items: end;
//
//   @media (max-width: 1406px) {
//     max-height: 600px;
//     width: 100%;
//   }
// `;

export const DivContent = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  bottom: 0;
  @media (max-width: 1200px) {
    max-height: 600px;
  }

  //&:before {
  //  position: absolute;
  //  content: '';
  //  background: inherit;
  //  left: 0;
  //  right: 0;
  //  top: 0;
  //  bottom: 0;
  //  box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
  //  filter: blur(10px);
  //  border-radius: 15px;
  //}
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    @media (max-width: 1200px) {
      width: 30%;
    }
  }
`;

export const DivInformAbout = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #ffff;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 26px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const DivPrizes = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  height: 900px;
`;

export const Prizes = styled.div`
  display: flex;
  padding: 80px 20px 0px;

  flex-direction: column;
  img {
    margin: 10px;
    width: 65px;
    height: 60px;
  }
`;
