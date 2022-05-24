import React from 'react';
import { Container } from '../Home/styles';
import Header from '../../components/header';
import HeaderFeedBack from './headerFeedBack';
import receptionOfCitizens from './receptionOfCitizens';
import ReceptionOfCitizens from './receptionOfCitizens';

export default function Feedback() {
  return (
    <Container>

      <HeaderFeedBack></HeaderFeedBack>
      <ReceptionOfCitizens/>
    </Container>
  );
}
