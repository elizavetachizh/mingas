import styled from 'styled-components';
export const CookieConsent = styled.div`
  background-color: rgba(14, 78, 129, 1);
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  left: 0;
  position: fixed;
  z-index: 100;
  bottom: 0;
  align-items: center;
  &.passive {
    display: none;
  }
  a {
    color: white;
  }
  button {
    padding: 0.5rem !important;
    &:hover {
      background-color: rgb(211, 211, 211);
    }
  }
`;
