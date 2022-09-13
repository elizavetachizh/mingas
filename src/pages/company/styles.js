import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  @media (max-width: 640px) {
    width: 100%;
    margin: 0 auto;
  }
`;
export const BlockOfGraditude = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

export const ContainerGraditude = styled.div`
  margin: 0;
  img {
    width: 260px;
    &.visibleOpen {
      width: 500px;
    }
  }
`;

export const ContainerOfDocuments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  button {
    border: none;
    background: none;
  }
`;

export const Link = styled.div`
  color: #0d4475;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 2% auto;
  width: 50%;
  font-weight: bold;
  font-size: 20px;
  &.social-networks-union {
    width: 80%;
    div {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      width: 100%;
    }
  }
  &.social-networks {
    left: 0;
    margin: 2% 0;
    text-align: left;
    &:hover {
      transform: none;
    }
    div {
      width: 60%;
      margin: 2% 0;
      display: flex;
      justify-content: left;
      a {
        margin: 0 4%;
      }
      a:hover {
        transform: scale(1.1);
        transition: transform 0.8s;
      }
    }
  }
  a {
    color: #0d4475;
  }
  a:hover {
    color: #0d4475;
  }
  img {
    width: 40%;
    margin: 0 auto;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 0.8s;
  }
`;

export const Img = styled.img`
  width: 30%;
  margin: 0 35%;
  @media (max-width: 700px) {
    width: 50%;
    margin: 0 25%;
  }
  @media (max-width: 450px) {
    width: 60%;
    margin: 0 20%;
  }
`;

export const ImgCarousel = styled.img`
  max-width: 500px;
  @media (max-width: 900px) {
    max-width: 400px;
  }
  @media (max-width: 530px) {
    max-width: 300px;
  }
  @media (max-width: 370px) {
    max-width: 250px;
  }
`;
