import React, { useEffect, useState } from 'react';
import DopFunctional from './DopFunctional';
import axios from 'axios';
import { API } from '../../../backend';
import AdministrativeServicesComponent from '../../administrativeServicesComponent';

export default function InformationAdministrativeService() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/administration`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  return (
    <AdministrativeServicesComponent
      title={'Административные услуги'}
      content={
        <>
          <h2>Жилищные правоотношения</h2>
          {info.map(
            (el) =>
              el.type === '1' &&
              el.typeAdministrativeService === 'Жилищные правоотношения' && (
                <DopFunctional
                  id={el._id}
                  key={el._id}
                  uniqueName={el.uniqueName}
                  maximumImplementationPeriod={el.maximumImplementationPeriod}
                  certificateValidityPeriod={el.certificateValidityPeriod}
                  boardSize={el.boardSize}
                  documents={el.documents}
                  contactInform={el.contactInform}
                />
              )
          )}
          <>
            <h2>Газоснабжение</h2>
            {info.map(
              (el) =>
                el.type === '1' &&
                el.typeAdministrativeService === 'Газоснабжение' && (
                  <DopFunctional
                    id={el._id}
                    key={el._id}
                    uniqueName={el.uniqueName}
                    maximumImplementationPeriod={el.maximumImplementationPeriod}
                    certificateValidityPeriod={el.certificateValidityPeriod}
                    boardSize={el.boardSize}
                    documents={el.documents}
                    contactInform={el.contactInform}
                  />
                )
            )}
          </>
          <>
            <h2>Другое</h2>
            {info.map(
              (el) =>
                el.type === '1' &&
                el.typeAdministrativeService === 'Другое' && (
                  <DopFunctional
                    id={el._id}
                    key={el._id}
                    uniqueName={el.uniqueName}
                    maximumImplementationPeriod={el.maximumImplementationPeriod}
                    certificateValidityPeriod={el.certificateValidityPeriod}
                    boardSize={el.boardSize}
                    documents={el.documents}
                    contactInform={el.contactInform}
                  />
                )
            )}
          </>
          <div>
            <h2 style={{ textDecoration: 'underline' }}>
              Полный перечень административных процедур осуществляемых УП «МИНГАЗ»
            </h2>
            <a
              href={require('../../../assets/pdf/administariveServices.pdf')}
              rel={'noreferrer'}
              target={'_blank'}
            >
              <img
                style={{ width: '80px' }}
                alt={'doc'}
                src={require('../../../assets/icons_services/12.png')}
              />
            </a>
          </div>
        </>
      }
    />
  );
}
