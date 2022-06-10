import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../../assets/background/page_3.png');
`;

export const DivAboutManagementBackground = styled.div`
  max-width: 1440px;
  margin: 0 auto 6%;
  @media (max-width: 640px) {
    width: 640px;
    margin: 0;
  }
  @media (max-width: 550px) {  ;
    width: 550px;
  }
    @media (max-width: 640px) {
      display: none;
    }
  }
`;

export const DivAboutmanagementWhiteFont = styled.div`
  max-width: 1155px;
  height: auto;
  margin: 0 auto;
  left: 230px;
  top: 356px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  @media (max-width: 550px) {
    width: 640px;
    margin: 0 auto;
  }
  //@media (max-width: 450px) {
  //  width: 450px;
  //}
`;

export const DivBasicManagement = styled.div`
  max-width: 90%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #0d4475;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 50px auto;
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 633px) {
    flex-direction: column-reverse;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
`;

export const FullName = styled.h2`
  margin: 0;
  @media (max-width: 633px) {
    margin: 6%;
  }
`;

export const Position = styled.h2`
  margin: 0;
`;
export const DivPhotoAndDescription = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  @media (max-width: 633px) {
    width: 80%;
  }
`;

export const Photo = styled.img`
  width: 30%;
  @media (max-width: 633px) {
    width: 50%;
  }
`;

export const Description = styled.p``;

export const DivLeadersPhotoPosition = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  @media (max-width: 400px) {
    margin: 0;
  }
`;
