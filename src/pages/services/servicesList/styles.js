import styled from 'styled-components';

export const DivServicesList = styled.div`
  display: flex;
  flex: 0 0 30%;
  max-width: 25%;
  padding: 1rem;
  margin: 1rem;
  flex-direction: column;
  position: relative;
  width: 100%;
  background: #fff;
  box-shadow: 0 6px 30px rgb(0 0 0 / 10%);
  color: #314d5c;
  text-decoration: none;
  -webkit-text-decoration-color: transparent;
  text-decoration-color: transparent;
  text-align: center;
  &:hover {
    text-decoration: underline;
    -webkit-text-decoration-color: rgba(40, 106, 179, 0.6);
    text-decoration-color: rgba(49, 77, 93, 0.6);
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }
`;

export const Image = styled.img`
  margin: 0px auto;
  color: #314d5c;
  max-width: 100%;
`;

export const DivInformService = styled.div``;

export const Name = styled.h3``;

export const Description = styled.p``;
