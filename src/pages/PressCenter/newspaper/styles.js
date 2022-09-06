import styled from 'styled-components';

export const ContanerNewsPape = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  left: 0;
  align-items: center;
  justify-content: left;
  margin: 2% auto;
  &:hover {
    text-decoration-line: underline;
  }
  img{
    margin: 0 4%;
    width: 54px;
  }
  a {
    color: #0d4475;
    font-size: 18px;
  }
`;
