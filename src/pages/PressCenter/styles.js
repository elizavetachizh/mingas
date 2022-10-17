import styled from 'styled-components';
export const BlockPressCenter = styled.div`
  iframe {
    width: 70%;
    margin: 4% 15%;
    height: 315px;
    @media (max-width: 840px) {
      width: 80%;
      margin: 4% 10%;
      height: 270px;
    }
    @media (max-width: 600px) {
      width: 90%;
      margin: 4% 5%;
      height: 260px;
    }
  }
  div.video {
    width: 100%;
    margin: 0 auto;
    video {
      width: 60%;
      margin: 0 20%;
      @media (max-width: 900px) {
        width: 70%;
        margin: 0 15%;
      }
      @media (max-width: 600px) {
        width: 80%;
        margin: 0 10%;
      }
      @media (max-width: 450px) {
        width: 90%;
        margin: 0 5%;
      }
    }
  }
`;
export const ContainerArticles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Article = styled.div`
  border-radius: 20px;
  border: 1px solid #0d4475;
  width: 74%;
  margin: 4% auto;
  background-size: contain;
  text-align: center;
  background-repeat: no-repeat;
  background-position: bottom;
  box-shadow: inset 0 -120px 50px -50px #0d4475;
  @media (max-width: 600px) {
    width: 84%;
  }
  img {
    width: 100%;
    border-radius: 20px;
    z-index: -1;
    position: relative;
  }
  p {
    text-decoration: none;
    margin: -9% auto 2%;
    padding: 0;
    color: white;
    font-weight: bold;
    font-size: 18px;
    @media (max-width: 1120px) {
      margin: -13% auto 2%;
    }
    @media (max-width: 1120px) {
      margin: -13% auto 2%;
    }
    @media (max-width: 820px) {
      margin: -10% auto 2%;
    }
    @media (max-width: 720px) {
      margin: -13% auto 2%;
    }
    @media (max-width: 520px) {
      margin: -15% auto 2%;
      font-size: 16px;
    }
    @media (max-width: 420px) {
      margin: -22% auto 2%;
    }
  }
`;

export const ArticleForHome = styled.div`
  border-radius: 20px;
  border: 1px solid #0d4475;
  width: 280px;
  height: 190px;
  margin: 2% auto;
  background-size: contain;
  text-align: center;
  background-repeat: no-repeat;
  background-position: bottom;
  box-shadow: inset 0 -80px 50px -25px #0d4475;
  text-decoration-line: none;
  @media (min-width: 2400px) {
    width: 420px;
    height: 280px;
  }
  @media (min-width: 1800px) {
    width: 400px;
    height: 266px;
  }
  @media (max-width: 2046px) {
    width: 360px;
    height: 240px;
  }
  @media (max-width: 1647px) {
    width: 320px;
    height: 220px;
  }
  @media (max-width: 1300px) {
    width: 280px;
    height: 200px;
  }
  @media (max-width: 1134px) {
    width: 380px;
    height: 252px;
  }
  @media (max-width: 410px) {
    width: 300px;
    height: 200px;
  }
  a {
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    z-index: -1;
    position: relative;
  }
  p {
    text-decoration: none;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    color: white;
    font-weight: bold;
    font-size: 16px;
    @media (min-width: 330px) {
      width: 76%;
    }
    @media (min-width: 530px) {
      width: 60%;
    }
    @media (min-width: 700px) {
      width: 46%;
    }
    @media (min-width: 900px) {
      width: 34%;
    }
    @media (min-width: 1150px) {
      width: 22%;
      font-size: 14px;
    }

    @media (min-width: 1500px) {
      width: 18%;
    }
    @media (min-width: 2000px) {
      width: 16%;
      font-size: 18px;
    }
    @media (min-width: 2300px) {
      width: 14%;
      font-size: 18px;
    }
    @media (min-width: 2900px) {
      width: 12%;
      font-size: 18px;
    }
  }
`;
