import React from "react";
import {Container} from "./styles";
import Header from "../header";

export default function ContainerFun({backgroundColor}) {
    return (
        <Container backgroundColor={backgroundColor}>
            <Header></Header>
        </Container>
    )
}