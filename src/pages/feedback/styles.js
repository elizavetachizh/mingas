import styled from 'styled-components';

export const HeaderBtnFeedback = styled.div`
  margin: 4% 2%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  //background: linear-gradient(to bottom right, #3d6990 50%, #3d6990 50%, 60%, #0d4475);
  background-image: linear-gradient(
    -55deg,
    rgb(1, 95, 156) 0%,
    rgb(16, 69, 141) 0%,
    rgb(15, 89, 141) 19%,
    rgb(15, 78, 140) 60%,
    rgb(14, 78, 129) 79%,
    rgb(13, 68, 117) 100%
  );
  height: fit-content;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 950px) {
    margin: 0 auto;
    width: 64%;
    text-align: center;
  }
  @media (max-width: 700px) {
    margin: 0 auto;
    width: 70%;
    text-align: center;
  }
  @media (max-width: 640px) {
    margin: 4% auto;
  }
  @media (max-width: 470px) {
    width: 90%;
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
  padding: 2%;
  text-decoration: none;
  cursor: pointer;
  transition: 0.8s linear;
  &.active {
    background-color: white;
    border-radius: 30px;
    color: #0d4475;
  }
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
  @media (max-width: 464px) {
    font-size: 16px;
  }
`;

export const ButtonForms = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 2% auto;
  @media (max-width: 950px) {
    flex-direction: column;
  }
  &.without-margin {
    margin: 10px auto;
  }
`;

export const Divbackground = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  width: 100%;
  top: 154px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  p {
    position: absolute;
  }
  @media (max-width: 640px) {
    width: 640px;
  }
`;
export const DivImage = styled.div`
  //height: 470px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const BlockContainerRequests = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 0;

  @media (max-width: 1600px) {
    box-shadow: none;
    border-radius: 0;
    margin: 0 auto 0;
  }
`;

export const Text = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  z-index: 2;
  margin: 10% auto;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 26px;
  align-items: center;
  font-weight: bold;
  p {
    z-index: 2;
    margin:  auto;
    width: 100%;
  }
`;
