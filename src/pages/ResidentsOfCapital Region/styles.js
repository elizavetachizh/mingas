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
    background: #0e43af;
    cursor: pointer;
    margin: 2% auto;
    border-radius: 50px;
    @media (max-width: 670px) {
      font-size: 16px;
    }
  }
`;
