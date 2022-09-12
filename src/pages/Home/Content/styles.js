import styled from 'styled-components';

export const ContainerContent = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 100%;
  @media (max-width: 1600px) {
    box-shadow: none;
    border-radius: 0;
  }
`;

export const DivContent = styled.div`
  width: 100%;
  //position: absolute;
  height: 608px;
  margin-top: 154px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  bottom: 0;
  @media (min-width: 2500px) {
    margin-top: 184px;
  }
  @media (min-width: 1860px) {
    margin-top: 174px;
  }
  @media (min-width: 1600px) {
    margin-top: 164px;
    height: fit-content;
  }
  @media (max-width: 1700px) {
    height: fit-content;
  }
  @media (max-width: 900px) {
    margin-top: 80px;
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
  align-items: end;
  z-index: 5;
  //a {
  //  width: 100%;
  //  //img {
  //  //  width: 100%;
  //  //}
  //}
  &.phone {
    @media (max-width: 1100px) {
      width: 80%;
      margin: 0 auto;
    }
  }
  img {
    width: 100%;
  }
  a.phone {
    margin-bottom: -130px;
    @media (max-width: 3000px) {
      margin-bottom: -200px;
    }
    @media (min-width: 2400px) {
      margin-bottom: -270px;
    }
    @media (max-width: 2396px) {
      margin-bottom: -200px;
    }
    @media (max-width: 2150px) {
      margin-bottom: -176px;
    }
    @media (max-width: 1890px) {
      margin-bottom: -156px;
    }
    @media (max-width: 1750px) {
      margin-bottom: -100px;
    }
    @media (max-width: 1550px) {
      margin-bottom: -108px;
    }
    @media (max-width: 1315px) {
      margin-bottom: -120px;
    }
    @media (max-width: 1060px) {
      margin-bottom: -84px;
    }
    @media (max-width: 850px) {
      margin-bottom: -50px;
    }
    @media (max-width: 740px) {
      margin-bottom: -40px;
    }
    @media (max-width: 630px) {
      margin-bottom: -22px;
    }
    @media (max-width: 425px) {
      margin-bottom: -8px;
    }
    img {
      width: 80%;
      @media (max-width: 1300px) {
        width: 64%;
      }
      @media (max-width: 1100px) {
        width: 60%;
      }
      @media (max-width: 500px) {
        width: 66%;
      }
      @media (max-width: 380px) {
        width: 80%;
      }
    }
  }
  //@media (max-width: 650px) {
  //  flex-direction: column;
  //  justify-content: center;
  //  align-items: center;
  //  img {
  //    width: 70%;
  //    margin: 0 25%;
  //  }
  //}
  //@media (max-width: 400px) {
  //  img {
  //    width: 60%;
  //    margin: 0 25%;
  //  }
  //}
  a.day-of-gas {
    img.day-of-gas {
      //@media (max-width: 500px) {
      //  height: 190px;
      //  width: auto;
      //}
      //@media (max-width: 370px) {
      //  height: 170px;
      //  width: auto;
      //}
    }
    //@media (max-width: 2300px) {
    //  margin-bottom: 0;
    //}
  }
  &.media-phone {
    margin-top: 80px;
    a {
      img {
        border-radius: 20px;
        @media (max-width: 401px) {
          width: 100%;
          margin: 0 auto;
        }
        @media (max-width: 1600px) {
          box-shadow: none;
          border-radius: 0;
          margin: 0 auto 0;
        }
      }
    }
  }
`;

export const DivInformAbout = styled.div`
  display: flex;
  flex-direction: column;
  //@media (max-width: 800px) {
  //  flex-direction: column;
  //  align-items: center;
  //}
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: #ffff;
  text-transform: uppercase;
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
  @media (max-width: 500px) {
    font-size: 14px;
  }
  @media (max-width: 380px) {
    font-size: 12px;
  }
`;

export const DivPrizes = styled.div`
  display: flex;
  flex-direction: column;
  //background: rgba(0, 0, 0, 0.25);
  height: 510px;
  @media (max-width: 1200px) {
    max-height: 900px;
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
