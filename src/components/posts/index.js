import React from 'react';
import DopFunctional from './DopFunctional';
import ContainerContent from '../Container';

export default function Posts() {
  return (
    <ContainerContent
      name={'УП «МИНГАЗ» просит своих абонентов быть бдительными'}
      content={<DopFunctional />}
    />
  );
}
