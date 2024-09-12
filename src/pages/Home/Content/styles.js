import styled from 'styled-components';

export const ContainerContent = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 100%;
  height: 530px;
  margin-top: 130px;
  //position: relative;
  &.parallax {
    height: 500px;
    @media (max-width: 1500px) {
      height: 360px;
    }
    @media (max-width: 630px) {
      height: 270px;
    }
  }
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
   background-color: rgba(14,78,129,0.2);
  }
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: #ffff;
  text-align: center;
  text-transform: uppercase;
  a {
    color: white;
  }
  &.phone {
    @media (max-width: 600px) {
      margin-bottom: 50px;
    }
    @media (max-width: 430px) {
      font-size: 14px;
      text-align: center;
      margin: 0 auto;
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    font-size: 26px;
  }
  @media (max-width: 1000px) {
    font-size: 22px;
    text-align: left;
  }
  @media (max-width: 850px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Prizes = styled.div`
  display: flex;
  flex-direction: row;
  img {
    margin: 10px;
    width: 50px;
    height: 50px;
    @media (max-width: 438px) {
      width: 40px;
      height: 40px;
      margin: 8px;
    }
    @media (max-width: 348px) {
      width: 34px;
      height: 34px;
    }
  }
`;

export const ContainerText = styled.div`
  width: calc(100% / 12 * 4);
  position: relative;
  height: 530px;
  overflow-y: scroll;
  direction: rtl;
  unicode-bidi: bidi-override;
  z-index: 2;
  a {
    text-decoration: none;
  }
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ccc;
    border-radius: 100px;
    margin: 1px 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: #666;
  }
`;

export const ContainerParagraph = styled.div`
  z-index: 2;
  width: 100%;
  color: white;
  margin: auto 5%;
  max-width: 700px;
  a,
  p {
    text-align: center;
    color: white;
  }
`;
