import React from "react";
import {Container} from "../styles";
import HeaderCompany from "../header_company";

export default function Management() {
    return (
        <Container>
            <HeaderCompany currentPage={"management"}></HeaderCompany>

        </Container>
    )
}