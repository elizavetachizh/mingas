import styled from 'styled-components';

export const DivTextPhoto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    margin: 0 auto;
    text-align: center;
    max-width: 100%;
    width: 100%;
  }
`;

export const DivText = styled.div`
  width: 50%;
font-size: 18px;
  color: #0d4475;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
  p {
    text-indent: 25px;
    text-align: justify;
  }
`;

export const ImageDiv = styled.img`
  width: 30%;
  @media (max-width: 600px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const PWithImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 4% auto;
  font-size: 18px;
  color: #0d4475;
  &.reverse {
    flex-direction: row-reverse;
  }
  div {
    padding: 10px 20px;
    margin: 4% auto;
  }
  img {
    width: 50%;
    margin: 2%;
    @media (max-width: 800px) {
      &.rightImg {
        float: left;
      }
      &.leftImg {
        float: right;
      }
    }
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;

export const BlockImage = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;
export const ImgBackground = styled.img`
  position: relative;
  bottom: 0;
  width: 100%;
  //justify-content: center;
  //align-items: center;
  display: block;
  margin: 0 auto;
  background-repeat: no-repeat;
  @media(max-width: 651px) {
    width: 650px;
  }
`;
