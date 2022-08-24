import styled from "styled-components";

export const DivCarousel = styled.div`
  text-align: center;
  img{
    width: 50%;
  height: 50%}
  figure{
    display: flex;

flex-direction: column;
  align-items: center;
  justify-content: center; p{margin: 0}}
  a{
    text-decoration: none;
    color: #0d4475;
    font-size: 18px;
  }
  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`