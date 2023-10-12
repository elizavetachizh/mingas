import styled from 'styled-components';

export const ContainerContent = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 100%;
  height: 576px;
  margin-top: 154px;
  //position: relative;
  &.parallax {
    height: 530px;
    @media (max-width: 1500px) {
      height: 380px;
    }
    @media (max-width: 630px) {
      height: 320px;
    }
  }
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
    background-image: linear-gradient(
      -55deg,
      rgb(1, 95, 156) 0%,
      rgb(16, 69, 141) 0%,
      rgb(15, 89, 141) 19%,
      rgb(15, 78, 140) 60%,
      rgb(14, 78, 129) 79%,
      rgb(13, 68, 117) 100%
    );
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  z-index: 5;
  &.post {
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    align-items: center;
    @media(max-width: 600px){
        position: absolute;
        color: white;
        width: 90%;
        margin: 0 auto;
        height: 100%;
        text-align: center;
        display: flex;
      flex-direction: column;
        justify-content: center;
        font-size: 1.4rem;
        align-items: end;
        font-weight: bold;
    }
    }
  &.newpost {
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    align-items: center;
    @media(max-width: 600px){
      position: absolute;
      color: white;
      width: 90%;
      margin: 0 auto;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1.4rem;
      align-items: center;
      font-weight: bold;
    }
  }
  }
  &.phone {
    @media (max-width: 1100px) {
      width: 80%;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      position: absolute;
      color: white;
      width: 90%;
      margin: 0 auto;
      height: 100%;
      text-align: center;
      display: flex;
      justify-content: space-between;
      font-size: 1.4rem;
      align-items: end;
      font-weight: bold;
    }
    @media(max-width: 430px){
      flex-direction: column;
      justify-content: flex-end;
    }
  }
  img {
    width: 100%;
  }
  a.phone {
    //margin-bottom: -130px;
    margin-bottom: 7px;
    @media (max-width: 2050px) {
      //margin-bottom: -255px;
      margin-bottom: -5px;
    }
    @media (max-width: 1800px) {
      margin-bottom: -5px;
    }
    @media (max-width: 1060px) {
      margin-bottom: -5px;
    }
    @media (max-width: 740px) {
      margin-bottom: -5px;
    }
    @media (max-width: 630px) {
      margin-bottom: -4px;
    }
    @media (max-width: 600px) {
      margin-bottom: -5px;
    }
    @media (min-width: 2000px) {
      margin-bottom: -5px;
    }
    img {
      width: 80%;
      margin-top: 10%;
      @media (max-width: 1300px) {
        width: 64%;
      }
      @media (max-width: 1100px) {
        width: 60%;
      }
      @media (max-width: 600px) {
        width: 76%;
      }
      @media (max-width: 450px) {
        width: 100%;
      }
      @media (max-width: 430px) {
        width: 60%;
      }
    }
  }
  &.media-phone {
    margin-top: 80px;
    a {
      img {
        @media (max-width: 401px) {
          width: 100%;
          margin: 0 auto;
        }
        @media (max-width: 2000px) {
          box-shadow: none;
          border-radius: 0;
          margin: 0 auto 0;
        }
      }
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
  &.new-post {
    font-size: 24px;
    text-align: center;
    @media (max-width: 1062px) {
      font-size: 18px;
    }
    @media (max-width: 980px) {
      font-size: 16px;
    }
    @media (max-width: 840px) {
      font-size: 14px;
    }
    @media (max-width: 694px) {
      font-size: 12px;
    }
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
export const BlockContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  //justify-content: flex-start;
  display: flex;
  //flex-wrap: wrap;
  width: 100%;
  height: fit-content;
`;

export const ContainerText = styled.div`
  width: calc(100% / 12 * 4);
  position: relative;
  height: 576px;
  overflow-y: scroll;
  direction: rtl;
  unicode-bidi: bidi-override;
  z-index: 2;
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

export const ContainerImage = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
`;
