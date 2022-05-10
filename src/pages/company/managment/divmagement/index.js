import React, { useCallback } from 'react';
import { ContainerLeaders, ImageLeader, FullNameLeader, PositionLeader } from './styles';

export default function Leaders({
  cardImg,
  fullName,
  position,
  handlerLeaderClick,
  leader,
  links,
}) {
  const onClick = useCallback(() => {
    handlerLeaderClick(leader);
  }, [handlerLeaderClick, leader]);
  return (
    <ContainerLeaders onClick={onClick}>
      <FullNameLeader>{fullName}</FullNameLeader>
      <PositionLeader>{position}</PositionLeader>
    </ContainerLeaders>
  );
}
