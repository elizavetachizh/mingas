import styled from 'styled-components';

export const Links = styled.ul`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: #0d4475;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 64px;
    }
  }
`;
export const BlockInformOgonek = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  margin: 6% auto;
  justify-content: space-around;
  border-radius: 20px;
  border: 1px solid #1b3a91;
  div {
    width: 50%;
    margin: 0 auto;
    font-size: 16px;
    text-align: justify;
    h4 {
      text-align: center;
      color: #4574ee;
      font-size: 28px;
      margin: 1% auto;
      line-height: 1.3;
      font-weight: 300;
      text-transform: uppercase;
      background-position: center center;
      border-color: transparent;
      border-style: solid;
    }
  }

  img {
    width: 46%;
    border-radius: 20px;
  }
`;
