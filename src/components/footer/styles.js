import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color:#314D5C;
  display: flex;
  align-items: center; 
  justify-content: space-around;
  flex-direction: column;
  font-family: 'Fira Sans Condensed'; 
  font-size: 16px;
  font-weight: 500;
  padding: 50px 0;
  color:#E9E5D6;
`;

export const Contacts = styled.div`
display: flex;
  width: 80%;
flex-direction: row;
justify-content: space-around;
margin: 20px 0`;

export const Telephons = styled.div`
;

`;
export const ContactInform = Telephons;
export const WorkTime=Telephons;

export const SocialMedia= styled.div`
  display: flex;
  width: 20%;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
  `;

export const Instagram = styled.img`
  width: 40px;
  height: 40px;
`;

export const Telegram = Instagram

export const Viber = Instagram;