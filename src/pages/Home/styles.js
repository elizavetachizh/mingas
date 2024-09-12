import styled from 'styled-components';

export const BackgroundWithImage = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: right;
  background-attachment: fixed;
  background-repeat: no-repeat no-repeat;
`;
