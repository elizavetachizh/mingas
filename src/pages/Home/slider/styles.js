import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  //max-height: 600px;
  //@media (max-width: 1200px) {
  //  max-height: 600px;
  //}
  &.branches {
    margin: 8% auto 0;
    @media (max-width: 900px) {
      margin: 12% auto 0;
    }
    @media (max-width: 600px) {
      margin: 16% auto 0;
    }
    @media (max-width: 480px) {
      margin: 22% auto 0;
    }
    @media (max-width: 424px) {
      margin: 30% auto 0;
    }
  }
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
  filter: blur(3px) brightness(0.5);
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
      margin-top: -150px;
    }
    @media (min-width: 1700px) {
      height: 630px;
    }
    @media (min-width: 2200px) {
      height: 700px;
    }
    @media (min-width: 2700px) {
      height: 850px;
    }
    @media (max-width: 1700px) {
      margin-top: -136px;
      height: 530px;
    }
    @media (max-width: 1485px) {
      margin-top: -136px;
      height: 490px;
    }
    @media (max-width: 1290px) {
      margin-top: -104px;
      height: 450px;
    }
    @media (max-width: 1207px) {
      height: 430px;
    }
    @media (max-width: 1130px) {
      height: 410px;
      margin-top: -90px;
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
      height: 218px;
      margin-top: -42px;
    }
    @media (max-width: 600px) {
      height: 400px;
      //margin-top: -42px;
    }
  }
  &.new-post {
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
      margin-top: -150px;
    }
    @media (min-width: 1700px) {
      height: 630px;
    }
    @media (min-width: 2200px) {
      height: 700px;
    }
    @media (min-width: 2700px) {
      height: 850px;
    }
    @media (max-width: 1700px) {
      margin-top: -136px;
      height: 530px;
    }
    @media (max-width: 1485px) {
      margin-top: -136px;
      height: 490px;
    }
    @media (max-width: 1290px) {
      margin-top: -104px;
      height: 450px;
    }
    @media (max-width: 1207px) {
      height: 430px;
    }
    @media (max-width: 1140px) {
      height: 410px;
      margin-top: -70px;
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
      margin-top: -48px;
    }
    @media (max-width: 740px) {
      height: 270px;
      margin-top: -28px;
    }
    @media (max-width: 694px) {
      height: 250px;
      margin-top: -30px;
    }
    @media (max-width: 648px) {
      height: 218px;
      margin-top: -6px;
    }
    @media (max-width: 600px) {
      height: 400px;
      //margin-top: -42px;
    }
  }
  &.newPost {
    margin-top: -150px;
    width: 110%;
    filter: none;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    object-fit: cover;
    height: 500px;

    //@media (min-width: 1500px) {
    //  height: 600px;
    //  margin-top: -150px;
    //}
    //@media (min-width: 1700px) {
    //  height: 630px;
    //}
    //@media (min-width: 2200px) {
    //  height: 700px;
    //}
    //@media (min-width: 2700px) {
    //  height: 850px;
    //}
    //@media (max-width: 1700px) {
    //  margin-top: -136px;
    //  height: 530px;
    //}
    @media (max-width: 1700px) {
      margin-top: -135px;
    }
    @media (max-width: 1084px) {
      height: 410px;
      margin-top: -100px;
    }
    //@media (max-width: 960px) {
    //  height: 335px;
    //  margin-top: -75px;
    //}
    //@media (max-width: 860px) {
    //  height: 300px;
    //  margin-top: -70px;
    //}
    //@media (max-width: 740px) {
    //  height: 270px;
    //  margin-top: -64px;
    //}
    //@media (max-width: 694px) {
    //  height: 250px;
    //  margin-top: -60px;
    //}
    //@media (max-width: 648px) {
    //  height: 218px;
    //  margin-top: -42px;
    //}
    //@media (max-width: 600px) {
    //  height: 400px;
    //  //margin-top: -42px;
    //}
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
  @media (max-width: 600px) {
    width: 100%;
    height: 400px;
    margin: 0 auto 0;
  }
`;
