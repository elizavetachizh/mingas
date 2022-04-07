import styled from "styled-components";

export const HeaderCompanyDiv = styled.div`
  display: flex;
  flex-direction: column;`;

export const DivButton = styled.div`
  max-width: 1440px;
  font-family: 'Bilbo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
 margin: 100px auto;
`;

export const HistoryButton = styled.a`
  text-decoration: none;
  color: #314D5C;
  margin: 0px 14px;
  :active {
    color: #A69B14
  }
`;

export const ManagementButton = HistoryButton;

export const StructureButton = HistoryButton;
export const CareerButton = HistoryButton;
export const DocumentsButton = HistoryButton;

export const DivTextPhoto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;


export const DivText = styled.div`
width: 50%`;

export const ImageDiv = styled.img`
width: 40%`;

export const WhatDoingCompany = styled.div``;