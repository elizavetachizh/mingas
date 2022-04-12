import React from "react";
import {ContainerLeaders,ImageLeader,FullNameLeader,PositionLeader} from "./styles";

export default function Leaders({cardImg, fullName, position}) {
    return (
        <ContainerLeaders>
            <ImageLeader src={require(`../../../../assets/icons_useful_inform/${cardImg}.png`)}></ImageLeader>
            <FullNameLeader>{fullName}</FullNameLeader>
            <PositionLeader>{position}</PositionLeader>
        </ContainerLeaders>
    )
}