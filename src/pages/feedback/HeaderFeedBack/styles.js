import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderFeedbackDiv = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
color:#0d4475;
  margin: 8% auto;
  width: 100%;
  @media (max-width: 1320px) {
    margin-top: 12%;
  }
  @media (max-width: 600px) {
    margin-top: 16%;
  }
  @media (max-width: 400px) {
    margin-top: 24%;
  }
  hr {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    @media (max-width: 600px) {
      width: 90%;
      margin: 0 16%;
    }
    @media (max-width: 400px) {
      width: 100%;
      margin: 0 26%;
    }
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
  
`
