import React from "react";
import {Button, Description, DivServicesList, DivInformService,Image, Name} from "./styles";

export default function ServicesList({imgCard, nameCard, descName, button}) {
    return(
    <DivServicesList>
        <Image src={require(`../../../assets/photo_news/${imgCard}.png`)} />
       <DivInformService>
           <Name>{nameCard}</Name>
           <Description>{descName}</Description>
           <Button>{button}</Button>
       </DivInformService>
    </DivServicesList>
    )
}