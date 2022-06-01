import styled from 'styled-components';

export const HeaderBtnFeedback = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: 6%;
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  color: #0d4475;
  font-size: 16px;
  text-align: left;
  background: none;
  border: none;
  margin: 2% 0;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #a69b14;
    text-decoration-color: #a69b14;
  }
  &:checked {
    color: #a69b14;

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
`;
export const DivImage = styled.div`
  height: 470px;
  width: 100%;
`;
