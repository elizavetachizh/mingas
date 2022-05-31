import React from 'react';
import { t } from 'i18next';
import { DivButton } from '../styles';
import { HeaderCompanyDiv } from '../../company/header_company/styles';
import ReceptionOfCitizens from '../receptionOfCitizens';
import {
  UsefullInformBtn,
  QuestionAnswerBtn,
  OnlineApplicationBtn,
  AppealBtn,
  ReceptionOfCitizensBtn,
  HeaderFeedbackDiv,
} from './styles';

export default function HeaderFeedBack() {
  return (
    <HeaderFeedbackDiv>
      <DivButton>
        <QuestionAnswerBtn to="/feedback/question-answer">Вопрос-ответ</QuestionAnswerBtn>
        <OnlineApplicationBtn to="/feedback/online-application">Онлайн заявка</OnlineApplicationBtn>
        <AppealBtn to="/feedback/electronic-appeal">Электронное обращение</AppealBtn>
        <ReceptionOfCitizensBtn to="/feedback/reception-of-citizens">
          Приём граждан
        </ReceptionOfCitizensBtn>
        <UsefullInformBtn to="/feedback/usefull-information">Полезная информация</UsefullInformBtn>
      </DivButton>
      <hr />
    </HeaderFeedbackDiv>
  );
}
