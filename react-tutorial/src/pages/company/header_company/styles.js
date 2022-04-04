import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Bilbo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;


export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
 margin: 50px 0px;
`;

export const HistoryButton = styled.a`
text-decoration: none;
  color: #314D5C;
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