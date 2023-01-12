import React, { useEffect, useState } from 'react';
import { Div, BtnIsOpen, ContainerInformAboutService } from '../styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function DopFunctional({
  uniqueName,
  id,
  maximumImplementationPeriod,
  certificateValidityPeriod,
  boardSize,
  documents,
  contactInform,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const [isClose, setIsClose] = useState(false);
  const animateClose = () => {
    setIsClose(true);
    if (isClose) {
      setIsClose(false);
    }
  };

  useEffect(() => {
    const documentInform = document.getElementById(`documents-${id}`);
    if (documentInform && !documentInform.innerHTML) {
      documentInform.innerHTML += documents;
    }
    const contacts = document.getElementById(`contactInform-${id}`);
    if (contacts && !contacts.innerHTML) {
      contacts.innerHTML += contactInform;
    }
    const uniqueNames = document.getElementById(`uniqueName-${id}`);
    if (uniqueNames && !uniqueNames.innerHTML) {
      uniqueNames.innerHTML += uniqueName;
    }
  }, []);

  return (
    <ContainerInformAboutService>
      <h3 id={`uniqueName-${id}`} />
      {maximumImplementationPeriod && (
        <p>
          Максимальный срок осуществления административной процедуры:
          <strong>{maximumImplementationPeriod}</strong>
        </p>
      )}
      {certificateValidityPeriod && (
        <p>
          Срок действия справки, другого документа (решения), выдаваемых (принимаемого) при
          осуществлении административной процедуры: <strong>{certificateValidityPeriod}</strong>
        </p>
      )}
      <p>
        Размер платы, взимаемой при осуществлении административной процедуры:
        <strong>{boardSize}</strong>
      </p>
      {documents ? (
        <>
          <BtnIsOpen onClick={animate} style={{ margin: '4% auto' }}>
            <p>Документы и (или) сведения для осуществления административной процедуры: </p>
            <div>
              {' '}
              {isOpen ? (
                <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
              ) : (
                <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
              )}
            </div>
          </BtnIsOpen>
          <Div id={`documents-${id}`} className={isOpen && `shake`} />
        </>
      ) : (
        <></>
      )}
      {contactInform && (
        <>
          <BtnIsOpen onClick={animateClose}>
            <p>Контактная информация: </p>
            <div>
              {isClose ? (
                <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
              ) : (
                <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
              )}
            </div>
          </BtnIsOpen>
          <Div id={`contactInform-${id}`} className={isClose && `shake`} />
        </>
      )}
      <hr />
    </ContainerInformAboutService>
  );
}
