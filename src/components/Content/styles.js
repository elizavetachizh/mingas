import styled from 'styled-components';

export const ContainerImage = styled.div`
  img {
    width: 100%;
    height: 530px;
    position: absolute;
    object-fit: cover;
    transition: all ease 0.6s;
    border-radius: 20px;
    @media (max-width: 2000px) {
      border-radius: 0;
    }
  }
`;
