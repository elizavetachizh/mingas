import styled from 'styled-components';

export const DivNews = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  color: #ffffff;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translateY(-1rem);
  }
`;

export const DateLink = styled.p``;

export const DescLink = styled.p``;

export const ImageLink = styled.img`
  width: 90%;
  @media(max-width: 640px) {
    width: 70%;
  }
`;
