import styled from 'styled-components';

export const DivServicesList = styled.button`
  display: flex;
  flex: 0 0 30%;
  max-width: 22%;
  border-radius: 30px;
  padding: 0.8rem;
  height: 15rem;
  margin: 0.8rem;
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
  transition: 0.7s;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translateY(-1rem);
  }
  @media (max-width: 800px) {
    margin: 2rem;
    flex: 0 0 30%;
    max-width: 30%;
  }
  @media (max-width: 600px) {
    margin: 1rem;
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  color: #314d5c;
  max-width: 100%;
  width: 60px;
  height: 60px;
`;

export const DivInformService = styled.div`
  width: 100%;
  text-align: center;
`;

export const Name = styled.h3`
  text-align: center;
  color: #0d4475;
  @media (max-width: 848px) {
    font-size: 14px;
  }
`;
