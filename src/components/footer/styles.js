import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: auto;
  width: 100%;
  background-color: #0d4475;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 10px 0;
  color: white;
  @media (max-width: 650px) {
    width: 660px;
    max-width: 660px;
  }
  //input {
  //  padding: 1rem 1.5rem 1rem;
  //}
`;

export const Contacts = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
  @media (max-width: 990px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 650px;
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

export const LinksSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2%;
  @media (max-width: 990px) {
    flex-direction: row;
  }
`;

export const Telephons = styled.div`
  text-align: center;
`;
export const ContactInform = Telephons;
export const WorkTime = Telephons;

export const Instagram = styled.img`
  width: 40px;
  height: 40px;
  margin: 2% 0;
`;

export const Telegram = Instagram;

export const Viber = Instagram;
