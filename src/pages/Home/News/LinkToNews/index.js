import React from 'react';
import { ArticleForHome } from '../../../PressCenter/styles';

export default function LinkNews({ href, src, cardDesc }) {
  return (
    <ArticleForHome>
      <a rel="noopener" target={'_blank'} href={href}>
        <img alt={''} src={src} />
        <p>{cardDesc}</p>
        {/*<p>{''}</p>*/}
      </a>
    </ArticleForHome>
  );
}
