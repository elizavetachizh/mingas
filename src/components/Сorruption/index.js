import {
  BtnIsOpen,
  Div,
  General,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { DescriptionService } from '../../pages/services/DopFunction/styles';
import React, { useState } from 'react';
import { ContanerNewsPape } from '../../pages/PressCenter/newspaper/styles';
import { data } from './data';
import SchemaCompany from '../../pages/company/SchemaCompany';

export default function Corruption() {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <SchemaCompany
      name={'Противодействие коррупции'}
      content={
        <>
          {' '}
          <General>
            <BtnIsOpen onClick={animate}>
              <p>Информация</p>
              <div>
                {isOpen ? (
                  <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
                ) : (
                  <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
                )}
              </div>
            </BtnIsOpen>
            <Div className={isOpen && `shake`}>
              <DescriptionService>
                <p>Состав комиссии по противодействию коррупции в УП «МИНГАЗ»</p>
                <p>Председатель комиссии – генеральный директор В.Е.Шолоник.</p>
                <ol>
                  Члены комиссии:
                  <li>Первый заместитель генерального директора – главный инженер </li>
                  <li>Заместитель генерального директора Д.А.Кассиров.</li>
                  <li>Начальник производственно-технического управления В.В. Яскевич.</li>
                  <li>Главный бухгалтер Е.В.Манкевич.</li>
                  <li>Начальник отдела кадров Л.В.Покусаева.</li>
                  <li>Начальник планово-экономического отдела О.А.Сазанчук.</li>
                  <li>Заместитель главного бухгалтера Е.А.Страшнова.</li>
                  <li>Заместитель генерального директора С.А.Ткачук.</li>
                  <li>Начальник отдела правового обеспечения В.В.Давыдова.</li>
                  <li>Ведущий ревизор И.В.Цурко.</li>
                  <li>Заместитель генерального директора А.А.Шебеко.</li>
                  <li>Заместитель генерального директора А.В.Денисик.</li>
                  <li>Начальник ОДиК А.Д.Федорович.</li>
                </ol>
              </DescriptionService>
            </Div>
          </General>
          <div style={{ width: '80%', margin: '0 auto' }}>
            {data.map((el) => (
              <ContanerNewsPape>
                <a href={el.link} target={'_blank'} rel="noreferrer">
                  {el.name}
                </a>
              </ContanerNewsPape>
            ))}
          </div>
        </>
      }
    />
  );
}
