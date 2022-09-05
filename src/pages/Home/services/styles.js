import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding-bottom: 40px;
  color: #fff;
  align-items: center;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-image: linear-gradient(
    -55deg,
    rgb(1, 95, 156) 0%,
    rgb(16, 69, 141) 0%,
    rgb(15, 89, 141) 19%,
    rgb(15, 78, 140) 60%,
    rgb(14, 78, 129) 79%,
    rgb(13, 68, 117) 100%
  );
  @media (max-width: 1600px) {
    box-shadow: none;
    border-radius: 0;
    margin: 0 auto 0;
  }
`;

export const DivDown = styled.div`
  font-size: 18px;
  width: 100%;
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: 300px 300px;
  grid-template-rows: 300px;
  margin: 0 auto;
  @media (max-width: 1190px) {
    grid-template-columns: 250px 250px;
    grid-template-rows: 250px;
  }
  @media (max-width: 990px) {
    grid-template-columns: 300px;
    grid-template-rows: 300px;
  }
  @media (max-width: 596px) {
    grid-template-columns: 250px;
    grid-template-rows: none;
  }
  @media (max-width: 486px) {
    grid-template-columns: 220px;
    grid-template-rows: none;
  }
  @media (max-width: 422px) {
    grid-template-columns: 200px;
    grid-template-rows: none;
  }
  @media (max-width: 392px) {
    grid-template-columns: 180px;
    grid-template-rows: none;
  }
`;
export const ServicesDiv = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
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
