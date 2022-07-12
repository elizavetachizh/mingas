import styled from "styled-components";

export const Div = styled.div`
  div {
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
  }
`;

export const DivBlocks = styled.div`
display: flex;
  flex-direction: row;
`