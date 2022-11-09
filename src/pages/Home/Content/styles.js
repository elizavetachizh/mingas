import styled from 'styled-components';

export const ContainerContent = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
  }
`;

export const DivContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  //bottom: 0;
  margin-top: 154px;
  height: fit-content;
  @media (min-width: 1500px) {
    margin-top: 154px;
    height: fit-content;
  }
  @media (min-width: 2000px) {
    margin-top: 164px;
  }
  @media (max-width: 1700px) {
    height: fit-content;
  }
  @media (max-width: 900px) {
    margin-top: 80px;
  }
  @media (max-width: 600px) {
    height: 400px;
  }
  @media (max-width: 424px) {
    margin-top: 66px;
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
  &.priem {
    flex-direction: column;
    width: 40%;
    margin: 0 50%;
    align-items: center;
    @media(max-width: 1000px){
      margin: -10px 50%;
    }
    @media(max-width: 600px){
      position: absolute;
      color: black;
      width: 90%;
      margin: 0 auto;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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

export const DivInformAbout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: #ffff;
  text-align: center;
  text-transform: uppercase;
  &.priem {
    color: black;
    font-size: 22px;
    text-align: justify;
    padding-left: 20px;
    @media (max-width: 1000px) {
      font-size: 18px;
    }
    @media (max-width: 800px) {
      font-size: 16px;
    }
    @media (max-width: 650px) {
      font-size: 14px;
    }
    @media (max-width: 600px) {
      color: #ffff;
      text-align: center;
      font-size: 16px;
      padding-left: 0;
    }
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
  }
  @media (max-width: 438px) {
    img {
      width: 40px;
      height: 40px;
      margin: 8px;
    }
  }
  @media (max-width: 348px) {
    img {
      width: 34px;
      height: 34px;
    }
  }
`;
