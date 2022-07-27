import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0d4475;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-bottom: 40px;
  height: auto;
  color: #fff;
  align-items: center;
  @media (max-width: 640px) {
    width: 640px;
  }
`;

export const DivInform = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 4% auto;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export const DivDown = styled.div`
  font-style: normal;
  font-size: 18px;
  width: 100%;
  display: grid;
  text-align: center;
  z-index: 4;
  justify-content: center;
  grid-template-columns: 300px 300px;
  grid-template-rows: 300px 300px;
  margin: auto;
  @media (max-width: 1190px) {
    grid-template-columns: 250px 250px;
    grid-template-rows: 250px 250px;
  }
  @media (max-width: 990px) {
    grid-template-columns: 300px;
    grid-template-rows: 300px 300px;
  }
  @media (max-width: 400px) {
    grid-template-columns: 250px;
    grid-template-rows: 250px 250px;
  }
`;
export const ServicesDiv = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
  z-index: 4;
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

export const ButtonServicesHome = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
