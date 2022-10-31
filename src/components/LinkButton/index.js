import { LinkAsButton } from './styles';
import { IoMdContacts } from '../header/styles';
import React from 'react';
export default function LinkAsButtonFun({ href, name }) {
  return (
    <LinkAsButton href={href}>
      {' '}
      <IoMdContacts className={'icon'} /> {name}
    </LinkAsButton>
  );
}
