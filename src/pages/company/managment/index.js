import React from "react";
import HeaderCompany from "../header_company";
import {Container, DivAboutManagementBackground, DivAboutmanagementWhiteFont, DivBasicManagement, DivPhotoAndDescription, FullName, Position, Photo, Description, DivLeadersPhotoPosition} from "./styles";
import director from '../../../assets/company/director.jpg'
import {data} from "../../../assets/data_management"
import Leaders from "./divmagement";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

export default function Management() {
    return (
     <Container>
         <Header backgroundHeader="blue"></Header>
         <HeaderCompany currentPage={"management"}></HeaderCompany>
         <DivAboutManagementBackground>
             <DivAboutmanagementWhiteFont>
                 <DivBasicManagement>
                     <DivPhotoAndDescription>
                         <FullName>ФИО</FullName>
                         <Position>Должность</Position>
                         <Description>Руководство текущей деятельностью АО «МОСГАЗ» согласно уставу осуществляет генеральный директор,
                             избираемый Общим собранием акционеров сроком на три года.
                             Генеральный директор подотчетен Общему собранию акционеров и Совету директоров Общества.
                         </Description>
                     </DivPhotoAndDescription>
                     <Photo src={director}></Photo>
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
             </DivAboutmanagementWhiteFont>
         </DivAboutManagementBackground>
         <Footer></Footer>
     </Container>
    )
}