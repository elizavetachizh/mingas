import styled from "styled-components";

export  const Container = styled.div`
  background-color: #314D5C;
  display: flex;
  flex-direction: column;
  margin: 0px;
  color: #fff;
  padding: 50px 0;
  align-items: center;`;

export const ImageFont = styled.img`
width: 20%;
  filter: blur(3px);
`;

export const DivInform = styled.div`
position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleCard = styled.h3`
`;

export const DivUp = styled.div`
    display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const DivDown = styled.div`
  font-style: normal;
  font-size: 18px;
  font-family: 'Fira Sans Condensed';
  width: 100%;
  display: grid;
  text-align: center;
  grid-template-columns: 500px 500px;
 
`;