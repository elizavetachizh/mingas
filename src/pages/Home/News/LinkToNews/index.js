import React from 'react';
import { ArticleForHome } from '../../../PressCenter/styles';

export default function LinkNews({ href, src, name }) {
  return (
    <ArticleForHome>
      <a rel="noreferrer" target={'_blank'} href={href}>
        <img alt={''} src={src} />
        {name && <p>{name}</p>}
      </a>
    </ArticleForHome>
  );
}
