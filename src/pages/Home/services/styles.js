import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0d4475;
  display: flex;
  flex-direction: column;
  margin: 1% 0;
  padding-bottom: 40px;
  color: #fff;
  align-items: center;
  @media (max-width: 640px) {
    width: 650px;
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
  width: 22%;
  z-index: -1;
  align-items: center;
  margin: auto 0;
  padding: 0;
  @media (max-width: 1599px) {
    margin: 8% 0;
  }
  @media (max-width: 1150px) {
    margin: 14% 0;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 1600px) {
    margin: 4% 5%;
  }
  @media (min-width: 2000px) {
    margin: 1% 10%;
  }
`;

export const ButtonServicesHome = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
