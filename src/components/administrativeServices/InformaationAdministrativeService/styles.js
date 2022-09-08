import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp, IoIosPin, IoMdClock } from 'react-icons/io';
const opacityAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
export const Div = styled.div`
  padding: 2%;
  display: none;
  border-radius: 20px;
  margin: 2% auto;
  font-size: 16px;
  p {
    text-align: left;
  }
  &.shake {
    display: block;
    opacity: 0;
    animation: ${opacityAnimation} 2s forwards;
  }
  &.menu{
    border-radius: 0;
    margin:  0 ;
    padding: 2% 0;
    background-image: linear-gradient(
            -55deg,
            rgb(1, 95, 156) 0%,
            rgb(16, 69, 141) 0%,
            rgb(15, 89, 141) 19%,
            rgb(15, 78, 140) 60%,
            rgb(14, 78, 129) 79%,
            rgb(13, 68, 117) 100%
    );
  }
`;

export const DivBlocks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
  //@media(max-width: 820px){
  //  flex-direction: column;
  //}
`;
export const ContainerInform = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  max-width: 980px;
  margin: 0 auto;
  width: 100%;
  div.react-player {
    background-size: 50%;
    background-repeat: no-repeat;
  }
`;
export const General = styled.div`
  border: 1px solid #1b3a91;
  border-radius: 50px;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  img {
    text-align: center;
  }
  &.menu{
    border: none;
    border-radius: 0;
    margin: 14% auto 4%;
    padding: 0;
    width: 90%; 
  }

`;
export const BtnIsOpen = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  color: white;
  padding: 0 0.1rem;
  background-image: linear-gradient(
    -55deg,
    rgb(1, 95, 156) 0%,
    rgb(16, 69, 141) 0%,
    rgb(15, 89, 141) 19%,
    rgb(15, 78, 140) 60%,
    rgb(14, 78, 129) 79%,
    rgb(13, 68, 117) 100%
  );
  cursor: pointer;
  //margin: 4% auto;
  border-radius: 50px;
  &.menu{
    border-radius: 0;
    height: 50px;
    div{
      width: 42px;
      height: 80%;
    }
  }
  div {
    background: white;
    border-radius: 50%;
    height: 92%;
    width: 64px;
    text-align: center;
    @media (max-width: 800px) {
      height: 84%;
    }
    @media (max-width: 540px) {
      height: 80%;
    }
    @media (max-width: 450px) {
      height: 80%;
      width: 80px;
    }
  }
  p {
    width: 90%;
    padding: 0 20px;
    @media (max-width: 684px) {
      font-size: 14px;
    }
  }
  h3 {
    text-align: center;
    width: 100%;
  }
`;

export const ContainerInformAboutService = styled.div`
  margin: 1rem auto;
  max-width: 980px;
`;

export const IoIosArrowUps = styled(IoIosArrowUp)`
  color: #0e43af;
  width: 24px;
  height: 24px;
  margin: 30% auto;
`;

export const IoIosArrowDowns = styled(IoIosArrowDown)`
  color: #0e43af;
  width: 24px;
  margin: 30% auto;
  height: 24px;
`;

export const IoMdClocks = styled(IoMdClock)`
  color: #0e43af;
  width: 35px;
  height: 35px;
`;

export const IoIosPins = styled(IoIosPin)`
  color: #0e43af;
  width: 35px;
  height: 35px;
`;

export const BlockSearch = styled.div`
  width: 50%;
  margin: 2% auto 0;
`;
export const SearchService = styled.button`
  background: none;
  border: none;
  align-items: center;
  color: #0d4475;
  font-size: 16px;
  justify-content: space-around;
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-direction: row;
`;

export const ContainerFormSearchForService = styled.div`
  width: 100%;
  margin: 0 auto;
  form {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    input {
      border: none;
      outline: none;
      font-size: 1rem;
      margin: 0;
      background: none;
      width: 100%;
    }
  }
`;

export const BlockSearchService = styled.div`
  color: #0d4475;
  div {
    margin: 2% auto;
    color: #0d4475;
    a {
      color: #0d4475;
    }
    a:hover {
      color: #0d4475;
    }
    a:active {
      color: #0d4475;
    }
  }
`;
