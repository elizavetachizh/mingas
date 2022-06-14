import React from 'react';
import { DivButton } from '../styles';
import {
  UsefullInformBtn,
  QuestionAnswerBtn,
  OnlineApplicationBtn,
  AppealBtn,
  ReceptionOfCitizensBtn,
  HeaderFeedbackDiv,
  DivBtnHeader
} from './styles';

export default function HeaderFeedBack() {
  return (
    <HeaderFeedbackDiv>
    <DivBtnHeader>
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
    </DivBtnHeader>
    </HeaderFeedbackDiv>
  );
}
