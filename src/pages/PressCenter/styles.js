import styled from 'styled-components';
export const BlockPressCenter = styled.div`
  iframe {
    width: 70%;
    margin: 4% 15%;
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
  }
  //&.general {
  //  width: 50%;
  //  left: 0;
  //  margin: 0;
  //}
  //&.quarter {
  //  width: 25%;
  //}
`;

export const ArticleForHome = styled.div`
  border-radius: 20px;
  border: 1px solid #0d4475;
  width: 280px;
  height: 190px;
  margin: 4% auto;
  background-size: contain;
  text-align: center;
  background-repeat: no-repeat;
  background-position: bottom;
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
      width: 70%;
    }
    @media (min-width: 900px) {
      width: 200px;
    }
    @media (max-width: 1490px) {
      width: 22%;
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
