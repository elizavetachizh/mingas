import styled from "styled-components";

export const HistoryButton = styled.a`
text-decoration: none;
  color: #314D5C;
  .active {
    color: #A69B14
  }
`;

export const DivTextPhoto = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  margin: 50px auto;
  font-family: 'Bilbo',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #314D5C;
`;

export const DivText = styled.div`
width: 40%`;

export const ImageDiv = styled.img`
width: 40%`;

export const WhatDoingCompany = styled.div`
  max-width: 1440px;
  margin: 0px auto 6%;
  display: flex;
  flex-direction: column;
  h2 {
    font-family: 'Bilbo',sans-serif;
    font-style: normal;
    font-size: 16px;
    color: #314D5C;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const WhatDoingCompaniInform = styled.div`
  display: flex;
  flex-direction: column;
`;