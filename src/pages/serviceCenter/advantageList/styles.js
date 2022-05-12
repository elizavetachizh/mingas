import styled from 'styled-components';

export const AdvantageListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 90%;
  margin: 10px;
  padding: 20px 30px;
  text-decoration: none;
  p {
    font-size: 16px;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translateY(-1rem);
    box-shadow: 0 6px 30px rgb(0 0 0 / 20%);
  }
`;
