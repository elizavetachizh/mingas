import styled from 'styled-components';

export const ContainderWhatDoingMinGaz = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const Png = styled.img`
  width: 20px;
  margin: 0 10px;
  height: 20px;
`;
export const DescDiv = styled.p`
  color: #0d4475;
  text-align: center;
  font-size: 20px;
  @media(max-width: 700px) {
    font-size: 16px;
  }
  @media(max-width: 600px) {
    font-size: 14px;
  }
`;
