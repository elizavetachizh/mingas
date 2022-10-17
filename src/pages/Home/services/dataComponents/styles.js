import styled from 'styled-components';

export const ContainerServices = styled.a`
  box-shadow: 0 6px 30px rgb(0 0 0 / 50%);
  height: 150px;
  cursor: pointer;
  padding: 2.8rem 1.6rem 3rem 1.6rem;
  margin: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translateY(-1rem);
  }
  @media (max-width: 596px) {
    padding: 1rem 0.4rem;
    height: 100px;
  }
  @media (max-width: 422px) {
    padding: 1rem 0.4rem;
    height: 120px;
  }
  @media (max-width: 392px) {
    padding: 1rem 0.4rem;
    height: 140px;
  }
`;

export const Imagecard = styled.img`
  z-index: 2;
  width: 30%;
  height: auto;
  @media (max-width: 596px) {
    width: 48px;
    height: 48px;
  }
  @media (max-width: 392px) {
    width: 38px;
    height: 38px;
  }
`;

export const Textcard = styled.p`
  @media (max-width: 596px) {
    font-size: 16px;
    margin: 1px auto;
  }
`;
