import styled from 'styled-components';

export const DivServicesList = styled.button`
  display: flex;
  flex: 0 0 30%;
  max-width: 25%;
  padding: 1rem;
  height: 250px;
  margin: 1rem;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-items: center;
  width: 100%;
  background: #fff;
  box-shadow: 0 6px 30px rgb(0 0 0 / 10%);
  border: white;
  cursor: pointer;
  color: #314d5c;
  text-decoration: none;
  justify-content: center;
  text-decoration-color: transparent;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translateY(-1rem);
  }
  @media (max-width: 590px) {
    box-shadow: none;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  color: #314d5c;
  max-width: 100%;
`;

export const DivInformService = styled.div`
  width: 100%;
  text-align: center;
`;

export const Name = styled.h3`
  text-align: center;
  color: #0d4475;
`;
