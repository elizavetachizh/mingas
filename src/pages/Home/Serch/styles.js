import styled from 'styled-components';

export const SearchFunction = styled.div`
  flex: 0 0 auto;
  width: 100%;
  margin: 0 auto;
`;

export const PgItemsSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 250px;
  max-width: 100%;
  position: relative;
  @media (max-width: 1600px) {
    width: 200px;
  }
  @media (max-width: 1000px) {
    width: 130px;
  }
`;

export const AutocompleteSuggestions = styled.div`
  text-align: left;
  position: absolute;
  top: 2.75rem;
  z-index: 50;
  padding: 0.5rem 0;
  display: none;
  border: 0;
  width: 100%;
  max-height: 20rem;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  line-height: 1.25rem;
  padding: 0.5rem;
  border: 0;
  transition: box-shadow 0.3s;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 4px;
  right: 0.75rem;
  background: #0d4475 50% 50% no-repeat;
  border-radius: 4px;
  width: 42px;
  height: 28px;
  border: 0;
  transition: all 0.3s;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 800px) {
    display: block;
    background: rgba(0, 0, 0, 0) 50% 50% no-repeat;
    position: static;
  }
`;
