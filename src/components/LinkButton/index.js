import { LinkAsButton } from './styles';
import React from 'react';
export default function LinkAsButtonFun({ info, href, name, stylesLink }) {
  return (
    <LinkAsButton href={href} backgrounder={stylesLink} target={'_blank'}>
        {info} {name}
    </LinkAsButton>
  );
}
