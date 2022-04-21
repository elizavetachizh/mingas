import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import {
  DivAboutManagementBackground,
  DivAboutmanagementWhiteFont,
  DivBasicManagement,
} from '../managment/styles';
import {
  DivAfterAndBefore,
  DivDescriptionCareer,
  DivForm,
  DivVacancies,
  TextCareer,
  TitleCareer,
  PhotoCareer,
} from './styles';
import career from '../../../assets/workers/2.jpg';
import up from '../../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';

export default function Career() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'career'} />
      <DivAfterAndBefore>
        <DivAboutManagementBackground>
          <DivAboutmanagementWhiteFont>
            <DivBasicManagement>
              <DivDescriptionCareer>
                <TitleCareer>Работа в РУП “Мингаз”</TitleCareer>
                <TextCareer>
                  Дружный высокопрофессиональный коллектив униатрного предприятия “Мингаз”
                  насчитывает СТОЛЬКО человек. В феврале 2010 года в ГРО "ПетербургГаз" была создана
                  аварийно-спасательная служба. Её специалисты выполняют аварийно-спасательные
                  работы по ликвидации чрезвычайных ситуаций природного и техногенного характера.
                  Работники ГРО "ПетербургГаз" принимают участие в конкурсах профессионального
                  мастерства. Так, в 2009 году электрогазосварщик-врезчик 6 разряда Михаил Арсеньев
                  занял 1 место в конкурсе "Лучший сварщик ЖКХ Санкт-Петербурга", затем получил
                  гран-при конкурса профессионального мастерства "Лучший сварщик в Cеверо-Западном
                  регионе РФ". Сотрудники нашей организации активно участвуют и в различных
                  спортивных мероприятиях, районных и городских спартакиадах. В ГРО "ПетербургГаз"
                  созданы команды по волейболу, футболу, хоккею. Наши спортсмены принимают участие в
                  соревнованиях по настольному теннису, стрельбе, лыжным гонкам, гиревому спорту,
                  бегу.
                </TextCareer>
              </DivDescriptionCareer>
              <PhotoCareer src={career} />
            </DivBasicManagement>
            <DivVacancies>
              <TitleCareer>Вакансии</TitleCareer>
            </DivVacancies>
            <DivForm className="form-div">
              <TitleCareer>Отправить анкету</TitleCareer>
              <p>Вы можете заполнить анкету, отправить ее и мы ее обязательно рассмотрим</p>
            </DivForm>
          </DivAboutmanagementWhiteFont>
        </DivAboutManagementBackground>
      </DivAfterAndBefore>
      <ScrollToTop showUnder={160}>
        <img src={up}  alt={""}/>
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
