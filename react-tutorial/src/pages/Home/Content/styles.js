import styled from "styled-components";

export const DivImage =styled.div`
  display: flex;
  align-items: end;
  max-width: 100%;
  max-height: 100%;
  position: relative;
  @media (max-width: 1406px) {
    height: 600px;
    width: 100%;
  }
`;

export const Image = styled.img`
    width: 100%;
  @media (max-width: 1300px) {
    max-height: 100%;
    margin: 0 auto;
  }
    `;

export const DivContent=styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-around;
  //align-items: end;
  //flex-direction: row;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-end;
`;

export const Text = styled.p`
  font-family: Bilbo;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  align-items: center;
  color: #ffff;
`;

export const DivHand=styled.img``;