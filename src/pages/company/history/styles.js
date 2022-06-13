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
  color: #0d4475;
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
  p{
    text-indent: 25px;
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
  div{
    padding: 10px 20px;
  }
  img{
    width: 30%;
  }
`
