import React from 'react';
import minsk from '../../../assets/background/minsk.jpg';
import Header from '../../../components/header';
import { Divbackground, DivImage } from '../styles';
import { Container } from '../../Home/styles';
import Footer from '../../../components/footer';
import FormQuestionForEntity from '../../../components/FormQuestionForEntity';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { ContainerInform, TextForInformation } from './styles';
import SubTitleFun from '../../../components/SubTitle';
import TitleFun from '../../../components/title';
import background from '../../../assets/background/подложка_3.png';
import TitleForHome from '../../../components/TitleForHome';
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
const styleImage = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  // backgroundAttachment: 'fixed'
  // backgroundSize: 'cover',
  widths: '50%',
};
export default function ElectronicAppealForEntity() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <Divbackground>
        <DivImage style={styled}></DivImage>
      </Divbackground>

      <AdditionalDiv>
        <TitleForHome color={'blue'} infoTitle={'Электронное обращение юридических лиц'} />
        <ContainerInform>
          <TextForInformation>
            <SubTitleFun color={'blue'} infoSubTitle={'Уважаемые посетители сайта!'} />
            <p>
              Электронные обращения граждан, в том числе индивидуальных предпринимателей (далее -
              граждан), и юридических лиц направляются и рассматриваются в соответствии с
              требованиями{' '}
              <a href={'https://pravo.by/document/?guid=3871&p0=H11100300'}>
                Закона Республики Беларусь от 18 июля 2011 года "Об обращениях граждан и юридических
                лиц"
              </a>
              .
            </p>
            <p>
              Электронные обращения должны быть рассмотрены не позднее <strong>15 дней</strong>, а
              требующие дополнительного изучения и проверки - не позднее <strong>1 месяца</strong>
            </p>
            <p>
              Ответы на электронные обращения направляются в электронном виде на адрес электронной
              почты, указанный в электронном обращении, либо в письменном виде на адрес места
              жительства (места пребывания) гражданина или места нахождения юридического лица в
              случаях, установленных
              <a href={'https://pravo.by/document/?guid=3871&p0=H11100300'}>
                Законом Республики Беларусь от 18 июля 2011 года «Об обращениях граждан и
                юридических лиц»
              </a>
              .
            </p>
            <ul>
              <strong>
                Оставляются без рассмотрения по существу обращения, которые (по которым):
              </strong>
              <li>
                не соблюдены требования, предъявляемые для их подачи (изложены не на белорусском или
                русском языке;не содержат фамилии, собственного имени, отчества, адреса места
                жительства (места пребывания) гражданина;не содержат полного наименования
                юридического лица и адреса его места нахождения, фамилии, собственного имени,
                отчества руководителя или лица, уполномоченного в установленном порядке подписывать
                обращения (для юридических лиц);не содержат адреса электронной почты заявителя; не
                изложена суть обращения; содержат текст, не поддающийся прочтению;содержат
                нецензурные либо оскорбительные слова или выражения;подаются представителями
                заявителей, и к ним не прилагаются электронные копии документов, подтверждающих их
                полномочия);
              </li>
              <li>
                подлежат рассмотрению в соответствии с законодательством о конституционном
                судопроизводстве, гражданским, гражданским процессуальным, хозяйственным
                процессуальным, уголовно- процессуальным законодательством, законодательством,
                определяющим порядок административного процесса, законодательством об
                административных процедурах, являются обращениями работника к нанимателю либо в
                соответствии с законодательными актами установлен иной порядок подачи и рассмотрения
                таких обращений;
              </li>
              <li>
                содержат вопросы, не относящиеся к компетенции Минского областного исполнительного
                комитета;
              </li>
              <li>пропущен без уважительной причины срок подачи жалобы;</li>
              <li>
                подано повторное обращение, если оно уже было рассмотрено по существу и в нем не
                содержатся новые обстоятельства, имеющие значение для рассмотрения обращения по
                существу;
              </li>
              <li>с заявителем прекращена переписка по изложенным в обращении вопросам.</li>
            </ul>
          </TextForInformation>
          <FormQuestionForEntity />
        </ContainerInform>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
