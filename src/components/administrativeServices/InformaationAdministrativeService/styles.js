import styled from 'styled-components';

export const Div = styled.div`
  padding: 2%;
  display: none;
  transition: 0.7s all;
  p {
    text-align: justify;
  }
  &.shake {
    display: block;
    transition: 0.7s all;
  }
`;

export const DivBlocks = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerInform = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: 0 auto;
`;

export const BtnIsOpen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: 500;
  font-size: 0.94117647058rem;
  line-height: 1.6875em;
  color: #3c3838;
  padding: 0 2rem;
  background: #f6f6f6;
  cursor: pointer;
  margin: 1rem 0 1rem 0;
  p {
    padding: 0 10px;
    width: 90%;
  }
`;

export const ContainerInformAboutService = styled.div`
margin: 1rem auto;
  //p {
  //  text-indent: 25px;
  //}
`
