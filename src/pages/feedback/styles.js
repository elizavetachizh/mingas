import styled from 'styled-components';

export const HeaderBtnFeedback = styled.div`
  margin: 4% 2%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  //max-width: 29%;
  background: linear-gradient(to bottom right, #3d6990 50%, #3d6990 50%, 60%, #0d4475);
  height: fit-content;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 700px) {
    margin: 0 auto;
    width: 90%;
    //max-width: 500px;
    text-align: center;
  }
`;
export const Button = styled.button`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  background: none;
  border: none;
  margin: 2% 0;
  padding: 2% 0;
  text-decoration: none;
  cursor: pointer;
  transition: 0.8s linear;
  //&:hover {
  //  border: solid #0d4475;
  //  color: #fff; /* Цвет текста */
  //  background: #0d4475; /* Цвет фона */
  //  padding: 10px;
  //}
  //&:focus {
  //  border: solid #0d4475;
  //  color: #fff; /* Цвет текста */
  //  background: #0d4475; /* Цвет фона */
  //  padding: 10px;
  //}
  //&:active {
  //  border: solid #0d4475;
  //  color: #fff; /* Цвет текста */
  //  background: #0d4475; /* Цвет фона */
  //  padding: 10px;
  //}
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const ButtonForms = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 2% auto;
  @media (max-width: 900px) {
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
