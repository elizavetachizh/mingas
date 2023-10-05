import React, { useEffect, useState } from 'react';
import DopFunctional from '../administrativeServices/InformaationAdministrativeService/DopFunctional';
import axios from 'axios';
import { API } from '../../backend';
import AdministrativeServicesComponent from '../administrativeServicesComponent';

export default function AdministartiveServicesForLegal() {
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
      title={'Административные процедуры для юридических лиц'}
      content={
        <>
          {info.map(
            (el) =>
              el.type === '2' && (
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
      }
    />
  );
}
