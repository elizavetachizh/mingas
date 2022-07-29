import styled from "styled-components";

export const TextForInformation = styled.div`
  font-size: 16px;
  text-align: start;
`
  export const ContainerInform = styled.div`
    border-radius: 3px;
    padding: 10px 15px 0;
    border:1px solid #cccccc;
    width: 50%;
    margin: 0 auto;
    
    h2{
      margin: 1rem auto;
    }
    a{
      text-decoration: none;
      color:#0d4475;
    }
    button{
      width: 150px;
      height: 50px;
    }
    @media(max-width: 720px){
      width: 80%;
    }
  `