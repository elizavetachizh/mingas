import styled from "styled-components";

export const Container =styled.div`
  display: flex;
  //justify-content: center;
  align-items: end;
  height: 729px;
`;

export const Image = styled.img`
    width: 100%;
    position: relative`;

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
`;

export const Text = styled.p`
  font-family:'Fira Sans Condensed';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  align-items: center;
  color: #ffff;
`;

export const DivHand=styled.img``;