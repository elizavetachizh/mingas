import styled from 'styled-components';

export const HeaderBtnFeedback = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: 6%;
  display: flex;
  flex-direction: column;
  background: #e8f3ff;
  max-width: 29%;
  //margin: 0 2%;
  height: 300px;
  @media (max-width: 700px) {
    height: auto;
    width: 100%;
    margin: 0 auto;
    max-width: 700px;
    text-align: center;
  }
`;
export const Button = styled.button`
  color: #0d4475;
  font-size: 16px;
  text-align: left;
  background: none;
  border: none;
  margin: 2% 0;
  padding: 2% 0;
  text-decoration: none;
  cursor: pointer;
  transition: 0.8s linear;
  &:hover {
    border: solid #0d4475;
    color: #fff; /* Цвет текста */
    background: #0d4475; /* Цвет фона */
    padding: 10px;
  }
  &:focus {
    border: solid #0d4475;
    color: #fff; /* Цвет текста */
    background: #0d4475; /* Цвет фона */
    padding: 10px;
  }
  &:active {
    border: solid #0d4475;
    color: #fff; /* Цвет текста */
    background: #0d4475; /* Цвет фона */
    padding: 10px;
  }
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const DivButton = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;

export const ButtonForms = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1140px;
  margin: 2% auto;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Divbackground = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 470px;
  width: 100%;
  &:after {
    content: '';
    position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
  @media (max-width: 640px) {
    width: 640px;
  }
`;
export const DivImage = styled.div`
  height: 470px;
  width: 100%;
`;
