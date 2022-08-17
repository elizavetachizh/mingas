import React, { useCallback } from 'react';
import { ContainerLeaders, ImageLeader, FullNameLeader, PositionLeader } from './styles';
import { useNavigate } from "react-router";

export default function Leaders({ cardImg, fullName, position, handlerLeaderClick, leader, id }) {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    handlerLeaderClick(leader);
    navigate(`/company/management/${id}`);
  }, [handlerLeaderClick, leader]);
  return (
    <ContainerLeaders onClick={onClick}>
      <div>
        <ImageLeader src={require(`../../../../assets/management/${cardImg}.jpg`)} key={cardImg} />
      </div>
      <FullNameLeader>{fullName}</FullNameLeader>
      <PositionLeader>{position}</PositionLeader>
    </ContainerLeaders>
  );
}
