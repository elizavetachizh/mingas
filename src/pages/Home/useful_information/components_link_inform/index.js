import React from 'react';
import { ContentLink, TextLink } from './styles';
const styleDiv = {
  height: '60px',
};
export default function LinkInform({ cardImg, cardDesc, link }) {
  return (
    <ContentLink to={`${link}`}>
      <div style={styleDiv}>
        <img alt={''} src={require(`../../../../assets/icons_useful_inform/${cardImg}.png`)} />
      </div>
      <div>
        <TextLink>{cardDesc}</TextLink>
      </div>
    </ContentLink>
  );
}
