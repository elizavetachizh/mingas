import React from 'react';
import { ContentLink, ImageLink, TextLink } from './styles';
import { Trans, useTranslation } from "react-i18next";

export default function LinkInform({ cardImg, cardDesc }) {
  return (
    <ContentLink>
      <ImageLink src={require(`../../../../assets/icons_useful_inform/${cardImg}.png`)} />
      <TextLink>{cardDesc}</TextLink>
    </ContentLink>
  );
}
