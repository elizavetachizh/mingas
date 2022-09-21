import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  //@media (max-width: 1200px) {
  //  max-height: 600px;
  //}
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
    margin: 0 auto 0;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const WindowDiv = styled.div`
  max-height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
  }
`;

export const BackgroundContainer = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  display: flex;
  margin-top: -370px;
  filter: blur(3px) brightness(0.6);
  &.post {
    filter: none;
    margin-top: -164px;
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    object-fit: cover;
    height: 460px;

    @media (min-width: 1500px) {
      height: 600px;
    }
    @media (min-width: 2200px) {
      height: 700px;
    }
    @media (min-width: 2700px) {
      height: 1000px;
    }
    @media (max-width: 1485px) {
      margin-top: -136px;
      height: 490px;
    }
    @media (max-width: 1290px) {
      margin-top: -104px;
    }
    @media (max-width: 1207px) {
      height: 430px;
    }
    @media (max-width: 1130px) {
      height: 430px;
      margin-top: -104px;
    }
    @media (max-width: 1084px) {
      height: 380px;
      margin-top: -70px;
    }
    @media (max-width: 960px) {
      height: 335px;
      margin-top: -75px;
    }
    @media (max-width: 860px) {
      height: 300px;
      margin-top: -70px;
    }
    @media (max-width: 740px) {
      height: 270px;
      margin-top: -64px;
    }
    @media (max-width: 694px) {
      height: 250px;
      margin-top: -60px;
    }
    @media (max-width: 648px) {
      height: 215px;
      margin-top: -48px;
    }
    @media (max-width: 512px) {
      height: 178px;
      margin-top: -14px;
    }
    @media (max-width: 492px) {
      height: 180px;
      margin-top: -30px;
    }
    @media (max-width: 414px) {
      height: 145px;
      margin-top: -15px;
    }
    @media (max-width: 380px) {
      height: 170px;
      margin-top: -30px;
    }
  }

  @media (min-width: 2000px) {
    margin-top: -470px;
  }
  @media (min-width: 2500px) {
    margin-top: -570px;
  }
  @media (min-width: 3000px) {
    margin-top: -700px;
  }
  @media (min-width: 3300px) {
    margin-top: -800px;
  }
  @media (max-width: 1410px) {
    margin-top: -210px;
  }
  @media (max-width: 770px) {
    width: 100%;
    margin: -150px auto 0;
  }
  @media (max-width: 590px) {
    width: 100%;
    margin: -80px auto 0;
  }
  @media (max-width: 440px) {
    width: 100%;
    margin: -50px auto 0;
  }
`;
