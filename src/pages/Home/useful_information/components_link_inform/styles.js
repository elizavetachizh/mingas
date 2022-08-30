import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContentLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
  cursor: pointer;
  text-decoration: none;
  transition: 0.8s;
  &:hover {
    //увеличение масштаба
    transform: scale(1.1);
  }
  div {
    img {
      @media (max-width: 646px) {
        width: 46px;
        height: 46px;
      }
    }
  }
`;
export const TextLink = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #0d4475;
`;
