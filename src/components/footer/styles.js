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
  width: 50%;
  align-items: flex-start;
  margin: 2% 0;
  text-align: left;
  justify-content: left;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Telephons = styled.div`
  text-align: center;
  color: white;
`;
export const ContactInform = Telephons;
export const WorkTime = Telephons;

export const FooterContainer = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  a {
    color: white;
  }
  background-image: linear-gradient(
    -55deg,
    rgb(1, 95, 156) 0%,
    rgb(16, 69, 141) 0%,
    rgb(15, 89, 141) 19%,
    rgb(15, 78, 140) 60%,
    rgb(14, 78, 129) 79%,
    rgb(13, 68, 117) 100%
  );
  bottom: 0;
  margin: 0;
  padding: 0;
  &.height {
    @media (max-width: 900px) {
      height: 67vh;
    }
  }
  //&.service {
  //  @media (min-width: 990px) {
  //    height: 40vh;
  //  }
  //}
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
    margin: 0 auto 0;
  }
`;
