import styled from 'styled-components';

export const Contacts = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0 0;
  @media (max-width: 990px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const LinksNetwork = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  margin: 2% 0;
  text-align: left;
  justify-content: space-around;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const Telephons = styled.div`
  text-align: center;
  color: white;
`;
export const ContactInform = Telephons;
export const WorkTime = Telephons;