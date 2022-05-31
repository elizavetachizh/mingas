import styled from 'styled-components';

export const HeaderBtnFeedback = styled.div`
  margin-top: 6%;

  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Button = styled.button`
  color: #0d4475;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  background: none;
  border: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4% 0 auto;
  cursor: pointer;
`;

export const DivButton = styled.div`
  text-align: center;
  //max-width: 1440px;
  width: 100%;
  margin: 0 auto;
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
