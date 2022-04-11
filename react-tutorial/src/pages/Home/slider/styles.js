import styled from "styled-components";

export const ItemOne = styled.img`
`;
export const ItemTwo = ItemOne;

export const ItemThree =ItemOne;

export const Main = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
`;

export const WindowDiv = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  
  img {
    transition-duration: 0.7s;
    transition-timing-function: ease-in;
    transition-delay: 0.3s;
  }
`;
export const PagesContainer = styled.div`
  height: 100%;
  display: flex;
  
  transition: translate;
  transition-property: transform;
  //transition-duration: 300ms;
  transition-timing-function: ease-in-out;
`;

export const FaChevronLeft = styled.img`
cursor: pointer;
width: 10px`;

export const FaChevronRight = styled.img`
  cursor: pointer;
  width: 10px;
`;
