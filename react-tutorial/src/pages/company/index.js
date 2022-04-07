import React from "react";
import { Container } from "./styles";
import Header from "../../components/header";
import ContentHome from "../Home/Content";
import History from "./history";
import Management from "./managment";
import Structure from "./structure";
import Career from "./career";
import Documentation from "./documentation";

export default function Company () {
  return (
    <Container className={`active`}>
      {/*<Header currentPage={"company"} backgroundHeader={"gray"}></Header>*/}
      {/*  <ContentHome></ContentHome>*/}
        {/*<History></History>*/}
        {/*<Management></Management>*/}
        {/*<Structure></Structure>*/}
        {/*<Career></Career>*/}
        {/*<Documentation></Documentation>*/}
    </Container>
  )
}