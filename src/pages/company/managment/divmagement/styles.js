import styled from 'styled-components';

export const ContainerLeaders = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  margin: 4% auto;
  width: 70%;
  height: auto;
  outline: 2px solid #0d4475; /* Чёрная рамка */
  border: 3px solid #fff; /* Белая рамка */
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #0d4475;
  &:hover {
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translate(-10px, -10px);
  }
`;
export const ImageLeader = styled.img`
  width: 70%;
`;
export const FullNameLeader = styled.p`
  text-align: center;
`;
export const PositionLeader = styled.p`
  text-align: center;
`;
