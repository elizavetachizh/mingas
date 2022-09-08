import styled from 'styled-components';

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 80%;
    color: white;
    padding: 0 0.8rem;
    background-image: linear-gradient(
      -55deg,
      rgb(1, 95, 156) 0%,
      rgb(16, 69, 141) 0%,
      rgb(15, 89, 141) 19%,
      rgb(15, 78, 140) 60%,
      rgb(14, 78, 129) 79%,
      rgb(13, 68, 117) 100%
    );
    cursor: pointer;
    margin: 2% auto;
    border-radius: 30px;
    @media (max-width: 800px) {
      width: 90%;
    }
    @media (max-width: 670px) {
      font-size: 16px;
    }
    @media (max-width: 520px) {
      font-size: 14px;
    }
  }
`;
