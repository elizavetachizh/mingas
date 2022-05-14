import styled from "styled-components";

export const Ul = styled.div`
  font-style: normal;
  font-size: 18px;
  width: 100%;
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: 400px 400px;
 
`;


export const A = styled.a`
  color: #9e9e9e;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  box-shadow: 0 6px 30px rgb(0 0 0 / 50%);
  cursor: pointer;
  padding: 4rem 4rem 2.5rem;
  margin: 1rem;
  z-index: 4;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translateY(-1rem);
  }
`


export const Body = styled.div`
margin: 16% auto;

`;