import React from "react";
import { Container } from "../styles";
import Header from "../../../components/header";
import HeaderCompany from "../header_company";
import { AdditionalDiv } from "../../concats/GeneralContactInform/styles";
import TitleFun from "../../../components/title";

export default function Branches() {
  return(
    <Container>
      <Header backgroundHeader={"blue"}></Header>
      <HeaderCompany></HeaderCompany>
      <AdditionalDiv>
        <TitleFun  color={'blue'} infoTitle={'Филиалы УП "Мингаз"'}></TitleFun>

      </AdditionalDiv>
    </Container>
  )
}