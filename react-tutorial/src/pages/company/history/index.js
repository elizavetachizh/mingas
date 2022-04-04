import React from "react";
import {Container} from "../styles";
import HeaderCompany from "../header_company";
import {
     DivText, DivTextPhoto, DocumentsButton,
    HistoryButton, ImageDiv,
    ManagementButton,
    StructureButton,
    WhatDoingCompany
} from "../header_company/styles";
import Footer from "../../../components/footer";
import photoHistory from "../../../assets/photo_news/1.png";



export default function History() {
    return (
        <Container>
            <HeaderCompany currentPage={"history"}></HeaderCompany>

                <DivTextPhoto>
                    <DivText>
                        <p>
                            Добро пожаловать на корпоративный сайт производственного республиканского унитарного предприятия «МИНГАЗ».
                            Основная задача предприятия — обеспечение безопасной и бесперебойной подачи природного и сжиженного газа потребителям
                        </p>
                        <p>
                            Перед коллективом организации стоит задача, наряду с обеспечением безопасности, в течение ближайших лет широко развернуть газификацию природным
                            газом районов индивидуальной застройки, деревень, поселков Минского района.
                        </p>
                        <p>
                            УП «МИНГАЗ» постоянно меняет стареющее оборудование, внедряет современные системы контроля за режимами
                            газораспределения по всем категориям потребителей, применяет энергосберегающие технологии
                        </p>
                        <p>
                            В будущее УП «МИНГАЗ» смотрит с оптимизмом. Отношения с потребителями и партнерами строятся на основе уважения и порядочности, взаимной поддержки.
                            Молодой и энергичный коллектив предприятия достойно несёт опыт старшего поколения, совершенствует систему обеспечения газом нашей столицы, внося тем самым свою лепту в процветание и прогресс Республики Беларусь
                        </p>
                    </DivText>
                    <ImageDiv src={photoHistory}></ImageDiv>
                </DivTextPhoto>

            <WhatDoingCompany>
                <h2>ЧТО ДЕЛАЕТ РУП "МИНГАЗ"</h2>
            </WhatDoingCompany>
            <Footer></Footer>
        </Container>
    )

}