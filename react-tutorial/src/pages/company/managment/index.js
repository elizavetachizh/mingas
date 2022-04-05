import React from "react";
import HeaderCompany from "../header_company";
import backgroundPhoto from '../../../assets/background/page_3.png'
import {Container, DivAboutManagement, DivBasicManagement, DivPhotoAndDescription, FullName, Position, Photo, Description, DivLeadersPhotoPosition} from "./styles";
import director from '../../../assets/company/director.jpg'
import {data} from "../../../assets/data_management"
import Leaders from "./divmagement";
import Footer from "../../../components/footer";
import backgroundImagePng from "../../../assets/background/page_3.png"

const backgroundImage ={
    background: `url(${backgroundImagePng})`,
    backgroundRepeat:"no-repeat",
    width: '100%',
}
export default function Management() {
    return (
        <Container>
            <HeaderCompany currentPage={"management"}></HeaderCompany>
<DivAboutManagement style={backgroundImage}>
    <DivBasicManagement>
        <FullName>ФИО</FullName>
        <Position>Должность</Position>
        <DivPhotoAndDescription>

            <Description>Руководство текущей деятельностью АО «МОСГАЗ» согласно уставу осуществляет генеральный директор,
                избираемый Общим собранием акционеров сроком на три года.
                Генеральный директор подотчетен Общему собранию акционеров и Совету директоров Общества.
            </Description>
            <Photo src={director}></Photo>
        </DivPhotoAndDescription>
    </DivBasicManagement>
        <DivLeadersPhotoPosition>
            {data.map((element)=> (
                <Leaders
                    key={element.fullName}
                    cardImg={element.cardImg}
                    fullName={element.fullName}
                    position={element.position}
                ></Leaders>
            ))}
        </DivLeadersPhotoPosition>
</DivAboutManagement>
            <Footer></Footer>
        </Container>
    )
}