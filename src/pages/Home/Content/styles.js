import styled from 'styled-components';

export const ContainerContent = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
  }
`;

export const DivContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  //bottom: 0;
  margin-top: 154px;
  height: fit-content;
  @media (min-width: 1500px) {
    margin-top: 154px;
    height: fit-content;
  }
  @media (min-width: 2000px) {
    margin-top: 164px;
  }
  @media (max-width: 1700px) {
    height: fit-content;
  }
  @media (max-width: 900px) {
    margin-top: 80px;
  }
  @media (max-width: 600px) {
    height: 400px;
  }
  @media (max-width: 424px) {
    margin-top: 66px;
  }
`;

export const DivText = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 16px;
  align-items: center;
  font-weight: bold;
  flex-direction: column;
  @media (max-width: 640px) {
    font-size: 1rem;
  }
  img {
    width: 100%;
  }
`;

export const DivInformAbout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: #ffff;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 650px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    color: #ffff;
    text-align: center;
    font-size: 16px;
    padding-left: 0;
  }
  a {
    color: white;
  }

`;

export const Prizes = styled.div`
  display: flex;
  flex-direction: row;
  img {
    margin: 10px;
    width: 50px;
    height: 50px;
  }
  @media (max-width: 438px) {
    img {
      width: 40px;
      height: 40px;
      margin: 8px;
    }
  }
  @media (max-width: 348px) {
    img {
      width: 34px;
      height: 34px;
    }
  }
`;

export const Divbackground = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  border-radius: 20px;
  @media (min-width: 2000px) {
    top: 174px;
  }
  @media (max-width: 2000px) {
    border-radius: 0;
  }
  @media (max-width: 424px) {
    top: 62px;
  }
  //p {
  //  position: absolute;
  //}
`;

export const DivImage = styled.div`
  //height: 470px;
  transform: translate3d(0px, 0px, 0px);
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    object-fit: cover;
    height: 500px;

    &.post {
      width: 150%;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      object-fit: cover;
      height: 400px;
      @media (max-width: 540px) {
        width: 170%;
      }
      @media (max-width: 490px) {
        width: 190%;
      }
      @media (max-width: 445px) {
        width: 210%;
      }
      @media (max-width: 400px) {
        width: 230%;
      }
    }
    &.newpost {
      width: 100%;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      object-fit: cover;
      height: 400px;
      //@media (max-width: 540px) {
      //  width: 170%;
      //}
      //@media (max-width: 490px) {
      //  width: 190%;
      //}
      //@media (max-width: 445px) {
      //  width: 210%;
      //}
      //@media (max-width: 400px) {
      //  width: 230%;
      //}
    }
    &.priem {
      filter: blur(3px) brightness(0.5);
      width: 100%;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      object-fit: cover;
      height: 400px;
    }
  }
  &.none:after {
    content: none;
    background: rgba(0, 0, 0, 0);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;
