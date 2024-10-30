import React, { useState } from 'react';
import { DescriptionService } from './styles';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
export default function DopFunctionService({ nameDescription, inform, classname }) {
  const [isOpen, setIsOpen] = useState(false);

  const HtmlRenderer = ({ html }) => {
    return <DescriptionService dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <General>
      <BtnIsOpen className={classname} onClick={() => setIsOpen(!isOpen)}>
        <p>{nameDescription}</p>
        <div>
          {isOpen ? (
            <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
          ) : (
            <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
          )}
        </div>
      </BtnIsOpen>
      <Div className={isOpen && `shake`}>
        <HtmlRenderer html={inform} />
      </Div>
    </General>
  );
}
