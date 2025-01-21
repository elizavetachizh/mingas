import {
  Close,
  InformModal,
  ModalWindow,
  ModalWindowOpenAndClose,
} from '../../../../components/modalWindow/styles';
import close from '../../../../assets/png/close.png';
import React from 'react';

export default function VacancyModalWindow({ vacancyDetailsInfo, handleCloseCLick }) {
  const handleInsideClick = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalWindow onClick={handleCloseCLick}>
      <ModalWindowOpenAndClose className={'career'} onClick={handleInsideClick}>
        <Close src={close} onClick={handleCloseCLick} />
        <InformModal>
          <p style={{ fontWeight: 'bold', fontSize: '22px' }}>{vacancyDetailsInfo?.name}</p>
          <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <p>Заработная плата:</p>
              <p style={{ fontWeight: 'bold', margin: '0.5rem' }}>{vacancyDetailsInfo?.salary}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <p>Опыт работы:</p>
              <p style={{ fontWeight: 'bold', margin: '0.5rem' }}>
                {vacancyDetailsInfo?.work_experience}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <p>Рабочие часы:</p>
              <p style={{ fontWeight: 'bold', margin: '0.5rem' }}>
                {vacancyDetailsInfo?.working_hours}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <p>График:</p>
              <p style={{ fontWeight: 'bold', margin: '0.5rem' }}>{vacancyDetailsInfo?.schedule}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <p>Формат работы:</p>
              <p style={{ fontWeight: 'bold', margin: '0.5rem' }}>
                {vacancyDetailsInfo?.work_format}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <p>Характер работы:</p>
              <p style={{ fontWeight: 'bold', margin: '0.5rem' }}>
                {vacancyDetailsInfo?.nature_of_work}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <p style={{ fontWeight: 'bold' }}>Обязанности:</p>
              <p style={{ whiteSpace: 'pre-wrap', textAlign: 'left', margin: '0.5rem' }}>
                {vacancyDetailsInfo?.responsibilities}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'flex-start' }}>
              <p style={{ fontWeight: 'bold' }}>Требования:</p>
              <p style={{ whiteSpace: 'pre-wrap', textAlign: 'left', margin: '0.5rem' }}>
                {vacancyDetailsInfo?.requirements}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <p style={{ fontWeight: 'bold' }}>Условия:</p>
              <p style={{ whiteSpace: 'pre-wrap', textAlign: 'left', margin: '0.5rem' }}>
                {vacancyDetailsInfo?.conditions}
              </p>
            </div>
          </div>
        </InformModal>
      </ModalWindowOpenAndClose>
    </ModalWindow>
  );
}
