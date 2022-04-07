import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/background/page_3.png");
`;

export const DivAboutManagementBackground = styled.div`
max-width: 1440px;
margin: 0px auto`;

export const DivAboutmanagementWhiteFont = styled.div`
  //position: absolute;
  max-width: 1155px;
  height: auto;
  margin: 0 auto;
  left: 230px;
  top: 356px;

  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
`;


export const DivBasicManagement = styled.div`
  max-width: 1440px;
  font-family: 'Bilbo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #314D5C;
    display: flex;
    flex-direction: column;
    justify-content: center;
  margin: 50px auto;
`;

export const FullName = styled.h2``;

export const Position = styled.h2``;
export const DivPhotoAndDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Photo = styled.img`

  width: 300px`;

export const Description = styled.p`
width: 50%`;

export const DivLeadersPhotoPosition = styled.div`
  margin:50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  
`;

