import styled from 'styled-components';

export const ContainerServices = styled.a`
  box-shadow: 0 6px 30px rgb(0 0 0 / 50%);
  height: 150px;
  cursor: pointer;
  padding: 2rem 0.5rem;
  margin: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: linear-gradient(
    -55deg,
    rgb(1, 95, 156) 0%,
    rgb(16, 69, 141) 0%,
    rgb(15, 89, 141) 19%,
    rgb(15, 78, 140) 60%,
    rgb(14, 78, 129) 79%,
    rgb(13, 68, 117) 100%
  );
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translateY(-1rem);
  }
  @media (max-width: 596px) {
    padding: 0 0.4rem;
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
`;

export const Textcard = styled.p`
  font-size: 16px;
  @media (max-width: 596px) {
    margin: 1px auto;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
