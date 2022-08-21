import styled from 'styled-components';

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    //margin: 50px;
    //background-color: #09c;
    //background-image: -webkit-linear-gradient(#009fd4,#09c,#0086b2);
    //border-radius: 4px;
    //text-shadow: 0 -1px 0 rgb(0 0 0 / 50%);
    //box-shadow: 0 2px 4px rgb(0 0 0 / 30%), inset 0 1px 0 rgb(255 255 255 / 40%);
    //border: 1px solid #0086b2;
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
