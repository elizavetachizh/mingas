import React from 'react';
import { ContentLink, ImageLink, TextLink } from './styles';
import { Trans, useTranslation } from 'react-i18next';
const styleDiv = {
  height: '80px',
};
export default function LinkInform({ cardImg, cardDesc }) {
  return (
    <ContentLink>
      <div style={styleDiv}>
        <ImageLink src={require(`../../../../assets/icons_useful_inform/${cardImg}.png`)} />
      </div>
      <div style={styleDiv}>
        <TextLink>{cardDesc}</TextLink>
      </div>
    </ContentLink>
  );
}
