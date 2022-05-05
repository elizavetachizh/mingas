import React, { useCallback, useState } from 'react';
import {
  Center,
  ElementorAlertDescription,
  ElementorAlertTitle,
  ElementorContainer,
  ElementorRow,
  ElementorWidgetWrap,
} from './styles';
import { Close } from '../styles';
import close from '../../../assets/png/close.png';
const closeStyleButton = {
  backgroundImage: `url(${close})`,
};

export default function ModalWindowServicesCenter({ handleCloseCLick }) {
  return (
    <ElementorContainer>
      <ElementorRow>
        <ElementorWidgetWrap>
          <Close style={closeStyleButton} onClick={handleCloseCLick} />
          <ElementorAlertTitle>Важная информация!</ElementorAlertTitle>
          <ElementorAlertDescription>
            <Center>
              <b>Уважаемые абоненты!</b>
            </Center>
            <p align={'justify'}>
              Прием заявок на выполнение работ Сервисным центром осуществляется ЕЖЕДНЕВНО (с
              понедельника по воскресенье) кроме праздничных дней с 8-00 до 20-00.
              <br />
              Оплата за оказанные услуги может быть произведена наличными, безналичными денежными
              средствами непосредственно в день выполнения работ (услуг) с оформлением акта
              выполненных работ и выдачей чека;
              <br />
              Оплата может быть произведена в системе «Расчёт» ЕРИП не позднее 25-го числа месяца,
              следующего за месяцем выполнения работ:
              <b>
                <a>способы оплаты</a>
                <br />
              </b>
            </p>
            <p>
              Оплата за выполненные работы и использованные материалы взимается, согласна
              Прейскуранта, утвержденного УП «МИНГАЗ» и действующего на дату выполнения работ.
              <br />
              Стоимость материалов и запасных частей не входит в стоимость работ и указывается в
              акте выполненных работ или ином документе об оплате.
            </p>
            <Center>
              <b>Спасибо за внимание!</b>
            </Center>
          </ElementorAlertDescription>
        </ElementorWidgetWrap>
      </ElementorRow>
    </ElementorContainer>
  );
}
