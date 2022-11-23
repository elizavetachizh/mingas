import { LinkAsButton } from './styles';
import { IoMdContacts } from '../header/styles';
import React from 'react';
export default function LinkAsButtonFun({ href, name, stylesLink }) {
  return (
    <LinkAsButton href={href} backgrounder={stylesLink} target={'_blank'}>
      <IoMdContacts className={'icon'} /> {name}
    </LinkAsButton>
  );
}
