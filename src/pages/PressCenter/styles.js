import styled from 'styled-components';
export const BlockPressCenter = styled.div`
  iframe {
    width: 70%;
    margin: 4% 15%;
  }
`;
export const ContainerArticles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Article = styled.div`
  border-radius: 20px;
  border: 1px solid #0d4475;
  width: 74%;
  margin: 4% auto;
  background-size: contain;
  text-align: center;
  background-repeat: no-repeat;
  background-position: bottom;
  img {
    width: 100%;
    border-radius: 20px;
    z-index: -1;
    position: relative;
  }
  p {
    text-decoration: none;
    margin: -9% auto 2%;
    padding: 0;
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
  //&.general {
  //  width: 50%;
  //  left: 0;
  //  margin: 0;
  //}
  //&.quarter {
  //  width: 25%;
  //} 
`;
