import styled from "styled-components";
export const TitleCareer = styled.h3``;

export const TextCareer = styled.p`
`;

export const PhotoCareer = styled.img`
width: 40%;
height: auto`;

export const DivVacancies = styled.div`
display: flex;
  flex-direction: column;
`;

export const DivForm = styled.div``;

export const DivDescriptionCareer = styled.div`
display: flex;
flex-direction: column;`;

export const DivAfterAndBefore = styled.div`
  position: relative;
  &::after {
    content: url("https://peterburggaz.ru/local/templates/peterburggaz/images/section-right.png?2");
  }
  &:before {
    background-position: left 596px;
content: url("https://peterburggaz.ru/local/templates/peterburggaz/images/section-left.png?1") ;
  }
`;
