import styled from 'styled-components';

export const Links = styled.ul`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: #0d4475;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      width: 64px;
    }
  }
`;
export const BlockInformOgonek = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50%;
    border-radius: 20px;
  }
`;
