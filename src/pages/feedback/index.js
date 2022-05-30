import React, { useState } from 'react';
import { Container } from '../Home/styles';
import Header from '../../components/header';
import ReceptionOfCitizens from './receptionOfCitizens';
import QuestionAnswer from './QuestionAnswer';
import ElectronicAppeal from './electronicСirculation';
import Application from './Requests';
import UsefulInformation from './uaefulIndormation';
import { HeaderBtnFeedback, Button, DivButton } from './styles';
export default function Feedback() {
  const [active, setActive] = useState('ReceptionOfCitizens');
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <DivButton>
        <HeaderBtnFeedback>
          <Button
            onClick={() => {
              setActive('questionAnswer');
            }}
          >
            Вопрос-ответ
          </Button>
          <Button
            onClick={() => {
              setActive('ReceptionOfCitizens');
            }}
          >
            Приём граждан
          </Button>
          <Button
            onClick={() => {
              setActive('usefulInformation');
            }}
          >
            Полезная информация
          </Button>
          <Button
            onClick={() => {
              setActive('ElectronicAppeal');
            }}
          >
            Электронное обращение
          </Button>
          <Button
            onClick={() => {
              setActive('Application');
            }}
          >
            Заявка
          </Button>
        </HeaderBtnFeedback>
        <hr />
      </DivButton>
      {active === 'ReceptionOfCitizens' && <ReceptionOfCitizens />}
      {active === 'usefulInformation' && <UsefulInformation />}
      {active === 'questionAnswer' && <QuestionAnswer />}
      {active === 'ElectronicAppeal' && <ElectronicAppeal />}
      {active === 'Application' && <Application />}
    </Container>
  );
}
