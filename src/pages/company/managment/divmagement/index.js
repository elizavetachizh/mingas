import React, { useCallback } from 'react';
import { ContainerLeaders, ImageLeader, FullNameLeader, PositionLeader } from './styles';

export default function Leaders({
  cardImg,
  fullName,
  position,
  handlerLeaderClick,
  leader,
  idName,
}) {
  const onClick = useCallback(() => {
    handlerLeaderClick(leader);
  }, [handlerLeaderClick, leader]);
  return (
    <ContainerLeaders onClick={onClick}>
      <div>
        <ImageLeader src={require(`../../../../assets/management/${cardImg}.webp`)} key={cardImg} />
      </div>
      <p style={{ display: 'none' }}>{idName}</p>
      <FullNameLeader>{fullName}</FullNameLeader>
      <PositionLeader>{position}</PositionLeader>
    </ContainerLeaders>
  );
}
