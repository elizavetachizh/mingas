import styled from 'styled-components';

export const Select = styled.div`
  background: transparent;
  border-radius: 50%;
  border: 2px solid #0d4475;
  color: #0d4475;
  padding: 7px 0;
  select {
    background: transparent;
    //border-radius: 50%;
    //border: 2px solid white;
    position: relative;
    font-size: 18px;
    width: 44px;
    border: none;
    option {
      border: 0;
      background: #0d4475;
      box-shadow: none;
    }
  }
  @media (max-width: 500px) {
    font-size: 14px;
    width: 40px;
  }
`;
