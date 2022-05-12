import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0d4475;
  display: flex;
  flex-direction: column;
  margin: 0px;
  height: auto;
  color: #fff;
  align-items: center;
  @media (max-width: 640px) {
    width: 640px;
    
  }
`;

export const DivInform = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4% auto;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;

  }
`;

export const TitleCard = styled.h3``;

export const DivUp = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;

export const DivDown = styled.div`
  font-style: normal;
  font-size: 18px;
  width: 100%;
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: 400px 400px;
  margin: auto;
  @media (max-width: 800px) {
    grid-template-columns: 300px 300px;
  }
`;

export const BackgroundStyle = styled.img`
  position: absolute;
  display: flex;
  right: 0;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  @media (max-width: 1200px) {
    display: none;
  }
`;
