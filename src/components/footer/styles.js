import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: auto;
  background-color: #314d5c;
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-size: 16px;
  padding: 50px 0;
  color: #e9e5d6;
`;

export const Contacts = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
`;

export const LinksNetwork = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinksSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2%;
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
