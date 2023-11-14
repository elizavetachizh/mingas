import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
  animation: fade 0.6s;
  overflow: auto;

  div.popup {
    img {
      width: 60%;
      margin: 0 20%;
    }
    top: 50px;
    font-size: 14px;
    margin: 0 30%;
    height: fit-content;
    width: 40%;
    position: absolute;
    padding: 15px 20px;
    border: 1px solid #383838;
    background: #fefefe;
    z-index: 60;
    border-radius: 20px;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.22), 0 19px 60px rgba(0, 0, 0, 0.3);
    animation: fade 0.6s;
    @media (max-width: 1200px) {
      width: 60%;
      margin: 0 20%;
      img {
        width: 80%;
        margin: 0 10%;
      }
    }
    @media (max-width: 650px) {
      width: 80%;
      margin: 0 5%;
      img {
        width: 96%;
        margin: 1%;
      }
    }
  }
  button.close {
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    position: absolute;
    border: none;
    cursor: pointer;
    outline: none;
    background: transparent;
    &:before {
      color: black;
      content: 'X';
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-weight: normal;
      text-decoration: none;
      transition: all 0.5s;
    }
  }
`;
