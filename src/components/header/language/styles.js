import styled from 'styled-components';

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
  div.goog-te-gadget-simple span a span {
    display: none;
  }
  div.goog-te-gadget-simple span a::before {
    content: 'Язык';
    color: white;
    font-size: 14px;
  }
  div.goog-te-gadget img {
    display: none;
  }
`;
