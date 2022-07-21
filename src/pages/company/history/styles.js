import styled from 'styled-components';

export const HistoryButton = styled.a`
  text-decoration: none;
  color: #0d4475;
  .active {
    color: #a69b14;
  }
`;

export const DivTextPhoto = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 50px auto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: black;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    margin: 0 auto;
    text-align: center;
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 550px) {
    margin-left: 10%;
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 450px;
    margin-left: 20%;
  }
  @media (max-width: 400px) {
    width: 450px;
    margin-left: 26%;
  }
`;

export const DivText = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
  p {
    text-indent: 25px;
    text-align: justify;
  }
`;

export const ImageDiv = styled.img`
  width: 30%;
  @media (max-width: 600px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const WhatDoingCompany = styled.div`
  max-width: 1440px;
  margin: 0 6% 6%;
  display: flex;
  flex-direction: column;
  h2 {
    font-style: normal;
    font-size: 16px;
    color: #0d4475;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const WhatDoingCompaniInform = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PWithImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  div {
    padding: 10px 20px;
  }
  img {
    width: 50%;
    //@media (max-width: 740px) {
    //  width: 300px;
    //  height: 600px;
    //}
    //@media (max-width: 690px) {
    //  width: 300px;
    //  height: 500px;
    //}
  }
`;

export const DivParagraphHistory = styled.div`
  max-width: 1100px;
  text-align: justify;
  margin: 0 auto;
  div {
    text-indent: 25px;
    margin: 20px auto;
  }
  @media (max-width: 850px) {
    max-width: 750px;
  }
  @media (max-width: 750px) {
    max-width: 650px;
  }
`;
export const ImgBackground = styled.img`
  position: relative;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0 auto;
  background-repeat: no-repeat;
  @media(max-width: 651px) {
    width: 40rem;
  }
`;
