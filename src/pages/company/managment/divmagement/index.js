import React, { useCallback } from 'react';
import { ContainerLeaders, ImageLeader, FullNameLeader } from './styles';

export default function Leaders({
  cardImg,
  fullName,
  position,
  handlerLeaderClick,
  leader,
  contactPhone,
                                  email,
}) {
  const onClick = useCallback(() => {
    handlerLeaderClick(leader);
  }, [handlerLeaderClick, leader]);
  return (
    <ContainerLeaders onClick={onClick}>
      <div>
        <ImageLeader src={`${cardImg}`} key={cardImg} />
      </div>
      <FullNameLeader>{fullName}</FullNameLeader>
      <FullNameLeader>{position}</FullNameLeader>
      <p
        style={{
          margin: '0.5rem auto',
          textAlign: 'left',
          fontWeight: 'normal',
          color: '#333',
          opacity: '0.8',
        }}
      >
        Телефон:{' '}
        <a style={{ color: '#0077c1' }} href={`tel:${contactPhone}`} type={'phone'}>
          {contactPhone}
        </a>
      </p>
      <p
        style={{
          margin: '0.5rem auto',
          textAlign: 'left',
          fontWeight: 'normal',
          color: '#333',
          opacity: '0.8',
        }}
      >
        Email:{' '}
        <a style={{ color: '#0077c1' }} href={`mailto:${email}`}>
          {email}
        </a>
      </p>
    </ContainerLeaders>
  );
}
