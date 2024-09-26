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
  flex-direction: column;
`;
export const Article = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  a {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    @media (max-width: 640px) {
      justify-content: center;
        align-items: center;
      flex-direction: column;
    }
  }
  div {
    margin: 1rem;
    @media (max-width: 640px) {
      margin: 0 0 1rem;
    }
  }
  img {
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 5px 12px #00000026;
    transition: filter 0.3s ease; /* Плавный переход для фильтра */

    &:hover {
      filter: brightness(0.8); /* Увеличение яркости при наведении */
    }
  }
  p {
    text-decoration: none;
    padding: 0;
    transition: text-decoration 0.3s ease; /* Плавный переход для фильтра */

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ArticleForHome = styled.div`
  border-radius: 10px;
  //border: 1px solid #0d4475;
  width: 290px;
  height: 200px;
  margin: 1rem auto;
  background-size: contain;
  text-align: center;
  background-repeat: no-repeat;
  background-position: bottom;
  box-shadow: inset 0 -30px 50px -15px #0d4475;
  text-decoration-line: none;
  position: relative;
  @media (min-width: 2400px) {
    width: 450px;
    height: 320px;
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
  @media (max-width: 800px) {
    width: 330px;
    height: 230px;
  }
  @media (max-width: 410px) {
    width: 300px;
    height: 200px;
  }
  a {
    display: flex;
    //position: relative;
  }
  img {
    width: 100%;
    height: 240px;
    border-radius: 10px;
    z-index: -1;
    display: block;
    @media (max-width: 1647px) {
      height: 220px;
    }
    @media (max-width: 1300px) {
      height: 200px;
    }
    @media (max-width: 1134px) {
      height: 100%;
    }
  }
  p {
    text-decoration: none;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    color: white;
    font-weight: bold;
    font-size: 16px;
    bottom: 10px;
    left: 0;
    right: 0;
    transform: translateX(0%);

    @media (min-width: 1150px) {
      font-size: 14px;
    }

    @media (min-width: 2000px) {
      font-size: 18px;
    }
  }
`;
