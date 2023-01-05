import React from 'react';
import { ContainerInform, TextForInformation } from './styles';
import ContainerContent from '../../../components/Container';
import SubTitleFun from '../../../components/SubTitle';
export default function ElectronicAppeal() {
  return (
    <ContainerContent
      name={'Электронное обращение граждан и юридических лиц'}
      content={
        <ContainerInform>
          <SubTitleFun color={'blue'} infoSubTitle={'Уважаемые посетители сайта!'} />
          <TextForInformation>
            УП «МИНГАЗ» информирует, что со 2 января 2023 г. вступают в силу изменения, внесенные в
            статью 25 Закона Республики Беларусь «Об обращениях граждан и юридических лиц». В связи
            с этим подача электронных обращений возможна только с помощью государственной единой
            (интегрированной) республиканской информационной системы учета и обработки обращений
            граждан и юридических лиц - интернет-ресурса{' '}
            <a href={'http://xn--80abnmycp7evc.xn--90ais/'}>обращения.бел.</a>
          </TextForInformation>
          <TextForInformation>
            Для подачи электронного обращения в адрес государственной организации заявителю
            необходимо зарегистрироваться на указанном интернет-ресурсе и с помощью сформированного
            личного кабинета направить обращение изложив суть вопроса обязательно указав все
            необходимые данные для рассмотрения и предоставления ответа на обращение. По результатам
            рассмотрения обращения ответ заявителю приходит в личный кабинет.
          </TextForInformation>
          <TextForInformation>
            Так же информируем, что для оперативного получения информации, по интересующему вас
            вопросу входящему в компетенцию УП «МИНГАЗ», подачи заявки вы можете обратиться по
            короткому номеру 162 или с помощью интернет-сайта организации воспользоваться
            онлайн-чатом и{' '}
            <a href={'https://mingas.by/feedback/online-application'}>онлайн-заявкой</a>.
          </TextForInformation>
          <TextForInformation>
            Ознакомиться с Законом Республики Беларусь от 18 июля 2011 г. № 300-З «Об обращениях
            граждан и юридических лиц» (ред. от 28.06.2022) вы можете по{' '}
            <a href={'https://pravo.by/document/?guid=3871&p0=h11100300'}>ссылке</a>.
          </TextForInformation>
          <TextForInformation>
            <a href={'https://mingas.by/contacts/phone-services'}>Контактная информация</a>
          </TextForInformation>
        </ContainerInform>
      }
    />
  );
}
