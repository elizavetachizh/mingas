import styled from 'styled-components';

export const Select = styled.div`
  background: transparent;
  border-radius: 50%;
  border: 2px solid white;
  padding: 8px 2px;
  select {
    background: transparent;
    //border-radius: 50%;при клике на select
    //border: 2px solid white;
    position: relative;
    font-size: 18px;
    outline: none;
    width: 44px;
    border: none;

    option {
      border: 0;
      background: white;
      box-shadow: none;
      color: #0d4475;
    }
  }
  @media (max-width: 500px) {
    font-size: 14px;
    width: 40px;
  }
`;

export const Div = styled.div`
    div.goog-te-gadget-simple {
      border-radius: 50%;
      padding: 9px 2px;
      border: 2px solid white;
      background: none;
      font-size: 10pt;
      display: inline-block;
      cursor: pointer;
      zoom: 1;
      *display: inline;
    }
  div.goog-te-gadget-simple span a span{
    display: none;
  }
  div.goog-te-gadget-simple span a::before{
    content: "Язык";
    color: white;
    font-size: 14px;
  }
  div.goog-te-gadget img {
    display: none;
  }

`
