import styled from "styled-components";
export const TitleCareer = styled.h3``;

export const TextCareer = styled.p`
`;

export const PhotoCareer = styled.img`
width: 40%;
`

export const DivVacancies = styled.div`
display: flex;
  flex-direction: column;
`;

export const DivForm = styled.div``;

export const DivDescriptionCareer = styled.div`
display: flex;
flex-direction: column;`;

export const DivAfterAndBefore = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
background: url("https://peterburggaz.ru/local/templates/peterburggaz/images/section-left.png?1") left 390px no-repeat;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    background: url("https://peterburggaz.ru/local/templates/peterburggaz/images/section-right.png?2") right bottom no-repeat
  }
`;
