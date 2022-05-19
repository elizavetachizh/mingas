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
  const numbersOfImages = Array.from({ length: 8 }, (v, k) => k + 1);
  const onClick = useCallback(() => {
    handlerLeaderClick(leader);
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
