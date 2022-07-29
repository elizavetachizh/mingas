import styled from 'styled-components';
export const TitleCareer = styled.h3``;

export const TextCareer = styled.div`
  p {
    text-indent: 25px;
  }
`;

export const PhotoCareer = styled.img`
  width: 40%;
`;

export const DivVacancies = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivForm = styled.div`
  text-decoration: none;
`;

export const DivDescriptionCareer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivAfterAndBefore = styled.div`
  width: 100%;
  @media (max-width: 550px) {
    width: 550px;
  }
`;

export const LinkToWork = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-decoration: none;
  color: black;
  border-left: 4px solid #0d4475;
  height: fit-content;

  a {
    color: #0d4475;
    font-weight: bold;
    text-decoration: none;
  }
  a,
  p {
    margin-left: 10px;
  }
`;

export const ContainerForLinkToWork = styled.div`
  div.myDiv {
    width: 200px;
  }
  div.class-parag {
    width: 200px;
  }
`;
