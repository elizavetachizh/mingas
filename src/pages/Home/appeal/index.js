import React from 'react';
import { Container } from '../services/styles';
import { ButtonLink } from '../../services/styles';
import AppealOfCitizens from './appealOfCitizens';
import AppealOfLegalEntities from './appealOfLegalEntities';

export default function Appeal() {
  return (
    <Container>
      <button>Для физических лиц</button>
      <button>Для юридических лиц</button>
      <AppealOfCitizens></AppealOfCitizens>
      <AppealOfLegalEntities></AppealOfLegalEntities>
    </Container>
  );
}
