import React, { useCallback } from 'react';
import { ContainerLeaders, ImageLeader, FullNameLeader, PositionLeader } from './styles';

export default function Leaders({ cardImg, fullName, position, handlerLeaderClick, leader }) {
  const onClick = useCallback(() => {
    handlerLeaderClick(leader);
  }, [handlerLeaderClick, leader]);
  return (
    <ContainerLeaders onClick={onClick}>
      <ImageLeader src={require(`../../../../assets/icons_useful_inform/${cardImg}.png`)} />
      <FullNameLeader>{fullName}</FullNameLeader>
      <PositionLeader>{position}</PositionLeader>
    </ContainerLeaders>
  );
}
