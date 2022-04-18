import styled from 'styled-components';

export const Container = styled.div`
  background-color: #314d5c;
  display: flex;
  flex-direction: column;
  margin: 0px;
  height: auto;
  color: #fff;
  padding-bottom: 50px;
  align-items: center;
`;

export const DivInform = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleCard = styled.h3``;

export const DivUp = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const DivDown = styled.div`
  font-style: normal;
  font-size: 18px;
  font-family: Bilbo;
  width: 100%;
  display: grid;
  text-align: center;
  grid-template-columns: 400px 400px;
  margin: 0 20px;
`;

export const BackgroundStyle = styled.img`
  position: absolute;
  display: flex;
  right: 0;
  /* top: 0; */
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;
