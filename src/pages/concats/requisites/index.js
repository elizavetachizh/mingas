import React from 'react';
import { Abbreviated, Certificate, Codbank, NameBank, NumberScore, PageSection } from './styles';
import HeaderConcats from '../headerContacts';
import { Row } from '../styles';
import ContainerContent from '../../../components/Container';

export default function Requisites() {
  return (
    <ContainerContent
      name={'Юридическая информация'}
      content={
        <Row>
          <HeaderConcats />
          <PageSection>
            <Abbreviated>
              <span>Сокращенное наименование:</span>
              <p>УП «МИНГАЗ»</p>
            </Abbreviated>
            <Certificate>
              <span style={{marginBottom: '1rem', fontSize: '22px'}}>Контакты:</span>
              <span>E-mail УП «МИНГАЗ»</span>
              <a href={'mailto:root@mingas.by'}>root@mingas.by</a>
            </Certificate>
            <Certificate>
              <span>Приёмная руководителя</span>
              <a href={'tel:8017-299 28 80'}>+375(017)-299-28-80</a>
            </Certificate>
            <Certificate>
              <span>График работы</span>
              <p>с 8.00 до 17.00 понедельник - четверг, с 8:00 до 15:45 - пятница, обед с 12:00 до 12:45 </p>
            </Certificate>
            <Certificate>
              <span>Свидетельство о государственной регистрации:</span>
              <p>
                Выдано в соответствии с решением Минского горисполкома №931 от 18 августа 2000 года.
                УНП 100308563
              </p>
            </Certificate>
            <NameBank>
              <span>Наименование банка в котором открыты расчетные счета:</span>
              <p>ЦБУ № 514 ОАО «АСБ Беларусбанк», 220040, г. Минск, ул. Сурганова, 47а.</p>
            </NameBank>
            <h4>Номер счета (формата IBAN):</h4>
            <NumberScore>
              <span>Расчетный счет в белорусских рублях</span>
              <p>BY17 AKBB 3012 1087 6001 4530 0000</p>
            </NumberScore>
            <NumberScore>
              <span>Расчетный счет в долларах США</span>
              <p>BY16 AKBB 3012 1087 6002 7530 0000</p>
            </NumberScore>
            <NumberScore>
              <span>Расчетный счет в российских рублях</span>
              <p>BY16 AKBB 3012 1087 6002 7530 0000</p>
            </NumberScore>
            <NumberScore>
              <span>Расчетный счет в евро</span>
              <p>BY16 AKBB 3012 1087 6002 7530 0000</p>
            </NumberScore>
            <Codbank>
              <span>Код банка (BIC): (BIC S.W.I.F.T.)</span>
              <p>AKBBBY2X</p>
              <span>УНП банка: 100325912</span>
            </Codbank>
          </PageSection>
        </Row>
      }
    />
  );
}
