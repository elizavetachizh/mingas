import styled from 'styled-components';

export const ContainerBtn = styled.div`
  max-width: 1140px;
  border: 1px solid #d4d4d4;
  margin: 2% auto;
  display: flex;
  flex-direction: column;

  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 4% auto;
  }

  div {
    padding: 2%;
    display: none;
    transition: 0.7s all;
    p {
      text-align: justify;
    }
    &.shake {
      display: block;
      transition: 0.7s all;
    }
  }
`;
export const Div = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  font-weight: 500;
  font-size: 0.94117647058rem;
  line-height: 1.6875em;
  color: #3c3838;
  padding: 0;
  background: #f6f6f6;
  cursor: pointer;
  p {
    padding: 20px;
  }
  img {
    background: #eeeeee;
    padding: 35px;
    margin: 0;
  }
`;
export const DivClose = Div;

export const ContainerText = styled.div`
  text-align: justify;
  max-width: 1140px;
  margin: 0 auto;
  font: 17px Play, sans-serif;
  p {
    text-indent: 25px;
  }
  iframe {
    width: 100%;
    height: 1125px;
  }
`;
