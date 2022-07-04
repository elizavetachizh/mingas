import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderFeedbackDiv = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  color: #0d4475;
  margin: 12% auto;
  font-size: 20px;
  width: 100%;
  font-weight: bold;
  @media (max-width: 1100px) {
    margin-top: 14%;
  }
  @media (max-width: 900px) {
    margin-top: 16%;
    font-size: 18px;
  }
  @media (max-width: 600px) {
    margin-top: 24%;
    width: 620px;
  }
  @media (max-width: 500px) {
    margin-top: 24%;
    width: 600px;
  }
  @media (max-width: 400px) {
    margin-top: 30%;
    width: 620px;
  }
  @media (max-width: 330px) {
    margin-top: 34%;
  }
  hr {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
  }
`;
export const UsefullInformBtn = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin: 0 14px;
  &.active {
    color: #a69b14;
  }
`;

export const QuestionAnswerBtn = UsefullInformBtn;

export const OnlineApplicationBtn = UsefullInformBtn;
export const AppealBtn = UsefullInformBtn;
export const ReceptionOfCitizensBtn = UsefullInformBtn;

export const DivBtnHeader = styled.div`
  //width: 100%;
  //height: 80px;
  //background-color: white;
  //text-align: center;
  //align-items: center;
`;
