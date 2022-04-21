import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../../assets/background/page_3.png');
`;

export const DivAboutManagementBackground = styled.div`
  max-width: 1440px;
  margin: 0px auto 6%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    background: url('https://peterburggaz.ru/local/templates/peterburggaz/images/section-left.png?1')
      left 390px no-repeat;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    background: url('https://peterburggaz.ru/local/templates/peterburggaz/images/section-right.png?2')
      right bottom no-repeat;
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
`;

export const DivBasicManagement = styled.div`
  max-width: 90%;
  font-family: 'Bilbo', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #314d5c;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 50px auto;
`;

export const FullName = styled.h2`
  margin: 0;
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
`;

export const Photo = styled.img`
  width: 30%;
`;

export const Description = styled.p``;

export const DivLeadersPhotoPosition = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
