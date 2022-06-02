import React, { useState } from 'react';
import { Container } from '../../container/styles';
import FormQuestion from '../index';
import { Button, OneColumn, TwoColumn, TwoColumnTextAndForm } from '../styles';
import FormQuestionForEntity from '../../FormQuestionForEntity';
export default function ChangeFormQuestion() {
  const [active, setActive] = useState('Individual');
  return (
    <Container>
      <TwoColumnTextAndForm>
        <OneColumn>
          <Button onClick={() => setActive('Individual')}>Обращение физических лиц</Button>
          <Button onClick={() => setActive('Entity')}>Обращение юридических лиц</Button>
        </OneColumn>
        <TwoColumn>
          {active === 'Individual' && <FormQuestion />}
          {active === 'Entity' && <FormQuestionForEntity />}
        </TwoColumn>
      </TwoColumnTextAndForm>
    </Container>
  );
}
