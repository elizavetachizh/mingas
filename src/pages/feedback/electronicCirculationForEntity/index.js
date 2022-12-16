import React from 'react';
import FormQuestionForEntity from '../../../components/FormQuestionForEntity';
import { ContainerInform, TextForInformation } from './styles';
import SubTitleFun from '../../../components/SubTitle';
import ContainerContent from '../../../components/Container';

export default function ElectronicAppealForEntity() {
  return (
    <ContainerContent
      name={'Электронное обращение юридических лиц'}
      content={
        <ContainerInform className={'electronic-appeal-for-entity'}>
          <TextForInformation>
            <SubTitleFun color={'blue'} infoSubTitle={'Уважаемые посетители сайта!'} />
            <strong>
              {' '}
              Обращаем внимание на то, что 2 января 2023 г. вступают в силу изменения, внесенные в
              статью 25 Закона Республики Беларусь «Об обращениях граждан и юридических лиц». В
              связи с этим подача электронных обращений будет возможна только с помощью
              государственной единой (интегрированной) республиканской информационной системы учета
              и обработки обращений граждан и юридических лиц - интернет-ресурса{' '}
              <a href={'http://xn--80abnmycp7evc.xn--90ais/'}>обращения.бел.</a>
            </strong>
          </TextForInformation>
          <TextForInformation>
            <p>
              Электронные обращения граждан, в том числе индивидуальных предпринимателей (далее -
              граждан), и юридических лиц направляются и рассматриваются в соответствии с
              требованиями{' '}
              <a target={'_blank'} href={'https://pravo.by/document/?guid=3871&p0=H11100300'}>
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
              случаях, установленных{' '}
              <a target={'_blank'} href={'https://pravo.by/document/?guid=3871&p0=H11100300'}>
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
      }
    />
  );
}
