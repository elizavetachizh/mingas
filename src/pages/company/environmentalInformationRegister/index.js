import { BlockBtn } from '../../../components/administrativeServices/Header/styles';
import React from 'react';

export default function EnvironmentalInformationRegister() {
  return (
    <div>
      <BlockBtn>
        <a
          href={require('./documents/Svodnyj-reestr-ekologicheskoj-informatsii-2023.docx')}
          target={'_blank'}
          rel="noreferrer"
        >
          Реестр экологической информации государственного фонда данных о состоянии окружающей среды
          и воздействиях на нее по итогу 2023 года
        </a>
      </BlockBtn>
      <BlockBtn>
        <a
          href={require('./documents/Svodnyj-reestr-ekologicheskoj-informatsii-2024.docx')}
          target={'_blank'}
          rel="noreferrer"
        >
          Реестр экологической информации о состоянии окружающей среды и воздействиях на нее на
          01.10.2024 года
        </a>
      </BlockBtn>
    </div>
  );
}
