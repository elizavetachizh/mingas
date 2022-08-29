import React, { useCallback } from 'react';

export default function DopFunctionalForColumn({
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
    <p onClick={onClick} className={'for-admission-schedule'}>
      <p style={{ display: 'none' }}>{idName}</p>
      <p>{fullName}</p>
      <p>{position}</p>
    </p>
  );
}
