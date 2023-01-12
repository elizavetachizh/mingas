import React, { useEffect, useState } from 'react';
import { ContainerInform } from '../administrativeServices/InformaationAdministrativeService/styles';
import DopFunctional from '../administrativeServices/InformaationAdministrativeService/DopFunctional';
import ContainerContent from '../Container';
import axios from 'axios';
import { API } from '../../backend';

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
    <ContainerContent
      name={'Административные процедуры для юридических лиц'}
      content={
        <ContainerInform>
          {info.map((el) => {
            if (el.type === '2') {
              return (
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
              );
            }
          })}
        </ContainerInform>
      }
    />
  );
}
