import styled from 'styled-components';

export const ContainerServices = styled.a`
  box-shadow: 0 6px 30px rgb(0 0 0 / 50%);
  height: 150px;
  cursor: pointer;
  padding: 2.8rem 1.6rem 3rem 1.6rem;
  margin: 1rem;
  z-index: 4;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translateY(-1rem);
  }
`;

export const Imagecard = styled.img`
  z-index: 2;
`;

export const Textcard = styled.p``;
