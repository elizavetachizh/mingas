import styled from 'styled-components';

export const ContainerServices = styled.a`
  box-shadow: 0 6px 30px rgb(0 0 0 / 50%);
  cursor: pointer;
  padding: 3rem 3rem 2.5rem;
  margin: 2rem;
  z-index: 2;
  &:hover {
    text-decoration: underline;
    -webkit-text-decoration-color: rgba(40, 106, 179, 0.6);
    text-decoration-color: rgba(49, 77, 93, 0.6);
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }
`;

export const Imagecard = styled.img`
  width: 30px;
  height: 30px;
  z-index: 2;
`;

export const Textcard = styled.p``;
