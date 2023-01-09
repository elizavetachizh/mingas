import React, { useCallback } from 'react';
import { BlockForAdmissionSchedule } from '../styles';

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
    <BlockForAdmissionSchedule onClick={onClick}>
      <p style={{ display: 'none' }}>{idName}</p>
      <p>{fullName}</p>
      <p>{position}</p>
    </BlockForAdmissionSchedule>
  );
}
