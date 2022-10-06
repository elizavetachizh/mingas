import React from 'react';
import HeaderRequests from './HeaderRequesrs';
import ContainerContent from '../../../components/Container';
export default function Requests() {
  return (
    <ContainerContent
      name={'Оставить онлайн-заявку'}
      content={<HeaderRequests style={{ backgroundColor: 'white' }} />}
    />
  );
}
